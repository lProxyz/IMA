import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Carrusel from "./Carrusel";
import Team from "../Team";
import { IoAirplaneOutline } from "react-icons/io5";
import Ejemplo from "./ejemplo";

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        {/* //! Primera sección*/}{" "}
        {/* <div>
          <div className="basis-full flex absolute">
            <img
              className="h-full w-full object-cover"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/ultrafan-build-complete-banner-image.jpg"
              alt="Rolls-royce "
            />
          </div>
        </div> */}
        {/* <div className="mb-16 sm:mb-0">
          <div className="relative h-full">
            <div className="relative overflow-hidden">
              <div className="relative mx-5 my-[50px] sm:py-[100px] lg:py-[130px] xl:py-[225px] md:mx-14 lg:mx-28 ">
                <a
                  href="#"
                  className="text-start text-[#10069F] hover:text-[#006DFF] tracking-wider font-bold text-2xl md:text-5xl lg:text-[50px]"
                >
                  <span>UltraFan build</span>
                  <span className="flex hover:text-[#006DFF]">
                    complete
                    <FaAngleRight className="mt-2" />
                  </span>
                </a>
                <div className="hidden sm:block text-[#10069F] md:text-xl lg:text-2xl ">
                  <span className="block">
                    We have completed building our UltraFan technology
                  </span>
                  <span>demonstrator and are now preparing it for testing</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* //! Imagen del avion fija (Falta hacer el efecto )*/}
        {/* <div className="w-full h-full sm:absolute">
          <img
            className="sm:h-[500px] lg:h-[850px] w-full object-cover"
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/2019-homepage/home-module-image.jpg"
            alt="People working on laptops"
          />
        </div> */}
        {/* //! texto dentro del avion*/}
        {/* <div className="overflow-hidden h-full flex">
          <div className="relative px-3 py-12 sm:ml-[75px] sm:px-12 sm:mt-24 sm:basis-3/5 xl:basis-1/2 lg:ml-[90px]  bg-[#1E3643E6] bg-opacity-10 lg:px-[40px] lg:py-[110px] lg:my-[200px]">
            <span className="text-2xl font-semibold md:text-4xl xl:text-5xl text-white">
              Pioneers of Power
            </span>
            <span className="block  text-white text-lg md:text-lg xl:text-2xl mt-5">
              We are entering the era of zero-emissions aviation by building the
              fatest all-electric plane the world has ever seen
            </span>
            <div className="avion flex">
              <button
                type="button"
                href="#"
                className="z-10 flex justify-center items-center rounded-full border-2 border-white px-6 py-3 text-base font-bold shadow-sm uppercase"
              >
                Find out more
                <FaAngleRight
                  className="ml-3 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div> */}
        {/* //! Seccion de noticias (carrusel) */}
        <h1 className="mt-12 text-center text-2xl lg:text-[50px] text-[#1E3643]">
          Latest Updates
        </h1>
        {/* More main page content here... */}
        {/* //! implementacion del componente del carrusel   */}
        <div className="mx-auto my-3 lg:my-24 ">
          <Carrusel />
        </div>
      </div>
    </>
  );
};

export default Hero;
