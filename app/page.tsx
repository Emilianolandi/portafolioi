
import ContainerPage from "@/component/conteiner";
import CoverParticles from "@/component/cover-particles";

import Introduction from "@/component/introduccion";

import TransitionPage from "@/component/transition-pages";

export default function Home (){
  return(
    <main>
      <TransitionPage />
      
       {/* <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">  */}
      <CoverParticles />
     <Introduction />
     {/* </div>  */}
    </main>
  )

}