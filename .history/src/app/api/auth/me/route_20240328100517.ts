import { decodeJwt, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_KEY as string);
        const token = request.cookies.get("access_token");
        if(token) {
            if(!jwtVerify(token.value, secret)) {
                return NextResponse.redirect(new URL("/", request.url))
            }
            const { userId, isAdmin} = decodeJwt(token.value);
            if(!isAdmin) {

            } else {
                return NextResponse.json({})
            }
        } else {
            return NextResponse.
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured."},
            { status:500}
        )
    }
}