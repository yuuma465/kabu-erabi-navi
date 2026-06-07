import { footerLinks, siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy px-5 pb-7 pt-[90px] text-white md:pt-[120px] lg:pb-[38px] lg:pt-[174px]">
      <div className="mx-auto max-w-[1240px] border-t border-white/70 pt-6 lg:pt-8">
        <div className="flex flex-col gap-5 text-[11px] font-bold md:flex-row md:items-center md:justify-between lg:text-[12px]">
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-white/90 hover:text-white hover:underline" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-white/90">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
