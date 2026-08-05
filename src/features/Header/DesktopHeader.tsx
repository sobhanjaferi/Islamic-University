"use client";

import { ComponentProps, useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import Button from "@/components/Button";
import { navItems } from "./NavItems";
import Link from "next/link";

type Props = ComponentProps<"section">;

const DesktopHeader = ({ className, ...otherProps }: Props) => {
  const [urlPath, setUrlPath] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.hash || "#main" : "#main",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setUrlPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [urlPath]);

  return (
    <section
      className={`w-full hidden xl:flex justify-between items-center xl:px-10 2xl:px-40  ${className}`}
      {...otherProps}
    >
      <HeaderLogo />

      <nav>
        <ul className={`flex justify-between items-center text-md text-white`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative inline-block group cursor-pointer"
            >
              <Link href={item.link} onClick={() => setUrlPath(item.link)}>
                <span
                  className={`py-3 px-5 rounded-lg cursor-pointer hover:bg-[#252e3d] Transition outline-0 active:opacity-30 ${urlPath === item.link && "text-[#2cd2bd]"}`}
                >
                  {item.title}
                </span>

                <span
                  className={`${urlPath === item.link ? "absolute -bottom-1 left-4 right-4 h-0.5 bg-[#2de4cc]" : "absolute left-0 -bottom-1 w-full h-0.5 bg-[#2de4cc] scale-x-0 origin-center Transition group-hover:scale-x-70"}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="bg-linear-to-l from-[#dd7f09] to-[#f7b721] rounded-xl text-sm px-4 py-3 font-bold shadow-[#d6790892] shadow-lg Transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ff981a]">
        ثبت درخواست تسهیلات
      </Button>
    </section>
  );
};

export default DesktopHeader;
