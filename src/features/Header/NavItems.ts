import { v4 } from "uuid";

export interface Item {
  id: string;
  title: string;
  link: string;
}

export const navItems: Item[] = [
  {
    id: v4(),
    title: "صفحه اصلی",
    link: "#main",
  },
  {
    id: v4(),
    title: "درباره صندوق",
    link: "#about",
  },
  {
    id: v4(),
    title: "خدمات",
    link: "#services",
  },
  {
    id: v4(),
    title: "تسهیلات",
    link: "#facilities",
  },
  {
    id: v4(),
    title: "اخبار و اطلاعیه ها",
    link: "#news",
  },
  {
    id: v4(),
    title: "مقالات",
    link: "#articles",
  },
  {
    id: v4(),
    title: "تماس با ما",
    link: "#contact",
  },
];
