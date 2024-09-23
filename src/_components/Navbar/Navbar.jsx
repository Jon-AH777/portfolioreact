import React from "react";
import logo from "/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About", offset: 50 },
  { href: "#skills", label: "Skills", offset: 50 },
  { href: "#projects", label: "Projects", offset: 50 },
  { href: "#contact", label: "Contact", offset: 50 },
];

const Navbar = () => (
  <div className="flex items-center justify-between my-4 mx-[130px] text-xl">
    <img src={logo} alt="Logo" />
    <ul className="flex items-center list-none gap-[20px]">
      {links.map(({ href, label, offset }) => (
        <li key={href} className="flex flex-col gap-[5px] cursor-pointer">
          <AnchorLink
            href={href}
            offset={offset}
            className="text-black no-underline"
          >
            <p>{label}</p>
          </AnchorLink>
        </li>
      ))}
    </ul>
    <button className="py-4 px-10 rounded-[50px] text-[20px] bg-custom-gradient cursor-pointer duration-500 hover:scale-105">
      <AnchorLink
        href="#contact"
        offset={50}
        className="text-black no-underline"
      >
        Contact Me
      </AnchorLink>
    </button>
  </div>
);

export default Navbar;
