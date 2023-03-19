import { FiTwitter, FiGithub } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-transparent py-12 text-xs text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
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
          <span className="ml-1">作者</span>
        </a>
        <a
          href="https://github.com/ryunosuke0922/gpt-blog-template-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FiGithub className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-400" />
          <span className="ml-1">Repository</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
