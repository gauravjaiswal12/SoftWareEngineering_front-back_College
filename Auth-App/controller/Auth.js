const bcrypt = require('bcryptjs');
const User=require("../Models/User");
const jwt=require("jsonwebtoken");

require("dotenv").config();

//sign up router handler
exports.signup=async (req,res)=>{
    try {
        //get data
        const {name,lastname,email,password}=req.body;
        //check if user already exists
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({
                success:false,
                message:"User already exists",
            });
        }
        //secure password
        let hashedPassword;
        try {
            //hash(kise karna hai,kitne round m krna hai )
            hashedPassword=await bcrypt.hash(password,10);
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }

        //create entry for user
        const user=await User.create({
            name,email,password:hashedPassword,lastname
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"User cannot be created,pls try again later",
        });
    }
}

//login ka controller
exports.login=async (req,res)=>{
    try{


        //data fetch
        const {email,password}=req.body;

        //validation oon email and password
        if(!password||!email)
        {
            return res.status(400).json({
                success:false,
                message:"please fill all details",
            });
        }

        //cheecking is user is registered or not
        let user=await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"user not registered",
            });
        }
        
        const payload={
            email:user.email,
            id:user._id,
            lastname:user.lastname,
        };

        //verify password and generate a jwt token
        if(await bcrypt.compare(password,user.password))
        {
            //password match
            let token=jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h"
                }
            );
            console.log(typeof(user));
            user=user.toObject();
            user.token=token;
            //user ke objct se password hataya hai but database me hai
           
            user.password=undefined;

            const options={
                expires: new Date(Date.now()+3*24*60*60*1000),
                //client side par not accesssbile but httponly
                httpOnly:true,
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"user logged in successfully",
            });
        }  

        else{
            return res.status(403).json({
                success:false,
                message:"password incorrect",
            });
        }

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"login fail",

        });
    }
}