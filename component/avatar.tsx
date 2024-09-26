"use client"
import MotionTransition from "./transition-component";

import Image from "next/image";



export function Avatar() {
    return (
        <MotionTransition position="bottom" className="pres">
        <Image src="/avatar-1.png" width={300} height={300} className="Img-About" alt="Particles" />
    </MotionTransition>
    
    )
}

export default Avatar;