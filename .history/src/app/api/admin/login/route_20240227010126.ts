import { NextResponse } from "next/server";
import { prisma } from '@/lib';


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
                { message: 'Email and password are required'},
                { status: 400 }
            )
        }
    } catch (error) {
        return NextResponse.json(
            { message: 'An unexpected error occurred.' },
            { status: 500 }    
        );
    }
}