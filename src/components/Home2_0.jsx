import React from "react";
import bg_img from "../assets/home-section-1/bg-img-of-home-section.png";
import boy_run_img from "../assets/home-section-2/boy-run.png";
import mern_img from "../assets/home-section-2/mern-img.png";
import Fast_api_img from "../assets/home-section-2/FAST-API-Img.png";
import figma_img from "../assets/home-section-2/figma-img.png";
import docker_img from "../assets/home-section-2/docker-img.png";
import paper_img from "../assets/home-section-2/new-paper-img.png";
import girl_sit_img from "../assets/home-section-2/girl+boy img.png";
const Home2_0 = () => {
  return (
    <div className="relative w-full h-[90rem] flex items-center">
      {/*Background img */}
      <div
        className="absolute inset-[0] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_img})` }}
      ></div>
      {/* color overlay */}
      <div className="absolute inset-[0] bg-[#547792] opacity-60"></div>

      {/* flex content (no absolute here) */}
      <div className="relative z-[10] flex w-full gap-[5rem]">
        {/*upper div */}
        <div className="relative mt-[1rem] flex flex-col items-center gap-[3rem] w-full">
          {/*text + img */}
          <div className="flex items-center justify-center gap-[4rem] w-full mt-[9rem]">
            <div className="project-txt text-[3rem] text-[#061E29] ml-[-4rem]">
              Project Offered where we best at:
            </div>

            <img className="w-[17rem] h-[20rem]" src={boy_run_img} alt="" />
          </div>
          <div className="flex w-full gap-[10rem] ml-[11rem] mr-[-6rem] mt-[-4rem]">
            <img
              className="w-[10rem] h-[10rem] rounded-[1rem] hover:scale-110 transition-transform duration-300            "
              src={mern_img}
              alt=""
            />
            <img
              className="w-[10rem] h-[10rem]  rounded-[1rem] hover:scale-110 transition-transform duration-300"
              src={figma_img}
              alt=""
            />
            <img
              className="w-[10rem] h-[10rem]  rounded-[1rem] hover:scale-110 transition-transform duration-300"
              src={docker_img}
              alt=""
            />
            <img
              className="w-[10rem] h-[10rem]  rounded-[1rem] hover:scale-110 transition-transform duration-300"
              src={Fast_api_img}
              alt=""
            />
          </div>
        </div>

        {/*Lower div */}
        <div className="absolute bg-[#EAE0CF] top-[45rem] left-[7rem] ">
          <div className="w-[72rem] h-[0.08rem] bg-[#F7F0F0] ml-[1rem]"></div>
          <div
        className="absolute inset-[0] w-full h-[8rem] bg-cover top-[5rem] opacity-50 hover:opacity-80 transition-opacity duration-100 hover:cursor-pointer"
        style={{ backgroundImage: `url(${paper_img})` }}
      > 
      <span className="stack-txt w-3/4">Transforming ideas into production-ready web-solution with Mern, FastApi, Figma and Docker</span>
      <img className="absolute bottom-[1rem] right-[1rem] h-[7rem] w-[9rem]
                 brightness-75 hover:brightness-90
                 transition duration-300" src={girl_sit_img} alt="" />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home2_0;
