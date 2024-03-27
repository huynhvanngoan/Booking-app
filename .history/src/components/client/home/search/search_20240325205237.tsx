import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";

const Search = () => {
    const activities = [
        {
            name: "Sea & Sailing",
            icon: "/home/ship.svg",
        },
        {
            name: "Trekking Tours",
            icon: "/home/hiking.svg",
        },
        {
            name: "City Tours",
            icon: "/home/trolley-bag.svg",
        },
        {
            name: "Motor Sports",
            icon: "/home/motor-boat.svg",
        },
        {
            name: "Jungle Safari",
            icon: "/home/cedar.svg",
        },
    ];

    return (
        <div className="h-screen flex flex-col lg:flex-row items-center justify-center">
            <div className="absolute inset-0 h-full w-full max-w-full overflow-hidden">
                <Image src="/home/home-bg.png" layout="fill" objectFit="cover" alt="Search" />
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/2 p-5">
                <div className="text-white text-center mb-10">
                    <h3 className="text-xl lg:text-3xl font-bold">
                        Best Tours made for you in mind!
                    </h3>
                    <h2 className="text-3xl lg:text-6xl font-extrabold">
                        Explore the exotic world.
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 rounded-xl w-full max-w-lg">
                    <Input
                        color="danger"
                        variant="bordered"
                        className="text-white placeholder-white"
                        startContent={<FaSearch />}
                        placeholder="Search Location"
                    />
                    <Input
                        type="date"
                        color="danger"
                        variant="bordered"
                        className="text-white accent-danger-500"
                        startContent={<FaCalendarAlt />}
                        placeholder="Dates"
                    />
                    <Button
                        size="lg"
                        className="h-full"
                        color="danger"
                        variant="shadow"
                    >
                        Search
                    </Button>
                </div>
                <div className="mt-5">
                    <ul className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {activities.map((activity, index) => (
                            <li
                                className="flex items-center justify-center gap-2 cursor-pointer"
                                key={index}
                            >
                                <div className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300">
                                    <Image
                                        src={activity.icon}
                                        width={50}
                                        height={50}
                                        alt="Activity"
                                    />
                                </div>
                                <span className="text-base lg:text-lg font-medium">
                                    {activity.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Search;
