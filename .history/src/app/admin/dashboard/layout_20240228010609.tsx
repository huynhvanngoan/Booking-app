import { Sidebar } from "@/components/admin/sidebar"


const AdminLayout = ({ 
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <section className="bg-[#f5f5fe] flex">
            <Sidebar />
        </section>
    )
}