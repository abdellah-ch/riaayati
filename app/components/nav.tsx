'use client';

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = () => {

    const pathname = usePathname();

    // Check if the URL contains '/vertical'
    const isVertical = pathname.includes('/vertical') || pathname.includes('/profiles');
    const router = useRouter();
    return (
        <>
            {/* Mobile Navigation */}
            <nav className="flex items-center justify-between p-4 bg-background md:hidden">
                <div className="flex items-center space-x-2">
                    {isVertical ? (
                        <Image width={100} height={60} alt="logo" src="/images/logo.svg" />
                    ) : (
                        <>
                            {/* Menu */}
                            <button>
                                <CiMenuBurger className="text-2xl" />
                            </button>
                            {/* Logo */}
                            <button className="text-primary" onClick={() => router.push('/')}>
                                <Image width={100} height={60} alt="logo" src="/images/logo.jpg" />
                            </button>
                        </>
                    )}
                </div>
                {!isVertical && (
                    <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-muted">
                            Postuler
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-muted">
                            Se connecter
                        </a>
                    </div>
                )}
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex absolute top-0 left-0 w-full bg-transparent z-30 items-center justify-between p-4  dark:bg-zinc-800 text-white">
                <button className="text-primary ml-4" onClick={() => router.push('/')}>
                    <Image width={140} height={70} alt="logo" src="/images/logo.svg" />
                </button>
                {!isVertical && (
                    <div className="flex space-x-6 items-center">
                        <a href="#" className="text-white cursor-pointer">
                            Se connecter
                        </a>
                        <button className="bg-[#61CE70] text-white px-8 py-[8px] rounded-lg hover:bg-[#61CE70]/80 cursor-pointer">
                            Rejoignez maintenant
                        </button>
                        <button className="text-white cursor-pointer ">
                            <IoMdMore className="text-2xl" />
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Nav;
