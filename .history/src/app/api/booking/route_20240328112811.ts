import { NextResponse } from "next/server";
import Stripe from 
export async function GET(request: Request) {
    try {
        const { bookingId, bookingType, userId, taxes, date } =
            await request.json();
        let bookingDetails;

        switch (bookingType) {
            case "trips":
                bookingDetails = await prisma.trips.findUnique({
                    where: { id: bookingId },
                });
                if(bookingDetails) {
                    const paymentIntent = await stripe
                }
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured." },
            { status: 500 }
        );
    }
}
