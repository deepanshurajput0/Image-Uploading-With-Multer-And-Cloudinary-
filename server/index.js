import express from "express"
import cors from "cors"
import postRoute from './routes/postRoute.js'
import { ConnectDb } from "./db/db.js"
const app = express()

const PORT = 8080

app.use(express.json())
app.use(cors())
app.use(postRoute)
ConnectDb()
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})