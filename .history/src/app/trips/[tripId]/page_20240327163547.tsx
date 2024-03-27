"use client";
import { apiClient } from "@/lib";
import { useAppStore } from "@/store/store";
import { TripType } from "@/types/trip";
import { USER_API_ROUTES } from "@/utils";
import { Input, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    FaCalendar,
    FaCheck,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaTwitter,
} from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";

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
                                    <div className="border-b-2 border-dotted border-gray-400 flex justify-between w-full pb-5">
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
                                    <div>
                                        <ul className="grid grid-cols-2 gap-5">
                                            <li>
                                                <span>Trip ID: </span>
                                                <span className="text-blue-500">
                                                    {tripData.id}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Duration: </span>
                                                <span>
                                                    {tripData.days} Days,{" "}
                                                    {tripData.nights} Nights
                                                </span>
                                            </li>
                                            <li className="flex gap-4">
                                                <span>Location Covered: </span>
                                                <ul className="flex flex-col gap-5">
                                                    {tripData?.destinationItinerary.map(
                                                        (destination) => {
                                                            return (
                                                                <li
                                                                    key={
                                                                        destination.place
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            destination.place
                                                                        }{" "}
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            destination.totalNights
                                                                        }{" "}
                                                                        nights
                                                                    </span>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-10 bg-[#f5f5fe] rounded-lg border border-gray-200 gap-3 flex flex-col">
                                    <h3 className="text-2xl">
                                        <strong className="font-medium">
                                            Overview
                                        </strong>
                                    </h3>
                                    <p>{tripData.description}</p>
                                </div>
                                <div className="p-10 bg-[#f5f5fe] rounded-lg border border-gray-200 gap-3 flex flex-col">
                                    <h3 className="text-2xl">
                                        <strong className="font-medium">
                                            Tour Highlights
                                        </strong>
                                    </h3>
                                    <ul className="grid grid-cols-4 gap-5 mt-3">
                                        {tripData.themes.map((theme) => (
                                            <li
                                                key={theme}
                                                className="flex gap-2 items-center"
                                            >
                                                <span className="text-sm text-blue-500 bg-blue-200 p-2 rounded-full">
                                                    <FaCheck />
                                                </span>
                                                <span>{theme}</span>
                                            </li>
                                        ))}
                                        {tripData.inclusions.map(
                                            (inclusion) => (
                                                <li
                                                    key={inclusion}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <span className="text-sm text-blue-500 bg-blue-200 p-2 rounded-full">
                                                        <FaCheck />
                                                    </span>
                                                    <span>{inclusion}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="p-10 bg-[#f5f5fe] rounded-lg border border-gray-200 gap-3 flex flex-col">
                                    <h3 className="text-2xl">
                                        <strong className="font-medium">
                                            Itinerary
                                        </strong>
                                    </h3>
                                    <div></div>
                                </div>
                                <div className="p-10 bg-[#f5f5fe] rounded-lg border border-gray-200 gap-3 flex flex-col">
                                    <h3 className="text-2xl">
                                        <strong className="font-medium">
                                            Location Overview
                                        </strong>
                                    </h3>
                                    <div>
                                        <Tabs
                                            variant="bordered"
                                            color="primary"
                                        >
                                            {tripData.destinationDetails.map(
                                                (city) => (
                                                    <Tab
                                                        key={city.name}
                                                        title={city.name}
                                                        className="flex gap-5"
                                                    >
                                                        <div className="relative h-[200px] w-[20vw]">
                                                            <Image
                                                                src={city.image}
                                                                fill
                                                                alt={city.name}
                                                            />
                                                        </div>
                                                        <p className="flex-1">
                                                            {city.description}
                                                        </p>
                                                    </Tab>
                                                )
                                            )}
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-lg flex flex-col gap-10 h-max text-blue-text-title">
                            <div className="flex flex-col gap-3">
                                <h1 className="font-medium text-2xl">Price</h1>
                                <div className="flex gap-2 items-center justify-between">
                                    <div className="flex gap-2">
                                        <IoPricetag className="text-3xl" />
                                        <span className="text-2xl">From</span>
                                    </div>
                                    <span className="text-3xl font-bold">
                                        ${tripData.price}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Input endContent={<FaCalendar />}
                                    
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Trip;
