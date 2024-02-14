import { NextResponse } from "next/server";
import db from "@/modules/db";
import { hash } from "bcrypt";
import { userSchema } from "@/lib/validation/userSchema";

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    //validate data from db
    const isExistEmail = await db.user.findUnique({
        where: { email: email }
    })

    const isExistUsername = await db.user.findUnique({
        where: { username: username }
    })

    if(isExistEmail) {
        return NextResponse.json({ user: null, message: "Failed! Email already exists"}, { status: 409 })
    }

    if(isExistUsername) {
        return NextResponse.json({ user: null, message: "Failed! Username already exists"}, { status: 409 })
    }

    const encrypt = await hash(password, 10)

    const registUser = await db.user.create({
        data: {
            username,
            email,
            password: encrypt
        }
    })

    return NextResponse.json({ user: registUser, message: "UserSuccessfully Registered"}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error"}, { status: 500 });
  }
}