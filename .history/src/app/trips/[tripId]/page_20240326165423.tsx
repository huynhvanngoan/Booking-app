import { useAppStore } from "@/store/store";
import { TripType } from "@/types/trip";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Trip = ({ params: { tripId } }: { params: { tripId: string } }) => {
    const router = useRouter();
    const { userInfo } = useAppStore();
    const [tripData, setTripData] = useState<TripType | undefined>(undefined);
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const fetchTripData = async() => {
            const data= await apiClient.get(USER_API_ROUTES)
        };

        if(tripId) {
            fetchTripData()
        }
    })

    return <div>Trip</div>;
};

export default Trip;
