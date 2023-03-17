/**
 * TemplateFormData は、ブログ提案のための入力情報を表します。
 *
 * @property blogTheme - ブログのテーマ
 * @property targetAudience - ターゲットオーディエンス
 * @property blogStyle - ブログのスタイル
 * @property existingCategories - 既存のカテゴリー
 * @property popularArticles - 人気のある記事
 * @property recentTitles - 最近の記事のタイトル
 * @property desiredKeywords - 希望するキーワード
 * @property tone - コンテンツのトーン
 * @property additionalNotes - 追加のメモやコメント
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
  additionalNotes: string;
};

export function convertFormDataToText(formData: TemplateFormData) {
  const existingCategories = (formData.existingCategories || [])
    .filter((category) => category.trim() !== '')
    .map((category) => `  - ${category}`)
    .join('\n');

  const popularArticles = (formData.popularArticles || [])
    .filter((article) => article.trim() !== '')
    .map((article) => `  - ${article}`)
    .join('\n');

  const recentTitles = (formData.recentTitles || [])
    .filter((title) => title.trim() !== '')
    .map((title) => `  - ${title}`)
    .join('\n');

  const desiredKeywords = (formData.desiredKeywords || [])
    .filter((keyword) => keyword.trim() !== '')
    .map((keyword) => `  - ${keyword}`)
    .join('\n');

  return `
あなたは、ブログのタイトル、構成を考えるAIです。

これらの条件をもとに、ブログのタイトル、構成を考えてください。
最高の結果を出力してください。

# 既存のブログの設定

## ブログのテーマ
  - ${formData.blogTheme}

## ブログのターゲット
  - ${formData.targetAudience}

## ブログのスタイル
  - ${formData.blogStyle}

## ブログのカテゴリー
${existingCategories}

## 人気の記事
${popularArticles}

## 最近の記事(これらと違う記事を出力してください)
${recentTitles}

## 使用したいキーワード
${desiredKeywords}

## ブログのトーン
  - ${formData.tone}

## その他の要求事項
  - ${formData.additionalNotes}

# 出力ルール

3つの案を出力してください。
以下のルールで出力してください。

---

### 1. ブログタイトル :
- 使用キーワード :
- 記事の概要 :
- 導入部分 :
### 2. ブログタイトル :
- 使用キーワード :
- 記事の概要 :
- 導入部分 :
### 3. ブログタイトル :
- 使用キーワード :
- 記事の概要 :
- 導入部分 :

2は、1と違うようなタイトルを出力してください。
3は、今までと全く違う内容を出力してください。

以上、出力してください。
`;
}

export const testData: TemplateFormData[] = [
  {
    blogTheme: 'ヨガとメンタルヘルス',
    targetAudience: 'ストレスを抱えるビジネスパーソン',
    blogStyle: 'アドバイス',
    existingCategories: ['ヨガの基本', '瞑想', '呼吸法'],
    popularArticles: [
      'デスクワーク中のストレッチ方法',
      'ヨガでストレス解消！オススメポーズ',
      '毎日の瞑想が心に与える効果とは',
    ],
    recentTitles: [
      'コロナ禍でのリモートワークにおすすめのヨガポーズ',
      'メンタルヘルスケアに効果的な呼吸法',
    ],
    desiredKeywords: ['ストレス解消', 'ヨガ', 'メンタルヘルス'],
    tone: '親身なアドバイス',
    additionalNotes:
      '記事では、読者が実践しやすい具体的なアドバイスを交え、ストレス解消やメンタルヘルスの重要性を訴求してください。',
  },
  {
    blogTheme: '料理と食文化',
    targetAudience: 'グルメな食通',
    blogStyle: 'レビュー',
    existingCategories: ['和食', '洋食', '中華料理'],
    popularArticles: [
      '東京の絶品グルメスポット',
      '最近話題のミシュラン星付き店',
      '家で手軽に作れる本格派レシピ',
    ],
    recentTitles: [
      'オシャレなカフェ巡りの最新トレンド',
      '料理人が選んだ旬の食材レシピ',
    ],
    desiredKeywords: ['グルメ', 'レストラン', '食材'],
    tone: '批評的なレビュー',
    additionalNotes:
      '記事では、料理やレストランの特徴や味わいについて深く掘り下げ、読者にとって役立つ情報を提供してください。',
  },
  {
    blogTheme: 'SEO',
    targetAudience: 'ウェブマーケター',
    blogStyle: '情報提供',
    existingCategories: ['キーワードリサーチ', 'ページ最適化', 'バックリンク'],
    popularArticles: [
      'Googleアルゴリズムの変更点',
      'キーワードリサーチのコツ',
      'バックリンクの重要性とは',
    ],
    recentTitles: ['SEO対策の基礎', '最新のGoogleアルゴリズム'],
    desiredKeywords: ['SEO', '検索エンジン最適化', 'ウェブマーケティング'],
    tone: '専門的',
    additionalNotes:
      '記事では、ウェブマーケターにとって役立つ情報を提供し、実践的なSEO対策について具体的に述べてください。',
  },
  {
    blogTheme: '不動産投資',
    targetAudience: '投資家',
    blogStyle: '情報提供',
    existingCategories: ['物件選び', '収益物件の管理', '税金・法律'],
    popularArticles: [
      '不動産投資の始め方',
      '収益物件の選び方',
      '税金や法律に関する基礎知識',
    ],
    recentTitles: ['不動産市場の最新動向', '高収益物件の探し方'],
    desiredKeywords: ['不動産投資', '収益物件', '物件選び'],
    tone: '専門的',
    additionalNotes:
      '記事では、投資家にとって役立つ情報を提供し、収益物件の探し方や資金管理、税金や法律に関する注意点など、実践的なアドバイスを述べてください。',
  },
  {
    blogTheme: '小説の書き方',
    targetAudience: '小説を書きたい人',
    blogStyle: '教育的',
    existingCategories: ['ストーリー', 'キャラクター', 'プロット'],
    popularArticles: [
      '小説の基本的な書き方',
      'キャラクター作成のコツ',
      'ストーリー展開のためのテクニック',
    ],
    recentTitles: ['小説家になるために必要なこと', '物語の練り方'],
    desiredKeywords: ['小説', 'ライティング', 'ストーリー'],
    tone: '教育的',
    additionalNotes: '記事では、丁寧でわかりやすい説明を心掛けてください。',
  },
  {
    blogTheme: 'Webサイト制作の基礎',
    targetAudience: 'Webサイト制作初心者',
    blogStyle: '教育的',
    existingCategories: ['HTML', 'CSS', 'JavaScript'],
    popularArticles: [
      'HTML入門',
      'CSSでスタイリングする方法',
      'JavaScriptの基本的な機能',
    ],
    recentTitles: ['レスポンシブWebデザインの基礎', 'jQueryの使い方'],
    desiredKeywords: ['Webサイト', '制作', 'HTML/CSS'],
    tone: '教育的',
    additionalNotes:
      '記事では、わかりやすい言葉を使って、初心者にも分かりやすく説明してください。',
  },
];
