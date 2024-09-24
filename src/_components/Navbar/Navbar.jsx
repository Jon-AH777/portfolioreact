import React, { useRef, useState } from "react";
import logo from "/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "/menuopen.png";
import menu_close from "/arrow1.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About", offset: 50 },
  { href: "#skills", label: "Skills", offset: 50 },
  { href: "#projects", label: "Projects", offset: 50 },
  { href: "#contact", label: "Contact", offset: 50 },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed mx-4 w-full top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            Sanarung
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <img src={open ? menu_close : menu_open} alt="" />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {links.map(({ href, label, offset }) => (
              <li key={href} className="md:ml-8 text-xl md:my-0 my-7">
                <AnchorLink
                  href={href}
                  offset={offset}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  <p>{label}</p>
                </AnchorLink>
              </li>
            ))}
            <button className="px-6 py-2 rounded text-xl bg-button md:ml-8 cursor-pointer duration-500 hover:scale-105">
              <AnchorLink
                href="#contact"
                offset={50}
                className="text-black no-underline"
              >
                Contact Me
              </AnchorLink>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
