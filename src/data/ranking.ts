export type RankingItem = {
  id: number;
  title: string;
  description?: string;
  imageAlt: string;
  postSlug: string;
};

export const rankingItems: RankingItem[] = [
  {
    id: 1,
    title: "AI自動投資のLINE勧誘で確認したいポイント",
    description: "登録前に見るべき運営者情報、利益表現、出金条件を整理しました。",
    imageAlt: "AI自動投資の検証記事",
    postSlug: "ai-auto-investment-line"
  },
  {
    id: 2,
    title: "急騰銘柄配信サービスを比較する前のチェック項目",
    description: "実績画像だけで判断せず、根拠と料金体系を確認するための基準です。",
    imageAlt: "急騰銘柄配信サービスの検証記事",
    postSlug: "stock-pick-service-check"
  },
  {
    id: 3,
    title: "投資コミュニティ参加前に見ておきたい公開情報",
    description: "SNS広告、特商法表記、誘導先の整合性を短時間で確認します。",
    imageAlt: "投資コミュニティの検証記事",
    postSlug: "investment-community-public-info"
  }
];
