import { connectToDB } from '@utils/database'
import notification from '@models/notification';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const userOrders = await notification.find({where: {userId: params.id}})
        return new Response(JSON.stringify(userOrders), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}