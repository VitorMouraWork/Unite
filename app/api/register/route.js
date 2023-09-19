import { NextResponse } from "next/server";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const {name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();
    await User.Create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "user registered."}, {status: 201});
  } catch (error) {
    return NextResponse.json({ message: "an error has occured while registering the account." }, {status: 500})
  }
}