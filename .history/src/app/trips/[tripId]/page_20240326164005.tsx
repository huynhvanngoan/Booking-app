import { useAppStore } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";

const Trip = ({ params: { tripId } }: { params: { tripId: string } }) => {
    const router = useRouter();
    const { userInfo } = useAppStore();
    const [tripData, setTripData] = useSta
    return <div>Trip</div>;
};

export default Trip;
