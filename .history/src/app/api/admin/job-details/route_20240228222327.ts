import { NextResponse } from "next/server";



export async function GET() {
    try {
        const job = await 
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}