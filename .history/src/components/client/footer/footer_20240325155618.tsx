import { Architects_Daughter } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});
const Footer = () => {
    const router = useRouter();
    return <div>Footer</div>;
};

export default Footer;
