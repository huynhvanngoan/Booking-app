"use client";
import React from "react";
import { Navbar as NextNavbar } from "@nextui-org/react";
import { Architects_Daughter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/store/store";

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
                        </div>
                    </div>
                </>
            )}
        </NextNavbar>
    );
};

export default Navbar;
Navbar;
