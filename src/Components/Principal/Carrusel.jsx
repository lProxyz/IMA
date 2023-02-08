import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const noticia = [
  {
    name: "Proyectos de cogeneración a base de motor de combustión interna, turbinas de gas y vapor.",
    image: "src/assets/img/usar5.jpg",
    category: "Press Releases",
    fecha: "19-12-2022",
  },
  {
    name: "Modernización de instalaciones e incremento de capacidad productiva.",
    image: "src/assets/img/usar2.jpg",
    category: "Press Releases",
    fecha: "16-12-2022",
  },
  {
    name: "Brindamos mantenimiento a motores de gas natural o Diésel.",
    image: "src/assets/img/usar8.jpg",
    category: "News & Insights",
    fecha: "13-12-2022",
  },
  {
    name: "Ofrecemos Tratamiento Químico del Agua de Alimentación o Caldera.",
    image:
      "https://imapowerplants.com/wp-content/uploads/2021/09/IMA_tratamiento_calderas-1-300x122.jpg",
    category: "Press Releases",
    fecha: "09-12-2022",
  },
];
const Carrusel = (props) => {
  return (
    <>
      {/* //! Carrusel en movil con 1 tarjeta*/}

      <div className="w-full mx-auto block sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {noticia.map((noti) => (
            <SwiperSlide
              style={{ alignItems: "start", border: "5px" }}
              className="w-full h-[26rem]"
              key={noti.name}
            >
              <div className="link basis-1/4">
                <a className="z-10">
                  {/* //! Intentando colocar el estilo del boton */}
                  <div className="hover:shadow-md duration-500 hover:shadow-black/40">
                    <div className="grid grid-cols-3 h-[25rem] border border-gray-400/30">
                      <img
                        className="col-span-3 flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className="col-span-3 text-start p-3">{noti.name}</p>

                      <div className="col-span-3 flex basis-1/2 justify-between mx-5 items-end">
                        <div className="flex content-end">
                          <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                            {noti.category}
                          </p>
                        </div>
                        <div>
                          <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                            {noti.fecha}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* //! Carrusel en Tablet con 2 tarjetas */}
      <div className="w-full hidden sm:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {noticia.map((noti) => (
            <SwiperSlide
              style={{ alignItems: "start", border: "5px" }}
              className="w-full h-[26rem]"
              key={noti.name}
            >
              <div className="link basis-1/4">
                <a className="z-10">
                  {/* //! Intentando colocar el estilo del boton */}
                  <div className="hover:shadow-md duration-500 hover:shadow-black/40">
                    <div className="grid grid-cols-3 h-[25rem] border border-gray-400/30">
                      <img
                        className="col-span-3 flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className="col-span-3 text-start p-3">{noti.name}</p>

                      <div className="col-span-3 flex basis-1/2 justify-between mx-5 items-end">
                        <div className="flex content-end">
                          <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                            {noti.category}
                          </p>
                        </div>
                        <div>
                          <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                            {noti.fecha}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* //! Carrusel en laptop y monitores grandes con 4 tarjetas*/}
      <div className="w-full hidden lg:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {noticia.map((noti) => (
            <SwiperSlide
              style={{ alignItems: "start", border: "5px" }}
              className="w-full h-[30rem]"
              key={noti.name}
            >
              <div className="link basis-1/4">
                <a className="z-10">
                  {/* //! Intentando colocar el estilo del boton */}
                  <div className="hover:shadow-md duration-500 hover:shadow-black/40">
                    <div className="grid grid-cols-3 h-[25rem] border border-gray-400/30">
                      <img
                        className="col-span-3 flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className="col-span-3 text-start p-3">{noti.name}</p>

                      <div className="col-span-3 flex basis-1/2 justify-between mx-5 items-end">
                        <div className="flex content-end">
                          <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                            {noti.category}
                          </p>
                        </div>
                        <div>
                          <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                            {noti.fecha}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
