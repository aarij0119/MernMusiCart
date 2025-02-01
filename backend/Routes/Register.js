import express from 'express';
import bcrypt from 'bcrypt'
const router = express.Router();
import UserModel from '../models/UserSchema.js';
import jwt from 'jsonwebtoken';


router.post('/', async (req, res) => {
    const { username, mobile, email, password } = req.body;
    try {
        const userfind = await UserModel.findOne({ emailId:email });
        if (userfind) {
            return res.json("User already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        // console.log(hash)
        const user = await UserModel.create({
            username,
            mobileNumber: mobile,
            emailId: email,
            password:hash
        });
        const token = jwt.sign({emailId:user.emailId,userId:user._id},"Secretkey");
        // console.log("cookir is this ",token);
        res.cookie('token', token);
        res.json(user);
    } catch (err) {
        console.log("Some error came, try again", err.message);
        if (err.code === 11000) {
            return res.status(409).send("User already exists");
        }
        res.status(500).send("Server error");
    }
});

export default router;
