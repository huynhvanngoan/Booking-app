import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        const {} = await 
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured."},
            {status: 500}
        )
    }
}