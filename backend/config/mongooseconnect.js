import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const ConnectMongoose = async () => {
   try{
   const connected = await mongoose.connect('mongodb://127.0.0.1:27017/Musicart');
   if(connected){
    console.log("Mongoose connected succesfully")
   }
   }
   catch(err){
    console.log("Error came ", err.message)
   }
}
export default ConnectMongoose

///jnfhvbgfvb 