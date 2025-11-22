import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from 'path';
import { connectDB } from "./lib/db.js"
import { ENV } from './lib/env.js'
import cookieParser from 'ccokie-parser'

const PORT = ENV.PORT;
console.log(PORT)
const app = express();
const _dirname = path.resolve();

app.use(express.json()) //req.body
app.use(cookieParser())

app.use("/api/auth", authRoutes) 
app.use("/api/messages", messageRoutes)

//make ready for deployment 
if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "../frontend/dist")))
    
    app.get("*", (_, res) => {
      res.sendFile(path.join(_dirname, "../frontend/dist", "index.html"))
    }) 
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
  connectDB()
})