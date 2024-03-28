"use client";
import { useAppStore } from "@/store/store";
import { Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const AuthModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpen?: () => void;
    onOpenChange: () => void;
}) => {
    const [modalType, setModalType] = useState("login");
    const router = useRouter();
    const { userInfo } = useAppStore();

    const [firstName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {};

    const handleLogin = async () => {};
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            className="bg-opacity-50 bg-purple-200"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
                            {modalType}
                        </ModalHeader>
                        <ModalBody className="flex flex-col items-center w-full justify-center">
                            <div className="cursor-pointer">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    height={150}
                                    width={150}
                                />
                                <span className="text-xl uppercase font-medium italic">
                                    <span
                                        className={ArchitectsDaughter.className}
                                    >
                                        Gre`s Booking
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <Input placeholder="Email" type="email" value=/>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
