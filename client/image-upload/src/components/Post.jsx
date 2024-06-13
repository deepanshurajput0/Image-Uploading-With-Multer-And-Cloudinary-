import React, { useState } from 'react'
import axios from "axios"
import './Post.css'
const Post = () => {
    const [name,setName]=useState('')
    const [file,setFile]=useState('')
   const handleSubmit=async(e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('photo',file)
      formData.append('name',name)
      const config = {
        headers:{
          "Content-type":'multipart/form-data'
        }
      }
      const res = await axios.post('http://localhost:8080/upload',formData,config)
      console.log('first',res)
   }
  return (
    <div>
       <form onSubmit={handleSubmit} >
        <label>Name</label> <br />
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}  /> <br />
        <label>Choose any random image</label> <br />
        <input  type='file' onChange={(e)=>setFile(e.target.files[0])}  /> <br />
        <button type='submit' > Submit </button>
        </form> 
    </div>
  )
}

export default Post


