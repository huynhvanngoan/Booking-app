import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured."},
            { status:500}
        )
    }
}