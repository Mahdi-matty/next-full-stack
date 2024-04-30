import NextAuth from "next-auth";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs';
import validator from 'validator';

export async function POST(request){
    try{
        await connectToDB();
        const {username, email, password} = await request.json();
        const user = await User.findOne({ email });
        if (!validator.isEmail(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
        username, email, password: hashedPassword
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