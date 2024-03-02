import { NextResponse } from "next/server";
import { prisma } from '@/lib'


export async function GET() {
    try {
        const job = await prisma
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}