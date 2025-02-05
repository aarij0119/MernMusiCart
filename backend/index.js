import express from 'express';
import Register from './Routes/Register.js';
import Login from './Routes/Login.js';
import Admin from './Routes/Admin.js';
import isAdminLoggedin from './middlewares/adminloggedin.js';
import MongooseConnect from './config/mongooseconnect.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";


dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'POST,GET',
    credentials: true
}));

MongooseConnect();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
app.use(express.static(path.join(dirname,"public")));

app.use('/register', Register);
app.use('/login', Login);
app.use('/admin',Admin);
app.use('/isadminloggedin', isAdminLoggedin);

const server = app.listen(3000, (err) => {
    if (err) {
        console.log("Error starting server:", err.message);
    } else {
        console.log(`Server is running on port 3000`);
    }
});

export default server;
