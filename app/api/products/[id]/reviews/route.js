import { connectToDB } from '@utils/database'
import Review from '@models/review';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prodictReviews = await Review.find({where: {productId: params.id}})
        return new Response(JSON.stringify(prodictReviews), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}