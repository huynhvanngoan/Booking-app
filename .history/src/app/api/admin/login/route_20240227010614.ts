import { NextResponse } from "next/server";
import { prisma } from '@/lib';
import { SignJWT } from "jose";


const createToken = async (email: string, userId: number) ==> {
    return await new SignJWT({ email, userId, isAdmin: true})
}

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        if(!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required'},
                { status: 400 }
            );
        }
        const user = await prisma.admin.findUnique({
            where: { email: email, password }
        });


        if(!user) {
            return NextResponse.json(
                { message: 'Invalid email or password'},
                { status: 404 }
            );
        } else {
            
        }
    } catch (error) {
        return NextResponse.json(
            { message: 'An unexpected error occurred.' },
            { status: 500 }    
        );
    }
}