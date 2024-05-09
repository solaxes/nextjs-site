"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={
        pathName === href
          ? "bg-gray-700 px-6 py-2 text-white rounded-lg"
          : "px-6 py-2 text-black"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
