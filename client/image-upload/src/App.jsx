import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Post from './components/Post'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/post' element={<Post/>}  />
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
