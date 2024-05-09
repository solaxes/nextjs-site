import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
const Menu = () => {
  return (
    <ul className="flex">
      <li className="mx-2">
        <NavLink href="/">Home</NavLink>
      </li>
      <li className="mx-2">
        <NavLink href="/about">About Us</NavLink>
      </li>
      <li className="mx-2">
        <NavLink href="/services">Services</NavLink>
      </li>
      <li className="mx-2">
        <NavLink href="/contact">Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
