"use client";
import { AuthModal } from "@/components/client/auth-modal";
import { Footer } from "@/components/client/footer";
import { Navbar } from "@/components/client/navbar";
import { useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathName = usePathname()
    return (
        <>
            <div className="relative flex flex-col" id="app-container">
                <main className="flex flex-col relative">
                    <Navbar onOpen={onOpen} />
                    <section className="h-full flex-1">{children}</section>
                    <AuthModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onOpenChange={onOpenChange}
                    />
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default PageLayout;
