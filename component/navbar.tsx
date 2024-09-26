"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";


import MotionTransition from "./transition-component";





const Navbar = () => {
    const router = usePathname()
    return(
        <MotionTransition position="right" className="caja-nav">
            <nav>

            <div className="Navegacion">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="Nav-1"
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                )
                
                )}
                
            </div>
        </nav>
        
        </MotionTransition>
       
    );
}
export default Navbar;