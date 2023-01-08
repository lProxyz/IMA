import React from 'react'

const people = [
    {
        Titulo: 'Dealing with imposter syndrome - Mark ',
        imageUrl:
            'https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/mark-wilson.jpg?h=470&iar=0&w=500',
        bio: 'Mark wilson, Senior Technical Specialist, shares his thoughts on contending with...',
    },
    {
        Titulo: 'Celebrating Nipuni - breaking the stereotype',
        imageUrl:
            'https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2021/discover/nipuni-karunaratne-landing-img.jpg?h=470&iar=0&w=500',
        bio: 'Last month, Nipuni Karunaratne was shortlisted as a top 6 finalist for the IET Young...',
    },
]
const Team = () => {
    return (
        <>
            {/* <div className="bg-gray-100  grid grid-cols-2 gap-x-8 space-y-8 px-32 mb-72">
                <div className='bg-blue-300 w-full h-64'>
                    <a href="#">
                        <div className='grid grid-cols-3'>
                            <div className='col-span-1'>
                                <img src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/mark-wilson.jpg?h=470&iar=0&w=500' alt="mark engineer" className='w-[201px]' />
                            </div>


                            <div className='col-span-2' >
                                <h1 className='text-[#10069F] pb-[15px]'>
                                    Dealing with imposter syndrome - Mark
                                </h1>
                                <p className='mt-15'>
                                    Mark wilson, Senior Technical Specialist, shares his thoughts on contending with...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='bg-red-300'></div>
                <div className='bg-yellow-200 h-64'>hola como estas</div>
                <div className='bg-green-300'>hola como estas</div>
            </div> */}

            {/* <div className="mx-auto max-w-7xl px-6 lg:px-32 py-10">
                <div className="space-y-12">
                    <ul
                        role="list"
                        className="bg-gray-100 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                        {people.map((person) => (
                            <li key={person.Titulo}>
                                <div className="border bg-white border-gray-200 space-y-4 sm:grid sm:grid-cols-3  sm:space-y-0">
                                    <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                                        <img src={person.imageUrl} alt="" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="space-y-4">
                                            <div className="text-[#10069F] mt-7 text-lg font-medium leading-6">
                                                <h3>{person.Titulo}</h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{person.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

            <section className='bg-gray-100 '>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex space-x-8 -m-4">
                        <a href='#' className="bg-white lg:h-[195px] lg:w-1/2 border-gray-200 border-2">
                            <div className="card h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center hover:bg-[#006DFF]">
                                <img alt="team" className="flex-shrink-0 w-48 h-48 object-cover sm:mb-0 mb-4" src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/mark-wilson.jpg?h=470&iar=0&w=500' />
                                <div className="flex-grow sm:pl-8 p-4">
                                    <h2 className="font-medium text-lg text-[#10069F] ">Dealing with imposter syndrome - Mark</h2>
                                    <p className="mb-4">Mark Wilson, Senior Technical Specialist, shares his thoughts on contending with...</p>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                            className='bg-white lg:h-[195px] lg:w-1/2 border-gray-200 border-2'>
                            <div className="card hover:bg-[#006DFF] h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 w-48 h-48 object-cover sm:mb-0 mb-4" src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2021/discover/nipuni-karunaratne-landing-img.jpg?h=470&iar=0&w=500' />
                                <div className="flex-grow sm:pl-8 p-4">
                                    <h2 className="font-medium text-lg text-[#10069F]">Celebrating Nipuni - breaking the stereotype</h2>
                                    <p className="mb-4">Last month, Nipuni Karunaratne was shortlisted as a top 6 finalist for the IET Young...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex space-x-8 -m-4 mt-12">
                        <a href='#' className="bg-white lg:h-[195px] lg:w-1/2 border-gray-200 border-2">
                            <div className='card hover:bg-[#006DFF] h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                                <img alt="team" className="flex-shrink-0 w-48 h-48 object-cover sm:mb-0 mb-4" src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2021/discover/autism-at-work-landing-image.jpg?h=470&iar=0&w=500' />
                                <div className="flex-grow sm:pl-8 p-4">
                                    <h2 className="font-medium text-lg text-[#10069F]">Embracing neurodivesity</h2>
                                    <p className="mb-4">Andy Parker, Chief of Continuous Improvement, Chartered Engineer and austic, gives...</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className=" bg-white lg:h-[195px] lg:w-1/2 border-gray-200 border-2">
                            <div className='card hover:bg-[#006DFF] h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover sm:mb-0 mb-4" src='https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/Stories/2022/stuart-landing-image.jpg?h=470&iar=0&w=500' />
                                <div className="flex-grow sm:pl-8 p-4">
                                    <h2 className="font-medium text-lg text-[#10069F]">I will always be me</h2>
                                    <p className="mb-4">Stuart Moss, Head of IT Innovation expains how social innovation throught collaboration...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
