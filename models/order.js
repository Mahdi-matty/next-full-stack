import  {Schema, model, models} from 'mongoose'

const OrderSchema = new Schema({
 product:  {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
   productName: {
      type: String
   },
   price: {
      type: Number
   }
})

const Order = models.Order || model('Order', OrderSchema)
export default Order