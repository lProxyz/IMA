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
      <div className="w-full h-64">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div>
                  {noticia.map((person) => (
                    <li key={person.name}>
                        <div>
                            <img 
                            className="bg-white"
                            src={person.image} alt="cualquier texto" />
                        </div>
                    </li>
                  ))}

                <img src={noticia.image} />
                <h1>{noticia.name}</h1>
                <p>{noticia.category}</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
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
