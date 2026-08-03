"use client";

import IconButton from "@/components/IconButton";
import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

// ========== icons ==========

import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Button from "@/components/Button";

interface Item {
  id: string;
  title: string;
}

const MobileHeader = () => {
  const scroll = useScroll({ scrollLength: 10 });
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleClickMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  const listItems: Item[] = [
    {
      id: v4(),
      title: "صفحه اصلی",
    },
    {
      id: v4(),
      title: "درباره صندوق",
    },
    {
      id: v4(),
      title: "خدمات",
    },
    {
      id: v4(),
      title: "تسهیلات",
    },
    {
      id: v4(),
      title: "اخبار و اطلاعیه ها",
    },
    {
      id: v4(),
      title: "مقالات",
    },
    {
      id: v4(),
      title: "تماس با ما",
    },
  ];

  return (
    <>
      <section
        className={`${scroll && "bg-blue-950 backdrop-blur-[2px] opacity-90 fixed top-0 right-0 left-0"}
        p-3 sm:px-7 sm:py-4 transition-all duration-300 ease-linear flex justify-between items-center`}
      >
        <IconButton
          onClick={handleClickMenu}
          className="bg-[#1f2530] text-white outline-0 w-12 h-12 z-10"
        >
          {isOpenMenu ? (
            <IoCloseOutline className="w-7 h-7" />
          ) : (
            <FiMenu className="w-7 h-7" />
          )}
        </IconButton>

        <section
          className="flex justify-center items-center gap-2 z-10"
          dir="rtl"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-13 bg-[#1baf9f] text-white rounded-2xl p-3 shadow-lg shadow-emerald-300/30 Transition cursor-pointer hover:-rotate-15 hover:p-2.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>

          <section className="flex flex-col gap-1">
            <h2 className="font-bold text-white">صندوق پژوهش و فناوری</h2>
            <span className="text-[12px] text-white/60 hidden sm:block">
              دانشگاه آزاد اسلامی
            </span>
          </section>
        </section>
      </section>

      <section
        className={`text-white fixed left-0 right-0 bottom-0 top-0 bg-[#060e1a] Transition flex flex-col gap-12 justify-center items-center ${!isOpenMenu && "-z-10 opacity-0"}`}
      >
        <ul
          className={`flex flex-col items-center transition-all duration-300 ${isOpenMenu ? "gap-10" : "gap-14"} text-xl font-bold`}
        >
          {listItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        <Button className="bg-linear-to-l from-[#dd7f09] to-[#f7b721] rounded-xl text-2xl px-7 py-4 shadow-[#d6790892] shadow-lg">
          ثبت درخواست تسهیلات
        </Button>
      </section>
    </>
  );
};

export default MobileHeader;
