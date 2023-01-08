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
    category: "Press Releases",
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
      <div className="w-full h-[303px]">
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
          <SwiperSlide style={{ alignItems: "start", border: "5px" }}>
            <div className="link">
              <a className="z-10 " href="#">
                <div className="h-32 ">
                  <img
                    className="object-center"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-ultrafan-content-image.jpg?h=300&iar=0&w=480"
                    alt=""
                  />
                </div>

                {/* //! Intentando coloar el estilo del boton */}

                <div>
                  <div>
                    <p className=" text-start p-3 border-b border-gray-300">
                      Rolls-Royce Ultrafan technology demonstrator build...
                    </p>
                    <div className="grid grid-cols-2 ml-2 justify-between">
                      <div>
                        <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                          press releases
                        </p>
                      </div>
                      <div>
                        <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                          16 December 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </SwiperSlide>
          <SwiperSlide style={{ alignItems: "start" }}>
            <div className="link">
              <a className="z-10 " href="#">
                <div className="h-32 w-full">
                  <img
                    className="object-center"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-gulfstream-content-image.jpg?h=300&iar=0&w=480"
                    alt=""
                  />
                </div>

                {/* //! Intentando coloar el estilo del boton */}

                <div>
                  <div>
                    <p className=" text-start p-3 border-b border-gray-300">
                      Rolls-Royce UltraFan technology demonstrater build...
                    </p>
                    <div className="grid grid-cols-2 ml-2 justify-between">
                      <div>
                        <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                          press releases
                        </p>
                      </div>
                      <div>
                        <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                          19 December 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </SwiperSlide>

          <SwiperSlide style={{ alignItems: "start" }}>
            <div className="link">
              <a className="z-10 " href="#">
                <div className="h-32 ">
                  <img
                    className="object-center"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/story-a-5-minute-chat-with-marcin-dutka-01.jpg?h=200&iar=0&w=200"
                    alt=""
                  />
                </div>

                {/* //! Intentando coloar el estilo del boton */}

                <div>
                  <div>
                    <p className=" text-start p-3 pb-12 border-b border-gray-300">
                      A 5-minute chat with Marcin Dutka
                    </p>
                    <div className="grid grid-cols-2 ml-2 justify-between">
                      <div>
                        <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                          our stories
                        </p>
                      </div>
                      <div>
                        <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                          13 December 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </SwiperSlide>
          <SwiperSlide style={{ alignItems: "start" }}>
            <div className="link">
              <a className="z-10 " href="#">
                <div className="h-32 ">
                  <img
                    className="object-top transform hover:scale-100"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/marine/discover/landing-images/pr-default-landing-image-v3.jpg?h=470&iar=0&w=500"
                    alt=""
                  />
                </div>

                {/* //! Intentando colocar el estilo del boton */}

                <div>
                  <div>
                    <p className=" text-start p-3 pb-12 border-b border-gray-300">
                      Rools-Royce, Pratt & Whitney, Virginia Tech...
                    </p>
                    <div className="grid grid-cols-2 ml-2 justify-between">
                      <div>
                        <p className="uppercase text-[#FA4692] font-bold text-[12px] py-3">
                          press releases
                        </p>
                      </div>
                      <div>
                        <p className="uppercase text-[#CECED1] font-bold text-[12px] py-3">
                          09 December 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
