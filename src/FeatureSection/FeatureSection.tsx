import React from "react";
import FeatureCard from "./Component/FeatureCard";
import img1 from "../assets/icon/img1.png";
import img2 from "../assets/icon/img2.png";
import img3 from "../assets/icon/img3.png";
import img4 from "../assets/icon/img4.png";
import img5 from "../assets/icon/img5.png";
import img6 from "../assets/icon/img6.png";
import { motion } from "framer-motion"; // corrected import path

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const FeatureSection = () => {
  return (
    <div className="mt-44 flex flex-col items-center my-5">
      <h1 className="font-bold text-3xl text-[#4700B4] mt-5 mb-8">
        Features we provide
      </h1>

      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 flex flex-wrap justify-center gap-6"
      >
        <FeatureCard
          icon={img2}
          title={"Creative Design"}
          subTitle={"Modern layouts and stunning visuals."}
        />
        <FeatureCard
          icon={img1}
          title={"Speed Optimized"}
          subTitle={"Blazing fast performance."}
        />
        <FeatureCard
          icon={img3}
          title={"Easy Customization"}
          subTitle={"Flexible and beginner-friendly settings."}
        />
      </motion.div>

      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 flex flex-wrap justify-center gap-6"
      >
        <FeatureCard
          icon={img4}
          title={"Creative Knowledge"}
          subTitle={"Work with your Creative knowledge."}
        />
        <FeatureCard
          icon={img5}
          title={"Expert Employee"}
          subTitle={"Make you as a Expert employee.."}
        />
        <FeatureCard
          icon={img6}
          title={"User Friendly Design"}
          subTitle={"Easy to make User Friendly design."}
        />
      </motion.div>
    </div>
  );
};

export default FeatureSection;
