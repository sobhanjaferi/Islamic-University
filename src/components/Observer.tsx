import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  delay: number;
  observer: boolean;
};

const Observer = ({
  className,
  children,
  delay,
  observer,
  ...otherProps
}: Props) => {
  return (
    <section
      className={`w-full transition-all duration-${delay.toString()} ease-in-out ${observer ? "translate-y-0" : "translate-y-10 opacity-0"} ${className}`}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Observer;
