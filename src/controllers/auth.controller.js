

const User=require("../models/user.models")

const jwt=require("jsonwebtoken");

const newToken=(user)=>{
    return jwt.sign({user},"masaischool");
}

const register= async (req,res)=>{
    try {
     
        let user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"email alerady exsits"})
        }

        user =await User.create(req.body);

        const token=newToken(user)
        
        return  res.status(200).send({user,token});
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}

const login= (req,res)=>{
    try {
        return res.status(200).send("login")
        
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}

module.exports={register,login}