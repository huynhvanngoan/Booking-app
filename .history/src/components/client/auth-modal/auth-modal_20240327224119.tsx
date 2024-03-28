import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpen?: () => void;
    onOpenChange: () => void;
}) => {

    const [modelType, setModelType] = useState("login")
    const router = useRouter();
    const {userInfo} = useApt
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
                            Login
                        </ModalHeader>
                        <ModalBody></ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
