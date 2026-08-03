"use client";

import { useEffect, useState } from "react";

type Props = {
  scrollLength: number;
};

const useScroll = ({ scrollLength }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void =>
      window.scrollY >= scrollLength ? setScroll(true) : setScroll(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  return scroll;
};

export default useScroll;
