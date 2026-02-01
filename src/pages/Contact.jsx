import React from "react";
import mic from "../assets/1-section-assets/mic--icon.png";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Footer from "../components/Footer";

const Contact = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917678865573?text=Hello%20I%20want%20to%20connect%20with%20you",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#547792] flex flex-col">
      {/* CENTER CONTENT */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-[3rem]">
          {/* CALL BUTTON */}
          <a
            href="tel:+917678865573"
            className="
              group relative
              flex items-center gap-[0.7rem]
              px-[2.2rem] py-[0.9rem]
              rounded-[2.2rem]
              border border-[#00FF9C]
              text-[#EAE0CF] text-[1.5rem]
              transition-all duration-300 ease-out
              hover:-translate-y-[3px]
              hover:shadow-[0_0_22px_rgba(0,255,156,0.45)]
              active:scale-95
            "
          >
            <img
              src={mic}
              className="h-[1.4rem] w-[1.4rem] transition-transform duration-300 group-hover:-translate-y-[2px]"
              alt="call icon"
            />
            Call Me
          </a>

          {/* WHATSAPP BUTTON */}
          <button
            onClick={openWhatsApp}
            className="
              group relative
              flex items-center gap-[0.7rem]
              px-[2.2rem] py-[0.9rem]
              rounded-[2.2rem]
              bg-[#25D366]
              text-white text-[1.5rem]
              transition-all duration-300 ease-out
              hover:-translate-y-[3px]
              hover:shadow-[0_0_22px_rgba(37,211,102,0.55)]
              active:scale-95
            "
          >
            <IoChatbubbleEllipses
              className="h-[1.4rem] w-[1.4rem] transition-transform duration-300 group-hover:translate-x-[3px]"
            />
            WhatsApp
          </button>
        </div>
      </div>

  
    </div>
  );
};

export default Contact;
