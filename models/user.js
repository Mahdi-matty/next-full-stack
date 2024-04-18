import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is needed'],
    },
    username: {
        type: String,
        unique: [true, 'username already exist'],
        required: [true, 'username is needed'],
    },
    image: {
        type: String
    }
})

const User = model.User || model('User', userSchema) 
export default User