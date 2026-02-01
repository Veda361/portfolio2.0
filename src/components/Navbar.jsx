import { NavLink } from "react-router-dom";
import logo from "../assets/1-section-assets/logo-deviors.png";
import home from "../assets/1-section-assets/home-icon.png";
import vector from "../assets/1-section-assets/Vector.png";
import mic from "../assets/1-section-assets/mic--icon.png";
// import { useNavigate } from "react-router-dom";
import mac from "../assets/1-section-assets/mac-icon.png";
import android from "../assets/1-section-assets/android-icon.png";
const Navbar = () => {
  return (
    <nav className="bg-[#547792] w-screen ">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* left {logo and brand text} */}
        <div className="flex items-center  w-2/5">
          <img
            src={logo}
            className="h-10 w-10 ml-[32px] mr-[12px] mt-[22px] mb-[22px]"
          />
          <NavLink
            to="/deviors"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium text-[1.65rem] transition-colors duration-300
       ${isActive ? "text-[#CFC4A8]" : "text-[#EAE0CF] hover:text-white"}`
            }
          >
            <span className="text-[1.9rem] font-bold">Deviors</span>
          </NavLink>
        </div>

        {/* right {navigation links} */}
        <div className="flex items-center gap-[7rem] w-3/5 ml-[6rem]">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium text-[1.65rem] transition-colors duration-300
       ${isActive ? "text-[#CFC4A8]" : "text-[#EAE0CF] hover:text-white"}`
            }
          >
            <img
              src={home}
              className="h-[1.7rem] w-[1.7rem] mr-[0.5rem]"
              alt="home icon"
            />
            Home
          </NavLink>

          {/* Projects */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium text-[1.65rem] transition-colors duration-300
       ${isActive ? "text-[#CFC4A8]" : "text-[#EAE0CF] hover:text-white"}`
            }
          >
            <img
              src={vector}
              className="h-[1.25rem] w-[1.2rem] mr-[0.5rem]"
              alt="project icon"
            />
            Projects
          </NavLink>

          {/* Contact */}
          <NavLink
  to="/contact"
  className={({ isActive }) =>
    `flex items-center gap-2 font-medium text-[1.65rem] transition-colors duration-300
     ${isActive ? "text-[#CFC4A8]" : "text-[#EAE0CF] hover:text-white"}`
  }
>
  <img
    src={mic}
    className="h-[1.25rem] w-[1.17rem] mr-[0.5rem]"
    alt="contact icon"
  />
  Contact
</NavLink>
          {/* top-rightmost icon -[mac and android] */}
          <div className="flex items-center space-between">
            <NavLink
              to="/mac"
              className="h-[1rem] w-[1rem] mb-[1.2rem] mr-[0.9rem] ml-[-1.5rem]"
            >
              <img src={mac} alt="mac icon" />
            </NavLink>

            <NavLink
              to="/android"
              className="h-[1rem] w-[1rem] mb-[1.2rem] ml-[1rem]"
            >
              <img src={android} alt="android icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
