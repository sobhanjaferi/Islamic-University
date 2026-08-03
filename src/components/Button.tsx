import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ className, children, ...otherProps }: Props) => {
  return (
    <button
      className={`cursor-pointer active:opacity-30 ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
