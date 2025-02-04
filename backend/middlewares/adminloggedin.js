import express from 'express'
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

router.get('/', (req, res, next) => {
    console.log('admin secretkey:', process.env.AdminSecretKey);

    if (!req.cookies.token) {
        return res.status(401).send("You must log in first");
    }

    try {
        const verifyAdmin = jwt.verify(req.cookies.token, process.env.AdminSecretKey);
        req.admin = verifyAdmin;
        console.log('Verified Admin:', verifyAdmin);
        next();
    } catch (err) {
        console.error('Token verification failed:', err);
        return res.status(401).send("Invalid token. Please log in again.");
    }
})


export default router;
