import Image from 'next/image'
import React from 'react'

export default function MosqueDesign() {
  return (
    <div className='relative w-full h-[50px] flex'>
         {/* Title + golden underline */}
        <div className="absolute left-0 bottom-6">
          <h1 className="text-xl cursor-pointer duration-500 hover:text-amber-500 font-bold text-gray-600">অন্যান্য প্রবন্ধসমূহ</h1>
          <div className="!w-[340px] lg:!w-100 h-[1px] bg-[#d2973b] mt-2"></div>
        </div>

        {/* Mosque Icon UNDER the title line */}
        <div className="absolute w-[50px] left-[300px] lg:left-[360px] bottom-[25px]">
          <Image
            src="https://www.alkawsar.com/static/lynx/images/mosque.svg"
            alt="mosque"
            width={40}
            height={20}
          />
        </div>
    </div>
  )
}
