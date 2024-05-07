import { connectToDB } from "@utils/database";
import Admin from "@models/admin";
const jwt = require('jsonwebtoken')

export const POST = async(req, res)=>{
    try{
        await connectToDB();
        const user = Admin.findOne({
            $where: {
                username: req.body.username
            }
        })
        if(!user || !await Admin.isCorrectPassword(req.body.password)){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        const token = jwt.sign({
            email:user.email,
            id:user.id,
            username: user.username
        },process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        res.json({
            token,
            user:user
        })
       
    }catch(error){
        console.log(error)
    }
}