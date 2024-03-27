"use client";
import React from "react";
import { Button, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextNavbar } from "@nextui-org/react";
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
                        <div
                            className="fixed left-0 top-0 h-[10vh] w-[100vw] overflow-hidden z-0"
                            style={{
                                backdropFilter: "blur(12px) saturate(280%)",
                                WebkitBackdropFilter:
                                    "blur(12px) saturate(280%)",
                            }}
                        ></div>
                    </div>
                </>
            )}
            <div className="z-10 w-full flex items-center">
                <NavbarBrand>
                    <div className="cursor-pointer flex items-center">
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
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Link class href="/">
                            Tours
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="/search-flight" aria-current="page">
                            Flights
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link  href="/search-hotel">
                            Hotels
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button color="secondary" variant="flat" className="text-purple-500">Login</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            color="danger"
                            href="#"
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </div>
        </NextNavbar>
    );
};

export default Navbar;
Navbar;
