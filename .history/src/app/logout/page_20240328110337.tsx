import { cookies } from "next/headers";
import React from "react";

const Logout = () => {

    async function deleteCookie() {
        "use server";
        cookies
    }
    return <div>Logout</div>;
};

export default Logout;
