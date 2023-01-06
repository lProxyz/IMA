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
        <h1 className="text-center text-[50px] text-[#1E3643] mb-12">
          Latest Updates
        </h1>
        {/* More main page content here... */}

        {/* //! implementacion del componente del carrusel   */}

        <div className="ml-2 mb-20 ">
          <Carrusel />
        </div>

        <div className="grid grid-cols-2 w-full gap-x-6 pl-[39px]  py-5 ">
          <div className="hover:text-white hover:bg-[#006DFF]">
            <a href="#" className="z-10">
              <div className="border border-gray-200 h-[750px]">
                <img
                  className="h-[404px] w-[685px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />
                <div className="pt-10 pl-[42px] pr-12 text-start">
                  <h2 className="pb-[12px] text-[#10069F]">
                    Leading the Transition to Net Zero
                  </h2>
                  <h3 className="text-[1.429em] leading-[1.5em] mb-[12px]  tracking-wider">
                    Our low carbon approach
                  </h3>
                  <p className="pb-[23px] text-[18px] text-[#4E5D65] ">
                    we are committed to the decarbonisation of our core markets
                    and will continue to invest that can accelerate this
                    transition, whilist minimising the impacts of our business
                    operations
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="texto">
            <a href="#" className="z-10">
              <div className="pr-7 border border-gray-200 h-[750px]">
                <img
                  className="w-[685px] h-[404px]"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/rr-ar21-hero-banner.jpg?h=404&iar=0&w=685"
                  alt="productos"
                />
                <div>
                  <div className="pt-10 pl-[42px] pr-12 text-start">
                    <h2 className="pb-[12px]">Annual Report 2021</h2>
                    <p className="leading-[1.5em] tracking-wider text-[#4E5D65] mb-[12px]">
                      Generating positive momentum
                    </p>
                    <p className="pb-[23px] text-[18px] text-[#4E5D65]">
                      We improved our financial performance, delivered our
                      near-term commitments, won new business opportunities and
                      took important strategic steps forward during the year.
                      While challenges remain, we can look with increasing
                      confidence to the future and the significant commercial
                      opportunity presented by the transition to net zero.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* //!Como si fuera el body */}
        <div>
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
        </div>
      </div>
    </>
  );
};

export default Hero;
