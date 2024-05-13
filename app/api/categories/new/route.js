import {connectToDB} from '@utils/database'
import Category from '@models/Category'

export const POST = async(req, res)=>{
    const {name} = await req.json()
    try{
        await connectToDB()
        const newCat = new Category({
            name: name
        })
        await newCat.save()
        return new Response(JSON.stringify(newCat), {status: 201})
    }catch(error){
        return new Response('something went wrong')
    }
}