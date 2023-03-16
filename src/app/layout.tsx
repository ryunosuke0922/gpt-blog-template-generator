export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <h1>ヘッダー</h1>
        {children}
      </body>
    </html>
  );
}
