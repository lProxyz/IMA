import { FaAngleRight } from "react-icons/fa";

const SecHero = () => {
  return (
    <>
      <div className="flex justify-start items-start bg-cover bg-center h-screen bg-[url('https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/banners/home-full-width/ultrafan-build-complete-banner-image.jpg')]">
        {/* <div className="relative mx-5 my-[50px] sm:py-[100px] lg:py-[130px] xl:py-[225px] md:mx-14 lg:mx-28 "> */}
        <div className="flex flex-col mx-1 md:mx-28 my-auto">
          <a
            href="#"
            className="text-start text-[#10069F] hover:text-[#006DFF] tracking-wider font-bold text-5xl md:text-5xl lg:text-[50px]"
          >
            <span>UltraFan build</span>
            <span className="flex hover:text-[#006DFF]">
              complete
              <FaAngleRight className="mt-2" />
            </span>
          </a>
          <div className="hidden sm:block text-[#10069F] md:text-xl lg:text-2xl">
            <span className="block">
              We have completed building our UltraFan technology
            </span>
            <span>demonstrator and are now preparing it for testing</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecHero;
