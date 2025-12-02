import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '../Common/Button'

export default function AboutList1() {
    return (
        <div className='border-b border-gray-200 mb-7'>
            <div className="flex items-start justify-start gap-4">
                
                <div className='flex flex-col justify-center items-center'>
                    <span className=' text-2xl border-gray-200'>১</span>
                    <div className='w-10 h-1 bg-gray-500'></div>
                </div>

            <div>
                <Button btn={'শা‘বান-রমযান ১৪৩৮'} className={' text-white !bg-[#d2973b] text-sm rounded-sm'} />
                <h1 className='my-4  lg:text-xl text-base text-black cursor-pointer duration-200 hover:text-blue-900'>সমগ্র বিশ্বে একই দিনে চান্দ্রমাসের সূচনা : একই দিনে রোযা ও ঈদ</h1>
                <p className='text-[12px] mb-10 lg:text-sm text-gray-500 cursor-pointer'>মাওলানা মুহাম্মাদ আব্দুল মালেক</p>
            </div>

            </div>
        </div>
    )
}
