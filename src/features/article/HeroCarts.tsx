import Observer from "@/components/Observer";

const HeroCarts = ({ observer }: { observer: boolean }) => {
  return (
    <Observer
      observer={observer}
      delay="1000"
      className="hidden lg:block absolute left-15 top-55 max-w-130 h-80 -z-10"
    >
      <section className="w-52 h-22 p-4 rounded-2xl border-2 border-[#545c68] bg-[#3f4a575c] absolute left-0 top-0 cart1 flex justify-between items-center z-1">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 p-2 bg-[#aa8a086a] text-[#c5a62d] rounded-xl"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>

        <section className="flex flex-col justify-between items-start gap-1">
          <span className="text-white font-bold">ضمانت نامه</span>
          <span className="text-sm text-gray-300">پوشش کامل تعهدات</span>
        </section>
      </section>

      <section className="w-110 h-60 p-6 rounded-3xl border-2 border-[#545c68] bg-[#3f4a575c] absolute left-10 top-10 cart2 z-0 flex flex-col justify-start items-start gap-5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="p-3 w-13 text-white bg-[#10a294] rounded-2xl"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>

        <p className="text-white font-bold text-lg">تأمین مالی هوشمند</p>

        <p className="text-gray-300 text-sm">
          ارزیابی تخصصی و تخصیص منابع مالی متناسب با مرحله رشد فناوری
        </p>

        <div className="w-full h-1.5 bg-gray-700 rounded-full">
          <div className="w-9/12 h-full bg-linear-to-l from-yellow-300 to-cyan-400 rounded-full"></div>
        </div>
      </section>

      <section className="w-52 h-22 rounded-2xl border-2 border-[#545c68] bg-[#3f4a575c] absolute right-0 bottom-0 cart3 flex justify-between items-center p-4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 p-2.5 bg-[#1e474e] text-[#2cb9a9] rounded-xl"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>

        <section className="flex flex-col justify-between items-start gap-1">
          <span className="text-white font-bold">تأیید سریع</span>
          <span className="text-[12px] text-gray-300">
            بررسی در کمتر از ۷ روز
          </span>
        </section>
      </section>
    </Observer>
  );
};

export default HeroCarts;
