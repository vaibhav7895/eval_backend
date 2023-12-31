const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    pass:String,
    age:Number,
    city:String,
    is_married:Boolean
},{
    versionKey:false
})

const UserModel=mongoose.model("User",UserSchema)

module.exports={
    UserModel
}