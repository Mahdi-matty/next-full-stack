import {connectToDb} from '@utils/database'
import Notification from '@models/notification'

export const POST = async(req, res)=>{
    const {message, userId, status} = await req.json()
    try{
        await connectToDb()
        const newNote = new Notification({
            userId,
            status,
            message 
        })
        await newNote.save()
        return new Response(JSON.stringify(newNote), {status: 201})
    }catch(error){
        console.error(error)
    }
}