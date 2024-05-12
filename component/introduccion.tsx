'use client'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const Introduction = () =>{
    return(
<div className="flex justify-center items-center min-h-screen">
  <div className="z-20 w-full bg-darkBg/60">
    <div className="z-20 flex flex-col md:flex-row items-center h-full p-6 py-20 md:py-1">
      <div className="flex-none mb-6 md:mb-0 md:w-1/2 md:order-2"> {/* Estilo para la imagen */}
        <Image src="/home-4.png" priority width={600} height={600} alt="profile" />
      </div>
      <div className="flex-1 max-w-md text-center md:text-left md:order-1"> {/* Estilo para el texto */}
  <h1 className="mb-5 text-9xl md:text-7xl md:mb-10"> {/* Cambié text-6xl por text-7xl */}
   
  <br />
  <br />
  <br />
    Si puedes pensarlo, <br />
          <TypeAnimation
            sequence={[
              'puedes programarlo',
              800,
              'puedes optimizarlo',
              1080,
              'puedes implementarlo',
              2300,
              'puedes desarrollarlo',
             7000
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
            className="font-bold text-secondary"
          />
        </h1>
      </div>
        </div>
    </div>

</div>

    );
}
export default Introduction