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
          
          {/* CATEGORY */}
          {/* <List
            list="বিভাগ"
            Icon={IoIosArrowDown}
            dropdownItems={[
              { title: "ইতিহাস", link: "/category/history" },
              { title: "ইসলাম", link: "/category/islam" },
              { title: "সাহিত্য", link: "/category/literature" },
            ]}
          /> */}



          {/* BOOKS */}
          <List 
            link="/books"
            list="কিতাব" 
          />

          {/* PUBLISHED BOOKS */}
          <List 
            link="/published-books"
            list="প্রকাশিত বই " 
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
            list="প্রশ্ন করুন" 
            Icon={IoIosArrowDown} 
          />

          {/* answers */}
          <List 
            link="/answers"
            list="প্রশ্নোত্তর" 
            Icon={IoIosArrowDown} 
          />

          {/* EASYS ARTICLES */}
          <List 
            link="/essays-articles"
            list="প্রবন্ধ নিবন্ধ" 
            Icon={IoIosArrowDown} 
          />

          {/* ABOUT */}
          <List link="/about" list="পরিচিতি" />

          {/* DEVINE SERVICE */}
          <List 
            link="/divine-service"
            list="দ্বীনী খিদমায় অংশ নিন" 
          />

          {/* CONTACT */}
          <List 
            link="/contacts"
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
//    অডিও ভিডিও  বিভাগসমূহ   লক্ষ্য ও উদ্দেশ্য

