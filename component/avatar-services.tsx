import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="Img-service">
            <Image src="/services.png" width="300" height="300" className="w-[250px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;