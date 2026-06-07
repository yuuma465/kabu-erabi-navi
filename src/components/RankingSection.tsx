import { rankingItems } from "../data/ranking";
import { assetPath } from "../data/site";

export default function RankingSection() {
  return (
    <section
      id="verified-list"
      className="scroll-mt-24 bg-white px-5 pb-[94px] pt-[54px] md:pb-[120px] md:pt-[72px] lg:pb-[160px] lg:pt-[114px]"
    >
      <div className="mx-auto max-w-[900px]">
        <h2 className="flex justify-center">
          <picture>
            <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/ranking/heading.png")} />
            <img
              src={assetPath("assets/sp/ranking/heading.png")}
              alt="おすすめランキング"
              className="h-auto w-[min(78vw,420px)] object-contain lg:w-[792px]"
              loading="lazy"
            />
          </picture>
        </h2>

        <div className="mt-[54px] space-y-9 md:mt-[72px] md:space-y-10 lg:mt-[94px] lg:space-y-[52px]">
          {rankingItems.map((item) => (
            <article
              key={item.id}
              className="grid items-center gap-5 md:grid-cols-[242px_1fr] md:gap-9 lg:grid-cols-[272px_1fr] lg:gap-[52px]"
            >
              <div
                className="relative h-[126px] w-full max-w-[242px] justify-self-center bg-[#303030] md:h-[143px] lg:h-[156px] lg:max-w-[272px]"
                role="img"
                aria-label={item.imageAlt}
              >
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                  {item.id}
                </span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="break-words text-[17px] font-black leading-[1.8] text-[#262626] md:text-[18px] lg:text-[20px]">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-2 break-words text-[13px] font-bold leading-[1.9] text-[#4b4b4b] md:text-[14px] lg:text-[15px]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
