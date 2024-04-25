import { Schema, model, models } from 'mongoose'

const NotificationSchema = new Schema({
    message: {
        type: String,
       
    },
    status: {
        type: String,
        enum: ['read', 'unread'],
        default: 'unread'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

const Notification = models.Notification || model('Notification', NotificationSchema)
export default Notification