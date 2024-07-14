'use client'



import Link from "next/link";
import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data"


const Header = () => {
    return(
        
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
           
                <div className="container justify-between max-w-13xl mx-auto md:flex">
                    <Link href='/'>
                        
                    </Link>
                    <div className="flex items-center justify-center gap-15">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header