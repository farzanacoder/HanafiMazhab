import React from 'react'
import ArticleCompo from '@/app/components/About/ArticleCompo'
import AboutCompo from '@/app/components/AboutFooter/AboutCompo'
import MosqueDesign from '@/app/components/Common/MosqueDesign'


export default function page() {
  return (
    <section className='bg-white'>
      <div className="flex">
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' butn='সম্পাদকীয়' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
        <ArticleCompo heading='পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন' para='আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…' />
      </div>

      <div className='container flex gap-4'>
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
      </div>
    </section>
  )
}
