import { NextResponse } from "next/server";

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
                    const paymentIntent = await 
                }
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured." },
            { status: 500 }
        );
    }
}
