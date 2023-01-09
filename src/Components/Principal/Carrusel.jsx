import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const noticia = [
  {
    name: "Rolls Royce UltraFan technology demonstrator build complete and getting ready to test",
    image:
      "https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-ultrafan-content-image.jpg?h=300&iar=0&w=480",
    category: "Press Releases",
    fecha: "19-12-2022",
  },
  {
    name: "Rolls-Royce and Gulfstream give wings to sustainable business aviation",
    image:
      "https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-gulfstream-content-image.jpg?h=300&iar=0&w=480",
    category: "Press Releases",
    fecha: "16-12-2022",
  },
  {
    name: "A 5-minute chat with Marcin Dutka",
    image:
      "https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/story-a-5-minute-chat-with-marcin-dutka-01.jpg?h=200&iar=0&w=200",
    category: "News & Insights",
    fecha: "13-12-2022",
  },
  {
    name: "Rolls-Royce, Pratt & Whitney, Virginia Tech announce new research partnership",
    image:
      "https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/marine/discover/landing-images/pr-default-landing-image-v3.jpg?h=470&iar=0&w=500",
    category: "Press Releases",
    fecha: "09-12-2022",
  },
];
const Carrusel = (props) => {
  return (
    <>
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
                    <div className="h-[25rem] border border-gray-400/30">
                      <img
                        className=" flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className=" text-start p-3">{noti.name}</p>
                      <div className="divide-y-4 divide-slate-900 w-full"></div>
                      <div className="flex basis-1/2 justify-between mx-5 items-end">
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
      
      <div className="w-full hidden md:block">
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
              className="w-full h-[26rem]"
              key={noti.name}
            >
              <div className="link basis-1/4">
                <a className="z-10">
                  {/* //! Intentando colocar el estilo del boton */}
                  <div className="hover:shadow-md duration-500 hover:shadow-black/40">
                    <div className="h-[25rem] border border-gray-400/30">
                      <img
                        className=" flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className=" text-start p-3">{noti.name}</p>
                      <div className="divide-y-4 divide-slate-900 w-full"></div>
                      <div className="flex basis-1/2 justify-between mx-5 items-end">
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

      <div className="w-full hidden sm:block md:hidden">
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
                    <div className="h-[25rem] border border-gray-400/30">
                      <img
                        className=" flex h-48 object-cover w-full duration-500 hover:scale-105"
                        src={noti.image}
                      />
                      <p className=" text-start p-3">{noti.name}</p>
                      <div className="divide-y-4 divide-slate-900 w-full"></div>
                      <div className="flex basis-1/2 justify-between mx-5 items-end">
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
