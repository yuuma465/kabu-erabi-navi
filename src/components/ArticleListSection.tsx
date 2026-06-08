import { articlePosts } from "../data/posts";
import { articleEyecatchPath, assetPath, postPath } from "../data/site";

function formatDate(value: string) {
  return value.replace(/-/g, ".");
}

export default function ArticleListSection() {
  return (
    <section
      id="article-list"
      className="scroll-mt-24 bg-white px-5 pb-[72px] pt-[54px] md:pb-[94px] md:pt-[72px] lg:pb-[120px] lg:pt-[114px]"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <img
            src={assetPath("assets/pc/ranking/crown.png")}
            alt=""
            className="mx-auto h-auto w-[min(72vw,460px)] object-contain md:w-[560px]"
            aria-hidden="true"
            loading="lazy"
          />
          <p className="mt-5 text-[13px] font-black tracking-normal text-brand-blue md:text-[14px]">
            ARTICLE
          </p>
          <h2 className="mt-2 text-[28px] font-black leading-tight tracking-normal text-[#1f2d3f] md:text-[36px] lg:text-[42px]">
            記事紹介一覧
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[14px] font-bold leading-[1.9] text-[#42536a] md:text-[16px]">
            公開情報から確認できる材料を、案件ごとに整理しています。
          </p>
        </div>

        <div className="mt-[54px] space-y-9 md:mt-[72px] md:space-y-10 lg:mt-[94px] lg:space-y-[52px]">
          {articlePosts.map((post, index) => (
            <article key={post.slug}>
              <a
                href={postPath(post.slug)}
                className="group grid cursor-pointer items-center gap-5 rounded-lg border border-transparent p-2 transition-colors hover:border-brand-blue hover:bg-[#f7fbff] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 md:grid-cols-[242px_1fr] md:gap-9 lg:grid-cols-[272px_1fr] lg:gap-[52px]"
              >
                <div
                  className="relative flex h-[126px] w-full max-w-[242px] justify-self-center overflow-hidden rounded-md border border-[#d8e4f2] bg-white md:h-[143px] lg:h-[156px] lg:max-w-[272px]"
                  role="img"
                  aria-label={`${post.title}のアイキャッチ画像`}
                >
                  <img
                    src={assetPath(articleEyecatchPath)}
                    alt=""
                    className="m-auto h-auto w-[88px] object-contain transition-transform group-hover:scale-105 md:w-[104px] lg:w-[118px]"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-sm bg-white/90 px-2 py-1 text-[12px] font-black text-brand-blue shadow-[0_2px_8px_rgba(31,74,131,0.12)]">
                    {post.category}
                  </span>
                </div>

                <div className="text-center md:text-left">
                  <div className="text-[12px] font-bold text-[#6d7d8f]">{formatDate(post.publishedAt)}</div>
                  <h3 className="mt-2 break-words text-[17px] font-black leading-[1.8] text-[#262626] md:text-[18px] lg:text-[20px]">
                    {post.title}
                  </h3>
                  <p className="mt-2 break-words text-[13px] font-bold leading-[1.9] text-[#4b4b4b] md:text-[14px] lg:text-[15px]">
                    {post.summary}
                  </p>
                  <span className="mt-3 inline-flex text-[13px] font-black text-brand-blue group-hover:underline">
                    記事を読む
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
