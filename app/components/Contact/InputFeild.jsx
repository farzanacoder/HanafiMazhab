import React from "react";

export default function InputFeild({ label, type = "text", name }) {
  return (
    <div className="mb-3 flex flex-col">
      <label className="mb-1 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        className="border border-none p-2 rounded w-[60%] bg-[#f3f2f2] text-black focus:outline-none focus:bg-[#e8f0fe]"
      />
    </div>
  );
}
