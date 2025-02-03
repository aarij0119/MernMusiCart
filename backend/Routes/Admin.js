import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/AdminSchema.js';
import UserModel from '../models/UserSchema.js';

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

            const token = jwt.sign({ admin_email: findadmin.AdminEmail, adminId: findadmin._id }, 'adminsecret');
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
})

export default router;
