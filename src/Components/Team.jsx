import React from "react";
const Team = () => {
  return (
    <>
      <section className="bg-gray-100 lg:px-12">
        <div className="grid grid-cols-2 xl:px-5 py-2 mx-auto">
          <div className="col-span-2 lg:col-span-1 px-10 flex basis-1/2 -m-4 overflow-hidden mb-10">
            <a
              href="#"
              className="bg-white h-[350px] sm:h-[230px] border-gray-200 border-2"
            >
              <div className="card h-full flex sm:flex-row flex-col items-center sm:justify-start hover:bg-[#006DFF]">
                <img
                  alt="team"
                  className="h-1/2 w-full sm:w-48 sm:h-full object-cover sm:mb-0 mb-4"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/mark-wilson.jpg?h=470&iar=0&w=500"
                />
                <div className="flex-grow sm:pl-8 p-2 sm:p-4">
                  <h2 className="text-xl lg:text-lg xl:ztext-2xl lg:mb-0 mb-2 xl:mb-4 text-[#10069F] ">
                    Dealing with imposter syndrome - Mark
                  </h2>
                  <p className="md:text-lg">
                    Mark Wilson, Senior Technical Specialist, shares his
                    thoughts on contending with...
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-2 lg:col-span-1 px-10 flex basis-1/2 -m-4 overflow-hidden mb-10">
            <a
              href="#"
              className="bg-white h-[370px] sm:h-[230px] border-gray-200 border-2"
            >
              <div className="card h-full flex sm:flex-row flex-col items-center sm:justify-start hover:bg-[#006DFF]">
                <img
                  alt="team"
                  className="h-1/2 w-full sm:w-48 sm:h-full object-cover object-top sm:mb-0 mb-2"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2021/discover/nipuni-karunaratne-landing-img.jpg?h=470&iar=0&w=500"
                />
                <div className="flex-grow sm:pl-8 p-2 sm:p-4">
                  <h2 className="text-xl lg:text-lg xl:text-2xl lg:mb-0 mb-2 text-[#10069F] ">
                    Celebrating Nipuni - breaking the stereotype
                  </h2>
                  <p className="md:text-lg">
                    Last month, Nipuni Karunaratne was shortlisted as a top 6
                    finalist for the IET Young...
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-span-2 lg:col-span-1 px-10 flex basis-1/2 -m-4 overflow-hidden mb-10">
            <a
              href="#"
              className="bg-white h-[370px] sm:h-[230px] border-gray-200 border-2"
            >
              <div className="card h-full flex sm:flex-row flex-col items-center sm:justify-start hover:bg-[#006DFF]">
                <img
                  alt="team"
                  className="h-1/2 w-full sm:w-48 sm:h-full object-cover sm:mb-0 mb-4"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2021/discover/autism-at-work-landing-image.jpg?h=470&iar=0&w=500"
                />
                <div className="flex-grow sm:pl-8 p-2 sm:p-4">
                  <h2 className="text-xl lg:text-lg xl:text-2xl lg:mb-0 mb-2 xl:mb-4 text-[#10069F] ">
                    Embracing neurodiversity
                  </h2>
                  <p className="md:text-lg">
                    Andy Parker, Chief of continuos improvent, Chartered
                    Engineer and autistic, gives...
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-span-2 lg:col-span-1 px-10 flex basis-1/2 -m-4 overflow-hidden mb-10">
            <a
              href="#"
              className="bg-white h-[370px] sm:h-[230px] border-gray-200 border-2"
            >
              <div className="card h-full flex sm:flex-row flex-col items-center sm:justify-start hover:bg-[#006DFF]">
                <img
                  alt="team"
                  className="h-1/2 w-full sm:w-48 sm:h-full object-cover object-top sm:mb-0 mb-4"
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/stuart-landing-image.jpg?h=470&iar=0&w=500"
                />
                <div className="flex-grow sm:pl-8 p-2 sm:p-4">
                  <h2 className="text-xl lg:text-lg xl:text-2xl lg:mb-0 xl:mb-4 text-[#10069F] ">
                    I will always be me
                  </h2>
                  <p className="md:text-lg ">
                    Stuart Moss, Head of IT Innovation expains how social
                    innovation throught collaboration...
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
