"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";


const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="Avatar-p">
        <Image src="/trayectoria.jpg" width="250" height="250" alt="Particles " />
    </MotionTransition>
    );
}

export default AvatarPortfolio;