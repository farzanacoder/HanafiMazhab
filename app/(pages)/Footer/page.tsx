import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="bg-[#0b1220]">
      <div className="flex items-center relative justify-between text-[#bdc3cb] py-7 text-sm container">
        <div className="lg:text-base text-sm ">
          <p className="mb-2">
            কপিরাইট © ২০২৪ মাসিক আলকাউসার । সম্পাদক ও প্রকাশক: আবুল হাসান
            মুহাম্মাদ আবদুল্লাহ । সর্বস্বত্ব সংরক্ষিত ।
          </p>
          <p>
            সার্কুলেশন: ৩০/১২, পল্লবী, মিরপুর-১২, ঢাকা-১২১৬, মোবাইল: ০১৯৮৪ ৯৯ ৮৮
            ২২, ইমেইল: info@alkawsar.com
          </p>
        </div>

        <Image
          src={"https://www.alkawsar.com/static/lynx/images/mosque.svg"}
          height={50}
          alt="footer"
          width={170}
          className="absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
}
