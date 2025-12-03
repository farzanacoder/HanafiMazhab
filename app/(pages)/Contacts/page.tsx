"use client";
import React, { useState } from "react";
import InputFeild from "@/app/components/Contact/InputFeild";
import TextareaField from "@/app/components/Contact/TextareaField";
import ReCAPTCHA from "react-google-recaptcha";

export default function Page() {
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captcha) {
      alert("reCAPTCHA verify করুন!");
      return;
    }

    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: captcha }),
    });

    const data = await res.json();

    if (!data.success) {
      alert("Captcha verification failed!");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-5">অনুসন্ধান এর ধরণ:</h1>

      <form onSubmit={handleSubmit}>
        <InputFeild label="বিষয়:" name="subject" type="text" />
        <InputFeild label="নাম:" name="name" type="text" />
        <InputFeild label="ঠিকানা:" name="address" type="text" />
        <InputFeild label="গ্রাহক/এজেন্ট নম্বর:" name="agentNumber" type="number" />
        <InputFeild label="ইমেইল:" name="email" type="email" />
        <InputFeild label="মোবাইল নম্বর:" name="phone" type="tel" />

        <TextareaField label="বার্তা:" name="message" />

        <div className="my-5">
          <ReCAPTCHA
            sitekey="6Le4Nh8sAAAAAH3imhi7RWV8vE1X8zmf_mWzvNnX"
            onChange={(val) => setCaptcha(val)}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          জমা দিন
        </button>
      </form>
    </div>
  );
}
