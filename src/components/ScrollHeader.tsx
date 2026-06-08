import { useEffect, useState } from "react";
import { assetPath, siteConfig } from "../data/site";

const navItems = [
  { label: "検証済み一覧", href: "#verified-list" },
  { label: "記事一覧", href: "#article-list" }
];

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 160);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-white/72 shadow-[0_10px_30px_rgba(25,57,98,0.10)] backdrop-blur-xl transition-all duration-300 ${
        isVisible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="mx-auto flex h-[58px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 md:h-[72px] md:gap-4 md:px-8 lg:px-12">
        <a
          href="#top"
          className="flex w-[104px] shrink-0 items-center gap-1 min-[380px]:w-[124px] md:w-[200px] md:gap-1.5 lg:w-[260px]"
          aria-label={`${siteConfig.name} トップへ戻る`}
        >
          <img
            src={assetPath("assets/pc/top/main.png")}
            alt={siteConfig.name}
            className="h-auto w-[80px] object-contain min-[380px]:w-[98px] md:w-[165px] lg:w-[212px]"
            loading="eager"
          />
          <img
            src={assetPath("assets/pc/top/search.png")}
            alt=""
            className="h-auto w-[19px] object-contain min-[380px]:w-[23px] md:w-[36px] lg:w-[42px]"
            aria-hidden="true"
            loading="eager"
          />
        </a>

        <nav aria-label="スクロールナビゲーション">
          <ul className="flex items-center gap-2 text-[11px] font-black tracking-normal text-[#1d2b3f] min-[380px]:gap-4 min-[380px]:text-[13px] md:gap-9 md:text-[16px] lg:gap-12 lg:text-[18px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-sm px-1 py-2 transition-colors hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
