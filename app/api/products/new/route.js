import {connectToDB} from '@utils/database'
import Product from '@models/product'
import Category from '@models/category'

export const POST = async(req, res)=>{
    const {title, content, stock, image, category} =  req.json();
    const categoryName = await Category.findOne({category})
    if(!categoryName){
        throw new Error('no such a category')
    }
    const categoryId = categoryName._id
    try{
        await connectToDB()
        const newProduct = new Product({
            content,
            stock,
            title, 
            image,
            category: categoryId
        })
        await newProduct.save()
        newProduct.status = newProduct.status;
        return new Response(JSON.stringify(newProduct), {status: 201})
    }catch(error){
        console.error(error)
    }
}