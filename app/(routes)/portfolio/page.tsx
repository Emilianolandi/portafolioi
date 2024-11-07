import AvatarPortfolio from "@/component/avatar-porfolio";
import CircleImage from "@/component/circle-image";
import ContainerPage from "@/component/conteiner";
import CoverParticles from "@/component/cover-particles";
import PortfolioBox from "@/component/portfolio-box";
import TransitionPage from "@/component/transition-pages";
import { dataPortfolio } from "@/data";





const PortfolioPage = () => {
    return (
        <>
       <TransitionPage />
       <CoverParticles />
        <ContainerPage>
        <AvatarPortfolio />
        <CircleImage/>

        <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
        Proyectos 
            <span className="text-secondary font-bold">  Realizados</span>
            </h1>

            <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
        {dataPortfolio.map((data)=>(
        <PortfolioBox key={data.id} data={data}/>
    ))}
            </div>
        </div>
       </ContainerPage>
        </>
    );
}

export default PortfolioPage;