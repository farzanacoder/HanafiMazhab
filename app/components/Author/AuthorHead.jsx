"use client";

import Image from "next/image";

export default function AuthorHead({ title }) {
  return (
    <div className="relative w-full h-[150px] flex">
      <Image
        src="/images/banner.png"
        alt="banner"
        fill
        className="object-cover"
      />

      <div className="container relative">
        
      {/* Title + golden underline */}
      <div className="absolute left-0 bottom-6">
        <h1 className="text-3xl text-white">{title}</h1>
        <div className="w-100 h-[1px] bg-[#d2973b] mt-2"></div>
      </div>

      {/* Mosque Icon */}
        <div className="absolute left-[339px] bottom-[25px]">
        <Image
          src="https://www.alkawsar.com/static/lynx/images/mosque.svg"
          alt="mosque"
          width={70}
          height={50}
        />
      </div>
      </div>
    </div>
  );
}


  