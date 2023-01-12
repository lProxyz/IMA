import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#271EA8] w-full xl:w-full">
        <div className="pt-8 divide-y-2 divide-gray-200">
          <div className="lg:flex md:mb-10 ">
            
            <div className="w-full  lg:w-2/6">
              <div>
                <div className="px-5 pb-5 flex justify-center">
                  <p className="max-w-lg mt-5 text-center lg:text-start text-md text-white">
                    Rolls-Royce pioneers cutting-edge technologies that deliver
                    clean, safe and competitive solutions to meet our planet’s
                    vital power needs.
                  </p>
                </div>
              </div>
            </div>

            {/* //!Seccion de columnas */}
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="pl-8">
                  <a className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">
                    Home{" "}
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Innovation
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Products & Services
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Investors
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Sustainability
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Media
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Careers
                  </a>
                </div>

                <div className="mt-5 sm:mt-0 pl-8">
                  <a className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">
                    Products & Services
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Civil Aerospace
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Defence
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Power Systems
                  </a>
                  <a
                    href="#"
                    className="block mt-3 text-sm text-white hover:text-[#FE8EBE]"
                  >
                    Electrical Aviation
                  </a>
                </div>

                <div className="mt-5 sm:mt-0 pl-8 w-full flex-col items-center justify-center mx-auto">
                  <h3 className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">
                    follow us
                  </h3>

                  <div className="flex mt-5 mb-5 -mx-2">
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF className="mx-2 h-5 w-5 text-white hover:text-[#FE8EBE]" />
                    </a>

                    <a href="#" aria-label="Twitter">
                      <FaTwitter className="mx-2 h-5 w-5 text-white hover:text-[#FE8EBE]" />
                    </a>

                    <a href="#" aria-label="Youtube">
                      <FaYoutube className="mx-2 h-5 w-5 text-white" />
                    </a>

                    <a href="#" aria-label="Linkedin">
                      <FaLinkedinIn className="mx-2 h-5 w-5 text-white" />
                    </a>

                    <a href="#" aria-label="Instagram">
                      <FaInstagram className="mx-2 h-5 w-5 text-white" />
                    </a>
                  </div>

                  <h3 className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">
                    Stay in Touch
                  </h3>

                  <a
                    href="#"
                    className="mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]"
                  >
                    <HiOutlineMail className="flex h-7 w-5 mr-3" />
                    Sign up to get the latest news
                  </a>
                  <a
                    href="#"
                    className="mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]"
                  >
                    <HiOutlineMail className="flex h-7 w-5 mr-3" />
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]"
                  >
                    <HiOutlineMail className="flex h-7 w-5 mr-3" />
                    Vulnerability Reporting
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* //!Aqui empieza el logo y la información de hasta abajo*/}
          <div className="grid grid-cols-3 ">
            <div className="flex items-center mx-auto col-span-3 md:col-span-3 lg:col-span-1">
              <img
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/safari-pinned-tab-rebrand.svg"
                className="ml-5 my-4 h-16 w-10"
              />
              <p className="text-center md:text-left mx-6 text-white">
                © Rolls-Royce plc 2023. All rights reserved.
              </p>
            </div>

            <div className="hidden md:flex md:col-span-3 lg:col-span-2 md:justify-center lg:justify-center sm:items-center">
              <ul className="flex md:justify-center lg:justify-end m-2 w-full">
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Site map
                </li>
                <li className="ml-4 text-sm text-white cursor-default ">|</li>
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Use of cookies
                </li>
                <li className="ml-4 text-sm text-white cursor-default">|</li>
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Cookie Settings
                </li>
                <li className="ml-4 text-sm text-white cursor-default ">|</li>
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Legal Information
                </li>
                <li className="ml-4 text-sm text-white cursor-default">|</li>
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Data Privacy
                </li>
                <li className="ml-4 text-sm text-white cursor-default">|</li>
                <li className="ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer">
                  Anti-slavery statement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
