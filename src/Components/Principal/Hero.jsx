import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { InboxIcon } from "@heroicons/react/24/outline";
import Carrusel from "./Carrusel";
import Team from "../Team";

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
        <h1 className="text-center text-[50px] text-[#1E3643] mb-12">
          Latest Updates
        </h1>
        {/* More main page content here... */}

        {/* //! implementacion del componente del carrusel   */}

        <div className="ml-2 mb-20 ">
          <Carrusel />
        </div>


        <div className="grid grid-cols-2 w-full gap-x-6 pl-[39px] py-5 mb-4">
          {/* //! primera columna   */}
          <div>
            <a href="#">
              <div className="card hover:shadow-2xl hover:bg-[#006DFF] border border-gray-200 h-[750px]">
                <img
                  className="h-[404px] w-[685px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />
                <h2 className="pt-10 pl-[42px] pr-12 titulo pb-[12px]">
                  Leading the Transition to Net Zero
                </h2>
                <h3 className="pl-[42px] pr-12 subtitulo mb-[12px]">
                  Our low carbon approach
                </h3>
                <p className="pl-[42px] pr-12 parrafo pb-[23px] ">
                  we are committed to the decarbonisation of our core markets
                  and will continue to invest that can accelerate this
                  transition, whilist minimising the impacts of our business
                  operations
                </p>
              </div>
            </a>
          </div>

          <div>
            <a href="#">
              <div className="card hover:shadow-2xl hover:bg-[#006DFF] mr-7 border border-gray-200 h-[750px]">
                <img
                  className="w-[685px] h-[404px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/rr-ar21-hero-banner.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />

                <h2 className="titulo pt-10 pl-[42px] pr-12 pb-[12px]">Annual Report 2021</h2>
                <p className="subtitulo pl-[42px] pr-12 leading-[1.5em] tracking-wider text-[#4E5D65] mb-[12px]">
                  Generating positive momentum
                </p>
                <p className="parrafo pl-[42px] pr-12 pb-[23px]">
                  We improved our financial performance, delivered our
                  near-term commitments, won new business opportunities and
                  took important strategic steps forward during the year.
                  While challenges remain, we can look with increasing
                  confidence to the future and the significant commercial
                  opportunity presented by the transition to net zero.
                </p>


              </div>
            </a>
          </div>

        </div>

        {/* //!Como si fuera el body */}
        {/* <div>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=calle%207%20360&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>

                <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p class="mt-1">
                      Photo booth tattooed prism, portland taiyaki hoodie neutra
                      typewriter
                    </p>
                  </div>
                  <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <a class="text-indigo-500 leading-relaxed">
                      example@email.com
                    </a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <p class="leading-relaxed">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div class="relative mb-4">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <p class="text-xs text-gray-500 mt-3">
                  Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan.
                </p>
              </div>
            </div>
          </section>
        </div> */}
      </div>

      <div className="bg-gray-100 w-full">
        <a href="#" className="hover:text-[#006DFF] flex  items-center justify-center text-center text-[45px] text-[#1E3643]">
          Meet our experts <FaAngleRight className="mt-4" />
        </a>
        <div className="mt-10 mb-12">
          <Team />
        </div>

        {/* <section class="bg-[#FA4692]">
          <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br class="hidden lg:inline-block" />readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
            </div>
            <div class="ml-24 w-full">
              <img class="object-cover object-center rounded" alt="hero" src="https://careers.rolls-royce.com/~/media/Images/R/Rolls-Royce-Careers-V2/content-images/2-2-half-width/beyond-tomorrow.jpg?h=509&iar=0&w=702" />
            </div>
          </div>
        </section> */}
        <main className="lg:relative">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Join our journey </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Whether you´re starting your career, or an experienced professional looking to make a difference, we offter a world of possibilities to choose from
              </p>
              <div className="mt-3  w-1/2">
                <a
                  href="#"
                  className="flex w-full items-center justify-center border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg uppercase rounded-full">
                  Find out more <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0  lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://careers.rolls-royce.com/~/media/Images/R/Rolls-Royce-Careers-V2/content-images/2-2-half-width/beyond-tomorrow.jpg?h=509&iar=0&w=702"
              alt=""
            />
          </div>
        </main>
      </div>


    </>
  );
};

export default Hero;
