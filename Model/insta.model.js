const mongoose=require("mongoose")

const InstaSchema=mongoose.Schema({
   title:String,
   body:String,
   device:String,
   no_of_comments:Number
},{
    versionKey:false
})

const InstaModel=mongoose.model("post",InstaSchema)

module.exports={
    InstaModel
}