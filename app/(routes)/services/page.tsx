

import AvatarServices from "@/component/avatar-services";
import CircleImage from "@/component/circle-image";
import CoverParticles from "@/component/cover-particles";

import TransitionPage from "@/component/transition-pages";


const ServicesPages=() =>{
    return(
        <>
        <CoverParticles/>
        <TransitionPage/>
        <AvatarServices/>
        
        <CircleImage/>
        
        <div className="grid grid-cols-2 items-center justify-center h-0 max-w-5xl 
        gap-6 mx-auto md:grid-cols-2 md:px-20">
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis {" "}
            <span className="font-bold text-secondary">servicios</span>
        </h1>
        <br />
        <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
            <div className="max-w-[450px]">
            </div>

        </div>
        </>
    );
}
export default ServicesPages;