import React from "react";
import {
    Sidebar as ReactProSidebar,
    Menu,
    MenuItem,
    sidebarClasses,
} from "react-pro-sidebar";
import { Architects_Daughter } from "next/font/google";
import { BiSolidCategory } from "react-icons/bi";
import { FaBookOpen, FaHome, FaHotel } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";


const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const Sidebar = () => {
    return <div>Sidebar</div>;
};

export default Sidebar;
