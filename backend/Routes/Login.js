import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/UserSchema.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    // console.log(email);
    try {
        const user = await UserModel.findOne({ emailId: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                console.log('Error comparing passwords:', err);
                return res.status(500).json({ message: "Error comparing passwords", error: err });
            }
            if (result) {
                const token = jwt.sign({ emailId: user.emailId, userId: user._id }, "Secretkey");
                res.cookie('token', token);
                // console.log("request is this ", req.body);
                return res.json({ message: "User login successfully",user});
            } else {
                return res.status(401).json({ message: "Incorrect password" });
            }
        });
    } catch (err) {
        console.log("Some error came, try again:", err.message);
        return res.status(500).json({ message: "Server error", error: err });
    }
});

router.get('/logout', (req, res) => {
    // console.log(req);
    res.cookie('token', '',);
    return res.status(200).json({ message: "Logout successful" });
});



export default router;
