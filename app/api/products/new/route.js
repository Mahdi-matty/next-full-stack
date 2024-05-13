import {connectToDB} from '@utils/database'
import Product from '@models/product'
import Category from '@models/Category';

export const POST = async(req, res)=>{
    const {title, content, stock, image, category} =  req.body;
    const categoryName = await Category.findOne({category})
    if(!categoryName){
        throw new Error('no such a category')
    }
    const categoryId = categoryName._id
    try{
        await connectToDB()
        const newProduct = new Product({
            content: content,
            stock: stock,
            title: title,
            image: image,
            category: categoryName
        })
        await newProduct.save()
        // newProduct.status = newProduct.status;
        return new Response(JSON.stringify(newProduct), {status: 201})
    }catch(error){
        console.error(error)
    }
}