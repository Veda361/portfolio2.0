import girl from "../assets/2-part-of-1-section-assets/girl-planting-img.png";
// import ellipse from "../assets/2-part-of-1-section-assets/green-ellipse.png";
import girl_boy_chat from "../assets/2-part-of-1-section-assets/gir--boy-chit-chat-img.png";
import boy_img from "../assets/2-part-of-1-section-assets/a-boy-bottom-img.png";
import computer_img from "../assets/2-part-of-1-section-assets/a-girl-computer.png";
import react_img from "../assets/2-part-of-1-section-assets/react-img.png";
import mongo_img from "../assets/2-part-of-1-section-assets/mongo-db.png";
import express_img from "../assets/2-part-of-1-section-assets/express-img.png";
import node_img from "../assets/2-part-of-1-section-assets/node-js.png";
import flask_img from "../assets/2-part-of-1-section-assets/flask-img.png";
import tailwind_img from "../assets/2-part-of-1-section-assets/tailwind.png";
import bootstrap_img from "../assets/2-part-of-1-section-assets/bootstrap.png";
import flas_img from "../assets/2-part-of-1-section-assets/flas-img.png";

const Section_1 = () => {
  return (
    <>
      {/* Parent */}
      <div className="min-h-[70rem] bg-[#547792] w-full overflow-hidden flex flex-col">
        {/* TOP ROW: Left + Vertical Divider + Right */}
        <div className="flex w-full">
          {/* Left block */}
          <div className="flex-1 m-[4rem] ml-[3rem] flex gap-[2rem]">
            <img
              src={girl}
              alt="Girl planting"
              className="w-[7.6rem] h-[7rem]"
            />
            <div className="perfection-txt text-[4.7rem] relative">
              Everything
              <div className="absolute right-[8rem]">
                you need <span className="text-[#F7F0F0]">perfection</span> we
                serve
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-[0.1rem] h-[29rem] bg-[#F7F0F0] mt-[3rem]"></div>

          {/* Right block */}
          <div className="flex-1 m-[7rem] mr-[3rem]">
            <h2 className="text-1 text-[1.5rem] mt-[-1rem] mb-[1rem] ">
              I specialize in building scalable web-applications
            </h2>

            <img
              src={girl_boy_chat}
              alt="Girl and boy chat"
              className="w-[10rem] h-[8rem] ml-[11rem]"
            />

            <h2 className="text-1 text-[1.5rem] mt-[2rem]">
              with high performance and real world solutions
            </h2>
          </div>
        </div>

        {/* ✅ HORIZONTAL DIVIDER BELOW BOTH */}
        <div className="w-[42rem] h-[0.09rem] bg-[#F7F0F0] mt-[-1.5rem] ml-[24.5rem]"></div>

        {/* bottom -left */}
        <div className="w-full flex mt-[3rem]">
          <div className="flex flex-1 gap-[2rem] bg-[#547792] h-[30rem] mx-[1rem]">
            <div className="project-txt text-[#061E29] text-[2rem] ml-[3rem] realtive ">
              Some Crazy Projects:
              <img
                src={boy_img}
                alt="a guy clicking photo"
                className=" absolute h-[15rem] w-[10rem] ml-[6rem] mb-[-4rem]"
              />
              <ul className="text-[1.6rem] my-[2.1rem] space-y-[1.3rem] ">
                <li>Prescripto</li>
                <li>Oochi design</li>
                <li>E-commerce Platform</li>
                <li>GoFoodWeb</li>
                <li>Socially Blogs</li>
                <li>chat-bot</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1 gap-[2rem] bg-[#547792547792] h-[30rem] mx-[1rem]">
            {/*bottom right */}
            <div className="project-txt text-[#061E29] text-[2rem] ml-[3rem]">
              Master in Stacks:
              <img
                src={computer_img}
                alt="a guy clicking photo"
                className=" absolute h-[13rem] w-10rem] ml-[8rem] mb-[-4rem]"
              />
              <ul className="space-y-[1.3rem]">
                {/* React */}
                <li
                  onClick={() => window.open("https://react.dev/", "_blank")}
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={react_img}
                    alt="react"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>React</span>
                </li>

                {/* MongoDB */}
                <li
                  onClick={() =>
                    window.open("https://www.mongodb.com/docs/", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={mongo_img}
                    alt="mongo"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>MongoDB</span>
                </li>

                {/* Express */}
                <li
                  onClick={() =>
                    window.open("https://expressjs.com/", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={express_img}
                    alt="express"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>Express.js</span>
                </li>

                {/* Node */}
                <li
                  onClick={() =>
                    window.open("https://nodejs.org/en/docs", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={node_img}
                    alt="node"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>Node.js</span>
                </li>

                {/* FastAPI */}
                <li
                  onClick={() =>
                    window.open("https://fastapi.tiangolo.com/", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={flask_img}
                    alt="fastapi"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>FastAPI</span>
                </li>

                {/* Tailwind */}
                <li
                  onClick={() =>
                    window.open("https://tailwindcss.com/docs", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={tailwind_img}
                    alt="tailwind"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>Tailwind</span>
                </li>

                {/* Bootstrap */}
                <li
                  onClick={() =>
                    window.open("https://getbootstrap.com/docs/", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={bootstrap_img}
                    alt="bootstrap"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>Bootstrap</span>
                </li>

                {/* Flask */}
                <li
                  onClick={() =>
                    window.open("https://flask.palletsprojects.com/", "_blank")
                  }
                  className="flex items-center gap-[2rem] cursor-pointer transition-all duration-300 hover:translate-x-[6px] hover:text-[#00FF9C] active:scale-95"
                >
                  <img
                    src={flas_img}
                    alt="flask"
                    className="w-[2rem] h-[2rem]"
                  />
                  <span>Flask</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_1;
