import  {Schema, model, models} from 'mongoose'

const OrderSchema = new Schema({
 product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
 },
 user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
 },
})

const Order = models.Order || model('Order', OrderSchema)
export default Order