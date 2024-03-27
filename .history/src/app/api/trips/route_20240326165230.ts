//@ts-nocheck
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (id) {
            const trip = await prisma.trips.findUnique({ where: { id } });
           
            if (trip) {
                return NextResponse.json(
                    { trips: filteredTrips },
                    { status: 200 }
                );
            } else {
                return NextResponse.json(
                    { message: "Trip not found." },
                    { status: 404 }
                );
            }
        } else {
            return NextResponse.json(
                { message: "City is required." },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
