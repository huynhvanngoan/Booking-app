"use client";
import { apiClient } from "@/lib";
import { TripType } from "@/types/trip";
import { USER_API_ROUTES } from "@/utils";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const Trips = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchCity = searchParams.get("city");
    const [trips, setTrips] = useState<TripType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiClient.get(
                `${USER_API_ROUTES.GET_CITY_TRIPS}?city=${searchCity}`
            );
            if (data.data.trips) setTrips(data.data.trips);
        };
        if (searchCity) fetchData();
    }, [searchCity]);
    return (
        <div className="m-10 px-[5vw] min-h-[80vh]">
            <Button className="my-5" variant="shadow" color="primary" size="lg" onClick={() => router.push("/")}>
                <FaChevronLeft /> Go Back
            </Button>
            .grid.gird-cols-2.gap-
        </div>
    );
};

export default Trips;
