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
        <div className="h-[80vh] flex items-center justify-center">
            <div className="absolute left-0 top-0 h-[100vh] w-[100vw] max-w-[100vw] overflow-hidden overflow-x-hidden">
                <Image src="/home/home-bg.png" fill alt="Search" />
            </div>
            <div className="absolute h-[50vh] w-[60vw] flex flex-col gap-5">
                <div className="text-white text-center flex flex-col gap-5">
                    <h3 className="text-xl font-bold">
                        Best Tours made for you in mind!
                    </h3>
                    <h2 className="text-6xl font-extrabold">
                        Expore the exotic world.
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 rounded-xl">
                    <Input
                        color="danger"
                        variant="bordered"
                        className="text-white placeholder:text-white relative md:text-base lg:text-lg"
                        startContent={<FaSearch />}
                        placeholder="Search Location"
                        classNames={{
                            input: ["placeholder:text-white"],
                        }}
                    />
                    <Input
                        type="date"
                        color="danger"
                        variant="bordered"
                        className="text-white accent-danger-500 md:text-base lg:text-lg"
                        startContent={<FaCalendarAlt />}
                        placeholder="Dates"
                        classNames={{
                            input: ["placeholder:text-white"],
                        }}
                    />
                    <Button
                        size="lg"
                        className="h-full cursor-pointer md:text-base lg:text-lg"
                        color="danger"
                        variant="shadow"
                    >
                        Search
                    </Button>
                </div>
                <div>
                    <ul className="text-white md:grid-cols-3 lg:grid-cols-5 mt-5">
                        {activities.map((activity) => (
                            <li
                                className="flex items-center justify-between gap-5 flex-col cursor-pointer md:flex-row lg:flex-col"
                                key={activity.name}
                            >
                                <div className="p-5 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300">
                                    <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
                                        <Image
                                            src={activity.icon}
                                            fill
                                            alt="Activity"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm md:text-base lg:text-lg font-medium text-nowrap">
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
