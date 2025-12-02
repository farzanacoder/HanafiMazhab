"use client";

import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import List from "../Common/List";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Nav() {
  return (
    <section className="bg-[#0b1220]">
      <div className="container flex lg:flex-row flex-col items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="w-[200px]">
          <Image src="/images/Logo.png" height={150} width={300} alt="logo" />
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6 text-white justify-center">
          
          {/* HOME */}
          <List link="/" list="মূলপাতা" />

          {/* ALL ISSUES */}
          <List 
            link="/issues"
            list="সকল সংখ্যা" 
            Icon={IoIosArrowDown} 
          />

          {/* CATEGORY */}
          <List
            list="বিভাগ"
            Icon={IoIosArrowDown}
            dropdownItems={[
              { title: "ইতিহাস", link: "/category/history" },
              { title: "ইসলাম", link: "/category/islam" },
              { title: "সাহিত্য", link: "/category/literature" },
            ]}
          />

          {/* AUTHORS */}
          <List 
            link="/authors"
            list="লেখকবৃন্দ" 
            Icon={IoIosArrowDown} 
          />

          {/* QUESTIONS */}
          <List 
            link="/questions"
            list="আপনার জিজ্ঞাসা" 
            Icon={IoIosArrowDown} 
          />

          {/* ABOUT */}
          <List link="/about" list="পরিচিতি" />

          {/* CONTACT */}
          <List 
            link="/contact"
            list="যোগাযোগ" 
            Icon={IoIosArrowDown} 
          />
        </ul>

        {/* Search Icon */}
        <div className="hover:text-amber-500 active:scale-[1.1] text-2xl cursor-pointer text-white">
          <FaSearch />
        </div>
      </div>
    </section>
  );
}
