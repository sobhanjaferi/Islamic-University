import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  title: string;
};

const Title = ({ title, className, ...otherProps }: Props) => {
  return (
    <section
      className={`text-[#2fa398] flex items-center gap-2 ${className}`}
      {...otherProps}
    >
      <div className="w-5 h-0.5 bg-[#2fa398] mt-1.5"></div>

      <span className="font-bold">{title}</span>
    </section>
  );
};

export default Title;
