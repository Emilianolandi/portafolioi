import AvatarPortfolio from "@/component/avatar-porfolio";
import ContainerPage from "@/component/conteiner";
import CoverParticles from "@/component/cover-particles";
import TransitionPage from "@/component/transition-pages";





const PortfolioPage = () => {
    return (
        <>
       <TransitionPage />
       <CoverParticles />
        <ContainerPage>
        <AvatarPortfolio />

       </ContainerPage>
        </>
    );
}

export default PortfolioPage;