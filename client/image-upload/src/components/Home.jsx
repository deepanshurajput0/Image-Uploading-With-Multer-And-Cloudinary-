import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [post,setPosts] = useState([])

   useEffect(()=>{
    const getPostsData =async()=>{
      try {
        const {data} = await axios.get('http://localhost:8080/getposts')
        console.log(data)
        setPosts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPostsData()
   },[])

  return (
    <div>

    {
      post.map((item,i)=>(
        <div style={{height:"200px",width:"300px", display:"flex",flexDirection:'column'}}  className="card">
        <h1>{item.name}</h1>
        <img height={'150px'} src={item.imgPath} alt={item.name} />
     </div>
      ))
    }
    </div>
  )
}

export default Home


