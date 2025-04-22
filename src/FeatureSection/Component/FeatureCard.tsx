import React, { FC } from "react";
import CardProps from "./Card.interface";

const FeatureCard: FC<CardProps> = ({ icon, title, subTitle }) => {
  return (
    <div
      className="flex flex-col mx-8 justify-center rounded-xl py-10 items-center text-center bg-white w-50
      transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_15px_30px_rgba(71,0,180,0.4)] hover:bg-[#ede9fe] bg-gradient-to-b from-bg-[#ede9fe] to-[#e8dcfb] border-2 border-purple-300 shadow-md
      max-[390px]:mx-2 max-[390px]:w-40 max-[390px]:py-5 max-[390px]:gap-2"
    >
      <img
        src={icon}
        alt=""
        className="mb-5 transition-transform duration-300 ease-in-out hover:scale-120 hover:rotate-6"
      />
      <div>
        <h1 className="font-bold text-[#4700B4] transition-colors duration-200 ease-in-out hover:text-[#6d28d9]">
          {title}
        </h1>
        <p className="text-[11px] text-gray-600 transition-colors duration-200 ease-in-out hover:text-gray-800">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
