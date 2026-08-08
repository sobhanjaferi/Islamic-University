"use client";

import Observer from "@/components/Observer";
import useViewPort from "@/hooks/useViewPort";
import { useRef } from "react";

type Props = {
  title: string;
  content: string;
};

const OptionCart = ({ title, content }: Props) => {
  const observRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: observRef });

  return (
    <Observer
      ref={observRef}
      observer={observer}
      delay="1000"
      className="w-full rounded-2xl border border-gray-300 p-5 flex justify-between items-start gap-3"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 bg-[#d5f5f5] text-[#1ba595] rounded-xl p-2.5 Transition cursor-pointer hover:-rotate-15 hover:p-2.5 z-10"
      >
        <path d="M20 6L9 17l-5-5"></path>
      </svg>

      <section
        className="w-full flex flex-col justify-start items-start gap-2"
        dir="rtl"
      >
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="text-gray-500">{content}</p>
      </section>
    </Observer>
  );
};

export default OptionCart;
