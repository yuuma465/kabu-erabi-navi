import { rankingItems } from "../data/ranking";
import { assetPath, postPath } from "../data/site";

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
            <article key={item.id}>
              <a
                href={postPath(item.postSlug)}
                className="group grid cursor-pointer items-center gap-5 rounded-lg border border-transparent p-2 transition-colors hover:border-brand-blue hover:bg-[#f7fbff] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 md:grid-cols-[242px_1fr] md:gap-9 lg:grid-cols-[272px_1fr] lg:gap-[52px]"
              >
                <div
                  className="relative flex h-[126px] w-full max-w-[242px] justify-self-center overflow-hidden rounded-md border border-[#d8e4f2] bg-white md:h-[143px] lg:h-[156px] lg:max-w-[272px]"
                  role="img"
                  aria-label={item.imageAlt}
                >
                  <img
                    src={assetPath("assets/pc/top/search.png")}
                    alt=""
                    className="m-auto h-auto w-[88px] object-contain transition-transform group-hover:scale-105 md:w-[104px] lg:w-[118px]"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {item.id}
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-sm bg-white/90 px-2 py-1 text-[12px] font-black text-brand-blue shadow-[0_2px_8px_rgba(31,74,131,0.12)]">
                    検証記事
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
                  <span className="mt-3 inline-flex text-[13px] font-black text-brand-blue group-hover:underline">
                    詳しく見る
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
