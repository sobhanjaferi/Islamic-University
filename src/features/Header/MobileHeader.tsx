"use client";

import IconButton from "@/components/IconButton";
import useScroll from "@/hooks/useScroll";
import { ComponentProps, useEffect, useState } from "react";

// ========== icons ==========

import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Button from "@/components/Button";
import HeaderLogo from "./HeaderLogo";
import { Item, navItems } from "./NavItems";

type Props = ComponentProps<"section">;

const MobileHeader = ({ className, ...otherProps }: Props) => {
  const scroll = useScroll({ scrollLength: 10 });
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleClickMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  const listItems: Item[] = navItems;

  return (
    <>
      <section
        className={`${scroll && "bg-blue-950 backdrop-blur-[2px] opacity-90 fixed top-0 right-0 left-0"}
        p-3 sm:px-7 sm:py-4 transition-all duration-300 ease-linear flex justify-between items-center
        ${className}`}
        {...otherProps}
      >
        <HeaderLogo />

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
