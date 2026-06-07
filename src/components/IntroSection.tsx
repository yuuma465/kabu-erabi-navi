import { assetPath, siteConfig } from "../data/site";

const checkItems = [
  "申し込み直前で踏ん切りがつかない",
  "LINEで投資グループに誘導された"
];

export default function IntroSection() {
  return (
    <section className="border-t border-brand-blue pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0 xl:pl-[72px]">
      <div className="max-w-[699px] text-[14px] font-black leading-[2.08] tracking-normal text-[#2c2c2c] md:text-[16px] lg:text-[17px] xl:text-[20px]">
        <h1 className="text-[22px] font-black leading-tight md:text-[25px] lg:text-[26px] xl:text-[30px]">
          はじめまして、タダシです。
        </h1>

        <p className="mt-7">「この案件、本当に申し込んで大丈夫かな…」</p>
        <p className="mt-3">
          このブログを始めたのは、
          <br />
          そんな“なんとなく不安”を一人で抱え込む人を減らしたかったからです。
        </p>

        <p className="mt-8">
          ここでは、怪しいと噂される投資案件や副業情報を、
          <br />
          誰でも確認できる
          <span className="text-brand-blue">公開情報だけを頼りに調べ、</span>
          <br />
          <span className="text-brand-blue">わかった事実だけを淡々と整理</span>
          しています。
          <br />
          憶測や決めつけは書きません。
        </p>

        <div className="my-8 rounded-md bg-[#cfe0fa] px-4 py-3 text-[14px] leading-[1.8] md:px-6 md:text-[16px] lg:text-[17px] xl:text-[20px]">
          {checkItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <img
                src={assetPath("assets/pc/intro/check-icon.png")}
                alt=""
                className="mt-[6px] h-5 w-5 shrink-0 object-contain lg:h-[25px] lg:w-[25px]"
                aria-hidden="true"
                loading="lazy"
              />
              <span>「{item}」</span>
            </div>
          ))}
        </div>

        <p>
          そんな時は、
          <a href={siteConfig.lineUrl} className="text-[#0aa83c] underline-offset-4 hover:underline">
            公式LINE
          </a>
          から気軽に声をかけてください。
        </p>
        <p className="mt-5">
          案件名・URL・勧誘文のスクショなど、手元にある情報を送ってもらえれば、
          <br />
          “確認しておきたいポイント”を一緒に整理します。
        </p>
        <p className="mt-8 text-brand-blue">
          最終的に判断するのは、あなた自身。
          <br />
          ただ、その判断材料を増やすお手伝いだけは、
          <br />
          タダシがします。
        </p>
      </div>
    </section>
  );
}
