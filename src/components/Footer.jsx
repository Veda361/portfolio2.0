import React from "react";
import { NavLink } from "react-router-dom";
import logo_img from "../assets/1-section-assets/logo-deviors.png";
import repo_img from "../assets/footer-icons/repo.png";
import mark_img from "../assets/footer-icons/mark.png";
import post_img from "../assets/footer-icons/post-in.png";
import x_icon from "../assets/footer-icons/x_icon.png";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#547792] text-black">
      {/* TOP LINE */}
      <div className="w-full h-[1px] bg-[#EAE0CF]/70"></div>

      <div className="flex px-[4rem] py-[3rem] gap-[3rem]">

        {/* LEFT */}
        <div className="flex-1">
          <img src={logo_img} className="w-[3rem] mb-[1.2rem]" />
          <p className="mb-[1.2rem]">Connect With our social</p>

          <div className="flex gap-[1rem]">
            <a href="https://github.com/Veda361" target="_blank" rel="noreferrer">
              <img src={repo_img} className="w-[1.6rem]" />
            </a>
            <a href="https://www.instagram.com/dev_sahu431/" target="_blank" rel="noreferrer">
              <img src={mark_img} className="w-[1.6rem]" />
            </a>
            <a href="https://www.linkedin.com/in/dev-sahu-476923369/" target="_blank" rel="noreferrer">
              <img src={post_img} className="w-[1.7rem] h-[1.3rem]" />
            </a>
            <a href="https://discord.gg/your-link" target="_blank" rel="noreferrer">
              <FaDiscord  className="w-[1.7rem] h-[1.3rem]" />
            </a>
            <a href="https://x.com/DevSahu1241274" target="_blank" rel="noreferrer">
              <img src={x_icon} className="w-[1.4rem] mr-[1.4rem]" />
            </a>
          </div>
        </div>

        {/* VERTICAL LINE */}
        <div className="w-[1px]  ml-[-4rem] bg-[#EAE0CF]/70"></div>

        {/* COMPANY */}
        <div className="flex-1">
          <h3 className="text-[1.3rem] mb-[1rem]">Company</h3>
          <NavLink to="/about-us" className="block mb-[0.5rem]">About Us</NavLink>
          <NavLink to="/support" className="block mb-[0.5rem]">Support</NavLink>
          <a href="/privacy-policy" className="block mb-[0.5rem]">Privacy Policy</a>
          <a href="/terms" className="block mb-[0.5rem]">Terms and Condition</a>
          <a href="/pricing" className="block">Pricing and Refund</a>
        </div>

        {/* VERTICAL LINE */}
        <div className="w-[1px]  ml-[-4rem] bg-[#EAE0CF]/70"></div>

        {/* COMMUNITY */}
        <div className="flex-1">
          <h3 className="text-[1.3rem] mb-[1rem]">Community</h3>
          <a href="https://discord.gg/your-link" target="_blank" rel="noreferrer" className="block mb-[0.5rem]">
            Discord
          </a>
          <a href="https://wa.me/917678865573" target="_blank" rel="noreferrer" className="block">
            Whatsapp
          </a>
        </div>

        {/* VERTICAL LINE */}
        <div className="w-[1px]  bg-[#EAE0CF]/70 ml-[-4rem]"></div>

        {/* GET IN TOUCH */}
        <div className="flex-1">
          <h3 className="text-[1.3rem] mb-[1rem]">Get In Touch</h3>
          <p>Online: 24*6</p>
          <p>+91 7678865573</p>

          <p className="mt-[0.8rem]">Offline: 24*5</p>
          <p>+91 9795748606</p>

          <p className="mt-[0.8rem]">devranjeetq@gmail.com</p>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="w-full h-[1px] bg-[#EAE0CF]/70"></div>

      {/* COPYRIGHT */}
      <div className="text-center py-[1.5rem] text-[0.9rem]">
        Copyright © 2026 Deviors.com <br />
        All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
