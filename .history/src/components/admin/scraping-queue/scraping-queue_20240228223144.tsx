import { apiClient } from '@/lib';
import React, { useEffect, useState } from 'react'

const ScrapingQueue = () => {
    const [onGoingJobs, setOnGoingJobs] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await apiClient,
        };
    }, []);

    return (
        <div>ScrapingQueue</div>
    )
}

export default ScrapingQueue