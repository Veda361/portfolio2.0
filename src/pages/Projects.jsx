import React from "react";
import dollar from "../assets/project-section-1/dollar_img.png";
import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import make_dollar_img from "../assets/project-section-1/make_dollar.png";
import hero_img_2 from "../assets/project-section-1/hero_2.0.png";
import bean_img from "../assets/project-section-1/bean_2.0.png";
import peaky_img from "../assets/project-section-1/blinders2.0.png";
import deadpool2_img from "../assets/project-section-1/deadpool2.png";
import peaky_blinders_img from "../assets/project-section-1/Peaky Blinders.jpeg";
import bean_img2 from "../assets/project-section-1/bean_img2.0.jpeg";
import daredevil_img from "../assets/project-section-1/dardevil_img.jpeg";
const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  const project_Images = [bean_img2, peaky_blinders_img, deadpool2_img];
  const [activeImage, setActiveImage] = useState(hero_img_2);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <section className=" w-full h-[90rem] overflow-hidden bg-[#EAECF]">
      {/* PARALLAX BACKGROUND */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
        }}
      >
        <img
          src={dollar}
          alt=""
          className="w-full h-full object-cover pointer-events-none select-none opacity-90"
          draggable={false}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full flex flex-col bg-[#ffffff]/5">
        {/* TITLE */}
        <h1 className="p-[3rem] text-[2.6rem] project-txt text-white">
          Projects
        </h1>

        {/* MAIN SECTION */}
        <div className="flex flex-1 mt-[-2rem] gap-[2rem]">
          <div className="w-1/2 h-1/5 ml-[3rem] ">
            <div
              className="
      w-2/3
      text-[2rem]
      border border-[#13D1FF]
      rounded-[0.5rem]
      pl-[1rem]
      py-[1rem]
      text-[#ffffff]
     
    "
            >
              From{" "}
              <span className="text-[#FF71CE] inline-block transition-transform duration-300 hover:scale-110">
                Concept to deployment
              </span>{" "}
              of my project showcase end to end development expertise and
              production ready solution
            </div>
            <button
              className=" bg-[#ffffff]/10
              button-text
    w-[13rem] h-[3rem] mt-[5rem]
    flex items-center justify-center gap-[0.6rem]
    rounded-[0.8rem]
    transition-all duration-300
    hover:gap-[0.9rem]
    hover:scale-[1.03]
    border border-[#00FF9C]
  "
            >
              <span>Github Repo</span>
              <IoMdArrowRoundForward className="text-[1.2rem] hover:translate-x-1" />
            </button>
          </div>

          {/*rigth - corner  */}

          <div className="relative w-1/2 flex flex-col relative">
            {/* hero img div */}
            <div
              className="mt-[-3rem] ml-[1rem] 
  w-[22rem] h-[28rem]
  rounded-[1.2rem]
  overflow-hidden
  bg-[#ffffff]/10
"
            >
              <img
                key={activeImage}
                src={activeImage}
                alt="Active project"
                className="
      w-full h-full
      object-cover
      transition-opacity duration-300
    "
              />
            </div>
          </div>

          {/*bean-img */}
          <div
            onClick={() => setActiveImage(bean_img2)}
            className="absolute ml-[38rem] mt-[32rem]
    w-[7rem] h-[6rem]
    rounded-[0.8rem]
    bg-[#FFF70D]/60
    backdrop-blur-sm
    cursor-pointer
    hover:scale-105 transition
  "
          >
            <img
              src={bean_img}
              alt=""
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          {/*peaky-blinders */}

          <div
            onClick={() => setActiveImage(peaky_blinders_img)}
            className="absolute ml-[48rem] mt-[32rem]
    w-[7rem] h-[6rem]
    rounded-[0.8rem]
    bg-[#317073]/60
    backdrop-blur-sm
    cursor-pointer
    hover:scale-105 transition
  "
          >
            <img
              src={peaky_img}
              alt=""
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          {/*deadpool-img */}
          <div
            onClick={() => setActiveImage(daredevil_img)}
            className="absolute ml-[58rem] mt-[32rem]
    w-[7rem] h-[6rem]
    rounded-[0.8rem]
    bg-[#0F6FC9]/60
    backdrop-blur-sm
    cursor-pointer
    hover:scale-105 transition
  "
          >
            <img
              src={deadpool2_img}
              alt=""
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          {/*dollar-img */}
          <div
            onClick={() => setActiveImage(hero_img_2)}
            className="absolute ml-[68rem] mt-[32rem]
    w-[7rem] h-[6rem]
    rounded-[0.8rem]
    bg-[#FF71CE]/60
    backdrop-blur-sm
    cursor-pointer
    hover:scale-105 transition
  "
          >
            <img
              src={make_dollar_img}
              alt=""
              className="absolute -top-[4.5rem] w-[5rem] left-[1rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
