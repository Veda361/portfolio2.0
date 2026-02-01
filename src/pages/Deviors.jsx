import hero from "../assets/1-section-assets/Hero-img.png";
import icons from "../assets/1-section-assets/icon_grp.png";
import github from "../assets/1-section-assets/git.png";
import call from "../assets/1-section-assets/call-icon.png";
import Section_1 from "./Section_1";
// import Footer from "../components/Footer";

const Deviors = () => {
  const openGitHub = () => {
    window.open("https://github.com/Veda361", "_blank");
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917678865573?text=Hello%20I%20want%20to%20connect%20with%20you",
      "_blank"
    );
  };

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

            <span className="stand-out block mt-[0.5rem] ml-[4.2rem] text-[2.2rem]">
              Stand-Out
            </span>
          </h1>

          <div className="mt-[6.5rem] mb-[6rem] flex gap-[2.2rem]">
            <button
              onClick={openGitHub}
              className="flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[0.6rem] bg-[#3585F7] text-white shadow-lg hover:scale-105 transition"
            >
              <img src={github} alt="GitHub" className="w-[1.2rem]" />
              GitHub Profile
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[0.6rem] bg-[#10B981] text-white shadow-lg hover:scale-105 transition"
            >
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
            className="
              mt-[4rem]
              h-[20rem] w-[22rem]
              animate-[fadeInUp_1s_ease-out]
              motion-safe:animate-[float_6s_ease-in-out_infinite]
              transition-transform duration-500
              hover:scale-[1.03] hover:-translate-y-[4px]
            "
          />
          <img src={icons} alt="Icons" className="mt-[1rem] opacity-90" />
        </div>
      </div>

      {/* ✅ UPDATED STATS SECTION */}
      <div
        className="w-full py-[3rem] flex justify-center"
        style={{ backgroundColor: "rgba(84,119,146,0.35)" }}
      >
        <div className="flex gap-[10.5rem]">
          {/* CARD 1 */}
          <div className="w-[9rem] h-[9rem] flex flex-col items-center justify-center border border-[#EAE0CF]/40 rounded-[0.8rem] text-[#F3F4F4]">
            <span className="text-[2rem] font-bold">100+</span>
            <span>Working</span>
            <span>Projects</span>
          </div>

          {/* CARD 2 */}
          <div className="w-[9rem] h-[9rem] flex flex-col items-center justify-center border border-[#EAE0CF]/40 rounded-[0.8rem] text-[#F3F4F4]">
            <span className="text-[2rem] font-bold">4+</span>
            <span>Team</span>
            <span>Members</span>
          </div>

          {/* CARD 3 */}
          <div className="w-[9rem] h-[9rem] flex flex-col items-center justify-center border border-[#EAE0CF]/40 rounded-[0.8rem] text-[#F3F4F4]">
            <span className="text-[2rem] font-bold">2+</span>
            <span>Collaborative</span>
            <span>Teams</span>
          </div>
        </div>
      </div>

      {/* NEXT SECTION */}
      <Section_1 />
      {/* <Footer /> */}
    </div>
  );
};

export default Deviors;
