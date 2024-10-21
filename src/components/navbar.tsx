import { UserButton } from "@/features/auth/components/user-button"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <nav className="py-4 px-6 flex items-center justify-between w-full bg-[#F2F6FE] border-b border-neutral-200">
            <div className="flex-col hidden lg:flex">
                <h1 className="text-2xl font-semibold text-[#05000D]">Dashboard</h1>
                <p className="text-muted-foreground">Monitor all your projects and tasks here</p>
            </div>
            <MobileSidebar />
            <UserButton />
        </nav>
    )
}