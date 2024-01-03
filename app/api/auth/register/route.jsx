import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        // validate the email and password
        const register = await prisma.user.create({
            data: {
                email,
                password
            }
        }) 
        
        console.log({ email, password });
        return NextResponse.json({email, password}, {status:200});
    } catch (e) {
        console.log(e)
    }
}