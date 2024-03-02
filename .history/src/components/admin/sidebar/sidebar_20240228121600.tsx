import { Architects_Daughter } from "next/font/google";
import React from "react";
import {
    Sidebar as ReactProSidebar,
    Menu,
    MenuItem,
    sidebarClasses,
} from "react-pro-sidebar";

const ArchitectsDaughter = Architects_Daughter({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const Sidebar = () => {
    return <div>Sidebar</div>;
};

export default Sidebar;
