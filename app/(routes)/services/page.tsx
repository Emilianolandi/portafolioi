

import AvatarServices from "@/component/avatar-services";
import CircleImage from "@/component/circle-image";
import CoverParticles from "@/component/cover-particles";

import TransitionPage from "@/component/transition-pages";


const ServicesPages=() =>{
    return(
        <>
        <main>
      <TransitionPage />
      <div className="page_body">
        <CoverParticles />
        
      </div>
    </main>
  </>
  );
}
export default ServicesPages;