import {connectToDB} from '@utils/database'
import Posts from '@models/posts'

export const GET = async(req, res)=>{
    try{
        await connectToDB();
        const allPosts = await Posts.find({}).populate('creator')
        return new Response(JSON.stringify(allPosts), {status: 200})
    }catch(error){
        console.log(error)
    }
}