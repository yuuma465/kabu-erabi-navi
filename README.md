# 株選びナビ

React + Vite + TypeScript + Tailwind CSSで実装した静的LPです。

## ローカル確認

```bash
npm ci
npm run dev
npm run build
```

## GitHub Pages公開手順

1. GitHubリポジトリの Settings → Pages を開く。
2. Source を `GitHub Actions` に設定する。
3. `main` ブランチへpushする、または Actions から `Deploy Kabu Erabi Navi` を手動実行する。
4. ビルド後、`dist` がGitHub Pagesへdeployされる。

Viteのbase pathは `GITHUB_REPOSITORY` から自動判定します。カスタムドメインなどで変更したい場合は、Actionsの環境変数 `VITE_BASE_PATH` を設定してください。

## 差し替え項目

- LINE URL: `src/data/site.ts` の `lineUrl`
- ランキング内容: `src/data/ranking.ts`
- 記事本文: `src/data/posts.ts`
- フッターリンク先: `src/data/site.ts` の `footerLinks`

## 記事ページ

記事は `src/data/posts.ts` に追加すると、トップの「記事紹介一覧」に表示されます。詳細ページのURLは `#/posts/記事slug` 形式です。
