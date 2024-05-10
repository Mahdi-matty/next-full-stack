import {connectToDB} from '@utils/database'
import User from '@models/user'

export const POST = async(req, res)=>{
    const {username, email, password, image} = await req.json()
    try{
        await connectToDB()
        const newUser = new User({
            username,
            email,
            password,
            image
        })
        await newUser.save()
        return new Response(JSON.stringify(newUser), {status: 201})
    }catch(error){
        console.error(error)
    }
}