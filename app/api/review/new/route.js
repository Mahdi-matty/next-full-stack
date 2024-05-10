import {connectToDB} from '@utils/database'
import Review from '@models/review'

export const POST = async(req, res)=>{
    const {comment, productId, userId} = await req.json()
    try{
        await connectToDB()
        const newReview = new Review({
            productId,
            userId,
            comment,  
        })
        await newReview.save()
        return new Response(JSON.stringify(newReview), {status: 201})
    }catch(error){
        console.error(error)
    }
}