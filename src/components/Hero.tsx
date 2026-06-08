import IntroSection from "./IntroSection";
import ProfileCard from "./ProfileCard";
import { assetPath, siteConfig } from "../data/site";
import type { CSSProperties } from "react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[image:var(--hero-bg-sp)] bg-cover bg-top bg-no-repeat pb-[66px] pt-[68px] md:pb-[86px] lg:bg-[image:var(--hero-bg-pc)] lg:pt-[83px]"
      style={
        {
          "--hero-bg-pc": `url(${assetPath("assets/pc/top/background.png")})`,
          "--hero-bg-sp": `image-set(url(${assetPath("assets/sp/top/background.png")}) 1x, url(${assetPath(
            "assets/pc/top/background.png"
          )}) 2x)`
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
            <source
              media="(max-width: 1023px)"
              srcSet={`${assetPath("assets/sp/top/main.png")} 1x, ${assetPath("assets/pc/top/main.png")} 2x`}
            />
            <img
              src={assetPath("assets/sp/top/main.png")}
              alt={siteConfig.name}
              className="mx-auto w-[min(69vw,517px)] max-w-full object-contain lg:mx-0 lg:w-[calc(100%-230px)] xl:w-[1079px]"
              loading="eager"
            />
          </picture>
          <picture className="hidden lg:block">
            <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/top/search.png")} />
            <img
              src={assetPath("assets/sp/top/search.png")}
              alt=""
              className="absolute right-0 top-1/2 h-auto w-[211px] max-w-none -translate-y-1/2"
              aria-hidden="true"
              loading="eager"
            />
          </picture>
        </div>

        <picture className="mt-5 flex w-full max-w-[517px] justify-end pr-6 lg:hidden">
          <img
            src={assetPath("assets/pc/top/search.png")}
            alt=""
            className="h-auto w-[clamp(76px,23vw,108px)] object-contain"
            aria-hidden="true"
            loading="eager"
          />
        </picture>

        <p className="mt-7 flex w-full max-w-[600px] items-center justify-center gap-3 text-center text-[15px] font-black leading-[1.7] text-brand-blue md:text-[18px] lg:mt-8 lg:max-w-[992px] lg:text-[24px]">
          <span className="h-px w-9 shrink-0 bg-brand-blue md:w-16" aria-hidden="true" />
          <span>{siteConfig.description}</span>
          <span className="h-px w-9 shrink-0 bg-brand-blue md:w-16" aria-hidden="true" />
        </p>

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
