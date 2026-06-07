export type RankingItem = {
  id: number;
  title: string;
  description?: string;
  imageAlt: string;
};

export const rankingItems: RankingItem[] = [
  {
    id: 1,
    title: "テキストテキストテキストテキストテキスト",
    imageAlt: "おすすめランキング1位のサービス画像枠"
  },
  {
    id: 2,
    title: "テキストテキストテキストテキストテキスト",
    imageAlt: "おすすめランキング2位のサービス画像枠"
  },
  {
    id: 3,
    title: "テキストテキストテキストテキストテキスト",
    imageAlt: "おすすめランキング3位のサービス画像枠"
  }
];
