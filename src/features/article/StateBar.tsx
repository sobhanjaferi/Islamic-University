import Observer from "@/components/Observer";
import { ComponentProps, useEffect, useState } from "react";

type Props = ComponentProps<"section"> & {
  observer: boolean;
};

const StateBar = ({ observer, className, ...otherProps }: Props) => {
  const [counter, setCounter] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((old) => {
        const clone = [...old];

        if (clone[0] < 500) {
          clone[0] += 1;
        }

        if (clone[1] < 200) {
          clone[1] += 1;
        }

        if (clone[2] < 15) {
          clone[2] += 1;
        }

        return clone;
      });
    }, 1);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <Observer
      delay="1000"
      observer={observer}
      className={`${className}`}
      {...otherProps}
    >
      <section className="grid grid-cols-2 gap-7 sm:grid-cols-3 w-fit">
        <section className="flex flex-col justify-between items-start gap-2">
          <p className="font-bold text-2xl text-white">{counter[0]}+</p>
          <p className="text-gray-400">طرح همایت شده</p>
        </section>

        <section className="flex flex-col justify-between items-start gap-2">
          <p className="font-bold text-2xl text-white">{counter[1]}+</p>
          <p className="text-gray-400">شرکت دانش بنیان</p>
        </section>

        <section className="flex flex-col justify-between items-start gap-2">
          <p className="font-bold text-2xl text-white">{counter[2]}</p>
          <p className="text-gray-400">سال تجربه تخصصی</p>
        </section>
      </section>
    </Observer>
  );
};

export default StateBar;
