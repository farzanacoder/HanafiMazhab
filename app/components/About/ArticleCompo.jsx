import React from "react";
import Button from "../Common/Button";

export default function ArticleCompo({ heading, para, butn }) {
  return (
    <div
      className="
        lg:border-t lg:border-l border-b border-gray-200 
        hover:bg-[#f8f8f8] duration-300 
        p-7 mb-0 lg:mb-16
        w-full
        sm:w-1/2
        lg:w-1/4
      "
    >
      {butn ? (
        <Button btn={butn} className="my-7" />
      ) : (
        <div className="lg:my-7 my-0 h-[40px]" />
      )}

      <h1 className="lg:text-2xl text-xl text-black cursor-pointer duration-200 hover:text-amber-500">
        {heading}
      </h1>

      <p className=" my-7 text-sm text-gray-500 cursor-pointer">
        {para}
      </p>
    </div>
  );
}
