import React from "react";
import MenuItem from "./Component/menuItem";
import fbImg from "../assets/img/fb.svg";
import XImg from "../assets/img/tu.svg";
import insta from "../assets/img/insta.svg";
import LinkedIn from "../assets/img/in.svg";

const Footer = () => {
  return (
    <footer className="bg-[#100027] text-white py-10">
      <div>
        <div className="flex justify-center flex-wrap gap-x-60 gap-y-10 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold mb-4">Themefrey</div>

            <nav className="gap-2 text-gray-300 flex flex-col text-center">
              <MenuItem itemText={"Home"} link={"#home"} />
              <MenuItem itemText={"Features"} link={"#features"} />
              <MenuItem itemText={"Demos"} link={"#demos"} />
              <MenuItem itemText={"Pricing"} link={"#pricing"} />
              <MenuItem itemText={"Contact"} link={"#contact"} />
            </nav>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-5 text-center border-b w-40 mb-4">
              <h1 className="text-lg font-semibold">Follow Us</h1>
            </div>

            <div className="flex gap-4 mb-4">
              <img
                src={fbImg}
                alt="Facebook"
                className="h-8 cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
              />
              <img
                src={insta}
                alt="Instagram"
                className="h-8 cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
              />
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="h-8 cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
              />
              <img
                src={XImg}
                alt="X"
                className="h-8 cursor-pointer transition duration-300 hover:brightness-0 hover:invert"
              />
            </div>

            <div className="text-gray-400 text-sm">
              <a href="#" className="px-2 hover:underline">
                Terms
              </a>
              <a href="#" className="px-2 hover:underline">
                Privacy
              </a>
              <a href="#" className="px-2 hover:underline">
                Condition
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Tawhid Islam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
