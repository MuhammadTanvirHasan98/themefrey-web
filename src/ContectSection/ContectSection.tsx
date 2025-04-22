import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="p-10 text-[#4700B4] flex flex-col justify-center items-center ">
      {/* Top Title */}
      <motion.h1
        className="text-3xl mb-10 font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ready to get started ?
      </motion.h1>

      {/* Row Section: Input + FAQ */}
      <div className="flex flex-col lg:flex-row justify-center items-center  gap-15">
        {/* Form Section */}
        <motion.div
          style={{
            boxShadow: "0 0px 3px 0px gray",
          }}
          className="flex flex-col h-100 gap-10  mx-10 justify-center items-center  rounded-xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-1">Get in touch</h1>

          <div className="flex flex-col px-5">
            <input
              type="text"
              placeholder="Your Email"
              className="border mb-5 border-[#4700B4] p-2 rounded-full focus:outline-none w-70"
            />
            <input
              type="text"
              placeholder="Your Contact"
              className="border border-[#4700B4] p-2 rounded-full focus:outline-none w-70"
            />
          </div>
          <button
            className="py-2 px-6 text-white font-semibold rounded-full bg-gradient-to-r from-[#4700B4] to-[#9647FE] 
             hover:from-white hover:to-white hover:text-[#4700B4] hover:border hover:border-[#4700B4] 
             transition-all duration-300"
          >
            Get FlexiTheme today
          </button>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="flex flex-col justify-center items-center w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-4">FAQ</h1>

          <div className="bg-[#ECE8FD] p-6 rounded-xl shadow-md mb-7 w-130">
            <h1 className="font-bold text-lg mb-2">How does it work?</h1>
            <p className="text-[#9647FE]">
              Choose a theme, customize it, and launch your website in minutes.
            </p>
          </div>

          <div className="bg-[#ECE8FD] p-6 rounded-xl shadow-md mb-7 w-130">
            <h1 className="font-bold text-lg mb-2">Is it mobile-friendly?</h1>
            <p className="text-[#9647FE]">
              Yes, all our themes are fully responsive and mobile-ready.
            </p>
          </div>

          <div className="bg-[#ECE8FD] p-6 rounded-xl shadow-md w-130">
            <h1 className="font-bold text-lg mb-2">Can I customize it?</h1>
            <p className="text-[#9647FE]">
              Absolutely! You can tweak every part to suit your brand’s needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
