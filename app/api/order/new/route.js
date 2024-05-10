import {connectToDB} from '@utils/database'
import Order from '@models/order'

export const POST = async(req, res)=>{
    const {productId, userId,} = await req.json()
    try{
        await connectToDB()
        const newOrder = new Order({
            userId,
            productId,                
        })
        await newOrder.save()
        return new Response(JSON.stringify(newOrder), {status: 201})
    }catch(error){
        console.error(error)
    }
}