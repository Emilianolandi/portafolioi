'use client'
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () =>{
    return(
      <div className="Introduction">
      <div className="Introduction-Caja">
          <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
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
                      speed={30}
                      repeat={Infinity}
                      className="font-bold text-secondary"
                  />
              </h1>
              
              <p className="Mi-Informacion">
                  Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
              </p>

              <div className="Proyectos">
                  <a href="/projects" className="Botom-P">
                      Ver proyectos
                  </a>
                  &nbsp;
                  <a href="/contact"
                      className="Contacto-C" >
                      Contacta conmigo
                  </a>
              </div>
          </div>
      </div>
  </div>
);
}



export default Introduction