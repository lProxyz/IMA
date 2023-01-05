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
          className="p"
        >
          <SwiperSlide
            style={{ alignItems: "start"}}
          >
            <div className="border-2 border-gray-500 bg-white hover:bg-[#006DFF] hover:text-white text-[#10069F]">
              <a className="bg-white" href="#">
                <div className="h-[60px]">
                  <img
                    className="object-top"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-ultrafan-content-image.jpg?h=300&iar=0&w=480"
                    alt=""
                  />
                </div>
                <div>
                  <p className="ml-10 mr-32  text-[24px] text-start border-b mt-3 border-gray-300 tracking-wide ">
                    Rolls-Royce UltraFan technology demonstrator build...
                  </p>
                </div>
                <div className="grid grid-cols-2 ml-5">
                  <div className="flex">
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
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <a className="bg-white" href="#">
                <div className="h-20 ">
                  <img
                    className="object-top"
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-gulfstream-content-image.jpg?h=300&iar=0&w=480"
                    alt=""
                  />
                </div>

                <p className="text-[#10069F] text-[22px] text-center mb-2 border-b border-gray-300">
                  Rolls-Royce UltraFan technology demonstrater build...
                </p>
                <div className="grid grid-cols-2 ml-5">
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pl-2">
              <a className="bg-white" href="#">
                <div className="h-20 ">
                  <img
                    className=""
                    src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-ultrafan-content-image.jpg?h=300&iar=0&w=480"
                    alt=""
                  />
                </div>

                <p className="text-[#10069F] text-[22px] text-center mb-2 border-b border-gray-300">
                  Rolls-Royce UltraFan technology demonstrater build...
                </p>
                <div className="grid grid-cols-2 ml-5">
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
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
