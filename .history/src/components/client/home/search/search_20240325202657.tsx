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
            </div>
            <div className="grid grid-cols-3 gap-5 p-5 rounded-xl">
                <Input
                    color="danger"
                    variant="bordered"
                    className="text-white placeholder:text-white relative"
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
                    className="text-white accent-danger-500"
                    startContent={<FaCalendarAlt />}
                    placeholder="Dates"
                    classNames={{
                        input: ["placeholder:text-white"],
                    }}
                />
                <Button
                    size="lg"
                    className="h-full cursor-pointer"
                    color="danger"
                    variant="shadow"
                >
                    Search
                </Button>
                <div>
                    <ul className="text-white grid grid-cols-5 mt-5">
                        {
                            activities.map((activity) => )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Search;
