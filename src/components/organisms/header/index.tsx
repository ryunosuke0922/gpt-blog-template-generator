const Header = (): JSX.Element => {
  return (
    <header className="bg-black text-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M17 10a7 7 0 10-14 0 7 7 0 0014 0zm3 0a10 10 0 10-20 0 10 10 0 0020 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg font-bold">
              gpt-blog-template-generator
            </span>
          </div>
        </a>
        <p className="text-sm text-blue-400">
          Chat GPTに「ブログ案を出してもらうテンプレート」作成ツール
        </p>
      </div>
    </header>
  );
};

export default Header;
