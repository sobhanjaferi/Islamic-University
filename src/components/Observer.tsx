import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  delay?: "100" | "150" | "200" | "300" | "500" | "700" | "1000" | "initial";
  observer: boolean;
};

const Observer = ({
  className,
  children,
  delay = "500",
  observer,
  ...otherProps
}: Props) => {
  return (
    <section
      className={`w-full transition-all ease-in-out ${observer ? "translate-y-0" : "translate-y-10 opacity-0"} ${className}
        ${delay === "100" && "duration-100"}
        ${delay === "150" && "duration-150"}
        ${delay === "200" && "duration-200"}
        ${delay === "300" && "duration-300"}
        ${delay === "500" && "duration-500"}
        ${delay === "700" && "duration-700"}
        ${delay === "1000" && "duration-1000"}
        ${delay === "initial" && "duration-initial"}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Observer;
