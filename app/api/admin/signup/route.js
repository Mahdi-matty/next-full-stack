import NextAuth from "next-auth";
import Admin from "@models/admin";
import { connectToDB } from "@utils/database";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request){
    try{
        await connectToDB();
        const {username, email, password} = await request.json();
        const user = await Admin.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // const saltRounds = 10;
    //     const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new Admin({
        username, email, password: password
    })
    const savedUser = await newUser.save();
    return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser,
      });
    }catch(error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}