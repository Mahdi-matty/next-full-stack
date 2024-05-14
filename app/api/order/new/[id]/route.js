import {connectToDB} from '@utils/database'
import Order from '@models/order'
import User from '@models/user'

export const POST = async(req, {params})=>{
    const {productId, productName, price} = await req.json()
    try{
        await connectToDB()
        const newOrder = new Order({
            productId,
            productName,
            price

        })
        await newOrder.save()
        const user = await User.findOneAndUpdate(
            {_id: params.id},
            {$push: { orders: newOrder._id }},
            { new: true }
        )
        return new Response(JSON.stringify(newOrder), {status: 201})
    }catch(error){
        console.error(error)
    }
}