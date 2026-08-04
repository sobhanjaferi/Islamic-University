import { ComponentProps } from "react";
import HeaderLogo from "./HeaderLogo";
import Button from "@/components/Button";
import { Item, navItems } from "./NavItems";

type Props = ComponentProps<"section">;

const DesktopHeader = ({ className, ...otherProps }: Props) => {
  const listItems: Item[] = navItems;

  return (
    <section
      className={`w-full hidden xl:flex justify-between items-center p-5 ${className}`}
      {...otherProps}
    >
      <HeaderLogo />

      <nav>
        <ul
          className={`flex justify-between gap-10 items-center text-md text-white`}
        >
          {listItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </nav>

      <Button className="bg-linear-to-l from-[#dd7f09] to-[#f7b721] rounded-xl text-sm px-4 py-3 font-bold shadow-[#d6790892] shadow-lg Transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ff981a]">
        ثبت درخواست تسهیلات
      </Button>
    </section>
  );
};

export default DesktopHeader;
