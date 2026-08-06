import Button from "@/components/Button";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

type Props = ComponentProps<"section"> & {
  icon: ReactNode;
  title: string;
  content: string;
  targetCart: boolean;
};

const ServiceCart = ({
  icon,
  title,
  content,
  targetCart,
  className,
  onClick,
  ...otherProps
}: Props) => {
  return (
    <>
      <section
        className={`w-0 group-hover:w-full opacity-0 group-hover:opacity-100 Transition h-8 bg-linear-to-l from-[#fbbf24] to-[#2dd4bf] rounded-t-4xl translate-y-8 group-hover:translate-y-5 -z-10 ${className} ${targetCart ? "bg-red-400" : "bg-amber-400"}`}
        {...otherProps}
      ></section>

      <section
        className={`w-full h-80 rounded-3xl shadow hover:shadow-2xl shadow-gray-400 p-8 Transition group-hover:-translate-y-2 ${targetCart && "-translate-y-2"} bg-white flex flex-col justify-between items-start`}
        onClick={onClick}
      >
        {icon}

        <h2 className="text-black font-bold text-xl sm:text-2xl">{title}</h2>

        <p className="text-gray-600">{content}</p>

        <Button>
          <Link
            href={"/"}
            className={`text-[#1d897d] font-bold flex justify-between items-center gap-2 Transition group-hover:gap-4 ${targetCart && "gap-4"}`}
          >
            <span>جزئیات بیشتر</span> <FaArrowLeft className="mt-1" />
          </Link>
        </Button>
      </section>
    </>
  );
};

export default ServiceCart;
