import { connectToDB } from "@utils/database";
import Admin from "@models/admin";
const jwt = require('jsonwebtoken')

export const POST = async(req, res)=>{
    try{
        await connectToDB();
        const data = await req.json();
        const { username, password } = data;

        console.log("Request Body:", data);
        const user = await Admin.findOne({ username})
        console.log('find user:', user)
        if(!user || !await user.isCorrectPassword(password)){
            const errorMessage = JSON.stringify({ msg: "Invalid credentials" });
            return new Response(errorMessage, { status: 401, headers: { "Content-Type": "application/json" } });
        }
        const token = jwt.sign({
            email:user.email,
            id:user.id,
            username: user.username
        },process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        const responseBody = JSON.stringify({ token, user });
        return new Response(responseBody, { status: 200, headers: { "Content-Type": "application/json" } });       
    }catch(error){
        console.log(error)
        const errorMessage = JSON.stringify({ msg: "Internal Server Error" });
        return new Response(errorMessage, { status: 500, headers: { "Content-Type": "application/json" } });
    }
}