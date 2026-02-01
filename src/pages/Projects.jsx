import React, { useEffect, useState } from "react";
import dollar from "../assets/project-section-1/dollar_img.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import make_dollar_img from "../assets/project-section-1/make_dollar.png";
import hero_img_2 from "../assets/project-section-1/hero_2.0.png";
import bean_img from "../assets/project-section-1/bean_2.0.png";
import peaky_img from "../assets/project-section-1/blinders2.0.png";
import deadpool2_img from "../assets/project-section-1/deadpool2.png";
import peaky_blinders_img from "../assets/project-section-1/Peaky Blinders.jpeg";
import bean_img2 from "../assets/project-section-1/bean_img2.0.jpeg";
import daredevil_img from "../assets/project-section-1/dardevil_img.jpeg";
import agentic_img from "../assets/project-section-2/agentix-ss.png";
import food_web_img from "../assets/project-section-2/go-food-web.png";
import oochi_img from "../assets/project-section-2/oochi-ss.png";
import prescripto from "../assets/project-section-2/prescripto-ss.png";
import timers_img from "../assets/project-section-2/timer-ss.png";

const Projects = () => {
  const github_projects = [
    {
      img: prescripto,
      github: "https://github.com/Veda361/Prescripto_medicare",
    },
    {
      img: oochi_img,
      github: "https://github.com/Veda361/OCCHi-Design_react",
    },
    {
      img: agentic_img,
      github: "https://github.com/your-username/agentic-ai",
    },
    {
      img: timers_img,
      github: "https://github.com/jatinn2602/stocus-stopwatch",
    },
    {
      img: food_web_img,
      github: "https://github.com/Veda361/GoFoodWeb",
    },
  ];
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(hero_img_2);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full h-[150rem] bg-[#EAECF]">
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

      {/* ================= TOP PROJECTS SECTION ================= */}
      <div className="relative z-10 min-h-screen flex flex-col bg-[#ffffff]/5">
        <h1 className="p-[3rem] text-[2.6rem] project-txt text-white">
          Projects
        </h1>

        <div className="flex flex-1 mt-[-2rem] gap-[2rem]">
          {/* LEFT */}
          <div className="w-1/2 ml-[3rem]">
            <div className="w-2/3 text-[2rem] border border-[#13D1FF] rounded-[0.5rem] pl-[1rem] py-[1rem] text-[#ffffff]">
              From{" "}
              <span className="text-[#FF71CE] inline-block hover:scale-110 transition">
                Concept to deployment
              </span>{" "}
              of my project showcase end to end development expertise and
              production ready solution
            </div>

            <button
            onClick={()=>window.open("https://github.com/Veda361", "_blank")}
            className="bg-[#ffffff]/10 w-[13rem] h-[3rem] mt-[5rem] flex items-center justify-center gap-[0.6rem] rounded-[0.8rem] transition-all hover:gap-[0.9rem] hover:scale-[1.03] border border-[#00FF9C]">
              <span className="!text-[#000000] !text-[1.4rem] !font-semibold">
  Github Repo
</span>
              <IoMdArrowRoundForward className="text-[1.2rem]" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative w-1/2">
            <div className="mt-[-3rem] ml-[1rem] w-[22rem] h-[28rem] rounded-[1.2rem] overflow-hidden bg-[#ffffff]/10">
              <img
                src={activeImage}
                alt="Active project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ICON SELECTORS */}
          <div
            onClick={() => setActiveImage(bean_img2)}
            className="absolute ml-[38rem] mt-[32rem] w-[7rem] h-[6rem] rounded-[0.8rem] bg-[#FFF70D]/60 backdrop-blur-sm cursor-pointer hover:scale-105 transition"
          >
            <img
              src={bean_img}
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          <div
            onClick={() => setActiveImage(peaky_blinders_img)}
            className="absolute ml-[48rem] mt-[32rem] w-[7rem] h-[6rem] rounded-[0.8rem] bg-[#317073]/60 backdrop-blur-sm cursor-pointer hover:scale-105 transition"
          >
            <img
              src={peaky_img}
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          <div
            onClick={() => setActiveImage(daredevil_img)}
            className="absolute ml-[58rem] mt-[32rem] w-[7rem] h-[6rem] rounded-[0.8rem] bg-[#0F6FC9]/60 backdrop-blur-sm cursor-pointer hover:scale-105 transition"
          >
            <img
              src={deadpool2_img}
              className="absolute -top-[6rem] w-[5rem] left-[1rem]"
            />
          </div>

          <div
            onClick={() => setActiveImage(hero_img_2)}
            className="absolute ml-[68rem] mt-[32rem] w-[7rem] h-[6rem] rounded-[0.8rem] bg-[#FF71CE]/60 backdrop-blur-sm cursor-pointer hover:scale-105 transition"
          >
            <img
              src={make_dollar_img}
              className="absolute -top-[4.5rem] w-[5rem] left-[1rem]"
            />
          </div>
        </div>
      </div>

      {/* ================= HANDS-ON PROJECTS ================= */}
      <div className="relative z-20 mt-[12.1rem] px-[4rem] ml-[-4rem]">
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
        <h2 className="inline-block ml-[4rem] mb-[3rem] px-[1.5rem] py-[0.6rem] text-[1.8rem] text-[#ffffff] border border-[#13D1FF] rounded-md">
          Hands-on Projects
        </h2>

        <div className="grid grid-cols-3 gap-[3rem] ml-[3rem] mt-[2rem] py-[1rem]">
          {github_projects.map((project, i) => (
            <div
              key={i}
              className="relative h-[14rem] rounded-[0.8rem] overflow-hidden border-2 border-[#00FF9C] bg-black/40 group"
            >
              <img
                src={project.img}
                className="ml-[1.25rem] mt-[1rem] w-[22rem] h-[10rem] object-cover group-hover:scale-105 transition"
                alt="project"
              />

              <div className="absolute ml-[6.9rem] mt-[0.5rem] inset-0 flex items-end justify-center opacity-100 group-hover:opacity-100 transition">
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="mb-[1rem] px-[1.5rem] py-[0.4rem] bg-[#00FF9C] text-[1rem] border border-[#ffffff] rounded-md text-[#00000] hover:bg-[#00FF9C] hover:cursor-pointer"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
