import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Features", "Demos", "Pricing", "Contact"];

  const handleLinkClick = () => {
    setOpen(false); // close mobile menu on link click
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-[#5207c4] hover:text-purple-700 font-medium transition"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Auth buttons for Desktop */}
          <div className="hidden md:flex space-x-3">
            <button className="px-6 py-2 border-2 border-purple-700 text-purple-700 font-semibold rounded-full transition hover:bg-gradient-to-r hover:from-[#4700B4] hover:to-[#9A57FF] hover:text-white">
              Log In
            </button>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full transition hover:border-2 hover:bg-purple-100 hover:text-purple-700 hover:border-purple-700 font-semibold">
              Sign Up
            </button>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? (
                <X size={24} className="text-[#600ddd]" />
              ) : (
                <Menu size={24} className="text-[#600ddd]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow space-y-2">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={1000}
              offset={-70}
              onClick={handleLinkClick}
              className="block text-[#5207c4] hover:text-purple-700 font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <div className="space-y-2 pt-2">
            <button className="w-full px-6 py-2 border-2 border-purple-700 text-purple-700 font-semibold rounded-full transition hover:bg-gradient-to-r hover:from-[#4700B4] hover:to-[#9A57FF] hover:text-white">
              Log In
            </button>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-full transition hover:border-2 hover:bg-purple-100 hover:text-purple-700 hover:border-purple-700 font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
