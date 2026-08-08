"use client";

import { ComponentProps, useRef } from "react";
import HeroCart from "./HeroCart";
import useViewPort from "@/hooks/useViewPort";

type Props = ComponentProps<"section">;

const Facilities = ({ id, className, ...otherProps }: Props) => {
  const observRef = useRef<HTMLSelectElement>(null);
  const observer = useViewPort({ targetRef: observRef });

  return (
    <section
      id={id}
      className={`p-3 sm:p-5 xl:px-10 2xl:px-40 flex flex-col justify-start items-center ${className}`}
      {...otherProps}
      ref={observRef}
    >
      <HeroCart observer={observer} />
    </section>
  );
};

export default Facilities;
