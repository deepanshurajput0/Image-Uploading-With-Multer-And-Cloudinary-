import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgPath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})
 
export  const postmodel = mongoose.model('Post',postSchema)