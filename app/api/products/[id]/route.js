import {connectToDb} from '@utils/database'
import Product from '@models/product'

export const GET = async(req, {params})=>{
    try{
        await connectToDb();
        const prodict = await Product.findById(params.id)
        const productsWithStatus = {
            ...prodict.toJSON(),
            status: prodict.status
        }
          
        return new Response(JSON.stringify(productsWithStatus), {status: 200})
    }catch(error){
        console.log(error)
    }
}