import { Sidebar } from "@/components/admin/sidebar"


const AdminLayout = ({ 
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <section className="bg-[#f5f5fe] flex">
            <Sidebar />
            <section className="flex-1 flex flex-col">
                <div className="h-48 bg-[#0E1428] text-white"></div>
            </section>
        </section>
    )
}