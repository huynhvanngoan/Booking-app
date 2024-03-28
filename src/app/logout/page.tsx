import { cookies } from "next/headers";
import React from "react";
import Actions from "./action";

const Logout = () => {

    async function deleteCookie() {
        "use server";
        cookies().delete("access_token")
    }
    return <Actions deleteCookie={deleteCookie} />
};

export default Logout;
