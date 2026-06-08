import Footer from "./Footer";
import { getArticleBySlug } from "../data/posts";
import { assetPath, siteConfig } from "../data/site";
import type { CSSProperties } from "react";

type ArticlePageProps = {
  slug: string;
};

function formatDate(value: string) {
  return value.replace(/-/g, ".");
}

function ArticleHeader() {
  return (
    <header className="bg-brand-navy px-4 py-3 text-white md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label={`${siteConfig.name} トップへ戻る`}>
          <img
            src={assetPath("assets/pc/top/main.png")}
            alt={siteConfig.name}
            className="h-auto w-[120px] object-contain md:w-[170px]"
            loading="eager"
          />
          <img
            src={assetPath("assets/pc/top/search.png")}
            alt=""
            className="h-auto w-[28px] object-contain md:w-[38px]"
            aria-hidden="true"
            loading="eager"
          />
        </a>
        <nav aria-label="記事ページナビゲーション">
          <ul className="flex items-center gap-4 text-[12px] font-black md:gap-7 md:text-[14px]">
            <li>
              <a className="hover:underline" href="#article-list">
                記事一覧
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#verified-list">
                検証済み一覧
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function ArticlePage({ slug }: ArticlePageProps) {
  const post = getArticleBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#282828]">
        <ArticleHeader />
        <main className="px-5 py-20">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[13px] font-black text-brand-blue">404</p>
            <h1 className="mt-3 text-[28px] font-black tracking-normal text-[#1f2d3f] md:text-[36px]">
              記事が見つかりません
            </h1>
            <p className="mt-5 text-[15px] font-bold leading-[1.9] text-[#526070]">
              URLが変わったか、記事データがまだ追加されていません。
            </p>
            <a
              href="#article-list"
              className="mt-8 inline-flex rounded-md bg-brand-blue px-6 py-3 text-[14px] font-black text-white"
            >
              記事一覧へ戻る
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#282828]">
      <ArticleHeader />
      <main>
        <article>
          <section
            className="relative overflow-hidden bg-[image:var(--article-bg)] bg-cover bg-center px-5 py-14 text-white md:py-20 lg:py-24"
            style={
              {
                "--article-bg": `linear-gradient(rgba(18, 47, 86, 0.86), rgba(18, 47, 86, 0.86)), url(${assetPath(
                  "assets/pc/top/background.png"
                )})`
              } as CSSProperties
            }
          >
            <div className="mx-auto max-w-[980px]">
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-black md:text-[14px]">
                <span className="rounded-sm bg-white px-3 py-1 text-brand-blue">{post.category}</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.updatedAt ? <span>更新 {formatDate(post.updatedAt)}</span> : null}
              </div>
              <h1 className="mt-6 max-w-[860px] break-words text-[30px] font-black leading-[1.35] tracking-normal md:text-[42px] lg:text-[52px]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-[820px] break-words text-[15px] font-bold leading-[2] md:text-[18px]">
                {post.lead}
              </p>
            </div>
          </section>

          <section className="bg-white px-5 py-12 md:py-16 lg:py-20">
            <div className="mx-auto grid max-w-[1080px] gap-9 lg:grid-cols-[1fr_320px] lg:gap-12">
              <div>
                <div className="border-l-4 border-brand-blue bg-[#f4f8fd] px-5 py-5 md:px-7">
                  <p className="text-[14px] font-bold leading-[1.9] text-[#39485c] md:text-[16px]">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-10 space-y-12">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="break-words text-[24px] font-black leading-[1.45] tracking-normal text-[#1f2d3f] md:text-[30px]">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-4 text-[15px] font-bold leading-[2] text-[#3f4d5e] md:text-[16px]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="border-l-4 border-brand-blue bg-[#f7fbff] px-4 py-3 text-[14px] font-black leading-[1.7] text-[#26384f] md:text-[15px]"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>

                <div className="mt-12 border-t border-[#d8e4f2] pt-8">
                  <h2 className="text-[22px] font-black tracking-normal text-[#1f2d3f] md:text-[28px]">
                    最終判断
                  </h2>
                  <p className="mt-4 text-[15px] font-bold leading-[2] text-[#3f4d5e] md:text-[16px]">
                    {post.conclusion}
                  </p>
                </div>
              </div>

              <aside className="lg:sticky lg:top-8 lg:self-start">
                <div className="rounded-lg border border-[#d8e4f2] bg-[#f4f8fd] p-5">
                  <h2 className="text-[18px] font-black tracking-normal text-[#1f2d3f]">確認ポイント</h2>
                  <ul className="mt-4 space-y-3">
                    {post.checklist.map((item) => (
                      <li key={item} className="flex gap-3 text-[13px] font-bold leading-[1.8] text-[#3f4d5e]">
                        <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-lg border border-[#d8e4f2] bg-white p-5">
                  <h2 className="text-[18px] font-black tracking-normal text-[#1f2d3f]">要点</h2>
                  <ul className="mt-4 space-y-3">
                    {post.highlights.map((item) => (
                      <li key={item} className="text-[13px] font-bold leading-[1.8] text-[#3f4d5e]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={siteConfig.lineUrl}
                  className="mt-5 block rounded-md bg-[#09b83e] px-5 py-4 text-center text-[14px] font-black text-white"
                >
                  公式LINEで相談する
                </a>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
