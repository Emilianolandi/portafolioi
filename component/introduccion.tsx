'use client'
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () =>{
    return(
<div className="flex justify-center items-center min-h-screen">
  <div className="z-20 w-full bg-darkBg/60">
    <div className="z-20 flex flex-col md:flex-row items-center h-full p-6 py-20 md:py-1">
     
      <div className="flex-none mb-6 md:mb-0 md:w-1/2 md:order-2"> {/* Estilo para la imagen */}
 
        <Image src="/home-4.png" priority width={500} height={500} alt="profile" />
      </div>
     
     
      <div className="flex-1 max-w-md text-center md:text-left md:order-1"> {/* Estilo para el texto */}
      
  <h2 className="Texto-inicio"> {/* Cambié text-6xl por text-7xl */}
  <br />
  <br />
  <br />
 
  
    Si puedes pensarlo, 
    <br />
          <TypeAnimation
            sequence={[
              'puedes programarlo',
              2000,
              'puedes optimizarlo',
              2000,
              'puedes implementarlo',
              2000,
              'puedes desarrollarlo',
             2000
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
            className="font-bold text-secondary"
          />
       
        <p className='Impresion'>
          <br />
          <br />
          como desarrollador frontend y creador de contenido me dedico a convina
          diseño
          <br />
           y funcionalidad para crear experiencias digitales
          impactante y accesibles
        </p>
        {/* flex item-center justify-center gap-3 md:justify-start md:gap-10 */}
        <div className='Contenedor-boton'>

          <Link href="/>projects" className='Boton' >
          {/* px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 */}
          Ver proyectos
          </Link>
       
        </div>
        </h2>
      </div>
        </div>
    </div>

</div>

    );
}
export default Introduction