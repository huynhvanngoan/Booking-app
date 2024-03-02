import { NextResponse } from "next/server";
import { prisma } from "@/lib"; 

export async function POST(request: Request) {
    try {
        const {url, jobType} = await request.json();
        const response = await prisma.jobs.create
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
