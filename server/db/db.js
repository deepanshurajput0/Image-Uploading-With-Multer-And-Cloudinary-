import mongoose from "mongoose"

export const ConnectDb =async()=>{
  try {
    const res = await mongoose.connect('mongodb://localhost:27017/upload-img')
    console.log("DataBase Connected Successfully")
  } catch (error) {
    console.log(error)
  }
}