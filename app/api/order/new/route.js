import {connectToDb} from '@utils/database'
import Order from '@models/order'

export const POST = async(req, res)=>{
    const {productId, userId,} = await req.json()
    try{
        await connectToDb()
        const newOrder = new Order({
            userId,
            productId,                
        })
        await newOrder.save()
        newOrder.status = newOrder.status;
        return new Response(JSON.stringify(newProduct), {status: 201})
    }catch(error){
        console.error(error)
    }
}