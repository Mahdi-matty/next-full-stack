import { connectToDb } from '@utils/database'
import Notification from '@models/notification';

export const GET = async (req, { params }) => {
    try {
        await connectToDb();
        const note = await Notification.findById(params.id)
        return new Response(JSON.stringify(note), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

export const DELETE = async (res, {params})=>{
    try {
        await connectToDb();
        const deletedNote = await Notification.findOneAndDelete({ _id: params.id })
        return new Response({msg: "deleted successfully"}, { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}