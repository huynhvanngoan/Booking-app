import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_KEY as strng)
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured."},
            { status:500}
        )
    }
}