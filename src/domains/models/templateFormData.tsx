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
  '教育的',
  'エンターテイメント',
  'ビジネス',
  'ニュース',
  'ショッピング',
  '個人的',
];

export const testData: TemplateFormData[] = [
  {
    blogTheme: 'レトロゲーム',
    targetAudience: 'ゲーム愛好家',
    blogStyle: 'エンターテイメント',
    existingCategories: ['アーケード', 'コンソール', '名作'],
    popularArticles: [
      '80年代のアーケードゲームベスト10',
      '懐かしのファミコン名作ゲーム',
      'セガサターンの伝説的なゲーム',
    ],
    recentTitles: ['スーパーマリオの進化', 'メタルギアシリーズの秘密'],
    desiredKeywords: ['ファミコン', 'メガドライブ', 'ゲームボーイ'],
    tone: 'フレンドリー',
  },
  {
    blogTheme: '初心者向けプログラミング',
    targetAudience: 'プログラミング初心者',
    blogStyle: '教育的',
    existingCategories: ['Python', 'JavaScript', 'HTML/CSS'],
    popularArticles: [
      'Pythonで簡単なウェブアプリを作ってみよう',
      'JavaScript初心者向けチュートリアル',
      'HTML/CSSでオリジナルサイトを作ろう',
    ],
    recentTitles: ['Python入門', 'Reactでウェブアプリを作る'],
    desiredKeywords: ['プログラミング', '初心者', 'チュートリアル'],
    tone: '教育的',
  },
];
