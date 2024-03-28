import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { bookingId, bookingType, userId, taxes date } = await request.json();
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured." },
            { status: 500 }
        );
    }
}
