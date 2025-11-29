import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import List from "../Common/List";
import { IoIosArrowDown } from "react-icons/io";


export default function Nav() {
  return (
    <section className="bg-[#000000]">
      <div className=" container flex lg:flex-row flex-col items-center justify-between">
        <div>
          <Image src={"/images/logo.jpg"} height={200} width={349} alt="logo" />
        </div>

        <ul className="flex space-x-6 text-white justify-center">
          <List list="মূলপাতা" />
          <List list="সকল সংখ্যা" Icon={IoIosArrowDown}/>
          <List list="বিভাগ"  Icon={IoIosArrowDown}/>
          <List list="লেখকবৃন্দ"  Icon={IoIosArrowDown}/>
          <List list="আপনার জিজ্ঞাসা"  Icon={IoIosArrowDown}/>
          <List list="পরিচিতি" />
          <List list="যোগাযোগ"  Icon={IoIosArrowDown}/>
        </ul>

        <div className="hover:text-amber-500 active:scale-[1.1] text-2xl cursor-pointer text-white">
          <FaSearch />
        </div>
      </div>
    </section>
  );
}
