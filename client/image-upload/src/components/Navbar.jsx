import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:'space-evenly'}} >
        <div className="logo">
            <h1>XY</h1>
        </div>
        <ul style={{display:'flex',listStyle:"none",marginTop:'10px',fontSize:"20px"}} >
            <li>
                <Link style={{textDecoration:"none"}} to={'/'}   >Home</Link>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to={'/post'} >Post</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar


