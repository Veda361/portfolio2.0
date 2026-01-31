import React from "react";
import bg_img from "../assets/home-section-1/bg-img-of-home-section.png";
import hero_img from "../assets/home-section-1/herosection2.png";
import Home2_0 from "../components/Home2_0";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden w-full flex">
        <div
          className="bg-cover bg-center bg-fixed absolute w-full h-full"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          {/* color overlay (FIXED: pointer-events disabled) */}
          <div className="bg-[#547792] absolute inset-0 opacity-70 w-full h-full pointer-events-none"></div>

          {/* 🔹 Content above image + overlay */}
          <div className="gap-[2rem] flex relative z-[10] min-h-screen">
            
            {/* Home */}
            <span className="home-txt absolute left-[3rem] top-[1rem] text-[2rem] text-[#061E29]">
              Home
            </span>

            {/* Content + hero-img */}
            <div className="w-1/2 flex flex-col relative mt-[9rem] ml-[9rem]">
              
              <div className="flex-col absolute top-[2rem] left-[-6rem] txt text-[4rem]">
                We <span className="text-[#EAE0CF]"> Serve Projects</span>
              </div>

              <div className="flex-col absolute top-[6.8rem] left-[-6rem] txt text-[4rem]">
                because we are really good at into it.
              </div>

              <button
                onClick={() => {
                  console.log("Get Started clicked");
                  alert("Get Started 🚀");
                }}
                className="
                  mt-[17rem] ml-[-2rem]
                  w-full max-w-[24rem] h-[3rem]
                  bg-[#10B981]
                  text-[#061E29]
                  font-semibold
                  rounded-[1rem]
                  z-[20]
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:bg-[#09895F]
                  hover:scale-[1.03]
                  hover:shadow-xl
                  active:scale-[0.97]
                  active:shadow-inner
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#EAE0CF]
                "
              >
                <span className="btn-txt text-[1rem] text-[#061E29]">
                  Contact to make impact in your life
                </span>
              </button>
            </div>

            <div className="w-1/2 relative">
              <img
                src={hero_img}
                alt="Hero"
                className="w-[25rem] h-[29rem] object-cover mt-[7rem] rounded-[1rem] opacity-90"
              />
            </div>

          </div>
        </div>

        <Home2_0 />
      </div>
    </>
  );
};

export default Home;
