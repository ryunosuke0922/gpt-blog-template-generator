import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
