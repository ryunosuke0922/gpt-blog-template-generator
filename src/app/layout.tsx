import React from 'react';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageTitle =
    'Chat GPTにブログ案を出してもらうテンプレート作成ツール | gpt-blog-template-generator ';
  const pageDescription =
    'ブログ記事のアイデアをChat GPTに聞く際に使うテンプレートを作成するツールです。';
  const pageImage =
    'https://gpt-blog-template-generator.vercel.app/ogp-image.png';
  const pageUrl = 'https://gpt-blog-template-generator.vercel.app/';

  return (
    <html lang="ja">
      <head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:url" content={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          async
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XTWL3H3ZLS`}
        />
        <Script strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XTWL3H3ZLS', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
