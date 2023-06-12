const express=require("express")
const app=express()
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {InstaRoutes}=require("./routes/insta.routes")
require("dotenv").config()
app.use(express.json())

app.use("/user",userRouter)
app.use("/insta",InstaRoutes)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db")
        console.log(`connected to port ${process.env.port}`)
    }catch(err){
        console.log(err)
        console.log("connection failed")
    }
    
})