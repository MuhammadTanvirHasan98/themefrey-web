import React, { FC } from "react";
import CardProps from "./Card.interface";

const FeatureCard: FC<CardProps> = ({ icon, title, subTitle }) => {
  return (
    <div className="flex flex-col mx-8 justify-center rounded-xl py-10 items-center text-center bg-white w-50">
      <img src={icon} alt="" className=" mb-5" />
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-[11px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
