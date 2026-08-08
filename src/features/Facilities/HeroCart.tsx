import Observer from "@/components/Observer";

type Props = { observer: boolean };

const HeroCart = ({ observer }: Props) => {
  return (
    <Observer
      observer={observer}
      delay="1000"
      className="flex justify-center items-center"
    >
      <section className="min-w-74 sm:w-80 h-55 rounded-3xl bg-linear-to-tl from-[#070e1c] via-[#003c53] to-[#0e1d3b] flex flex-col justify-evenly p-2 items-center relative shadow-2xl shadow-gray-700">
        <section className="hidden w-70 h-25 rounded-2xl bg-white/90 absolute -left-20 top-5 cart1 sm:flex justify-between items-center p-2 shadow-2xl shadow-gray-700">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 p-2.5 bg-[#ceeded] text-[#2cb9a9] rounded-xl"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>

          <section className="flex flex-col justify-between items-start gap-1">
            <p className="font-bold">تسهیلات هدفمند</p>
            <p className="text-[12px] text-gray-700 text-sm">
              طراحی شده برای هر مرحله از رشد فناوری
            </p>
          </section>
        </section>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 bg-[#1baf9f] text-white rounded-3xl p-5 shadow-xl shadow-emerald-300/30 Transition cursor-pointer hover:-rotate-15 hover:p-2.5 z-10"
        >
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>
        </svg>

        <h3 className="text-white text-2xl font-bold">تسهیلات هدفمند</h3>
        <p className="text-gray-300 text-center">
          طراحی شده برای هر مرحله از رشد فناوری
        </p>

        <section className="w-55 h-25 rounded-2xl bg-white/90 absolute right-5 -bottom-10 cart3 flex justify-between items-center p-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 p-2.5 bg-[#ceeded] text-[#2cb9a9] rounded-xl"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>

          <section className="flex flex-col justify-between items-start gap-1">
            <p className="font-bold">نرخ ترجیحی</p>
            <p className="text-[12px] text-gray-700">
              شرایط ویژه دانش بنیان ها
            </p>
          </section>
        </section>
      </section>
    </Observer>
  );
};

export default HeroCart;
