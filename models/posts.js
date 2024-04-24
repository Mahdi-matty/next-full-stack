import  {Schema, model, models} from 'mongoose'

const PostSchema = new Schema({
 creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
 },
 prompt: {
    type: String
 },
 tag: {
    type: String
 }
})

const Posts = models.Posts || model('Posts', PostSchema)
export default Posts