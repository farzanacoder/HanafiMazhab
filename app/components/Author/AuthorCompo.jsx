"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import AuthorHead from "@/app/components/Author/AuthorHead"; 

const authorsData = [
  "মাওলানা মুহাম্মাদ ইয়াইয়া",
  "মাওলানা সারদ আহমদ",
  "মাওলানা শফীর আহমদ",
  "জহির উদ্দিন বাবর",
  "মুহাম্মাদ তুহা হুসাইন",
  "মুহাম্মাদ আব্দুল্লাহ ফাহাদ",
  "মুহাম্মাদ হাসীমুর রহমান",
  "মুহাম্মাদ এনামুল হাসান",
  "মুহাম্মাদ দিলাওয়ার বিন গাজী",
  "মুহাম্মাদ সাইফুল ইসলাম",
];

export default function AuthorCompo() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(authorsData.length / itemsPerPage);

  const currentItems = authorsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="">

      {/* Reusable Header Component */}
      <AuthorHead title="লেখকবৃন্দ" />

      <div className="container relative mx-auto py-16">
        <h2 className="text-xl font-bold mb-6">যাঁরা নিয়মিত লিখে থাকেন:</h2>

        {/* Authors List */}
        <ul className="space-y-2">
          {currentItems.map((author, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 border-b border-gray-200 py-4 hover:bg-gray-50 cursor-pointer duration-200"
            >
              <HiOutlinePencilSquare className="text-amber-500 text-2xl" />
              <span className="text-gray-700 text-lg">{author}</span>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex gap-2 mt-16 items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-amber-500 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? "bg-amber-500 text-white border-amber-500"
                  : "border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-amber-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
