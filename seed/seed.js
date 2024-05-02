import mongoose from "mongoose";
import Product from "@models/product";
import { connectToDB } from "@utils/database";

const seedData = [

]

async function seedMe(){
    try{
        await connectToDB();
        await Product.insertMany(seedData)
        console.log('seeding completed')
    }catch(error){
        console.log(error)
    }finally {
        // Close the MongoDB connection
        await mongoose.connection.close();
      }
}

seedMe();