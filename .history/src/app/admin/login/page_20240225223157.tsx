import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

import { Architects_Daughter } from 'next/font/google'


const ArchitectsDaughter = Architects_Daughter({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
}) 

const Login = () => {
    return (
        <div
        className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/home/home-bg.png")' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
            <Card className="shadow-2xl bg-opacity-20 w-[480px]">
                <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
                    <div className="flex flex-col gap-1 capitalize text-3xl items-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            height={80}
                            width={80}
                            className="cursor-pointer"
                        />
                        <span className="text-xl uppercase font-medium italic text-white">
                            <span className={ArchitectsDaughter.className}>
                                Gre`sBooking Admin Login
                            </span>
                        </span>
                    </div>
                </CardHeader>
                <CardBody ></CardBody>
            </Card>
        </div>
    );
};

export default Login;
