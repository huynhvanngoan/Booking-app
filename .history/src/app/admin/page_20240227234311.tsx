import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Admin = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/admin/dashboard');
    })
    return <div>Admin</div>;
};

export default Admin;
