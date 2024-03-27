
import Image from "next/image";
import React from "react";

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
    return( 
        <div className="h-[80vh] flex items-center justify-center">
            <div className="absolute left-0 top-0 h-[100vh] w-[100vw] max-w-[100vw] overflow-hidden">
                <Image src="/home/home-bg.png" fill alt="Search" />
            </div>
            <div className="absolute h-[50vh] w-[60vw] flex flex-col gap-5">
                .text-white.text-center.
            </div>
        </div>
    );
};

export default Search;