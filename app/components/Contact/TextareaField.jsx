import React from "react";

export default function TextareaField({ label, name }) {
  return (
    <div className="mb-3 flex flex-col">
      <label className="mb-1 font-semibold">{label}</label>
      <textarea
        name={name}
        rows={4}
        className="border border-none p-2 rounded w-[60%] bg-[#f3f2f2] text-black focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>
  );
}
