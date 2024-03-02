import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
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
    <Card className="h-full">
        <CardHeader>Current Queue</CardHeader>
        <CardBody className="flex items-center justify-center">
            <div className={`h`}></div>
        </CardBody>
    </Card>
    );
};

export default ScrapingQueue;
