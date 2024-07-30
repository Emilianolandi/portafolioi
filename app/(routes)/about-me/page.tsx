import ContainerPage from "@/component/conteiner";
import CoverParticles from "@/component/cover-particles";
import TransitionPage from "@/component/transition-pages";

const PageAboutMe=() =>{
    return(
       <>
       <CoverParticles/>
       <TransitionPage/>
       <ContainerPage>
        <p>Hola Mundo</p>
       </ContainerPage>
       </>
    );
}

export default PageAboutMe