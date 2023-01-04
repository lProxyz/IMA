import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { InboxIcon } from "@heroicons/react/24/outline";
import Carrusel from "./Carrusel";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
];
const Hero = () => {
  return (
    <>
      <div className="bg-white">
        <div className="absolute mb-64">
          <img
            className="h-full w-full object-cover"
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/ultrafan-build-complete-banner-image.jpg"
            alt="People working on laptops"
          />
        </div>

        {/* //! Texto dentro de imagen*/}
        <div>
          <div className="relative h-full">
            <div className="relative sm:overflow-hidden sm:rounded-2xl">
              <div className="relative py-[225px] px-28">
                <a
                  href="#"
                  className="text-start text-[#10069F] hover:text-[#006DFF] tracking-wider font-bold text-[50px]"
                >
                  <span>UltraFan build</span>
                  <span className="flex hover:text-[#006DFF]">
                    complete
                    <FaAngleRight className="mt-5" />
                  </span>
                </a>
                <div className="text-[#10069F] text-xl mt-3">
                  <span className="block">
                    We have completed building our UltraFan technology
                  </span>
                  <span>demonstrator and are now preparing it for testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //! Imagen del avion fija*/}
        <div className="absolute">
          <img
            className="h-[850px] w-full object-cover"
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/2019-homepage/home-module-image.jpg"
            alt="People working on laptops"
          />
        </div>
        {/* //! texto dentro del avion*/}
        <div className="bg-blue-300 mb-64 h-full">
          <div className="overflow-hidden">
            <div className="ml-[115px] relative bg-[#1E3643E6] bg-opacity-10 w-2/4 px-[85px] py-[110px] mt-[210px]">
              <div className="">
                <span className="text-5xl text-white">Pioneers of Power</span>
                <div className="text-white text-xl mt-3">
                  <span className="block mt-10">
                    We are entering the era of xero-emissions aviation by
                    building the fatest all-electric plane the world has ever
                    seen
                  </span>
                  <button
                    type="button"
                    className="flex items-center rounded-full border-2 border-white bg-[#1E3643E6] px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase mt-5"
                  >
                    Find out more
                    <FaAngleRight
                      className="ml-3 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //! Seccion de noticias (carrusel) */}
        <h1 className="text-center text-6xl text-[#1E3643]">Latest Updates</h1>

        <div className="w-full grid grid-cols-4 gap-x-4 ml-2 mb-20">
          <a className="bg-white border" href="#">
            <img
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-ultrafan-content-image.jpg?h=300&iar=0&w=480"
              alt=""
            />
            <p className="text-[#10069F] text-2xl text-center mb-2 border-b">
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

          <a className="bg-white border" href="#">
            <img
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-gulfstream-content-image.jpg?h=300&iar=0&w=480"
              alt=""
            />
            <p className="text-[#10069F] text-2xl text-center mb-2 border-b">
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
          <a className="bg-white border" href="#">
            <img
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/rr-gulfstream-content-image.jpg?h=300&iar=0&w=480"
              alt=""
            />
            <p className="text-[#10069F] text-2xl text-center mb-2 border-b">
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
                <h1></h1>
              </div>
            </div>
          </a>
          <a className="bg-white border" href="#">
            <img
              className="w-full h-[203px]"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/story-a-5-minute-chat-with-marcin-dutka-01.jpg?h=200&iar=0&w=200"
              alt=""
            />
            <p className="text-[#10069F] text-2xl text-center mb-2 border-b">
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

        {/* More main page content here... */}
      </div>
{/* //! implementacion del componente del carrusel   */}
      <div className="w-full mb-20 bg-blue-300">
        <Carrusel />
      </div>

      <div className="grid grid-cols-2 w-full h-2/4 bg-red-300">
        <div>
          <img
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
            alt="productos"
          />
          <h2>Leading the Transition to Net Zero</h2>
          <h3>Our low carbon approach</h3>
          <p>
            we are committed to the decarbonisation of our core markets and will
            continue to invest that can accelerate this transition, whilist
            minimising the impacts of our business operations
          </p>
        </div>
        <div>
          <h1>Segunda columna</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
