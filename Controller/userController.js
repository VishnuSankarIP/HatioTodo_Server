
const users = require('../Models/userModel');
const jwt=require('jsonwebtoken')
// register
exports.register= async (req,res)=>{
    console.log("Inside Register request");
    const{email,password}=req.body
    console.log(email,password);
    try{

        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("User Already exist")
        }
        else{
                const newUser=new users({email,password})
                await newUser.save()
                res.status(200).json(newUser)
        }


    }catch(err)
    {
        res.status(401).json(err)
    }

    // res.status(200).json("Request Recived")
}


exports.login=async(req,res)=>{
    console.log("Inside login function");
    const{email,password}=req.body
    console.log(email,password);
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser)
        {
            // login
          
            // generate token
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({existingUser,token})
        }
        else{
            // incorrect email or password
            res.status(404).json("Incorrect email or password")
        }


    }
    catch(err){
        res.status(401).json(err)
    }
}