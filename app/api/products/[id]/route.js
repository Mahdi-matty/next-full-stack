import { connectToDB } from '@utils/database'
import Product from '@models/product'

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prodict = await Product.findById(params.id)
        const productsWithStatus = {
            ...prodict.toJSON(),
            status: prodict.status
        }

        return new Response(JSON.stringify(productsWithStatus), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

export const PATCH = async (req, { params }) => {
    const {title, content, price, stock, image, category} = await req.json();
    try {
        await connectToDB();
        const existedProd = await Product.findById(params.id)
        if(!existedProd){
            return new Response('product not found', {status: 404})
        }
        existedProd.title = title;
        existedProd.content = content;
        existedProd.price = price;
        existedProd.stock = stock;
        existedProd.image = image;
        existedProd.category = category;
        await existedProd.save()
        existedProd.status= existedProd.staus
        return new Response(JSON.stringify(existedProd), { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}

export const DELETE = async (res, {params})=>{
    try {
        await connectToDB();
        const deletedProd = await Product.findOneAndDelete({ _id: params.id })
        return new Response({msg: "deleted successfully"}, { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}