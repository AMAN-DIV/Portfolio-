import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const Banner = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/projects/banner1.jpg"
            className="absolute scale-[0] -right-[5rem] -top-[1rem] md:scale-[3] md:left-0 md:inset-y-0 lg:scale-[1]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aman Dwivedi</p>
            <p className="subtext">
             I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* box2 */}
       <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/projects/banner2.jpg"
            className="absolute scale-[0] -right-[5rem] -top-[1rem] md:scale-[3] md:left-0 md:inset-y-0 lg:scale-[1]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aman Dwivedi</p>
            <p className="subtext">
             I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 3 */}
         <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/projects/Banner3.jpg"
            className="absolute scale-[0] -right-[5rem] -top-[1rem] md:scale-[3] md:left-0 md:inset-y-0 lg:scale-[1]"
          />
          <div className="z-10">
            <p className="headtext">Certificate</p>
            <p className="subtext">
             {/* I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications. */}
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-blue " />
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
           
          </div>
        </div>
        {/* Grid 5 */}
        
      </div>
    </section>
  );
};

export default Banner;
