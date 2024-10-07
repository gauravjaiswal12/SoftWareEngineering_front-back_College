//auth,isStudent,isAdmin
const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try {
        //fetch token
        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token);
        console.log("header",req.header("Authorization"));
        //PENDING:  other ways to fetch the token
        const token =req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"Token missing",
            });
        }
        //verify the token
        try {
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);

            req.user=decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token invalid",
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user not authenticated",
        });
    }
}

exports.isStudent=(req,res,next)=>{
    try {
        if(req.user.role!=="Student")
        {
            return res.status(401).json({
                success:false,
                message:"this route is protected only for students",
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"User role can't  be verified",
        });
    }
}

exports.isAdmin=(req,res,next)=>{
    try {
        if(req.user.role!=="Admin")
        {
            return res.status(401).json({
                success:false,
                message:"this route is protected only for Admin",
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"User role can't  be verified",
        });
    }
}