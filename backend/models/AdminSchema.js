import mongoose from "mongoose";

const adminSchema = new  mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    AdminEmail:{
        type:String,
        required:true
    },
    carts:{
        type: Array,
        default:[],
    }
});
const model = mongoose.model('admin', adminSchema);
export default model
