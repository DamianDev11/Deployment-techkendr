import Subscribers from "../model/subscribe.js"


export const subscribedUsers = async (req,res)=>{
    try {
        const {email}=req.body
        if(!email){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }   

        const user = await Subscribers.findOne({email})
        if(user){
            return res.status(401).json({
                message:"Email already used",
                success:false
            })
        }
        await Subscribers.create({
            email
        })

        return res.status(201).json({
            message:`${email} Subscribbed successfully!`,
            success:true
        })

        return res.status(201).json({user:newUser})
    }catch(error){
        return res.status(500).json({error:error.message})  
    }
}