import React from 'react'
import InputFeild from '@/app/components/Contact/InputFeild'
import TextareaField from '@/app/components/Contact/TextareaField'

export default function page() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">অনুসন্ধান এর ধরণ:</h1>

      <form>

        <InputFeild label="বিষয়:" name="subject" type="text" />
        <InputFeild label="নাম:" name="name" type="text" />
        <InputFeild label="ঠিকানা:" name="address" type="text" />
        <InputFeild label="গ্রাহক/এজেন্ট নম্বর:" name="agentNumber" type="number" />
        <InputFeild label="ইমেইল:" name="email" type="email" />
        <InputFeild label="মোবাইল নম্বর:" name="phone" type="tel" />

        <TextareaField label="বার্তা:" name="message" />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          জমা দিন
        </button>

      </form>
    </div>
  )
}
