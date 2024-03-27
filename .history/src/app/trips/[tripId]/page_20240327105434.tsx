"use client";
import { apiClient } from "@/lib";
import { useAppStore } from "@/store/store";
import { TripType } from "@/types/trip";
import { USER_API_ROUTES } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Trip = ({ params: { tripId } }: { params: { tripId: string } }) => {
    const router = useRouter();
    const { userInfo } = useAppStore();
    const [tripData, setTripData] = useState<TripType | undefined>(undefined);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchTripData = async () => {
            const data = await apiClient.get(
                `${USER_API_ROUTES.GET_TRIP_DATA}?id=${tripId}`
            );
            if (data.data.id) {
                setTripData(data.data);
            }
        };
        if (tripId) {
            fetchTripData(); 
        }
    });

    return (
        <div>
            {tripData && (
                <>
                    <div className="grid grid-cols-3 my-10 gap-10 mx-32">
                        <div className="col-span-2">
                            <div className="bg-w px-5 py-5 rounded-lg flex flex-col gap-10 text-blue-text-title">
                                <div className="p-10 bg-[#f5f5fe] rounded-lg border border-gray-200 flex flex-col gap-5">
                                    .border-b-2
                                    <h1 className="text-3xl">
                                        <strong className="font-medium">
                                            {tripData?.name}
                                        </strong>
                                    </h1>
                                    <ul className="flex gap-4 text-2xl items-start">
                                        <li className="cursor-pointer text-blue-500 bg-blue-100 p-3 rounded-full">
                                            <FaFacebook />
                                        </li>
                                        <li className="cursor-pointer text-blue-500 bg-blue-100 p-3 rounded-full">
                                            <FaInstagram />
                                        </li>
                                        <li className="cursor-pointer text-blue-500 bg-blue-100 p-3 rounded-full">
                                            <FaTiktok />
                                        </li>
                                        <li className="cursor-pointer text-blue-500 bg-blue-100 p-3 rounded-full">
                                            <FaTwitter />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>Payment</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Trip;
