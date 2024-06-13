import express from "express"
import multer from "multer"
import v2 from '../helpers/cloudinaryconfig.js'
import { postmodel } from "../models/postModel.js"
import moment from "moment"
const router = express.Router()


const imgConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
       callback(null,'uploads')
    },
    filename:(req,file,callback)=>{
       callback(null,`image${Date.now()}${file.fieldname}.jpg`)
    }
})


const isImage = (req,file,callback)=>{
     if(file.mimetype.startsWith('image')){
        callback(null,true)
     }else{
        callback(new Error('Only Images are allowed'))
     }
}

const upload = multer({
    storage:imgConfig,
    fileFilter:isImage,
})


router.post('/upload', upload.single('photo') ,async(req,res)=>{
  const uploaderImg = await v2.uploader.upload(req.file.path)
  const { name } = req.body
  try {
    const date = moment(new Date()).format('YYYY-MM-DD')
    const postData = new postmodel({
        name:name,
        imgPath:uploaderImg.secure_url,
        date:date
    })

    await postData.save()
    res.status(200).send({
        message:'Post uploaded Successfully'
     })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        message:'Internal Server Error'
     })
  }
})


router.get('/getposts',async(req,res)=>{
    try {
        const postsData = await postmodel.find()
        if(postsData){
            return res.status(200).send(postsData)
        }
    } catch (error) {
        console.log(error)
     res.status(500).send({
        message:'Internal Server Error'
     })
    }

})



export default router