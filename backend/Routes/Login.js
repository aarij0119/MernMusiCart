import express from 'express';
const router = express.Router();
import UserSchema from '../models/UserSchema.js'

router.get('/', async (req, res) => {
try{
    const user =  await UserSchema.create({
        username: "Riyaz",
        mobileNumber: 7248202829,
        emailId: 'aarijdev@gmail.com',
        password: 'aarij@0119'
    });
    res.json(user)
}catch(err){
    console.log("Some error came try agian ", err.message)
}
});

export default router;
