"use client"

import { Avatar } from "@/component/avatar";
import ContainerPage from "@/component/conteiner";
// import CounterServices from "@/component/counter-services";
import TimeLine from "@/component/time-line";
import TransitionPage from "@/component/transition-pages";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="contenedor-trayectoria">
                Trayectoria
                    <span className="font-bold text-secondary">
                         Profesional
                    </span>
                </h1>

                {/* <CounterServices /> */}

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;