import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/AdminSchema.js';
import UserModel from '../models/UserSchema.js';
import multer from 'multer';
// import crypto from 'crypto';
// import path from 'path';
import CartModel from '../models/CardSchema.js'

// Route to create an admin
router.get('/', async (req, res) => {
    try {
        const adminfind = await AdminModel.find();
        if (adminfind.length > 0) {
            return res.send("Admin already exists.");
        }
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(process.env.Admin_Password, salt);
        const admin = await AdminModel.create({
            Name: process.env.name,
            Password: password,
            AdminEmail: process.env.admin_email.replace(/['";]+/g, '').toLowerCase()
        });
        res.send(admin);
    } catch (err) {
        console.error("Error creating admin: ", err);
        res.status(500).send('Server error');
    }
});

// Route for admin login
router.post('/adminlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const trimmedPassword = password.trim();

        const findadmin = await AdminModel.findOne({ AdminEmail: email });
        if (!findadmin) {
            return res.status(401).send('User not found.');
        }

        bcrypt.compare(trimmedPassword, findadmin.Password, (err, result) => {
            if (err) {
                console.error("Error comparing passwords: ", err);
                return res.status(500).send("Server error");
            }
            if (!result) {
                console.log("Incorrect password");
                return res.status(401).send("Incorrect password");
            }

            const token = jwt.sign({ admin_email: findadmin.AdminEmail, adminId: findadmin._id }, process.env.AdminSecretKey);
            res.cookie('token', token, { httpOnly: true });
            return res.send('Admin login successfully');

        });
    } catch (error) {
        console.error("Error during admin login: ", error);
        res.status(500).send('Server error');
    }
});

router.get('/alluser', async (req, res) => {
    try {
        const users = await UserModel.find();
        if (!users || users.length === 0) return res.status(401).send('users not found');
        res.send(users);
    } catch (err) {
        res.send('Error got ', err.message);
    }
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/images/uploads')
//     },
//     filename: function (req, file, cb) {
//         crypto.randomBytes(10, function (err, bytes) {
//             if (err) return cb(err);
//             const fn = bytes.toString("hex") + path.extname(file.originalname);
//             cb(null, fn);
//         });
//     }
// });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/uploadproduct', upload.single('file'), async (req, res) => {
    try {
        const { itemname, price, description,color } = req.body;
        console.log(req.file);
        const cart = await CartModel.create({
            Itemname: itemname,
            ItemsPrice: price,
            ItemDescription: description,
            image:req.file.buffer,
            color:color
        });
        // console.log(cart)
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        res.status(200).json({
            message: 'File uploaded and product created successfully',
        });

    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

router.get('/getproduct', async (req, res) => {
    try {
        const products = await CartModel.find();
        const productsWithImage = products.map((product) => ({
            ...product._doc,
            image: product.image ? product.image.toString('base64') : null
        }));
        res.status(200).json(productsWithImage);
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ error: 'An error occurred while retrieving the products.' });
    }
});





export default router;
