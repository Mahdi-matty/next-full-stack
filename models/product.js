import  {Schema, model, models} from 'mongoose'

const ProductSchema = new Schema({
 title: {
    type: String
 },
 content: {
    type: String
 },
 price: {
    type: Number
 },
 stock: {
    type: Number
 },
 image: {
    type: String
 },
 category: {
   type: Schema.Types.ObjectId,
   ref: 'Category',
   required: true
 }
});
ProductSchema.virtual('status')
.get(function(){
    return this.stock>0 ? 'available': 'unavailable';
})
.set(function(status){
   
})

const Product = models.Product || model('Product', ProductSchema)
export default Product