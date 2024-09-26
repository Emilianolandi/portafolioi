"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="circle-image-container">
            <Image src="/circles.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </div>

    );
}

export default CircleImage;