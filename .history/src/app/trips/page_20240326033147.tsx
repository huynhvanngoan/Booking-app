import { TripType } from "@/types/trip";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Trips = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const searchCity = searchParams.get("city");
    const [trips, setTrips] = useState<TripType[]>([])

    useEffect
    return <div>Trips</div>;
};

export default Trips;
