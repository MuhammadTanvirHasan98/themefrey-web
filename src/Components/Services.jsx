import React from "react";
import webImg from "../assets/web.png";
import iosImg from "../assets/ios.png";
import uiImg from "../assets/ui.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import andro from "../assets/andro.png";
import ioslogo from "../assets/ios-logo.png";
import androStu from "../assets/andro_stu.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import xd from "../assets/xd.png";
import wordpress from "../assets/wordpress.png";

const Services = () => {
  // const services = [
  //   {
  //     title: "WEB Developer",
  //     img: "https://img.icons8.com/fluency/96/code.png",
  //   },
  //   {
  //     title: "App/ios Developer",
  //     img: "https://img.icons8.com/color/96/iphone-x.png",
  //   },
  //   {
  //     title: "UI /UX Designer",
  //     img: "https://img.icons8.com/color/96/design--v1.png",
  //   },
  // ];

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10">
      <h2 className="text-3xl font-bold text-purple-900 mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Card */}
        {/* <div className="bg-white border border-purple-100 shadow-md rounded-3xl p-6 flex flex-col items-center hover:shadow-lg transition duration-300">
          <div className="py-10 flex flex-col items-center">
            <img src={webImg} className="w-30 h-20 mb-4 text-center" />
            <h3 className="text-xl bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent font-semibold  text-center">
              WEB Developer
            </h3>
          </div>
        </div> */}
        {/* Card 1 */}
        <div className="group bg-white border border-purple-100 shadow-md rounded-3xl p-6 w-60 h-80 flex flex-col justify-center items-center transition-all duration-500 hover:shadow-lg overflow-hidden">
          {/* Main content - centered and moves up on hover */}
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-6">
            <img src={webImg} alt="Web Dev Icon" className="w-30 h-20 mb-4" />
            <h3 className="text-xl bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent font-semibold text-center">
              WEB Developer
            </h3>
          </div>

          {/* Tech logos - appear below with smooth slide */}
          <div className="max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out overflow-hidden mt-4 flex flex-wrap justify-center gap-3">
            {[html, css, js, node, react].map((logo, i) => (
              <img key={i} src={logo} alt={`tech-${i}`} className="w-10 h-10" />
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white border border-purple-100 shadow-md rounded-3xl p-6 w-60 h-80 flex flex-col justify-center items-center transition-all duration-500 hover:shadow-lg overflow-hidden">
          {/* Main content - centered and moves up on hover */}
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-6">
            <img src={iosImg} alt="Web Dev Icon" className="w-30 h-28 mb-4" />
            <h3 className="text-xl bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent font-semibold text-center">
              App/IOS Developer
            </h3>
          </div>

          {/* Tech logos - appear below with smooth slide */}
          <div className="max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out overflow-hidden mt-4 flex flex-wrap justify-center gap-3">
            {[flutter, androStu, ioslogo, andro].map((logo, i) => (
              <img key={i} src={logo} alt={`tech-${i}`} className="w-10 h-10" />
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white border border-purple-100 shadow-md rounded-3xl p-6 w-60 h-80 flex flex-col justify-center items-center transition-all duration-500 hover:shadow-lg overflow-hidden">
          {/* Main content - centered and moves up on hover */}
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-6">
            <img src={uiImg} alt="Web Dev Icon" className="w-44 h-24 mb-2" />
            <h3 className="text-xl bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent font-semibold text-center">
              UI/UX Designer
            </h3>
          </div>

          {/* Tech logos - appear below with smooth slide */}
          <div className="max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out overflow-hidden mt-4 flex flex-wrap justify-center gap-3">
            {[framer, figma, xd, wordpress].map((logo, i) => (
              <img key={i} src={logo} alt={`tech-${i}`} className="w-10 h-8" />
            ))}
          </div>
        </div>
      </div>

      <button className="mt-10 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
        View all
      </button>
    </div>
  );
};

export default Services;
