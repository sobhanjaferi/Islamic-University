"use client";

import Button from "@/components/Button";
import ButtonArticle from "./Button";

import { FaArrowLeft } from "react-icons/fa6";
import { useRef } from "react";
import useViewPort from "@/hooks/useViewPort";
import Observer from "@/components/Observer";
import StateBar from "./StateBar";

import "@/styles/animations.css";
import HeroCarts from "./HeroCarts";

const Article = () => {
  const observRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: observRef });

  return (
    <>
      <section
        ref={observRef}
        className="w-full pt-20 flex flex-col justify-start items-start gap-8"
      >
        <ButtonArticle
          className={`transition-all duration-300 ease-in-out ${observer ? "translate-y-0" : "-translate-y-10 opacity-0"}`}
        />

        <Observer delay="500" observer={observer}>
          <h1
            className={`font-bold text-white text-[25px] max-w-133 md:text-3xl`}
          >
            حمایت مالی و تخصصی از{" "}
            <span className="bg-linear-to-l from-[#e6c134] to-[#44d2ae] text-transparent bg-clip-text">
              ایده های فناورانه
            </span>{" "}
            و شرکت های دانش بنیان
          </h1>
        </Observer>

        <Observer delay="700" observer={observer}>
          <p className={`text-gray-300 max-w-145 md:text-lg`}>
            صندوق پژوهش و فناوری دانشگاه آزاد اسلامی با هدف توسعه زیست‌بوم
            نوآوری، تأمین مالی طرح‌های فناورانه و حمایت از کسب‌وکارهای
            دانش‌بنیان فعالیت می‌کند.
          </p>
        </Observer>

        <Observer delay="1000" observer={observer}>
          <section
            className={`flex flex-col sm:flex-row justify-start items-start sm:items-center gap-5 pb-15 border-b border-gray-600 w-full md:w-9/12 lg:w-7/12`}
          >
            <Button className="bg-linear-to-l from-[#dd7f09] to-[#f7b721] rounded-xl px-6 py-3.5 font-bold shadow-[#d6790892] shadow-lg Transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ff981a] flex justify-between items-center gap-3">
              <span>ثبت درخواست تسهیلات</span> <FaArrowLeft />
            </Button>

            <Button className="px-4 py-3 border border-white text-white rounded-xl Transition hover:-translate-y-1 hover:bg-linear-to-t from-white/20 to-white/1">
              مشاهده خدمات صندوق
            </Button>
          </section>
        </Observer>

        <StateBar observer={observer} />
      </section>

      <HeroCarts observer={observer} />
    </>
  );
};

export default Article;
