const mongoose=require("mongoose")

const bcrypt=require("bcrypt")
const userSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false,
})
userSchema.pre("save",(next)=>{
    
    const hash = bcrypt.hashSync(this.password,8);
    this.password=hash;
return next()
})

const User=mongoose.model("user",userSchema)
module.exports=User;
