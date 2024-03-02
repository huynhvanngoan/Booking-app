import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {url, jobType} = await request.json()
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
