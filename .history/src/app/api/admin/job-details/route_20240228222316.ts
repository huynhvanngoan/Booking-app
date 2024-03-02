import { NextResponse } from "next/server";



export async function GET() {
    try {
        
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}