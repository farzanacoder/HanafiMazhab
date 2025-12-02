import React from 'react'
import MosqueDesign from '../Common/MosqueDesign'
import { IoIosArrowForward } from 'react-icons/io'

export default function AboutList() {
    return (
        <div className='border-b border-gray-200'>
            <div className="flex items-center justify-start gap-4">
                <IoIosArrowForward className='text-[#f49d11]'/>
                <h1 className='my-4  lg:text-2xl text-base text-black cursor-pointer duration-200 hover:text-blue-900'>কাবুলের পথ কীভাবে বন্ধ হবে?</h1>
            </div>
            <p className='text-[12px] mb-10 lg:text-sm text-gray-500 cursor-pointer'>পেশোয়ারে হায়াতাবাদ নামে একটি বিশাল এলাকা আছে। হায়াতাবাদ আমাদেরকে খাইবার পাখতুনখা প্রদেশের গভর্নর হায়া…</p>
        </div>
    )
}
