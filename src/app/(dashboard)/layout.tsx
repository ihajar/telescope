import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { CreateProjectModal } from "@/features/projects/components/create-project-modal";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";



interface DashboardLayoutProps {
    children: React.ReactNode;
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return ( 
        <div className="min-h-screen flex">
            <CreateWorkspaceModal />
            <CreateProjectModal />
            <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
                <Sidebar />
            </div>
            <div className="flex-1 lg:pl-[264px] flex flex-col">
                <Navbar />
                <main className="flex-1 bg-[#F2F6FE] py-8 px-6">
                    {children}
                </main>
            </div>
        </div>
        // <div className="min-h-screen flex">
        //     <div className="flex w-full h-full">
        //         <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
        //             <Sidebar />
        //         </div>
        //         <div className="lg:pl-[264px] w-full h-full">
        //             <div className="mx-auto bg-[#F2F6FE] flex flex-col">
        //                 <Navbar />
        //                 <main className="py-8 px-6 flex-1 h-full ">
        //                     {children}
        //                 </main>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
 
export default DashboardLayout;