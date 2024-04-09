"use client";
import { apiClient } from "@/lib";
import { USER_API_ROUTES } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Success = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const paymentIntent = searchParams.get("payment-intent");

    useEffect(() => {
        const updateOrderInfo = async () => {
            await apiClient.patch(USER_API_ROUTES.CREATE_BOOKING, {
                paymentIntent,
            });

            setTimeout(() => {
                router.push("/my-bookings");
            }, 3000);
        };

        if (paymentIntent) {
            updateOrderInfo();
        }
    }, [paymentIntent, router]);

    return (
        <div className="h-[80vh] flex items-center px-20 pt-20 flex-col">
            <h1 className="text-4xl text-center">
                Payment Successfull. You are being redirected to the bookings
                page
            </h1>
            <h2 className="text-4xl text-center">
                Please do not close the page.
            </h2>
        </div>
    );
};

export default Success;
