
const User=require('../models/user')
const {comparepassword}=require('../helpers/user')
const register=(req,res)=>{
    return res.json("working")
    
}
const postregister=async (req,res)=>{
    try {
        const {name,email,password}= req.body;
        //check name
        if(!name){
            return res.json({
                error:"Name not found"
            })
        }
        //check password
        if(!password || (password.length)<6){
            return res.json({
                error:"Password length must be greater than six"
            })
        }
        //check mail
        const exists=await User.findOne({email})
        if(exists){
            return res.json({
                error:"Mail is taken already"
            })
        }
        const user=await User.create({name,email,password})
        return res.json(user)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }
    
}
const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        //check email
        const user=await User.findOne({email})
        if(!user){
            return res.json({
                error:"User Not Found"
            })
        }
        //check password
        const match=await comparepassword(password,user.password)
        if(match){
            return res.json({
                error:"Password Matched"
            })
        }
        else{
            return res.json("Password Doesnt Match")
        }
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal Server Error")
    }

}

module.exports={register,postregister,login}