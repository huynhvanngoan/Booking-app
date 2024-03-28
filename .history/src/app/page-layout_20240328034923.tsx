"use client";
import { AuthModal } from "@/components/client/auth-modal";
import { Footer } from "@/components/client/footer";
import { Navbar } from "@/components/client/navbar";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const { onOpenChange } = useDisclosure();
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = (type: "login" | "signup") => setIsOpen(true);
    return (
        <div className="relative flex flex-col" id="app-container">
            <main className="flex flex-col relative">
                <Navbar onOpen={onOpen} />
                <section className="h-full flex-1">{children}</section>
                <AuthModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    initialType={type}
                />
                <Footer />
            </main>
        </div>
    );
};

export default PageLayout;
