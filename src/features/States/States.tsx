import { ReactNode } from "react";
import StateCart from "./StateCart";

import { FaRegClock } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";

const States = (): ReactNode => {
  return (
    <section className="px-3 sm:p-5 xl:px-10 2xl:px-40 py-15 mt-10 grid grid-cols-2  lg:grid-cols-4 gap-3 bg-[#092934]">
      <StateCart
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 p-2.5 bg-[#1e474e] text-[#2cb9a9] rounded-xl"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        }
        title="500"
        info="طرح حمایت شده"
      />

      <StateCart
        icon={
          <RxPeople className="w-12 h-12 p-2.5 bg-[#1e474e] text-[#2cb9a9] rounded-xl" />
        }
        title="200"
        info="شرکت دانش بنیان"
      />

      <StateCart
        icon={
          <LuDollarSign className="w-12 h-12 p-2.5 bg-[#1e474e] text-[#2cb9a9] rounded-xl" />
        }
        title="120"
        info="میلیارد تومان تسهیلات"
      />

      <StateCart
        icon={
          <FaRegClock className="w-12 h-12 p-2.5 bg-[#1e474e] text-[#2cb9a9] rounded-xl" />
        }
        title="15"
        info="سال تجربه تخصصی"
      />
    </section>
  );
};

export default States;
