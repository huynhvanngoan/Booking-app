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
            <div className="relavtive z-10 p-4 grid grid-cols-4 gap-20 text-white">
                <div> 
                    <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image
                            src="/logo.png"
                            alt="logo"
                            height={80}
                            width={80}
                        />
                        <span className="text-3xl uppercase font-medium italic">
                            <span className={ArchitectsDaughter.className}>
                                Gre`sBooking
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
