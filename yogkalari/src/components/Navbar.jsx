import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/yoga", label: "Yoga" },
    { path: "/kalari", label: "Kalari" },
    { path: "/terrariums", label: "Terrariums" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="text-white fixed w-full z-30 bg-[rgba(246,243,235,0.7)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="logo" className="h-10 w-10 md:h-12 md:w-12" />
          </Link>

          {/* Middle - Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-lg bg-[#E3DECF] px-20 py-2 rounded-full">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    location.pathname === link.path
                      ? "text-[#2F5C4E] underline"
                      : "text-black hover:text-[#2F5C4E]"
                  }`}
                >
                  <span className="font-nunito">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919633772040?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2F5C4E] flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold hover:bg-black transition text-white"
            >
              <FaWhatsapp className="text-xl" />
              <span>Let's Chat</span>
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={26} className="text-[#2F5C4E]" />
            ) : (
              <FaBars size={26} className="text-[#2F5C4E]" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-[#F6F3EB] md:hidden text-black flex flex-col items-center gap-6 text-lg font-medium absolute w-full left-0 transition-all duration-700 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`transition ${
              location.pathname === link.path
                ? "text-[#2F5C4E] underline"
                : "text-black hover:text-[#2F5C4E]"
            }`}
          >
            <span className="font-nunito">{link.label}</span>
          </Link>
        ))}

        {/* WhatsApp Button - Mobile */}
        <a
          href="https://wa.me/919633772040?text=Hi%20YogKalariSamriddhi,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2F5C4E] flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold hover:bg-black transition text-white"
        >
          <FaWhatsapp className="text-xl" />
          <span>Let's Chat</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
