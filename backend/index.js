import express from 'express';
import Register from './Routes/Register.js';
import MongooseConnect from './config/mongooseconnect.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import Login from './Routes/Login.js';
import Admin from './Routes/Admin.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    methods: 'POST,GET',
    credentials:true
}));
MongooseConnect();

app.use(express.json());
app.use(cookieParser());

app.use('/register', Register);
app.use('/login',Login);
app.use('/admin',Admin)

const server = app.listen(3000, (err) => {
    if (err) {
        console.log("Error starting server:", err.message);
    } else {
        console.log(`Server is running on port 3000`);
    }
});

export default server;
