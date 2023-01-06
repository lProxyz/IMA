import React from "react";

const Ejemplo = () => {
  return (
    <>
      //! primera columna
      <div className="">
        <a href="#" className="">
          <div className="card hover:bg-[#006DFF] border border-gray-200 h-[750px] w-[700px]">
            <img
              className="h-[404px] w-[685px]"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
              alt="productos"
            />
            <div className="pt-10 pl-[42px] pr-12 text-start">
              <h2 className="titulo pb-[12px]">
                Leading the Transition to Net Zero
              </h2>
              <h3 className="subtitulo mb-[12px]">Our low carbon approach</h3>
              <p className="parrafo pb-[23px] ">
                we are committed to the decarbonisation of our core markets and
                will continue to invest that can accelerate this transition,
                whilist minimising the impacts of our business operations
              </p>
            </div>
          </div>
        </a>
      </div>

      <div>
        <a href="#">
          <div className="card hover:bg-[#006DFF]">
            <img
              className="h-[404px] w-[685px]"
              src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/nz-signpost.jpg?h=404&iar=0&w=685"
              alt="productos"
            />

            <h2 className="titulo pb-[12px]">
              Leading the Transition to Net Zero
            </h2>
            <h3 className="subtitulo mb-[12px]">Our low carbon approach</h3>
            <p className="parrafo pb-[23px] ">
              we are committed to the decarbonisation of our core markets and
              will continue to invest that can accelerate this transition,
              whilist minimising the impacts of our business operations
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Ejemplo;
