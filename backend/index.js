import express from 'express';
import LogIn from './Routes/Login.js';
import MongooseConnect from './config/mongooseconnect.js';
import cors from 'cors'
const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    methods: 'POST,GET',

}));
MongooseConnect();

app.use(express.json())

app.use('/login', LogIn);

const server = app.listen(3000, (err) => {
    if (err) {
        console.log("Error starting server:", err.message);
    } else {
        console.log(`Server is running on port 3000`);
    }
});

export default server;
