"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                310: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="Swiper-Caja" // Cambiado a w-full
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="Swiper-Contenedor">
                        <div className="mb-4 text-4xl  text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-2 text-lg text-center">{item.title}</h3> {/* Alineado al centro */}
                            <p className="text-sm text-center">{item.description}</p> {/* Alineado al centro */}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderServices;
