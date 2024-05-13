import { Schema, model, models } from 'mongoose'

const ReviewSchema = new Schema({
    comment: {
        type: Schema.Types.Mixed,
       
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

const Review = models.Review || model('Review', ReviewSchema)
export default Review