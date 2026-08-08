"use client";

import Observer from "@/components/Observer";
import useViewPort from "@/hooks/useViewPort";
import { ComponentProps, useRef, useState } from "react";
import ServiceCart from "./ServiceCart";
import Title from "@/components/Title";

type Props = ComponentProps<"section">;

const Service = ({ id, ...otherProps }: Props) => {
  const obserRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: obserRef });

  const [targetCart, setTargetCart] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClickTargetCart = (index: number): void => {
    setTargetCart((old): boolean[] => {
      const clone = [...old];

      const checkFalse = clone.map((item) => false);

      checkFalse[index] = !checkFalse[index];

      return checkFalse;
    });
  };

  return (
    <section
      ref={obserRef}
      className="p-3 sm:p-5 xl:px-10 2xl:px-40 my-15 flex flex-col justify-start items-center gap-20"
      id={id}
      {...otherProps}
    >
      <Observer
        observer={observer}
        className="flex flex-col justify-start items-center gap-5"
      >
        <Title title="خدمات صندوق" />

        <h1 className="text-center text-2xl sm:text-3xl font-bold">
          مسیر مطمئن تأمین مالی برای کسب‌وکارهای نوآور
        </h1>

        <p className="text-gray-600 text-lg text-center">
          از ایده تا تجاری‌سازی، مجموعه‌ای کامل از خدمات مالی و تخصصی برای رشد
          شرکت‌های فناور
        </p>
      </Observer>

      <Observer
        observer={observer}
        delay="1000"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full"
      >
        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[0]}
            onClick={() => handleClickTargetCart(0)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#dbf1f1] text-[#1d897d] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <path d="M2 10h20"></path>
              </svg>
            }
            title="تسهیلات مالی"
            content="اعطای تسهیلات هدفمند با شرایط ویژه برای طرح‌های فناورانه، شرکت‌های دانش‌بنیان و واحدهای نوآور دانشگاهی"
          />
        </section>

        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[1]}
            onClick={() => handleClickTargetCart(1)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#ffedd0] text-[#d97706] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            }
            title="ضمانت نامه بانکی"
            content="صدور انواع ضمانت‌نامه برای شرکت در مناقصات، پیش‌پرداخت، حسن انجام کار و تعهدات قراردادی فناوران"
          />
        </section>

        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[2]}
            onClick={() => handleClickTargetCart(2)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#e7e9ec] text-[#163a5f] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            }
            title="سرمایه گذاری خطرپذیر"
            content="مشارکت در سرمایه‌گذاری استارتاپ‌ها و شرکت‌های دانش‌بنیان با پتانسیل رشد بالا در حوزه‌های فناوری پیشرفته"
          />
        </section>

        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[3]}
            onClick={() => handleClickTargetCart(3)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#dbf1f1] text-[#0d9488] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
              </svg>
            }
            title="مشاوره تخصصی"
            content="ارائه مشاوره در زمینه تدوین طرح کسب‌وکار، ارزیابی فناوری، مدل درآمدی و آماده‌سازی برای جذب سرمایه"
          />
        </section>

        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[4]}
            onClick={() => handleClickTargetCart(4)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#ffedd0] text-[#d97706] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            }
            title="حمایت از تجاری سازی"
            content="همراهی فناوران در مسیر تبدیل ایده به محصول، ورود به بازار و توسعه مقیاس کسب‌وکار دانش‌بنیان"
          />
        </section>
        <section className="flex flex-col justify-center items-start group">
          <ServiceCart
            targetCart={targetCart[5]}
            onClick={() => handleClickTargetCart(5)}
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="aspect-<ratio> hover:p-2.5 w-15 h-15 p-3.5 bg-[#e7e9ec] text-[#163a5f] rounded-2xl Transition cursor-pointer hover:-rotate-15"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
              </svg>
            }
            title="شبکه سازی و اتصال"
            content="ایجاد ارتباط میان فناوران، سرمایه‌گذاران، مراکز رشد و نهادهای صنعتی برای توسعه همکاری‌های راهبردی"
          />
        </section>
      </Observer>
    </section>
  );
};

export default Service;
