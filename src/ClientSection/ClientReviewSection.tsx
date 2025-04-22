import React from "react";
import { motion } from "framer-motion";
import clientData from "./data/data";
import Marquee from "react-fast-marquee";

const ClientReviewSection = () => {
  return (
    <div className="w-full h-70 bg-[#B888FE] font-poppins  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Header Animation */}
      <motion.h1
        className="text-2xl sm:text-3xl text-white font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our clients reviews
      </motion.h1>

      {/* Reviews Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-screen-xl"
      >
        <Marquee delay={2} className="relative">
          <div className="flex flex-row w-300">
            {clientData.map((item, index) => (
              <div
                key={index}
                className="bg-[#ECE8FD] p-4 sm:p-6 mx-2 flex flex-col items-start rounded-xl shadow-md mb-7 min-w-[250px] sm:min-w-[300px]"
              >
                <div className="flex gap-2 justify-center items-start  mb-2">
                  <div className="h-5 w-9 bg-[#69667A] rounded-full mt-2"></div>
                  <p className="text-[#69667A] text-sm sm:text-base">
                    {item.message}
                  </p>
                </div>
                <h1 className="font-bold text-base sm:text-lg text-center">
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
