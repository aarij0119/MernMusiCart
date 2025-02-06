import mongoose from 'mongoose'

const CartSchema = mongoose.Schema({
    Itemname:{
        type:String,
        required:true
    },
    ItemsPrice:{
        type:String,
        required:true
    },
    ItemDescription:{
        type:String,
        required:true
    },
    image: {
        type: Buffer,
    },
    color:{
        type:String
    }
    
    
});
const model = mongoose.model('cart',CartSchema);
export default model