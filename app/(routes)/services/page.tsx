import AvatarServices from "@/component/avatar-services";
import CircleImage from "@/component/circle-image";
import CoverParticles from "@/component/cover-particles";
import SliderServices from "@/component/slider-services";
import TransitionPage from "@/component/transition-pages";

const ServicesPages = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles />

              <br />
            <div className="Page-service">
                <div className="max-w-[750px] z-10 mt-10 md:mt-0">
                    <h1 className="Service-Title">Mis <span className="font-bold text-secondary"> servicios</span></h1>
                    <p className="Service-Info">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary opacity-75 hover:bg-secondary/95">Contacta conmigo</button>
            </div>

                {/* SLIDER */}
                
                    <SliderServices />
                </div>
                 
            <CircleImage />
            <AvatarServices />
        </>
    );
}

export default ServicesPages;
