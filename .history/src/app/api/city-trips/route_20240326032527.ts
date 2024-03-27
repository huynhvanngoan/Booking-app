import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const city = searchParams.get("city");
        if(city) {
            const allTrips = await prisma.trips.findMany();
            const filteredTrips = allTrips.filter((trip) => {
                const destination
            
            })
        }
        const trips = await prisma.trips.findMany({
            orderBy: {
                scrapedOn: "desc",
            },
        });
        if (trips) {
            return NextResponse.json(
                {
                    trips,
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { msg: "No trips found." },
                { status: 404 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
