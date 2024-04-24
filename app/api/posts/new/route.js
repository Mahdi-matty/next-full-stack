import {connectToDb} from '@utils/database'
import Posts from '@models/posts'

export const POST = async(req, res)=>{
    const {prompt, userId, tag} = await req.json()
    try{
        await connectToDb()
        const newPost = new Posts({
            creator: userId,
            tag,
            prompt 
        })
        await newPost.save()
        return new Response(JSON.stringify(newPost), {status: 201})
    }catch(error){
        console.error(error)
    }
}