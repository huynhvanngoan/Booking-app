import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Trips = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const searchCity = searchParams.get
    return <div>Trips</div>;
};

export default Trips;
