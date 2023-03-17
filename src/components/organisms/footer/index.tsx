import { FiTwitter } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black py-6 text-sm text-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8">
        <a href="/privacy-policy" className="mb-4 hover:text-gray-300 md:mb-0">
          プライバシーポリシー
        </a>
        <a
          href="https://twitter.com/ryunosuke092_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FiTwitter className="h-4 w-4 cursor-pointer text-blue-500 hover:text-blue-400" />
          <span className="ml-2">作者</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
