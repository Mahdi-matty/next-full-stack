import mongoose from "mongoose";
import Product from "@models/product";
import { connectToDB } from "@utils/database";

const seedData = [
    {
        title: "Mcbook",
        content: "apple latest mcbook",
        price: 1999,
        stock: 50,
        category: 'Electronic'

    },
    {
        title: "Ahmad tea",
        content: "best silan black tea",
        price: 9.99,
        stock: 200,
        category: 'Drink'

    },
    {
        title: 'Airpods',
        content: 'Apple latest ear bud',
        price: 399,
        stock: 30,
        category: 'Accessory'

    },
    {
        title: "Monster",
        content: "energy drink",
        price: 4.99,
        stock: 500,
        category: 'Drink'

    },
    {
        title: "Armani",
        content: "black suit",
        price: 699,
        stock: 20,
        category: "Men Clothing"

    },
    {
        title: "MK",
        content: 'Women boots',
        price: 259,
        stock: 20,
        category: 'Women Clothing'

    },
    {
        title: 'earl grey tea',
        content: 'black silan tea',
        price: 10,
        stock: 15,
        category: 'Drink'
    },
    {
        title: 'playstation 5',
        content: 'gaming console',
        price: 1099,
        stock: 15,
        category: "Electronic"
    },
    {
        title: 'beats headphone',
        content: 'premium headphone',
        price: 499,
        stock: 15,
        category: "Accessory"
    },
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