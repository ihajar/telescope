"use client";

import { Loader } from "lucide-react";


const LoadingPage = () => {
    return ( 
        <div className="h-screen bg-[#F2F6FE] w-full flex flex-col items-center justify-center">
            <Loader className="size-7 animate-spin text-muted-foreground" />
        </div>    
    );
}
 
export default LoadingPage;