"use client";

import Observer from "@/components/Observer";
import useViewPort from "@/hooks/useViewPort";
import { ComponentProps, ReactNode, useRef } from "react";

type Props = ComponentProps<"section"> & {
  icon: ReactNode;
  title: string;
  info: string;
};

const StateCart = ({
  icon,
  title,
  info,
  className,
  ...otherProps
}: Props): ReactNode => {
  const observRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: observRef });

  return (
    <Observer
      observer={observer}
      ref={observRef}
      className={`col-span-1 h-50 rounded-2xl border border-[#545c68] bg-[#3f4a575c] hover:bg-[#565e685c] flex flex-col justify-center items-center gap-5 cursor-pointer hover:-translate-y-2 ${className}`}
      {...otherProps}
    >
      {icon}

      <h2 className="text-4xl text-white font-bold">
        {title}{" "}
        {Number(title) >= 200 && (
          <span className="text-[#2cb9a9] font-normal">+</span>
        )}{" "}
      </h2>

      <p className="text-gray-300">{info}</p>
    </Observer>
  );
};

export default StateCart;
