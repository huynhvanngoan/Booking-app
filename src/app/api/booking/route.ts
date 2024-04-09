import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY || "");

export async function POST(request: Request) {
    try {
        const { bookingId, bookingType, userId, taxes, date } =
            await request.json();
        let bookingDetails;
        switch (bookingType) {
            case "trips":
                bookingDetails = await prisma.trips.findUnique({
                    where: { id: bookingId },
                });
        }
        if (bookingDetails) {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: bookingDetails.price + taxes,
                currency: "usd",
                automatic_payment_methods: {
                    enabled: true,
                },
            });
            await prisma.bookings.create({
                data: {
                    bookingType,
                    bookingTypeId: bookingId.toString(),
                    user: { connect: { id: userId } },
                    paymentIntent: paymentIntent.id,
                    totalAmount: paymentIntent.amount,
                    date,
                },
            });
            return NextResponse.json({
                client_secret: paymentIntent.client_secret,
            });
        }
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured." },
            { status: 500 }
        );
    }
}

export async function PATCH(request: Request) {
    try {
        const { paymentIntent } = await request.json();

        if (paymentIntent) {
            await prisma.bookings.update({
                where: { paymentIntent },
                data: { isCompleted: true },
            });
        }
        return NextResponse.json(
            { message: "Payment Successfull." },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occured." },
            { status: 500 }
        );
    }
}
