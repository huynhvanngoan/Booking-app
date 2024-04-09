//@ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { userId } = await request.json();
        const bookings = await prisma.bookings.findMany({
            where: {
                userId,
            },
        });

        for (const booking of bookings) {
            delete booking.paymentIntent;
            switch (booking.bookingType) {
            }
        }
        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
