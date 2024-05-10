import {connectToDB} from '@utils/database'
import User from '@models/user'

export const GET = async(req, res)=>{
    try{
        await connectToDB();
        const allUsers = await User.find({})
        return new Response(JSON.stringify(allUsers), {status: 200})
    }catch(error){
        console.log(error)
    }
}