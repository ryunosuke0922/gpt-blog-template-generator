/**
 * TemplateFormDataはブログ提案のための情報を表します。
 *
 * @property blogTheme - ブログのテーマ
 * @property targetAudience - ターゲットオーディエンス
 * @property blogStyle - ブログのスタイル
 * @property existingCategories - 既存のカテゴリー
 * @property popularArticles - 人気のある記事
 * @property recentTitles - 最近の記事のタイトル
 * @property desiredKeywords - 希望するキーワード
 * @property tone - コンテンツのトーン
 */

export type TemplateFormData = {
  blogTheme: string;
  targetAudience: string;
  blogStyle: string;
  existingCategories: string[];
  popularArticles: string[];
  recentTitles: string[];
  desiredKeywords: string[];
  tone: string;
};

export const TONES = [
  'フォーマル',
  'カジュアル',
  '率直',
  '堂々とした',
  'フレンドリー',
];

export const BLOG_STYLES = [
  'フォーマル',
  'インフォーマル',
  '教育的',
  'エンターテイメント',
];
