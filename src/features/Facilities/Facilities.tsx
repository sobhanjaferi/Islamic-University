"use client";

import { ComponentProps, useRef } from "react";
import HeroCart from "./HeroCart";
import useViewPort from "@/hooks/useViewPort";
import Title from "@/components/Title";
import Observer from "@/components/Observer";
import OptionCart from "./OptionCart";
import Button from "@/components/Button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type Props = ComponentProps<"section">;

const Facilities = ({ id, className, ...otherProps }: Props) => {
  const observRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: observRef });

  return (
    <section
      id={id}
      className={`p-3 sm:p-5 xl:px-10 2xl:px-40 flex flex-col lg:flex-row justify-start items-center gap-20 lg:gap-0 ${className}`}
      {...otherProps}
    >
      <HeroCart observer={observer} ref={observRef} />

      <section className="w-full flex flex-col justify-start items-center gap-20">
        <section className="flex flex-col justify-start items-start gap-5">
          <Observer observer={observer}>
            <Title title="تسهیلات و حمایت ها" className="w-full" />
          </Observer>

          <Observer observer={observer} delay="700">
            <h2 className="text-2xl font-bold">
              تسهیلات هدفمند برای توسعه ایده های فناورانه
            </h2>
          </Observer>

          <Observer observer={observer} delay="1000">
            <p className="text-gray-500">
              صندوق پژوهش و فناوری با ارائه بسته متنوعی از تسهیلات مالی،
              ضمانت‌نامه و خدمات تخصصی، مسیر رشد و تجاری‌سازی فناوری را برای
              شرکت‌های دانش‌بنیان و فناوران تسهیل می‌کند.
            </p>
          </Observer>
        </section>

        <section className="flex flex-col justify-start items-center gap-5 w-full">
          <OptionCart
            title="تسهیلات سرمایه در گردش"
            content="تأمین نقدینگی برای تولید، توسعه محصول و گسترش بازار شرکت‌های فناور"
          />

          <OptionCart
            title="تسهیلات توسعه فناوری"
            content="حمایت مالی از تحقیق و توسعه، نمونه‌سازی و ارتقای سطح آمادگی فناوری"
          />

          <OptionCart
            title="ضمانت نامه و اعتبار سنجی"
            content="پشتیبانی از تعهدات قراردادی و افزایش اعتبار شرکت‌ها در تعاملات تجاری"
          />
        </section>

        <section className="w-full flex justify-start items-center">
          <Button>
            <Link
              href={"/"}
              className={`text-white font-bold flex justify-between items-center gap-2 Transition group-hover:gap-4 bg-linear-to-l from-[#0d998c] to-[#19b6a4] shadow-xl shadow-[#0d998bab] py-4 px-7 rounded-2xl`}
            >
              <span>ثبت درخواست تسهیلات</span> <FaArrowLeft className="mt-1" />
            </Link>
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Facilities;
