import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Carrusel from "./Carrusel";
import Team from "../Team";
import { IoAirplaneOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        {/* //! Primera sección*/}{" "}
        <div>
          <div className=" flex absolute">
            <img
              className="h-full w-full object-cover"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/ultrafan-build-complete-banner-image.jpg"
              alt="Rolls-royce "
            />
          </div>
        </div>
        <div className="mb-16 sm:mb-0">
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
        </div>
        {/* //! Imagen del avion fija (Falta hacer el efecto )*/}
        <div className="w-full h-full sm:absolute">
          <img
            className="sm:h-[500px] lg:h-[850px] w-full object-cover"
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/2019-homepage/home-module-image.jpg"
            alt="People working on laptops"
          />
        </div>
        {/* //! texto dentro del avion*/}
        <div className="overflow-hidden h-full flex">
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
        </div>
        {/* //! Seccion de noticias (carrusel) */}
        <h1 className="mt-12 text-center text-2xl lg:text-[50px] text-[#1E3643]">
          Latest Updates
        </h1>
        {/* More main page content here... */}
        {/* //! implementacion del componente del carrusel   */}
        <div className="mx-auto my-3 lg:mt-24 ">
          <Carrusel />
        </div>
        {/* //! contenido de los aviones 2 columnas */}


        <div className="grid grid-cols-2 w-full  md:pl-[39px] md:py-5 mb-4">
          {/* //! primera columna   */}
          <div className="col-span-2 sm:col-span-1 px-5 my-5 ">
            <a href="#">
              <div className=" card hover:shadow-2xl hover:bg-[#006DFF] border border-gray-200 md:h-[768px] lg:h-[636px]  xl:h-[750px]">
                <img
                  className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />
                <h2 className="px-3 pt-10 sm:pl-[42px] sm:pr-12 titulo pb-[12px]">
                  Leading the Transition to Net Zero
                </h2>
                <h3 className="px-3 sm:pl-[42px] sm:pr-12 subtitulo mb-[12px]">
                  Our low carbon approach
                </h3>
                <p className="px-3 sm:pl-[42px] sm:pr-12 parrafo pb-[23px] ">
                  We are committed to the decarbonisation of our core markets
                  and will continue to invest that can accelerate this
                  transition, whilist minimising the impacts of our business
                  operations
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-2 sm:col-span-1 px-5 my-5">
            <a href="#">
              <div className="card hover:shadow-2xl hover:bg-[#006DFF] md:mr-7 border border-gray-200  xl:h-[750px]">
                <img
                  className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/rr-ar21-hero-banner.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />

                <h2 className="px-3 titulo pt-10 sm:pl-[42px] sm:pr-12 pb-[12px]">
                  Annual Report 2021
                </h2>
                <p className="px-3 subtitulo sm:pl-[42px] sm:pr-12 leading-[1.5em] tracking-wider text-[#4E5D65] mb-[12px]">
                  Generating positive momentum
                </p>
                <p className="px-3 parrafo sm:pl-[42px] sm:pr-12 pb-[23px]">
                  We improved our financial performance, delivered our near-term
                  commitments, won new business opportunities and took important
                  strategic steps forward during the year. While challenges
                  remain, we can look with increasing confidence to the future
                  and the significant commercial opportunity presented by the
                  transition to net zero.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full py-16">
        <a
          href="#"
          className="hover:text-[#006DFF] flex items-center justify-center text-center text-3xl md:text-[50px] text-[#1E3643]"
        >
          Meet our experts <FaAngleRight className="mt-1 md:mt-3" />
        </a>
        <div className="mt-10 mb-12">
          <Team />
        </div>

        <div className="lg:flex">
          <div className="w-full lg:w-2/5 px-5 sm:px-14 lg:py-28 xl:py-42 2xl:py-64 bg-[#FA4692] ">
            <div className="py-8">
              <h1 className="text-3xl sm:text-[40px] 2xl:text-[100px] text-white md:text-center lg:text-start">
                <span className="xl:inline">Join our journey </span>
              </h1>
              <p className="sm:px-16 lg:px-0 mx-auto mt-3 tracking-wider text-md lg:text-lg xl:text-xl 2xl:text-4xl text-white sm:text-lg md:mt-5 md:max-w-3xl ">
                Whether you´re starting your career, or an experienced
                professional looking to make a difference, we offter a world of
                possibilities to choose from
              </p>
            </div>
            <div className="boton 2xl:mt-24 pb-10">
              <a
                href="#"
                className="z-10 mt-10 flex w-[180px] items-center justify-center border-2 py-3 md:py-4 uppercase rounded-full text-white hover:text-[#006DFF] font-bold"
              >
                Find out more <FaAngleRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/5 ">
            <img className="object-cover md:h-[300px] lg:h-full w-full object-center" alt="hero" src="https://careers.rolls-royce.com/~/media/Images/R/Rolls-Royce-Careers-V2/content-images/2-2-half-width/beyond-tomorrow.jpg?h=509&iar=0&w=702" />
          </div>
        </div>
      </div>


      <div className="w-full bg-white mb-20">
        {/* //!Seccion de productos y services */}
        <div className="px-8 ">
          <h1 className="text-[40px] text-[#1E3643] text-center my-7">Products & Services</h1>
          <p className="text-center  pb-10 text-xl leading-[1.5em]">
            We pionner cutting-edge technologies that deliver the cleanest, safest
            and most competitive solutions to our planet´s vital power needs
          </p>
        </div>


        <div className=" mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">

          {/* //!Primera columna del grid*/}
          <div className="col-span-1 relative w-full h-64 bg-black">
            <div className="absolute mt-14">
              <img
                className="h-[200px] w-full object-cover object-right"
                src="https://i.imgur.com/WgAO97Q.png"
                alt="Turbina de avion"
              />
            </div>
            <div className="flex my-5 ml-5">
              <IoAirplaneOutline className="relative text-gray-400 h-12 w-12 mr-3" />
              <h1 className="relative text-[#5b5b5b] text-[1.857em]">
                Civil Aerospace
              </h1>
            </div>
          </div>

          {/* //! Segunda columna del grid*/}
          <div className="col-span-1 relative w-full h-64">
            <div className="absolute">
              <img
                className="h-[259px] w-full object-cover object-right"
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/large-images/defence-new-1.jpg?h=350&amp;iar=0&amp;w=590"
                alt="Avion"
              />
            </div>
            <div className="flex my-5 ml-5">
              <img
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/combined-shape-new.png?h=43&iar=0&w=40"
                className="relative h-12 w-12 mr-3"
              />
              <h1 className="relative text-[#5b5b5b] text-[1.857em]">
                Defence
              </h1>
            </div>
          </div>

          {/* //!Tercera columna del grid*/}
          <div className="relative w-full h-64 bg-white">
            <div className="absolute">
              <img
                className="h-[257px] "
                src="https://www.rolls-royce.com/~/media/images/r/rolls-royce/content-images/flexible-signposts/large-images/power-systems-new-1.jpg?h=350&amp;iar=0&amp;w=590"
                alt="Tren"
              />
            </div>
            <div className="flex my-5 ml-5">
              <img
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/icon-power-new.png?h=34&iar=0&w=45"
                className="relative text-[#5b5b5b] h-12 w-12 mr-3"
              />
              <h1 className="relative text-[#5b5b5b] text-[1.857em]">
                Power Systems
              </h1>
            </div>
          </div>

          {/* //!Columna sola*/}
          <div className="col-span-1">
          </div>
          <div className="col-span-1 lg:col-span-1 flex justify-center items-center">
            <div className="relative w-full h-64 bg-white">
              <div className="absolute">
                <img
                  className="h-[259px] w-full object-cover object-right"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/large-images/ps-electrical.jpg?h=350&amp;iar=0&amp;w=590"
                  alt="Avion"
                />
              </div>
              <div className="flex my-5 ml-5">
                <img
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/Electrical_icon-sm-02.png?h=45&iar=0&w=45"
                  className="relative text-[#5b5b5b] h-12 w-12 mr-3"
                />
                <h1 className="relative text-white text-[1.857em]"> Electrical</h1>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </>
  );
};

export default Hero;
