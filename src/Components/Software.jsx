import React from "react";
import Marquee from "react-fast-marquee";

const SoftwareUsage = [
  "html-logo.png",
  "js-logo.png",
  "css-logo.png",
  "bootstrap-logo.png",
  "react-logo.png",
  "nextjs-logo.png",
  "django-logo.png",
  "flutter-logo.png",
  "sql-logo.png",
  "mongodb-logo.png",
  "figma-logo.png",
  "xd-logo.png",
  "framer-logo.png",
  "ios-logo.png",
  "android_studio-logo.png",
  "wordpress-logo.png",
  "nodejs-logo.png",
];

const Software = () => {
  return (
    <div className="bg-gradient-to-r from-white via-purple-100 to-white py-12 md:mx-56 mx-12 md:px-20 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center text-purple-800">
        Software Usage
      </h2>
      <p className="text-center text-purple-500 text-sm sm:text-base max-w-md">
        Related Software Thats We Use
      </p>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        className="mt-8 sm:mt-10"
      >
        {SoftwareUsage.map((img, index) => (
          <img
            key={index}
            src={`/src/assets/softwareusage-slider-images/${img}`}
            alt={`Slide ${index}`}
            className="h-8 sm:h-10 md:h-12 mx-4 sm:mx-6 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Software;
