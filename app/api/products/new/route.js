import {connectToDb} from '@utils/database'
import Product from '@models/product'

export const POST = async(req, res)=>{
    const {title, content, stock, image, category} = await req.json()
    try{
        await connectToDb()
        const newProduct = new Product({
            content,
            stock,
            title, 
            image,
            category
        })
        await newProduct.save()
        newProduct.status = newProduct.status;
        return new Response(JSON.stringify(newProduct), {status: 201})
    }catch(error){
        console.error(error)
    }
}