import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="bg-[#271EA8]">
        <div className="pt-8">
          <div className="lg:flex">

            <div className="w-full  lg:w-2/6">
              <div className="px-5">
                <div>
                  <div>
                    <p className="text-xl tracking-normal font-bold text-white">PIONEERING THE POWER THAT MATTERS</p>
                  </div>
                  <p className='max-w-sm mt-5 text-md text-white'>
                    Rolls-Royce pioneers cutting-edge technologies that deliver clean, safe and competitive solutions to meet our planet’s vital power needs.
                  </p>
                </div>
              </div>
            </div>

            {/* //!Seccion de columnas */}
            <div className=" mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="pl-8">
                  <a className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">Home </a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Innovation</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Products & Services</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">About</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Investors</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Sustainability</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Media</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Careers</a>
                </div>

                <div>
                  <a className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">Products & Services</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Civil Aerospace</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Defence</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Power Systems</a>
                  <a href="#" className="block mt-3 text-sm text-white hover:text-[#FE8EBE]">Electrical Aviation</a>
                </div>

                <div>
                  <h3 className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">follow us</h3>

                  <div className="flex mt-5 mb-5 -mx-2">
                    <a href="#"
                      aria-label="Facebook">
                      <FaFacebookF className='mx-2 h-5 w-5 text-white hover:text-[#FE8EBE]' />
                    </a>

                    <a href="#"
                      aria-label="Twitter">
                      <FaTwitter className="mx-2 h-5 w-5 text-white hover:text-[#FE8EBE]" />
                    </a>

                    <a href="#"
                      aria-label="Youtube">
                      <FaYoutube className="mx-2 h-5 w-5 text-white" />
                    </a>

                    <a href="#"
                      aria-label="Linkedin">
                      <FaLinkedinIn className="mx-2 h-5 w-5 text-white" />
                    </a>

                    <a href="#"
                      aria-label="Instagram">
                      <FaInstagram className="mx-2 h-5 w-5 text-white" />
                    </a>

                  </div>

                  <h3 className="text-sm text-[#A09AD8] hover:text-[#FE8EBE] uppercase font-bold">Stay in Touch</h3>

                  <a href='#' className='mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]'>
                    <HiOutlineMail className='flex h-7 w-5 mr-3' />
                    Sign up tp get the latest news
                  </a>
                  <a href='#' className='mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]'>
                    <HiOutlineMail className='flex h-7 w-5 mr-3' />
                    Contact us
                  </a>
                  <a href='#' className='mt-4 mb-4 flex text-md text-white hover:text-[#FE8EBE]'>
                    <HiOutlineMail className='flex h-7 w-5 mr-3' />
                    Vulnerability Reporting
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="h-px mt-6  mx-6 bg-gray-200 border-none" />

          <div className='flex items-center'>
            <img
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/safari-pinned-tab-rebrand.svg"
              className="ml-5 my-4 h-16 w-10"
            />
            <p className="text-left mx-6 text-white">© Rolls-Royce plc 2023. All rights reserved.</p>
            <ul className='flex m-2'>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Site map
              </li>
              <li className='ml-4 text-sm text-white cursor-default '>
                |
              </li>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Use of cookies
              </li>
              <li className='ml-4 text-sm text-white cursor-default'>
                |
              </li>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Cookie Settings
              </li>
              <li className='ml-4 text-sm text-white cursor-default '>
                |
              </li>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Legal Information
              </li>
              <li className='ml-4 text-sm text-white cursor-default'>
                |
              </li>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Data Privacy
              </li>
              <li className='ml-4 text-sm text-white cursor-default'>
                |
              </li>
              <li className='ml-4 text-sm text-white hover:text-[#FE8EBE] cursor-pointer'>
                Anti-slavery statement
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
