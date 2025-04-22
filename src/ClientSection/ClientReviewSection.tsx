import React from "react";
import { motion } from "framer-motion";
import clientData from "./data/data";
import Marquee from "react-fast-marquee";

const fadeInTop = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};
const fadeInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const ClientReviewSection = () => {
  return (
    <div className="w-full h-70 bg-[#B888FE] font-poppins flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-[390px]:px-3">
      {/* Header Animation */}
      <motion.h1
        className="text-2xl sm:text-3xl text-white font-bold text-center mb-6 max-[390px]:text-xl"
        variants={fadeInTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Our clients reviews
      </motion.h1>

      {/* Reviews Animation */}
      <motion.div
        variants={fadeInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-screen-xl"
      >
        <Marquee delay={2} className="relative">
          <div className="flex flex-row w-300">
            {clientData.map((item, index) => (
              <div
                key={index}
                className="bg-[#ECE8FD] p-4 sm:p-6 mx-2 flex flex-col items-start rounded-xl shadow-md mb-7 min-w-[250px] sm:min-w-[300px] max-[390px]:min-w-[240px] max-[390px]:p-3"
              >
                <div className="flex gap-2 justify-center items-start mb-2">
                  <div className="h-5 w-9 bg-[#69667A] rounded-full mt-2"></div>
                  <p className="text-[#69667A] text-sm sm:text-base max-[390px]:text-xs">
                    {item.message}
                  </p>
                </div>
                <h1 className="font-bold text-base sm:text-lg text-center max-[390px]:text-sm">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </Marquee>
      </motion.div>
    </div>
  );
};

export default ClientReviewSection;
