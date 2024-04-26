import { connectToDb } from '@utils/database'
import Order from '@models/order'

export const GET = async (req, { params }) => {
    try {
        await connectToDb();
        const orde = await Order.findById(params.id)
        return new Response(JSON.stringify(orde), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

export const PATCH = async (req, { params }) => {
    try {
        await connectToDb();
        const updatedOrder = await Order.findOneAndUpdate({ _id: params.id })
        return new Response(JSON.stringify(updatedOrder), { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}

export const DELETE = async (res, {params})=>{
    try {
        await connectToDb();
        const deletedOrder = await Order.findOneAndDelete({ _id: params.id })
        return new Response({msg: "deleted successfully"}, { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}