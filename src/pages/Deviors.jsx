import hero from "../assets/1-section-assets/Hero-img.png";
import icons from "../assets/1-section-assets/icon_grp.png";
import github from "../assets/1-section-assets/git.png";
import call from "../assets/1-section-assets/call-icon.png";
import Section_1 from "./Section_1";
// import Footer from "../components/Footer";

const Deviors = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#547792]">
      
      {/* HERO SECTION */}
      <div className="w-full flex min-h-[35rem]">
        {/* Left */}
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="deviors-text">
            <span className="text-[#061E29] text-[3rem]">Crafting </span>
            <span className="text-[#EAE0CF] text-[3rem]">high-impact</span>

            <span className="block mt-[0.25rem] text-[#061E29] text-[2.2rem] ml-[1.7rem]">
              of development websites
            </span>

            <span className="block mt-[0.25rem] text-[#061E29] text-[2.2rem] ml-[2.8rem]">
              for brands that dare to
            </span>

            <span className="stand-out block mt-[0.5rem] ml-[4.2rem]">
              Stand-Out
            </span>
          </h1>

          <div className="mt-[6.5rem] mb-[6rem] flex gap-[2.2rem]">
            <button className="flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[0.6rem] bg-[#3585F7] text-white shadow-lg">
              <img src={github} alt="GitHub" className="w-[1.2rem]" />
              GitHub Profile
            </button>

            <button className="flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[0.6rem] bg-[#10B981] text-white shadow-lg">
              <img src={call} alt="Call" className="w-[1.2rem]" />
              Request Call
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={hero}
            alt="Hero"
            className="mt-[4rem] h-[20rem] w-[22rem]"
          />
          <img src={icons} alt="Icons" className="mt-[1rem]" />
        </div>
      </div>

      {/* STATS SECTION — NO MARGIN BOTTOM */}
      <div
        className="w-full flex justify-between py-[3rem] items-center"
        style={{ backgroundColor: "rgba(84,119,146,0.35)" }}
      >
        <div className="flex flex-col ml-[6rem] text-[#F3F4F4]">
          <span>100+</span>
          <span>Working</span>
          <span>Projects</span>
        </div>

        <div className="flex flex-col text-[#F3F4F4] ">
          <span>4+</span>
          <span>Team</span>
          <span>Members</span>
        </div>

        <div className="flex flex-col mr-[6rem] text-[#F3F4F4]">
          <span>2+</span>
          <span>Collaborative</span>
          <span>Teams</span>
        </div>
      </div>

      {/* NEXT SECTION (NO WHITE GAP NOW) */}
      <Section_1 />
       {/* <Footer /> */}
    </div>
  );
};

export default Deviors;
