"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function List({ list, Icon = () => null, link, dropdownItems }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative flex items-center gap-1.5 cursor-pointer group"
    >
      {/* Text or Link */}
      {link ? (
        <Link
          href={link}
          className="hover:text-amber-500 duration-500"
        >
          {list}
        </Link>
      ) : (
        <span className="hover:text-amber-500 duration-500">
          {list}
        </span>
      )}

      <Icon className="text-white" />

      {/* Dropdown — always inside li so hover won't break */}
      {dropdownItems && (
        <ul
          className="
            absolute top-6 left-0 bg-black text-white shadow-lg rounded-md p-2 w-40 z-50 space-y-1 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            duration-300
          "
        >
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
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
