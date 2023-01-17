import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="bg-white ">
        {/* //! Imagen del avion fija (Falta hacer el efecto )*/}
        <div className="w-full sm:absolute">
          <img
            className="sm:h-[400px] w-full object-cover object-center"
            src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/about-home-accel-banner.jpg?h=1016&iar=0&w=2000"
            alt="People working on laptops"
          />
        </div>
        {/* //! texto dentro del avion*/}
        <div className="overflow-hidden h-full flex justify-center">
          <div className="relative px-3 mt-16 sm:px-12 sm:basis-3/5 xl:basis-1/2 bg-[#1E3643E6] bg-opacity-10 lg:px-[40px] lg:py-[80px]">
            <span className="text-2xl font-semibold md:text-4xl xl:text-5xl text-white">
              Pioneers of Power
            </span>
            <span className="block  text-white text-lg md:text-lg xl:text-2xl mt-5">
              We are one of the world´s leading global power groups
            </span>
            <div className="video ">
              <button
                type="button"
                href="#"
                className="z-10 flex items-center rounded-full border-2 border-white px-6 py-3 text-base font-bold shadow-sm uppercase"
              >
                <BsFillPlayFill
                  className="mr-3 -ml-1 h-5 w-5"
                  aria-hidden="true"
                />
                Play Video
              </button>
            </div>
          </div>
        </div>
        {/* //! Pensar como se va a desarrollar el elemento del menu de secciones */}
        <div className="bg-red-300 h-12">
          <h1>Menu de secciones</h1>
        </div>

        {/* //! Seccion de texto*/}
        <div className="mt-24 mx-auto w-3/4">
          <div>
            <h1 className="text-center text-5xl font-BenPioneer text-[#1E3643]">
              Overview
            </h1>
            <p>
              At Rolls-Royce, we believe that has an impact and is central to
              the successfufl functioning of the modern world
            </p>

            <div>
              <h2> What we do</h2>
              <p>
                Rolls Royce pionners cutting-edge technologies that deliver
                clean, safe and competitive solutions to meet our planet´s vital
                power nedds.
              </p>
              <h2> Why we do it</h2>
              <p>
                To meet the demands of a growing, more connected society, the
                power that matters must be sustainable power - this is out
                challenge. Our technology will play a fundamental role in
                enabling the transition to a low carbon global economy
              </p>
              <h2> Our Opportunity</h2>
              <p>
                Our technology will play a fundamental role in enabling the
                transition to a low carbon global economy. We have pledged to
                achieve net zero carbon in our operations by 2030 and we will
                play a crucial role in enabling the sectors in which we operate
                reach net zero carbon by 2050.
              </p>
            </div>
          </div>
        </div>

        {/* //! Seccion de texto de mision, vision con imagen*/}
        <div className="mt-12">
          <div className="w-10/12 mx-auto grid grid-cols-2 gap-x-8">
            <div className="col-span-1 bg-blue-300">
              <h1>Our purpose, vision and mission</h1>
              <p>
                As a broad-based power and propulsion provider, we operate in
                some of the most complex, critical systems at the heart of
                global society.
              </p>
              <div>
                <h1>Purpose</h1>
                <p>
                  We pioneer the power that matters. Power that is vital to the
                  success of our customers and which drives the functioning of
                  the modern world. We harness the potential of cutting-edge
                  technologies to create safe, cleaner and more efficient power
                  and propulsion solutions. We push the boundaries of what is
                  possible as pioneers.
                </p>
                <p>
                  We operate in some of the most complex and critical parts of
                  the global economy, from transport and energy to the built
                  environment. Our products and services enable our customers to
                  connect people, societies, cultures and economies together;
                  they meet the growing need for power generation across
                  multiple industries; and enable governments to equip their
                  armed forces with the power required to protect their
                  citizens.
                </p>
              </div>
            </div>

            <div className="col-span-1 bg-pink-200">
              <img
                className="object-cover md:h-[300px] lg:h-full w-full object-center"
                alt="hero"
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/About/our-purpose-graphic.png?h=992&iar=0&w=764"
              />
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto">
          <h1>Vision</h1>
          <p>
            We create industrial technologies using expertise built over many
            years, that puts us in a leadership position. We combine distinct
            engineering disciplines to deliver highly complex power and
            propulsion solutions in the air, at sea and on land, building
            long-term relationships with our customers through service packages.
            The thread linking the Group together is the technical and
            engineering expertise needed to create power for very challenging
            applications. We share this expertise across the Group and create
            value through deployment in our multiple markets as required by
            customer demand.
          </p>
          <h1>Mission</h1>
          <p>
            Global economic growth and rising prosperity are expected to lead to
            increased demand for travel, trade and energy. As demand for power
            rises, so are calls from customers for that power to be more
            compatible with combatting climate change. We believe there are
            significant business growth opportunities to come from Rolls-Royce
            playing a leading role in the transition to net zero. At the same
            time, climate change poses a potentially significant risk to our
            business to which we must respond with the appropriate governance,
            risk management, strategic resilience and metrics. We are well
            positioned to capture the structural growth opportunity presented by
            the global energy transition and we are excited to be playing a
            leading role in enabling our customers make the move to net zero.
          </p>

          <h1>Our values and behaviours</h1>
          <p>
            Trust: We strive to outperform the expectation of key stakeholders.
            We have to earn trust every day and always remember it is easy to
            lose.
          </p>
          <p>
            Integrity: We live up to all of our ethical principles and we
            demonstrate this by being true to ourselves and showing honesty and
            good judgement in all we do.
          </p>
          <p>
            Safety: We put health and safety first. We care about the health and
            safety of our people and our products.
          </p>
          <p>
            Embrace Agility: We explore different ways of doing things, we
            respond quickly and adapt to challenges.
          </p>

          <p>Be Bold: We believe in ourselves, push boundaries and speak up.</p>
          <p>
            Pursue Collaboration: We find strength in working together, both
            inside and outside of our business, and value the diversity of
            people and perspectives.
          </p>
          <p>
            Seek Simplicity: We keep it simple and remove complexity, in how we
            communicate and the way we work.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
