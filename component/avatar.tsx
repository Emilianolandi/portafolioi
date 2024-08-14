"use client"
import MotionTransition from "./transition-component";

import Image from "next/image";



export function Avatar() {
    return (
        <MotionTransition position="bottom" className="pres">
        <Image src="/avatar-1.png" width={500} height={500} className="w-full h-full object-cover" alt="Particles" />
    </MotionTransition>
    
    )
}

export default Avatar;