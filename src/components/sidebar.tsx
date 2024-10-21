import Image from "next/image";
import Link from "next/link";

import { Projects } from "./projects";
import { Navigation } from "./navigation";
import { DottedSeparator } from "./dotted-separator";
import { WorkspaceSwitcher } from "./workspace-switcher";


export const Sidebar = () => {
    return (
        <aside className="h-full bg-[#1E0059] text-white p-4 w-full">
            <div className="flex items-center justify-center gap-x-2 text-white">
                <Link href="/">
                    <Image src="/logo-dark.svg" height={50} width={40} alt="Logo" />
                </Link>
                <span className="font-semibold hidden lg:flex lg:text-2xl">Telescope</span>
            </div>
            <DottedSeparator className="my-8" />
            <WorkspaceSwitcher />
            <DottedSeparator className="my-4" />
            <Navigation />
            <DottedSeparator className="my-4" />
            <Projects />
        </aside>
    )
}