"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type Props = {
  targetRef: RefObject<null | HTMLElement>;
};

const useViewPort = ({ targetRef }: Props) => {
  const [isInViewPort, setIsInViewPort] = useState<boolean>(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entrys) => {
        entrys.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewPort(true);
          }
        });
      },
      { threshold: 0.9 },
    );

    observer.observe(targetRef.current);
  }, [targetRef]);

  return isInViewPort;
};

export default useViewPort;
