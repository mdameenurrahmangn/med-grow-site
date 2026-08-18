import React from "react";
const blocks = [
  {
    title: "100% Healthcare Focus",
    copy: "Every strategist, designer and developer works exclusively on healthcare accounts, from solo doctors to multispeciality hospitals.",
  },
  {
    title: "Software-Backed Growth",
    copy: "Marketing, websites, automation and Mediqora HMS work together so patient acquisition is connected to operations.",
  },
  {
    title: "Compliance-Aware Execution",
    copy: "NABH, NABL and Indian healthcare advertising norms are considered inside every campaign, page and patient communication.",
  },
  {
    title: "Transparent Economics",
    copy: "Ad spend is always passed through at zero markup, billed separately from our strategy, creative and growth execution fees.",
  },
];

const GrowthSection = () => {
  return (
    <div className="growth-panel absolute inset-0 z-30 overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.09),transparent_34%)]" />
      <div className="relative flex h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
        <div className="relative z-40 mx-auto h-full w-full max-w-7xl">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />
          </div>

          <div className="growth-cards-stage absolute inset-0 z-50 mx-auto w-full opacity-0">
            {blocks.map((block, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  className={`growth-card growth-card-${index} ${
                    isLeft
                      ? "growth-card-left left-4 text-left sm:left-8 lg:left-[8vw]"
                      : "growth-card-right right-4 text-right sm:right-8 lg:right-[8vw]"
                  } absolute bottom-[10vh] w-[min(340px,calc(100vw-2rem))] max-w-[340px] p-0 drop-shadow-[0_18px_34px_rgba(0,0,0,0.42)]`}
                  key={block.title}
                >
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-emerald-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white lg:text-3xl">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/68 lg:text-lg lg:leading-9">
                    {block.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
