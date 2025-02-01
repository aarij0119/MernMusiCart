import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';

import AdminModel from '../models/AdminSchema.js'

router.get('/', async (req, res) => {
    try {
        const adminfind = await AdminModel.find();
        if (adminfind.length > 0) return res.send("Admin Already exist can't exist");
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(process.env.Admin_Password,salt);
        const name = await bcrypt.hash(process.env.Admin_name,salt);
        const admin = await AdminModel.create({
            Name: name,
            Password: password,
            AdminEmail: 'aarijdev@gmail.com'
        });
        res.send(admin)
    } catch (err) {

    }
});
router.post('/login',(req,res)=>{
    console.log("Data is ", req.body);
    res.send("Working")
})

export default router