import { Modal } from "@nextui-org/react";
import React from "react";

const AuthModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpen?: () => void;
    onOpenChange: () => void;
}) => {
    return(
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="bg-opacity"></Modal>
    );
};

export default AuthModal;
