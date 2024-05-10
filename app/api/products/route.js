import {connectToDB} from '@utils/database'
import Product from '@models/product'

export const GET = async(req, res)=>{
    try{
        await connectToDB();
        const allProduct = await Product.find({}).populate('category')
        const productsWithStatus = allProduct.map(product => {
            return {
                ...product.toJSON(),
                status: product.status
            };
        });
        return new Response(JSON.stringify(productsWithStatus), {status: 200})
    }catch(error){
        console.log(error)
    }
}