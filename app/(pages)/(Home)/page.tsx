import React from "react";
import ArticleCompo from "@/app/components/About/ArticleCompo";
import AboutCompo from "@/app/components/AboutFooter/AboutCompo";
import MosqueDesign from "@/app/components/Common/MosqueDesign";
import Image from "next/image";
import Button from "@/app/components/Common/Button";
import AboutList1 from "@/app/components/AboutFooter/AboutList1";
import BtnCompo from "@/app/components/Common/BtnCompo";

export default function page() {
  return (
    <section className="bg-white mt-6 lg:mt-24">
      <div className="flex flex-wrap">
        <ArticleCompo
          heading="পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন"
          para="আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…"
          butn={"সম্পাদকীয়"}
        />
        <ArticleCompo
          heading="পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন"
          para="আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…"
          butn={""}
        />
        <ArticleCompo
          heading="পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন"
          para="আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…"
          butn={""}
        />
        <ArticleCompo
          heading="পাক-আফগান সীমান্ত সংঘর্ষ ‖ এখনই বন্ধ করুন, আলোচনায় বসুন"
          para="আমাদের মুসলমানদের ইজতেমায়ী পাপ ও ইসলামের শিক্ষা ভুলে যাওয়ার পরিণামস্বরূপ উম্মতে মুসলিমার দুর্দশা যেন থামার নামই নিচ্ছে না। দীর্ঘ দুই বছর পর মধ্যপ্রাচ্য থেকে যে সামান্য একটু স্বস্তির সংবাদ এসেছে, এরই মধ্যে দুটি ভ্র…"
          butn={""}
        />
      </div>

      
      {/* ------------ 3 COLUMN LAYOUT (Fully responsive) ------------ */}
      <div className="container flex lg:flex-row flex-col gap-7 mt-10">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 lg:my-0 my-16">
          <MosqueDesign />
          <AboutCompo />
          <AboutCompo />
          <AboutCompo />
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <MosqueDesign />
          <AboutCompo />
          <AboutCompo />
          <AboutCompo />
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/2 lg:w-1/3 border-none lg:border-l lg:border-gray-200 lg:pl-5">
          <MosqueDesign />

          <div className="w-[50%] my-5">
            <Image
              alt="img"
              src={"/images/cover.jpg"}
              width={200}
              height={300}
            />
          </div>

          <div className="w-full h-fit mt-14">
            <Image
              alt="img"
              src={"/images/cover1.png"}
              width={500}
              height={200}
            />
          </div>

          <div className="w-full h-fit my-7">
            <Image
              alt="img"
              src={"/images/cover1.png"}
              width={500}
              height={200}
            />
          </div>

          <MosqueDesign />

          <AboutList1 />
          <AboutList1 />
          <AboutList1 />

          <Button
            btn={"আরও »"}
            className={
              "bg-green-950 text-white py-3 px-7 text-lg mb-7 rounded-sm"
            }
          />

          <MosqueDesign />

          <div className="w-full h-fit my-7">
            <Image
              alt="img"
              src={"/images/cover1.png"}
              width={500}
              height={200}
            />
          </div>

          <BtnCompo />
        </div>
      </div>
    </section>
  );
}
