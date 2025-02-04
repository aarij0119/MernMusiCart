import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/', (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log('Token not found in cookies');
        return res.status(401).send("You must log in first");
    }

    try {
        const verifyAdmin = jwt.verify(token, process.env.AdminSecretKey);
        req.admin = verifyAdmin;
        console.log('Verified Admin:', verifyAdmin);
        res.status(200).json({ loggedIn: true });
    } catch (err) {
        console.error('Token verification failed:', err);
        return res.status(401).send("Invalid token. Please log in again.");
    }
    next()
});


export default router;
