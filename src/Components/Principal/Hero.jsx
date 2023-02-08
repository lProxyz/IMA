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
              className="h-full w-full object-cover brightness-50"
              src="src\assets\img\usar1.jpg"
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
                  className="text-start text-white hover:text-[#006DFF] tracking-wider font-extrabold text-4xl md:text-5xl lg:text-[50px]"
                >
                  <span>Especialistas en Ingeniería de </span>
                  <span className="flex hover:text-[#006DFF]">
                    Proyectos de Energía
                    <FaAngleRight className="mt-2" />
                  </span>
                </a>
                <div className="hidden sm:block text-white md:text-xl lg:text-4xl">
                  {/* <span className="block">Áreas de Negocio</span> */}
                  <span>
                    Ingeniería, consultoría, construcción y mantenimiento en
                    estas divisiones de proyectos.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //! Imagen del avion fija (Falta hacer el efecto )*/}
        <div className="w-full h-full sm:absolute">
          <img
            className="sm:h-[500px] lg:h-[850px] w-full object-cover"
            src="src/assets/img/usar4.jpg"
            alt="People working on laptops"
          />
        </div>
        {/* //! texto dentro del avion*/}
        <div className="overflow-hidden h-full flex">
          <div className="relative px-3 py-12 sm:ml-[75px] sm:px-12 sm:mt-24 sm:basis-3/5 xl:basis-1/2 lg:ml-[90px] bg-[#1E3643E6] bg-opacity-10 lg:px-[40px] lg:py-[110px] lg:my-[200px]">
            <span className="text-2xl font-semibold md:text-4xl xl:text-5xl text-white">
              Trabajo en equipo
            </span>
            <span className="block  text-white text-lg md:text-lg xl:text-2xl mt-5">
              Nuestro Servicio Garantiza una Comunicación Eficiente con los
              Lideres de Proyectos, dando Seguimiento de Inicio a Fin.
            </span>
            <div className="avion mt-10">
              <button
                type="button"
                href="#"
                className="flex text-center items-center relative overflow-hidden h-12 bg-[400%] text-white px-8 py-0 rounded-full border-white border-[1px] hover:before:scale-x-100 hover:text-[#006DFF] before:content-[''] before:absolute before:origin-[0_50%] before:w-full before:h-[inherit] before:transition-all before:duration-[0.475s] before:rounded-[inherit] before:scale-x-0 before:left-0 before:top-0 before:bg-white"
              >
                <span className="relative z-[1]">Conocenos</span>
                <FaAngleRight
                  className="ml-3 -mr-1 h-5 w-5 hover:text-[#006DFF] relative z-[1]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
        {/* //! Seccion de noticias (carrusel) */}
        <h1 className="mt-12 text-center text-2xl lg:text-[50px] text-[#1E3643]">
          Ultimas Actualizaciones
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
                  className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px] object-cover"
                  src="src/assets/img/usar7.jpg"
                  alt="productos"
                />
                <h2 className="px-3 pt-10 sm:pl-[42px] sm:pr-12 titulo pb-[12px]">
                  Seguridad
                </h2>
                <p className="px-3 sm:pl-[42px] sm:pr-12 parrafo pb-[23px] ">
                  Trabajamos con los Mejores Proveedores de Tecnología en la
                  Industria para Garantizar Éxito en cada Proyecto en el que
                  Colaboramos. Así mismo desarrollamos nuestras Actividades
                  Comprometidos con la Seguridad de nuestros Trabajadores y
                  Clientes.
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-2 sm:col-span-1 px-5 my-5">
            <a href="#">
              <div className="card hover:shadow-2xl hover:bg-[#006DFF] md:mr-7 border border-gray-200  xl:h-[750px]">
                <img
                  className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px] object-cover"
                  src="src/assets/img/usar3.jpg"
                  alt="productos"
                />

                <h2 className="px-3 titulo pt-10 sm:pl-[42px] sm:pr-12 pb-[12px]">
                  Desarrollo Integral
                </h2>
                <p className="px-3 parrafo sm:pl-[42px] sm:pr-12 pb-[23px]">
                  Nos Preocupamos por Mantener a Nuestra Plantilla de
                  Especialistas en Constante Capacitación y Crecimiento para
                  Brindar Excelentes Resultados.
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
                <span className="xl:inline">Fabricación de Maquinaria</span>
              </h1>
              <p className="sm:px-16 lg:px-0 mx-auto mt-3 tracking-wider text-md lg:text-lg xl:text-xl 2xl:text-4xl text-white sm:text-lg md:mt-5 md:max-w-3xl ">
                Diseñamos, Proyectamos y Construimos Maquinaria Especializada
                para sus Procesos Productivos, como lo pueden ser Tolvas,
                Tanques, Calandretas, Recipientes a presión, entre los
                principales.
              </p>
            </div>
            <div className="boton 2xl:mt-24 pb-10">
              {/* <a
                href="#"
                className="flex text-center items-center relative overflow-hidden h-12 bg-[400%] text-white px-8 py-0 rounded-full border-white border-[1px] hover:before:scale-x-100 hover:text-[#006DFF] before:content-[''] before:absolute before:origin-[0_50%] before:w-full before:h-[inherit] before:transition-all before:duration-[0.475s] before:rounded-[inherit] before:scale-x-0 before:left-0 before:top-0 before:bg-white"
              >
                Find out more{" "}
                <FaAngleRight className="w-5 h-5 hover:text-[#006DFF] relative z-[1]" />
              </a> */}
              <button
                type="button"
                href="#"
                className="flex text-center items-center relative overflow-hidden h-12 bg-[400%] text-white px-8 py-0 rounded-full border-white border-[1px] hover:before:scale-x-100 hover:text-[#006DFF] before:content-[''] before:absolute before:origin-[0_50%] before:w-full before:h-[inherit] before:transition-all before:duration-[0.475s] before:rounded-[inherit] before:scale-x-0 before:left-0 before:top-0 before:bg-white"
              >
                <span className="relative z-[1]">Conoce mas</span>
                <FaAngleRight
                  className="ml-3 -mr-1 h-5 w-5 hover:text-[#006DFF] relative z-[1]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5 ">
            <img
              className="object-cover md:h-[300px] lg:h-full w-full object-center"
              alt="hero"
              src="https://careers.rolls-royce.com/~/media/Images/R/Rolls-Royce-Careers-V2/content-images/2-2-half-width/beyond-tomorrow.jpg?h=509&iar=0&w=702"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white mb-20">
        {/* //!Seccion de productos y services */}
        <div className="px-8 ">
          <h1 className="text-[40px] text-[#1E3643] text-center my-7">
            Áreas de Negocio
          </h1>
          <p className="text-center  pb-10 text-xl leading-[1.5em]">
            IMA Mechanical Engineers es una Empresa de Ingeniería, Construcción
            y Mantenimiento Industrial en materia de Proyectos de Cogeneración,
            Energías Renovables y Plantas de Alimentos Balanceados.
          </p>
        </div>
        <div className=" mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* //!Primera columna del grid*/}
          <div className="col-span-1 relative w-full h-64 bg-black">
            <div className="absolute mt-14">
              <img
                className="h-[200px] w-full object-cover object-right"
                src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_planta_alimentos-1-300x122.jpg"
                alt="Turbina de avion"
              />
            </div>
            <div className="flex my-5 ml-5">
              <IoAirplaneOutline className="relative text-gray-400 h-12 w-12 mr-3" />
              <h1 className="relative text-white text-[1.857em]">
                Planta de Alimentos
              </h1>
            </div>
          </div>
          {/* //! Segunda columna del grid*/}
          <div className="col-span-1 relative w-full h-64">
            <div className="absolute">
              <img
                className="h-[259px] w-full object-cover object-right"
                src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_energia-1-300x122.jpg"
                alt="Avion"
              />
            </div>
            <div className="flex my-5 ml-5">
              <img
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/combined-shape-new.png?h=43&iar=0&w=40"
                className="relative h-12 w-12 mr-3"
              />
              <h1 className="relative text-white text-[1.857em]">Energía</h1>
            </div>
          </div>
          {/* //!Tercera columna del grid*/}
          <div className="relative w-full h-64 bg-white">
            <div className="absolute">
              <img
                className="h-[257px] "
                src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_mantenimiento-1-300x122.jpg"
                alt="Tren"
              />
            </div>
            <div className="flex my-5 ml-5">
              <img
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/icon-power-new.png?h=34&iar=0&w=45"
                className="relative text-[#5b5b5b] h-12 w-12 mr-3"
              />
              <h1 className="relative text-white text-[1.857em]">
                Mantenimiento
              </h1>
            </div>
          </div>
          {/* //!Columna sola*/}
          <div className="col-span-1"></div>
          <div className="col-span-1 lg:col-span-1 flex justify-center items-center">
            <div className="relative w-full h-64 bg-white">
              <div className="absolute">
                <img
                  className="h-[259px] w-full object-cover object-right"
                  src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_fabricacion_maquinaria-1-300x122.jpg"
                  alt="Avion"
                />
              </div>
              <div className="flex my-5 ml-5">
                <img
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/flexible-signposts/icons/Electrical_icon-sm-02.png?h=45&iar=0&w=45"
                  className="relative text-[#5b5b5b] h-12 w-12 mr-3"
                />
                <h1 className="relative text-white text-[1.857em]">
                  Fabricación de Maquinaria
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
