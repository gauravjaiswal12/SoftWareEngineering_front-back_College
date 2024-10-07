const express = require('express');
const router=express.Router();

const {login,signup}=require("../controller/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth");
const User = require('../Models/User');

router.post("/login",login);
router.post("/signup",signup);

//testing protected routes for single middleware
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Test",
    });
})

//protected routes'
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for student",
    });
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for admin",
    });
});

router.get("/getEmail",auth,async(req,res)=>{
    try {
        const id=req.user.id;
      
        const user=await User.findById(id);
        res.status(200).json({
            success:true,
            user:user,
            message:"Welcome to emil router",
        });
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:" NOT Welcome(ERROR) to emil router",
        });
    }
   
   
});

module.exports=router;