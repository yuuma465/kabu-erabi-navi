import { assetPath, siteConfig } from "../data/site";
import type { CSSProperties } from "react";

export default function LineCta() {
  return (
    <section
      id="article-list"
      className="relative scroll-mt-24 bg-brand-navy py-[28px] md:py-[34px] lg:py-[54px]"
      style={
        {
          "--cta-bg-pc": `url(${assetPath("assets/pc/cta/bg.png")})`,
          "--cta-bg-sp": `url(${assetPath("assets/sp/cta/bg.png")})`
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[image:var(--cta-bg-sp)] bg-cover bg-center bg-no-repeat opacity-100 lg:bg-[image:var(--cta-bg-pc)]" />
      <div className="relative mx-auto flex w-full max-w-[845px] justify-center px-4">
        <a
          href={siteConfig.lineUrl}
          className="block w-full max-w-[559px] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 lg:max-w-[845px]"
          aria-label="公式LINEに登録する"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/cta/button.png")} />
            <img
              src={assetPath("assets/sp/cta/button.png")}
              alt="一人一人寄り添ってご相談お受けします 公式LINE登録はこちら"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </picture>
        </a>
      </div>
    </section>
  );
}
