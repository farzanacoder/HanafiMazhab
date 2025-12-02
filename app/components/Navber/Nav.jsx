"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import List from "../Common/List";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-[#0b1220] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-5 relative">

        {/* Left: Mobile Menu Icon */}
        <IoMenu
          onClick={() => setMenuOpen(true)}
          className="text-2xl text-white cursor-pointer lg:hidden"
        />

        {/* Center: Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:mx-0"
        >
          <Image src="/images/Logo.png" width={150} height={50} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-white items-center ">
          <List link="/books" list="কিতাব" />
          <List link="/published-books" list="প্রকাশিত বই" />
          <List link="/authors" list="লেখকবৃন্দ" />
          <List link="/questions" list="প্রশ্ন করুন" />
          <List link="/answers" list="প্রশ্নোত্তর" />
          <List link="/essays-articles" list="প্রবন্ধ নিবন্ধ" />
          <List link="/about" list="পরিচিতি" />
          <List link="/divine-service" list="দ্বীনী খিদমায় অংশ নিন" />
          <List link="/contacts" list="যোগাযোগ" />
        </ul>

        {/* Right: Search Icon */}
        <div className="hover:text-amber-500 active:scale-[1.1] text-2xl cursor-pointer text-white duration-500 ">
          <FaSearch />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
              />

              {/* Side Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 h-full w-[260px] bg-[#0b1220] z-50 flex flex-col overflow-y-auto p-5"
              >
                <div className="flex justify-between items-center mb-6">
                  <Link href="/">
                    <Image onClick={() => setMenuOpen(false)} src="/images/Logo.png" width={150} height={50} alt="logo" />
                  </Link>
                  <RxCross2
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-2xl cursor-pointer"
                  />
                </div>

                <nav className="flex flex-col gap-4 text-white">
                  <List link="/books" list="কিতাব" onClick={() => setMenuOpen(false)} />
                  <List link="/published-books" list="প্রকাশিত বই" onClick={() => setMenuOpen(false)} />
                  <List link="/authors" list="লেখকবৃন্দ" onClick={() => setMenuOpen(false)} />
                  <List link="/questions" list="প্রশ্ন করুন" onClick={() => setMenuOpen(false)} />
                  <List link="/answers" list="প্রশ্নোত্তর" onClick={() => setMenuOpen(false)} />
                  <List link="/essays-articles" list="প্রবন্ধ নিবন্ধ" onClick={() => setMenuOpen(false)} />
                  <List link="/about" list="পরিচিতি" onClick={() => setMenuOpen(false)} />
                  <List link="/divine-service" list="দ্বীনী খিদমায় অংশ নিন" onClick={() => setMenuOpen(false)} />
                  <List link="/contacts" list="যোগাযোগ" onClick={() => setMenuOpen(false)} />
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
