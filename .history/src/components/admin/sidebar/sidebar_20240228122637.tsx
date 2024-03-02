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
import { MdOutlineDataUsage } from "react-icons/md";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const Sidebar = () => {
    const menuItems = [
        {
            label: "Dashboard",
            icon: <FaHome />,
            link: "/admin/dashboard",
        },
        {
            label: 'Trips',
            icon: <BiSolidCategory />,
            link: '/admin/trips',
        },
        {
            label: 'Hotels',
            icon: <FaHotel />,
            link: '/admin/hotels',
        },
        {
            label: 'Bookings',
            icon: <FaBookOpen />,
            link: '/admin/bookings',
        },
        {
            label: 'Scrape Data',
            icon: <MdOutlineDataUsage>{ data
        }
    ];
    return <div>Sidebar</div>;
};

export default Sidebar;
