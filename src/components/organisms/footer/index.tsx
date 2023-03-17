import { FiTwitter } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black py-8 text-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8">
        <a
          href="/privacy-policy"
          className="mb-4 text-sm hover:text-gray-300 md:mb-0"
        >
          プライバシーポリシー
        </a>
        <div className="flex items-center">
          <FiTwitter className="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-400" />
          <span className="ml-2 text-sm">作者: ryunosuke092_</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
