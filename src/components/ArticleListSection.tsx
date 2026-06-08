import { articlePosts } from "../data/posts";
import { postPath } from "../data/site";

function formatDate(value: string) {
  return value.replace(/-/g, ".");
}

export default function ArticleListSection() {
  return (
    <section
      id="article-list"
      className="scroll-mt-24 bg-[#f4f8fd] px-5 py-[58px] md:py-[76px] lg:py-[112px]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-black tracking-normal text-brand-blue md:text-[14px]">
            ARTICLE
          </p>
          <h2 className="mt-2 text-[28px] font-black leading-tight tracking-normal text-[#1f2d3f] md:text-[36px] lg:text-[42px]">
            記事紹介一覧
          </h2>
          <p className="mt-4 text-[14px] font-bold leading-[1.9] text-[#42536a] md:text-[16px]">
            公開情報から確認できる材料を、案件ごとに整理しています。
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {articlePosts.map((post, index) => (
            <article key={post.slug} className="h-full">
              <a
                href={postPath(post.slug)}
                className="group flex h-full flex-col rounded-lg border border-[#d8e4f2] bg-white p-5 transition-colors hover:border-brand-blue focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 md:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-sm bg-brand-pale px-3 py-1 text-[11px] font-black tracking-normal text-brand-blue">
                    {post.category}
                  </span>
                  <span className="text-[12px] font-bold text-[#6d7d8f]">{formatDate(post.publishedAt)}</span>
                </div>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-[18px] font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 break-words text-[18px] font-black leading-[1.6] tracking-normal text-[#223047] md:text-[19px]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 break-words text-[13px] font-bold leading-[1.9] text-[#536477] md:text-[14px]">
                  {post.summary}
                </p>
                <span className="mt-6 inline-flex text-[13px] font-black text-brand-blue group-hover:underline">
                  記事を読む
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
