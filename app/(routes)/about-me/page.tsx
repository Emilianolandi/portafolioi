import Avatar from "@/component/avatar";
import ContainerPage from "@/component/conteiner";
import CoverParticles from "@/component/cover-particles";
import TransitionPage from "@/component/transition-pages";

const PageAboutMe=() =>{
    return(
       <>
      <CoverParticles/>
       <TransitionPage/>
       <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left 
        md:text-5xl md:mt-10">Toda Mi {' '}
        <span className="font-bold text-secondary"> trayectoria Profesional</span>
        </h1>
       </ContainerPage>
       <Avatar/>
       </>
    );
}

export default PageAboutMe