"use client"
import MotionTransition from "./transition-component";

import Image from "next/image";



export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
        <Image src="/mis-certificaciones.png" width={380} height={400} className="Img-About" alt="Particles" />
    </MotionTransition>
    
    )
}

export default Avatar;