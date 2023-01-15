import React from 'react'

const Services = () => {
    return (
        <>
            <div className="grid grid-cols-2 w-full  md:pl-[39px] md:py-5 mb-4">
                {/* //! primera columna   */}
                <div className="col-span-2 sm:col-span-1 px-5 my-5 ">
                    <a href="#">
                        <div className=" card hover:shadow-2xl hover:bg-[#006DFF] border border-gray-200 md:h-[768px] lg:h-[636px]  xl:h-[750px]">
                            <img
                                className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px]"
                                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/civil-aerospace.jpg?h=404&iar=0&w=685"
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
                                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/defence-block.jpg?h=404&iar=0&w=685"
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
            <div className="grid grid-cols-2 w-full  md:pl-[39px] md:py-5 mb-4">
                {/* //! tercer columna   */}
                <div className="col-span-2 sm:col-span-1 px-5 my-5 ">
                    <a href="#">
                        <div className=" card hover:shadow-2xl hover:bg-[#006DFF] border border-gray-200 md:h-[768px] lg:h-[636px]  xl:h-[750px]">
                            <img
                                className="h-[233px] md:h-[247px] w-full xl:h-[404px] xl:w-[685px]"
                                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/power-systems.jpg?h=404&iar=0&w=685"
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
                                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/country-site/large-signposts/electrical.jpg?h=404&iar=0&w=685"
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
        </>
    )
}

export default Services
