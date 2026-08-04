const HeaderLogo = () => {
  return (
    <section className="flex justify-center items-center gap-2 z-20 min-w-53">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-13 bg-[#1baf9f] text-white rounded-2xl p-3 shadow-lg shadow-emerald-300/30 Transition cursor-pointer hover:-rotate-15 hover:p-2.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>

      <section className="flex flex-col gap-1">
        <h2 className="font-bold text-white text-[15px]">
          صندوق پژوهش و فناوری
        </h2>
        <span className="text-[12px] text-white/60 hidden sm:block">
          دانشگاه آزاد اسلامی
        </span>
      </section>
    </section>
  );
};

export default HeaderLogo;
