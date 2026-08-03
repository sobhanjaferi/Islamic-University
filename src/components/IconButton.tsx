import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const IconButton = ({ className, onClick, children, ...otherProps }: Props) => {
  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={`p-2 rounded-xl cursor-pointer active:opacity-30 flex justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
