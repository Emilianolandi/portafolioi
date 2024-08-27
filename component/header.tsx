'use client'



import Link from "next/link";
import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data"

const Header = () => {
    return(
        
      <MotionTransition position="bottom" className="Header-inicio">
            <header>
            <div className="Header-1">
                    <Link href='/'>
                        <h1 className="Datos-Header">
                            Emiliano 
                            &nbsp;
                           
                            <span className=" text-secondary">Landi</span>
                        </h1>
                           {/* <h1 className="flex m-4 font-bold text-left">Desarrollador 
                           {" "}
                        <span className="flex z-10 font-bold text-secondary"> &nbsp;full stack</span>
                        </h1> */}
                    </Link>
                    <div className="Redes">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="Redes"
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