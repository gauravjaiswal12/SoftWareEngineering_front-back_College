const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        //enum means aapka role sirf in teen me se ek entity lega dusra koi nhi l
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    }
   


})
module.exports=mongoose.model("user",userSchema);