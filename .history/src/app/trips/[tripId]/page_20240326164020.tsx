import { useAppStore } from "@/store/store";
import { TripType } from "@/types/trip";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Trip = ({ params: { tripId } }: { params: { tripId: string } }) => {
    const router = useRouter();
    const { userInfo } = useAppStore();
    const [tripData, setTripData] = useState<TripType | undefined
    return <div>Trip</div>;
};

export default Trip;
