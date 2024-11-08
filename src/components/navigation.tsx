"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LuLayoutDashboard } from "react-icons/lu";
import {RiDashboardFill} from "react-icons/ri";
import { MdOutlineFactCheck,  MdFactCheck } from "react-icons/md";
import { SettingsIcon, UsersIcon } from "lucide-react";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { cn } from "@/lib/utils";



const routes = [
    {
        label: "Dashboard",
        href: "",
        icon: LuLayoutDashboard,
        activeIcon: RiDashboardFill,
    },
    {
        label: "My Tasks",
        href: "/tasks",
        icon: MdOutlineFactCheck,
        activeIcon: MdFactCheck,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        label: "Members",
        href: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    },
]


export const Navigation = () => {
    const workspaceId = useWorkspaceId();
    const pathname = usePathname();

    return (
        <ul className="flex flex-col  space-y-3">
            {routes.map((item) => {
                const fullHref = `/workspaces/${workspaceId}${item.href}`
                const isActive = pathname === fullHref;
                const Icon = isActive ?  item.activeIcon : item.icon;

                return (
                    <Link key={item.href} href={fullHref}>
                        <div className={cn(
                            "flex items-center gap-2.5 p-2.5 rounded-md w-auto lg:w-full bg-transparent font-medium hover:bg-[#8E7BED] transition text-neutral-100",
                            isActive && "bg-[#8E7BED] text-white shadow-sm hover:opacity-100"
                        )}>
                            <Icon className="size-5 text-neutral-200" />
                            {item.label}
                        </div>
                    </Link>
                )
            })}
        </ul>
    )
}