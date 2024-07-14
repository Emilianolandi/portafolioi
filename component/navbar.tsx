"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";


import MotionTransition from "./transition-component";





const Navbar = () => {
    const router = usePathname()
    return(
        <MotionTransition position="right" className="Naveg">
            <nav>

            <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="Caja-nav"
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                )
                
                )}
                
            </div>
        </nav>
        <br />
        </MotionTransition>
       
    );
}
export default Navbar;