import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
