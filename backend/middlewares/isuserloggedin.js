import express from 'express';
import jwt from 'jsonwebtoken';
const router  = express.Router();


router.get('/', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        console.log('Token not found in cookies');
        return res.status(401).send("You should login first");
    }

    try {
        const verified = jwt.verify(token, "Secretkey");
        req.user = verified;
        return res.status(200).json({ loggedIn: true });
    } catch (error) {
        console.log('Token verification failed:', error);
        return res.status(401).send("Invalid token");
    }
});

export default router