'use client'
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () =>{
    return(

        <div className="Introduction">
      <div className="Introduction-Caja">
      <div className="flex justify-center items-center">
          <Image src="/Homei.png" priority width="400" height="400" alt="Avatar" />
          </div>
          <div className="Caja-I">
          
              <h1 className="Texto-I">Si puedes pensarlo, <br />
              
                  <TypeAnimation
                      sequence={[
                          'puedes programarlo',
                          1000,
                          'puedes optimizarlo',
                          1000,
                          'puedes implementarlo',
                          1000,
                          'puedes desarrollarlo',
                          1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                        />
              </h1>
                       
              
              <p className="Mi-Informacion">
              Como desarrollador front-end y back-end, me especializo en crear soluciones digitales completas, combinando diseño atractivo y funcionalidad robusta. Con mis diplomaturas en ambos campos y certificaciones, busco siempre ofrecer experiencias accesibles y eficientes para los usuarios.
              </p>

              <div className="Proyectos">
                  <a href="/portfolio" className="Botom-P">
                      Ver proyectos&nbsp;
                  </a>
                  &nbsp;
                  <a href= "mailto:EmilianoLandi.dev@gmail.com" className="Contacto-C">
                      
                      Contacta conmigo
                  </a>
             </div>
          </div>
      </div>
  </div>
);
}



export default Introduction