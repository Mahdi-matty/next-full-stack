import {connectToDb} from '@utils/database'
import User from '@models/user'

export const GET = async(req, res)=>{
    try{
        await connectToDb();
        const allUsers = await User.find({})
        return new Response(JSON.stringify(allUsers), {status: 200})
    }catch(error){
        console.log(error)
    }
}