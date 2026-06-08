import { assetPath } from "../data/site";

export default function ProfileCard() {
  return (
    <aside className="mx-auto flex w-full max-w-[588px] flex-col items-center lg:max-w-[300px] xl:max-w-[344px]">
      <div className="flex w-full items-center gap-4 lg:flex-col lg:gap-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={assetPath("assets/pc/profile/icon.png")} />
          <source
            media="(max-width: 1023px)"
            srcSet={`${assetPath("assets/sp/profile/icon.png")} 1x, ${assetPath("assets/pc/profile/icon.png")} 2x`}
          />
          <img
            src={assetPath("assets/sp/profile/icon.png")}
            alt="サイト運営者 タダシのプロフィール画像"
            className="h-[104px] w-[104px] rounded-full border border-brand-blue object-cover md:h-[138px] md:w-[138px] lg:h-[236px] lg:w-[236px] xl:h-[274px] xl:w-[274px]"
            loading="eager"
          />
        </picture>
        <div className="min-w-0 flex-1 text-center lg:w-full">
          <div className="mt-0 bg-brand-blue px-4 py-1.5 text-[13px] font-black tracking-normal text-white md:text-[16px] lg:mt-6 lg:text-[18px] xl:mt-7 xl:text-[20px]">
            サイト運営者
          </div>
          <h2 className="mt-3 text-[25px] font-black leading-none tracking-normal text-[#1f1f1f] md:text-[30px] lg:mt-6 lg:text-[34px] xl:mt-7 xl:text-[39px]">
            タダシ
          </h2>
          <p className="mt-2 text-[12px] font-black leading-relaxed md:text-[14px] lg:mt-3 lg:text-[15px] xl:text-[17px]">
            投資詐欺検証ラボ　編集長
          </p>
        </div>
      </div>
      <p className="mt-5 w-full text-[13px] font-bold leading-[2] tracking-normal text-[#303030] md:text-[14px] lg:mt-5 lg:text-[15px] xl:text-[16px]">
        元IT会社員。家族がSNS広告の「AI自動投資」に30万を投じ、出金できなくなった経験から、投資詐欺検証ラボを立ち上げました
      </p>
    </aside>
  );
}
