import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // close mobile menu after clicking
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="text-white fixed w-full z-20 bg-[rgba(246,243,235,0.7)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Left - Logo */}
          <div className=" font-bold cursor-pointer"><img src={logo} alt="logo" className="h-10 w-10 md:h-12 md:w-12"  /></div>

          {/* Middle - Links */}
          <ul className="hidden md:flex space-x-8 text-lg bg-[#E3DECF] px-20 py-2 rounded-full">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition ${
                    activeLink === link.id
                      ? "text-[#2F5C4E] underline font-bold"
                      : "text-black hover:text-[#2F5C4E] font-bold"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right - Button */}
          <div className="hidden md:block">
            <button className="bg-[#2F5C4E] px-5 py-2 rounded-3xl font-semibold hover:bg-black transition">
         Let's Chat
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={26} className="text-[#2F5C4E]" /> : <FaBars size={26} className="text-[#2F5C4E]" />}
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
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => handleLinkClick(link.id)}
            className={`transition ${
              activeLink === link.id
                ? "text-[#2F5C4E] underline font-bold"
                : "text-black hover:text-[#2F5C4E] font-bold"
            }`}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={toggleMenu}
          className="bg-[#2F5C4E] px-5 py-2 rounded-3xl font-semibold hover:bg-black transition mb-4 text-white"
        >
         Let's Chat
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
