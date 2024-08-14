'use client'



import Link from "next/link";
import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data"

const Header = () => {
    return(
        
      <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-10">
            <header>
            <div className="container w-1 justify-normal max-w-8xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="Datos">
                            Emiliano 
                            &nbsp;
                           
                            <span>Landi</span>
                        </h1>
                           <h1 className="flex m-4 font-bold text-left">Desarrollador 
                           {" "}
                        <span className="flex z-10 font-bold text-secondary"> &nbsp;full stack</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-x-10 ">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                            key={id}
                            href={src}
                            target="_blank"
                            className="transition-all duration-300  hover:text-secondary"
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