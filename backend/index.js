import express from 'express';
import LogIn from './Routes/Login.js';
import MongooseConnect from './config/mongooseconnect.js';
const app = express();
MongooseConnect();

app.use('/login', LogIn);

const server = app.listen(3000, (err) => {
    if (err) {
        console.log("Error starting server:", err.message);
    } else {
        console.log(`Server is running on port 3000`);
    }
});

export default server;
