"use client";
import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});
const Footer = () => {
    const router = useRouter();
    return (
        <footer
            className="min-h-[20vh] px-48 py-10 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/home-bg.png')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
            <div className="relative z-10 p-4 grid grid-cols-4 gap-20 text-white">
                <div>
                    <div
                        className="cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            height={80}
                            width={80}
                        />
                        <span className="text-xl uppercase font-medium italic">
                            <span className={ArchitectsDaughter.className}>
                                Gre`sBooking
                            </span>
                        </span>
                    </div>
                    <p>
                        Explore seamlessly curated tours withour all-in-on
                        travel app. Effortlessly discover, compare, and book
                        flight, hotels, and tours for your next adventure,
                        powered by Next-js.
                    </p>
                </div>
                <div className="flex flex-col gap-3 pt-10">
                    <h3 className="text-3xl font-medium to-danger-500">
                        
                    </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
