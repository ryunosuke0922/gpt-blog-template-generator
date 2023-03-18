import type { NextPage } from 'next';
import Head from 'next/head';
import '../globals.css';

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen text-slate-100">
      <Head>
        <title>プライバシーポリシー</title>
      </Head>
      <div className="mx-auto max-w-6xl p-8">
        <h1 className="mb-8 text-3xl font-bold">プライバシーポリシー</h1>
        <p className="mb-4 text-base">
          当サイトでは、Google Analytics
          を利用して、ユーザーのアクセス情報を収集しています。この情報は、サイトの利用状況の分析や改善に役立てられます。Google
          Analytics
          で収集された情報は、ユーザー個人を特定するものではありません。
        </p>

        <p className="mb-4 text-base">
          Google Analytics の利用については、以下の Google
          社のサイトをご参照ください。
          <br />
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://policies.google.com/technologies/partner-sites?hl=ja
          </a>
        </p>

        <p className="mb-4 text-base">
          また、当サイトでは、ユーザーからの問い合わせ等の際に収集した個人情報は、適切な管理の下で取り扱われます。これらの情報は、問い合わせに対する回答やサービス提供のために使用され、その目的以外では使用されません。
        </p>

        <p className="mb-4 text-base">
          当サイトには、外部リンクが含まれている場合があります。外部サイトでの情報収集については、当サイトでは責任を負いかねますので、ご利用の際は各自の判断で行ってください。
        </p>

        <p className="mb-4 text-base">
          なお、当プライバシーポリシーは、予告なしに変更されることがあります。最新の情報については、常に当ページをご確認ください。
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
