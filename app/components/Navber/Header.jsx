import React from 'react'
import HeadingItem from '@/app/components/Navber/HeadingItem'

// Icons
import { RiInformation2Line } from "react-icons/ri";
import { BiTargetLock } from "react-icons/bi";
import { TiHeartOutline } from 'react-icons/ti';
import { PiMosqueBold } from "react-icons/pi";

export default function Header() {
  return (
   <section className='bg-white py-5'>

     <div className=" flex flex-row gap-7 container">
      <HeadingItem text={'আমাদের সম্পর্কে'} Icon={RiInformation2Line}/>
      <HeadingItem text={'লক্ষ্য ও উদ্দেশ্য'} Icon={BiTargetLock}/>
      <HeadingItem text={'দ্বীনী খিদমায় অংশ নিন'} Icon={TiHeartOutline}/>
      <HeadingItem text={'নামাজ'} Icon={PiMosqueBold}/>
    </div>
   </section>
  )
}
