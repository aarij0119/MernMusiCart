import express from 'express';
const router = express.Router();
import UserSchema from '../models/UserSchema.js'

router.post('/', async (req, res) => {
    console.log(req.body);
    const{username,mobile,email,password} = req.body;
try{
    const user =  await UserSchema.create({
        username,
        mobileNumber:mobile,
        emailId:email,
        password
    });
    res.json(user)
}catch(err){
    console.log("Some error came try agian ", err.message)
}
});

export default router;
