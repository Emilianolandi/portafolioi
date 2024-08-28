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
                        <h3 className="Datos-Header">
                            Emiliano 
                            
                           
                            <span className=" text-secondary">Landi</span>
                        </h3>
                           <p className="">Desarrollador 
                           {" "}
                        <span className=" text-secondary"> &nbsp;full stack</span>
                        </p> 
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