import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_KEY as string);
        const token = request.cookies.get("access_token");
        if(token) {
            if(!jwtVerify(token.value.))
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured."},
            { status:500}
        )
    }
}