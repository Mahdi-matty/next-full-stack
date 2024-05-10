import { connectToDB } from '@utils/database'
import Review from '@models/review';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const reviw = await Review.findById(params.id)
        return new Response(JSON.stringify(reviw), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

export const PATCH = async (req, { params }) => {
    try {
        await connectToDB();
        const updatedReview = await Review.findOneAndUpdate({ _id: params.id })
        return new Response(JSON.stringify(updatedReview), { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}

export const DELETE = async (res, {params})=>{
    try {
        await connectToDB();
        const deletedReview = await Review.findOneAndDelete({ _id: params.id })
        return new Response({msg: "deleted successfully"}, { status: 200 })
    } catch (error) {
        return new Response({ msg: 'internal server error' }, { status: 500 })
    }
}