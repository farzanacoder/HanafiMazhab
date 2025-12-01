import React from 'react'
import Button from '../Common/Button'

export default function ArticleCompo({ heading, para, butn }) {
  return (
<div className='border-t border-l border-b border-gray-200 hover:bg-[#f8f8f8] duration-300 w-[25%] mb-16 p-7'>

      {
        butn ? (
          <Button btn={butn} className="my-7" />
        ) : (
          <div className="my-7 h-[40px]" /> 
        )
      }

      <h1 className='lg:text-2xl text-base text-black cursor-pointer duration-200 hover:text-amber-500'>
        {heading}
      </h1>

      <p className='text-[12px] my-7 lg:text-sm text-gray-500 cursor-pointer'>
        {para}
      </p>
    </div>
  )
}
