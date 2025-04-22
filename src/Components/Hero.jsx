import React from "react";
import heroImage from "../assets/hero-image1.png";

const Hero = () => {
  return (
    <>
      <section className="px-6 md:px-12 flex justify-center pt-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center gap-8 md:px-16 relative">
          {/* Left Content */}
          {/* Brand Info*/}
          <div className="text-center md:text-left md:translate-x-18 space-y-6 py-10 animate-slideInLeft animation-delay-200">
            <h1 className="text-4xl sm:text-5xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#5203c7] to-[#d17cff]">
              Launch Your Next <br /> WordPress Project <br /> with Themefrey
            </h1>
            <p className="text-purple-500 text-lg max-w-xl mx-auto md:mx-0">
              Design fast, build faster, and grow beyond limits with our
              flexible WordPress themes
            </p>
            {/* Button Section */}
            <div className="flex flex-row sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <button className="bg-purple-600 text-white font-semibold hover:border-2 border-purple-700 hover:bg-purple-100 hover:text-purple-700 px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Live Demo
              </button>
              <button className="border-2 border-purple-700 text-purple-700 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-[#4700B4] hover:to-[#9A57FF] px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
          {/* Hero Image-Right Content */}
          <div className="flex justify-center items-center animate-slideInRight md:translate-x-12 lg:translate-x-16 py-7 animation-delay-500">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-full md:w-[500px] xl:w-[650px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
