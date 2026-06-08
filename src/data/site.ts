export const siteConfig = {
  name: "株選びナビ",
  description: "初心者から中上級者まで使える株・投資の比較サイト",
  siteUrl: "https://kabuerabi.com/",
  lineUrl: "https://line.me/R/ti/p/@example",
  copyright: "Copyright © 2026 株選びナビ. All rights reserved."
};

export const articleEyecatchPath = "assets/pc/top/search.png";

export const footerLinks = [
  { label: "ホーム", href: "#top" },
  { label: "記事一覧", href: "#article-list" },
  { label: "特定商取引法に基づく表記", href: "#" },
  { label: "利用規約", href: "#" },
  { label: "プライバシーポリシー", href: "#" }
];

export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function postPath(slug: string) {
  return `#/posts/${encodeURIComponent(slug)}`;
}
