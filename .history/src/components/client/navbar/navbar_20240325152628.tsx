"use client";
import React from "react";
import { NavbarBrand, Navbar as NextNavbar } from "@nextui-org/react";
import { Architects_Daughter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/store/store";
import Image from "next/image";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const Navbar = () => {
    const router = useRouter();
    const { userInfo } = useAppStore();
    const pathname = usePathname();
    const routesWithIamge = ["/", "search-flights", "/search-hotels"];
    return (
        <NextNavbar
            isBordered
            className="min-h-[10vh] bg-vi bg-opacity-10 text-white relative"
        >
            {!routesWithIamge.includes(pathname) && (
                <>
                    <div className="fixed left-0 top-0 h-[10vh] w-[10vw] overflow-hidden z-0">
                        <div className="h-[70vh] w-[100vw] absolute z-10 top-0 left-0">
                            <Image
                                src="/home/home-bg.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Search"
                            />
                        </div>
                        <div className="fixed left-0 top-0 h-[10vh] w-[100vw] overflow-hidden z-0" style={{
                            backdropFilter:"blur(12px) saturate(280%)",
                            WebkitBackdropFilter: "blur(12px) saturate(280%)" 
                        }}></div>
                    </div>
                </>
            )}
            <div className="z-10 w-full flex items-center">
                <NavbarBrand>
                    <div className="cursor-pointer flex items-center">
                        <Image></Image>
                    </div>
                </NavbarBrand>
            </div>
        </NextNavbar>
    );
};

export default Navbar;
Navbar;
