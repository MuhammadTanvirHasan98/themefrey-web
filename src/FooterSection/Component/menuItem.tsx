import { FC } from "react";
import MenuItemProps from "../footer.interface";
import React from "react";

const MenuItem: FC<MenuItemProps> = ({ itemText, link }) => {
  return (
    <a
      href={link}
      className="hover:text-[#6500FC] transition-colors duration-300"
    >
      {itemText}
    </a>
  );
};

export default MenuItem;
