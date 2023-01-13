const User = require("../model/User")

exports.RegisterUser = async(req,res)=>{
    
    try {
        
        const {firstname,lastname,email,password} = req.body;

        const userExist= await User.findOne({email})

        if(userExist){
            return res.status(400).json({
                msg:"User already exists"
            })

        }
        if( password.length < 6) return res.status(400).json({msg:"Password must be at least 6 characters"})

        const user = await User.create({firstname,lastname,email,password})
        return res.status(201).json({
            msg:"User created Successfully",
            user
        })
    } catch (error) {
        
        res.status(400).json({
            msg:error.message
        })
    }
}

exports.getAllUsers = async (req,res)=>{

    try {
        
        const users = await User.find({});

        return res.status(200).json({
            users,
            msg:"Users fetched Successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
}