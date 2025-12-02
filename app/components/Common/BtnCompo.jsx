import React from 'react'
import Button from '../Common/Button'
import MosqueDesign from './MosqueDesign'
import Image from 'next/image'

export default function BtnCompo() {
    return (
        <>
            <div className='border-b border-gray-200 pb-4'>
                <MosqueDesign />

                <Button btn={'ঈমান-আকাইদ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'ঈমান-আকাইদ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'ঈমান-আকাইদ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'একটি ভুল নাম'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'শিক্ষা/সিলেবাস'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'আলকুদস সংখ্যা'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'নামায-সালাত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'তাহারাত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'রমযান প্রসঙ্গ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'হজ্জ্ব'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'যাকাত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'মুয়ামালাত-লেনদেন'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'তাসাওউফ-আত্মশুদ্ধি'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'ইসলামী অর্থনীতি'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'দাওয়াত ও তাবলীগ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'শেয়ার ব্যবসা'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'শবে বরাত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'শবে মিরাজ'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'ঈদ নারী'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'অধিকার'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'বিদআত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />
                <Button btn={'সীরাত'} className={'!bg-[#eeeeee] !py-1 mb-3 mr-3 hover:!bg-[#b6b6b6] duration-500 cursor-pointer !text-black rounded-sm'} />

            </div>
            <Button btn={'আরও »'} className={'bg-green-950 text-white py-3 px-7 text-lg my-7 rounded-sm'} />
            <MosqueDesign />
           
           <div className="flex flex-wrap gap-4 mb-60" >
             <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
              <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
              <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
              <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
            <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
            <div className='w-[30%] '>
                <Image src={'/images/cover.jpg'} width={200} height={300} />
            </div>
           </div>
        </>

    )
}