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

        {/* //! Primera sección*/}
        <div>
          <div className="basis-full flex absolute">
            <img
              className="h-full w-full object-cover"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/ultrafan-build-complete-banner-image.jpg"
              alt="People working on laptops"
            />
          </div>
        </div>
        <div>
          <div className="relative h-full">
            <div className="relative overflow-hidden">
              <div className="relative mx-5 my-[50px] sm:py-[100px] lg:py-[130px] xl:py-[225px] md:mx-14 lg:mx-28 ">
                <a href="#"
                  className="text-start text-[#10069F] hover:text-[#006DFF] tracking-wider font-bold text-2xl md:text-5xl lg:text-[50px]">
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
        </div>



      </div>
    </>
  );
};

export default Hero;
