import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils";
import { Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ScrapingQueue = () => {
    const [onGoingJobs, setOnGoingJobs] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await apiClient.get(ADMIN_API_ROUTES.JOB_DETAILS);
            setOnGoingJobs(data.data.onGoingJobs);
        };

        const interval = setInterval(() => getData(), 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
    <Card></Card>
    );
};

export default ScrapingQueue;
