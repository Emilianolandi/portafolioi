import { link } from "fs";
import { url } from "inspector";
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";
import Link from "next/link";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@emilianolandi7669",
       
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/emilianolandi/",
    },
   
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src:"https://github.com/Emilianolandi" ,
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
         src: "mailto:EmilianoLandi.dev@gmail.com",
       
    }
    
];

//aca tenemos el array de nuestra navegacion 
//con un un id unico, su titulo, su icono y la ruta correspondiente 
export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={35} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={35} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={35} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={35} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={35} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Diplomatura en Desarrollador full Stack",
        subtitle: "Universidad Tecnologica Nacional",
        description: "En esta diplomatura, adquirí los conocimientos esenciales para desarrollarme como Frontend Developer, abarcando HTML5, CSS3, JavaScript y React.js. Aprendí a crear interfaces interactivas y responsivas utilizando HTML5, aprovechar las características avanzadas de CSS3 para diseño sin imágenes y a añadir interactividad con JavaScript.", 
        date:"Dic 2022",
    },
    {
        id: 2,
        title: "Desarrollo web con PHP y Wordpress",
        subtitle: "Universidad Tecnologica Nacional ",
        description: "En este curso, aprendí a desarrollar aplicaciones web con PHP y WordPress. Estudié variables, funciones, estructuras de control y la integración de PHP con MySQL para gestionar bases de datos. También me enfoqué en WordPress, desde su instalación y personalización hasta el uso de plugins y temas..",
        date:"Dic 2023 ",
    },
    {
        id: 3,
        title: "Programador Web Avanzado",
        subtitle: "Universidad Tecnologica Nacional",
        description: "Formación avanzada en PHP orientado a objetos, bases de datos complejas, y desarrollo con frameworks como CodeIgniter 3, AngularJS y React.js. Adquirí experiencia en JavaScript, ES6, AJAX, y Node.js para crear aplicaciones web dinámicas y optimizadas, además de trabajar con PHP y JavaScript mediante frameworks modernos..",
        date:"Ago 2019",
    },
    //{
    //    id: 4,
    //    title: "Especialista en Desarrollo Frontend",
    //    subtitle: "CodeForge Solutions",
    //    description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
  //      date:"Ago 2019",
  //  }
//   
//     {
//         id: 4,
//         title: "Prácticas Grado",
//         subtitle: "WebWizards Inc.",
//         description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
//         date:"Mar 2018",
//     },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

