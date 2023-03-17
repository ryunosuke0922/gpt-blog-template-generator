import Head from 'next/head';
import ReactGA from 'react-ga';

// TODO: Google AnalyticsのトラッキングIDを設定してください。
export default function PageHead() {
  // Google Analyticsの初期化
  ReactGA.initialize('');

  const pageTitle =
    'Chat GPTにブログ案を出してもらうテンプレート作成ツール | gpt-blog-template-generator ';
  const pageDescription =
    'ブログ記事のアイデアをChat GPTに聞く際に使うテンプレートを作成するツールです。';
  const pageImage = 'https://example.com/ogp-image.png'; // 実際のOGP画像のURLに変更してください。
  const pageUrl = 'https://example.com/template-tool'; // 実際のURLに変更してください。

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MyBlog" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:url" content={pageUrl} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
