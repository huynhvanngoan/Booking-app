"use client";
import { apiClient } from "@/lib";
import { useAppStore } from "@/store/store";
import { USER_API_ROUTES } from "@/utils";
import {
    Button,
    Input,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
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
    const { setUserInfo } = useAppStore();

    const [firstName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (onClose: () => void) => {
        const response = await apiClient.post(USER_API_ROUTES.SIGNUP, {
            firstName,
            lastName,
            email,
            password
        });
        if(response.data.userInfo) {
            setUserInfo(response.data.)
        }
    };

    const handleLogin = async (onClose: () => void) => {};

    const switchModalType = () => {
        if (modalType === "login") setModalType("signup");
        else setModalType("login");
    };
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
                            <Image
                                src="/logo.png"
                                alt="logo"
                                height={80}
                                width={80}
                            />
                            <span className="text-xl uppercase font-medium italic">
                                <span className={ArchitectsDaughter.className}>
                                    Gre{`'`}s Booking
                                </span>
                            </span>
                            <div className="flex flex-col gap-2 w-full">
                                {modalType === "signup" && (
                                    <>
                                        <Input
                                            placeholder="First Name"
                                            type="text"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFristName(e.target.value)
                                            }
                                        />
                                        <Input
                                            placeholder="Last Name"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </>
                                )}
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col items-center justify-center">
                            <Button
                                color="primary"
                                className="w-full capitalize"
                                onPress={() => {
                                    modalType === "login"
                                        ? handleLogin(onClose)
                                        : handleSignup(onClose);
                                }}
                            >
                                {modalType}
                            </Button>
                            {modalType === "signup" && (
                                <p>
                                    Already have an account?&nbsp;{" "}
                                    <Link
                                        className="cursor-pointer"
                                        onClick={() => switchModalType()}
                                    >
                                        {" "}
                                        Login now
                                    </Link>
                                </p>
                            )}
                            {modalType === "login" && (
                                <p>
                                    Don{`'`}t have an account?&nbsp;{" "}
                                    <Link
                                        className="cursor-pointer"
                                        onClick={() => switchModalType()}
                                    >
                                        {" "}
                                        Signup Now
                                    </Link>
                                </p>
                            )}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
