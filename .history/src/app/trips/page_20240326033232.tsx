import { apiClient } from "@/lib";
import { TripType } from "@/types/trip";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Trips = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const searchCity = searchParams.get("city");
    const [trips, setTrips] = useState<TripType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiClient.get(USER)
        }
    }, [])
    return <div>Trips</div>;
};

export default Trips;
