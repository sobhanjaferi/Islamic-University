import { ComponentProps } from "react";

type Props = ComponentProps<"section">;

const ButtonArticle = ({ className, ...otherProps }: Props) => {
  return (
    <section
      className={`w-fit flex justify-between items-center gap-2 py-3 px-5 rounded-full border border-[#0d5559] bg-[#0a3a42] text-[#2de4cc] ${className}`}
      {...otherProps}
    >
      <div className="w-2.5 aspect-square rounded-full bg-[#2dd4bf]">
        <div className="w-2.5 aspect-square rounded-full bg-[#2dd4bf] animate-ping"></div>
      </div>

      <span className="text-sm">همراه نوآوری و فناوری</span>
    </section>
  );
};

export default ButtonArticle;
