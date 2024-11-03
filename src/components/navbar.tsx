"use client";

import { usePathname } from "next/navigation";

import { UserButton } from "@/features/auth/components/user-button"
import { MobileSidebar } from "./mobile-sidebar"


const pathnameMap = {
    "tasks" : {
        title: "my Tasks",
        description: "View all your tasks here",
    },
    "projects": {
        title: "My Project",
        description: "View details of your project here",
    },
};

const defaultMap = {
    title: "Dashboard",
    description: "Monitor all your projects and tasks here",
};

export const Navbar = () => {
    const pathname = usePathname();
    const pathnameParts = pathname.split("/");
    const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;

    const { title, description } = pathnameMap[pathnameKey] || defaultMap;

    return (
        <nav className="py-4 px-6 flex items-center justify-between w-full bg-[#F2F6FE] border-b border-neutral-200">
            <div className="flex-col hidden lg:flex">
                <h1 className="text-2xl font-semibold text-[#05000D]">
                    {title}
                </h1>
                <p className="text-muted-foreground">
                    {description}
                </p>
            </div>
            <MobileSidebar />
            <UserButton />
        </nav>
    )
}