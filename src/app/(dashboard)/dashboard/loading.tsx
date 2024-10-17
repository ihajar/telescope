import { Loader } from "lucide-react";

const DashboardLoading = () => {
    return ( 
        <div className="h-full flex items-center justify-center">
            <Loader className="size-6 animate-spin text-[#8E7BED]" />
        </div>
    );
}
 
export default DashboardLoading;