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

      {/* Title + golden underline */}
      <div className="absolute left-45 bottom-6">
        <h1 className="text-3xl text-white">{title}</h1>
        <div className="w-32 h-[2px] bg-[#d2973b] mt-2"></div>
      </div>

      {/* Mosque Icon */}
      <div className="absolute right-10 bottom-4">
        <Image
          src="https://www.alkawsar.com/static/lynx/images/mosque.svg"
          alt="mosque"
          width={80}
          height={60}
        />
      </div>
    </div>
  );
}


   {/* Banner */}
      <div className="relative w-full h-[150px] flex">
        <Image
          src="/images/banner.png"
          alt="banner"
          fill
          className="object-cover"
        />

        {/* Title + golden underline */}
        <div className="absolute left- bottom-6">
          <h1 className="text-3xl font-bold text-white">লেখকবৃন্দ</h1>
          <div className="w-100 h-[1px] bg-[#d2973b] mt-2"></div>
        </div>

        {/* Mosque Icon UNDER the title line */}
        <div className="absolute left-[519px] bottom-[25px]">
          <Image
            src="https://www.alkawsar.com/static/lynx/images/mosque.svg"
            alt="mosque"
            width={70}
            height={50}
          />
        </div>
      </div>