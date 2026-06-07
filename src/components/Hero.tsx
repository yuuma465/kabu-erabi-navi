import IntroSection from "./IntroSection";
import ProfileCard from "./ProfileCard";
import { assetPath, siteConfig } from "../data/site";
import type { CSSProperties } from "react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[image:var(--hero-bg-sp)] bg-cover bg-top bg-no-repeat pb-[66px] pt-[68px] md:pb-[86px] lg:bg-[image:var(--hero-bg-pc)] lg:pt-[83px]"
      style={
        {
          "--hero-bg-pc": `url(${assetPath("assets/pc/top/background.png")})`,
          "--hero-bg-sp": `url(${assetPath("assets/sp/top/background.png")})`
        } as CSSProperties
      }
    >
      <header className="absolute left-0 top-0 h-[54px] w-full bg-brand-navy md:h-[64px] lg:h-[83px]">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-end px-5 lg:hidden">
          <img
            src={assetPath("assets/sp/top/hamburger.png")}
            alt="メニュー"
            className="h-[17px] w-[22px] object-contain"
            loading="eager"
          />
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4">
        <div className="relative mt-[34px] w-full max-w-[650px] md:mt-[58px] lg:mt-[118px] lg:max-w-[1300px]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/top/main.png")} />
            <img
              src={assetPath("assets/sp/top/main.png")}
              alt={siteConfig.name}
              className="mx-auto w-[min(69vw,517px)] max-w-full object-contain lg:mx-0 lg:w-[calc(100%-230px)] xl:w-[1079px]"
              loading="eager"
            />
          </picture>
          <picture>
            <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/top/search.png")} />
            <img
              src={assetPath("assets/sp/top/search.png")}
              alt=""
              className="absolute right-[-40px] top-1/2 h-auto w-[clamp(58px,15vw,108px)] -translate-y-1/2 lg:right-0 lg:w-[211px] lg:max-w-none"
              aria-hidden="true"
              loading="eager"
            />
          </picture>
        </div>

        <picture>
          <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/top/subtitle.png")} />
          <img
            src={assetPath("assets/sp/top/subtitle.png")}
            alt={siteConfig.description}
            className="mt-7 w-[min(80vw,600px)] object-contain lg:mt-8 lg:w-[992px]"
            loading="eager"
          />
        </picture>

        <div className="mt-14 w-full max-w-[1393px] rounded-[10px] bg-white shadow-card lg:mt-[88px]">
          <div className="grid gap-8 px-5 py-9 md:px-9 lg:grid-cols-[300px_1fr] lg:gap-9 lg:px-10 lg:py-12 xl:grid-cols-[344px_1fr] xl:gap-[72px] xl:px-[120px] xl:py-[68px]">
            <ProfileCard />
            <IntroSection />
          </div>
        </div>
      </div>
    </section>
  );
}
