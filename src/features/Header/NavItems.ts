import { v4 } from "uuid";

export interface Item {
  id: string;
  title: string;
}

export const navItems: Item[] = [
  {
    id: v4(),
    title: "صفحه اصلی",
  },
  {
    id: v4(),
    title: "درباره صندوق",
  },
  {
    id: v4(),
    title: "خدمات",
  },
  {
    id: v4(),
    title: "تسهیلات",
  },
  {
    id: v4(),
    title: "اخبار و اطلاعیه ها",
  },
  {
    id: v4(),
    title: "مقالات",
  },
  {
    id: v4(),
    title: "تماس با ما",
  },
];
