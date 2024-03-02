import { NextResponse } from "next/server";
import { prisma}

export async function POST(request: Request) {
    try {
        const {url, jobType} = await request.json();
        const response = await prisma
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
