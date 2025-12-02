"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function List({
  list,
  Icon = () => null,
  link,
  dropdownItems,
  onClick, // 🔹 new prop for mobile menu close
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative flex items-center gap-1.5 cursor-pointer group">

      {/* Text or Link */}
      {link ? (
        <Link
          href={link}
          onClick={onClick} // 🔹 mobile menu click close
          className="hover:text-amber-500 duration-500 flex items-center gap-1"
        >
          {list}
          {Icon && <Icon />}
        </Link>
      ) : (
        <span
          onClick={() => setOpen(!open)}
          className="hover:text-amber-500 duration-500 flex items-center gap-1"
        >
          {list}
          {Icon && <Icon />}
        </span>
      )}

      {/* Dropdown */}
      {dropdownItems && (
        <ul
          className={`
            absolute top-6 left-0 bg-black text-white shadow-lg rounded-md p-2 w-44 z-50 space-y-1
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            duration-300
          `}
        >
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                onClick={onClick} // 🔹 close mobile menu when dropdown item clicked
                className="hover:text-amber-500 duration-300 block"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
