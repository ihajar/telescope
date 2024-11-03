"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Sidebar } from "./sidebar";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";



export const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button size="icon" variant="teritary" className="lg:hidden">
                    <MenuIcon className="size-6 text-[#1E0059]" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#1E0059] p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};