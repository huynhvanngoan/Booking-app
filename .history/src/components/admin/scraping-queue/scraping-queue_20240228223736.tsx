import { apiClient } from '@/lib';
import { ADMIN_API_ROUTES } from '@/utils';
import React, { useEffect, useState } from 'react'

const ScrapingQueue = () => {
    const [onGoingJobs, setOnGoingJobs] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await apiClient.get(ADMIN_API_ROUTES.JOB_DETAILS);
            setOnGoingJobs(data.data.onGoingJobs);
        };

        const interval = setInterval(() => getData(), 3000);

        return () => {
            cle
        }

    }, []);

    return (
        <div>ScrapingQueue</div>
    )
}

export default ScrapingQueue