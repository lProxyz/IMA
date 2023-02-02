const SecAvion = () => {
  return (
    <>
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
              className="relative overflow-hidden h-12 bg-[400%] text-white px-8 py-0 rounded-full border-white border-[1px] hover:before:scale-x-100 hover:text-[blue] before:content-[''] before:absolute before:origin-[0_50%] before:w-full before:h-[inherit] before:transition-all before:duration-[0.475s] before:rounded-[inherit] before:scale-x-0 before:left-0 before:top-0 bg-blue-700 before:bg-white"
            >
              <span className="relative z-[1]">Find out more</span>
              <FaAngleRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecAvion;
