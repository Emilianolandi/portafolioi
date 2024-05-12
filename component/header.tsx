'use client'



import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data"


const Header = () => {
    return(
        
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">

        <header>
            <div className="container justify-center max-w-6xl mx-auto md:flex">
                <a href="/">
                   <h1 className= "flex mt-4 text-xl italic text-center text-gray-800">
                   Emiliano 
                   
                   Landi
                   <span className="text-secondary">
                   developer full stack
                   </span>
                   </h1>
                </a>
            <br />
            <div className="flex justify-center gap-7">
    {socialNetworks.map(({logo, src, id})=>(
    <a key={id}
    href={src}
    target ="_blank"
    className="transition-all duration-300 hover:text-secondary"
    >
        {logo}
    </a>
    ))}
</div>
            </div>
        </header>

        <br />
        </MotionTransition>
        
    )
}

export default Header