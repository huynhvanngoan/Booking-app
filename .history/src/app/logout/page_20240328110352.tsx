import { cookies } from "next/headers";
import React from "react";

const Logout = () => {

    async function deleteCookie() {
        "use server";
        cookies().delete("access_token")
    }
    return <div>Logout</div>;
};

export default Logout;
