const express=require("express")
const InstaRoutes=express.Router()
const {InstaModel}=require("../Model/insta.model")
const {auth}=require("../middleware/auth.middleware")
InstaRoutes.use(auth)

InstaRoutes.post("/posts/add",async(req,res)=>{
    try{
        const post=new InstaModel(req.body)
    await post.save()
    res.status(200).json({msg:"post added",post:req.body})
    }catch(err){
        res.status(400).json({msg:err.message})
    }
})

InstaRoutes.get("/posts",async(req,res)=>{
    const {device}= req.query
    const query= {userId:req.body.userId}
    if(device){
        query.device=device
    }
   try{
      const post=await InstaModel.find()
      res.status(200).send(post)
   }catch(err){
    res.status(400).json({msg:err.message})
   }
})

InstaRoutes.patch("update/:id",async(req,res)=>{
    const useridinUser=req.body.userId
    const postId=req.params.id
    try{
        const post=await InstaModel.findOne({_id:postId})
        const userIdpost=post.userId
        if(useridinUser===userIdpost){
            await InstaModel.findByIdAndUpdate({_id:postId},res.body)
            res.status(200).json({msg:`${post.title} is updated`})
        }
    }catch(err){
        res.status(400).json({msg:err.message})
    }
})

InstaRoutes.delete("/delete/:id",async(req,res)=>{
    const useridinUser=req.body.userId
    const postId=req.params.id
    try{
        const post=await InstaModel.findOne({_id:postId})
        const userIdpost=post.userId
        if(useridinUser===userIdpost){
            await InstaModel.findByIdAndUpdate({_id:postId},res.body)
            res.status(200).json({msg:`${post.title} is deleted`})
        }
    }catch(err){
        res.status(400).json({msg:err.message})
    }
})
module.exports={
    InstaRoutes
}