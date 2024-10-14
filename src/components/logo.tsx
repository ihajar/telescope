import Image from "next/image";
import Link from "next/link";



export const Logo = () => {
    return (
        <div className="flex items-center gap-2" >
            <Link href='/'>
                <Image src="/logo.svg" width={40} height={40} alt="Logo" />  
            </Link>
            <span className="hidden md:flex md:text-2xl font-semibold text-[#1E0059]">Telescope</span>
        </div>
    )
}