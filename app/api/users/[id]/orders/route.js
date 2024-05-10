import { connectToDB } from '@utils/database'
import Order from '@models/order';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const userOrders = await Order.find({where: {userId: params.id}})
        return new Response(JSON.stringify(userOrders), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}