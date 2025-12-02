import React from 'react'
import ArticleCompo from '@/app/components/About/ArticleCompo'
import AboutCompo from '@/app/components/AboutFooter/AboutCompo'
import MosqueDesign from '@/app/components/Common/MosqueDesign'
import Image from 'next/image'
import Button from '@/app/components/Common/Button'
import AboutList1 from '@/app/components/AboutFooter/AboutList1'
import BtnCompo from '@/app/components/Common/BtnCompo'


export default function page() {
  return (
    <section className='bg-white'>
      <div className="flex">
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' butn='সম্পাদকীয়' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
      </div>

      <div className='container flex gap-7'>
        <div className='w-[30%]'>
          <MosqueDesign />
          <AboutCompo />
          <AboutCompo />
          <AboutCompo />
        </div>

        <div className='w-[30%]'>
          <MosqueDesign />
          <AboutCompo />
          <AboutCompo />
          <AboutCompo />
        </div>

        <div className='w-[30%] border-l border-gray-200 pl-5'>
          <MosqueDesign />
          <div className='w-[50%] '>
            <Image src={'/images/cover.jpg'} width={200} height={300} />
          </div>

          <div className='w-full h-fit mt-14'>
            <Image src={'/images/cover1.png'} width={500} height={200} />
          </div>
          <div className='w-full h-fit my-7'>
            <Image src={'/images/cover1.png'} width={500} height={200} />
          </div>

          <MosqueDesign />
          <AboutList1 />
          <AboutList1 />
          <AboutList1 />

          <Button btn={'আরও »'} className={'bg-green-950 text-white py-3 px-7 text-lg mb-7 rounded-sm'} />
          <MosqueDesign />
          <div className='w-full h-fit my-7'>
            <Image src={'/images/cover1.png'} width={500} height={200} />
          </div>

          <BtnCompo/>

        </div>
      </div>
    </section>
  )
}
