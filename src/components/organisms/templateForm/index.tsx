import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TemplateFormData } from '../../../domains/models/templateFormData';
import InputLabel from '../../atoms/inputLabel';
import FormInput from '../../atoms/formInput';

type TemplateFormProps = {
  onSubmit: (data: TemplateFormData) => void;
  onChange: (data: TemplateFormData) => void;
};
type UseInputArray = {
  count: number;
  addInput: () => void;
};

function useInputArray(initialCount: number): UseInputArray {
  const [count, setCount] = useState(initialCount);

  const addInput = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, addInput };
}

const TemplateForm: React.FC<TemplateFormProps> = ({ onSubmit, onChange }) => {
  const { count: existingCategoriesCount, addInput: addExistingCategory } =
    useInputArray(3);

  const { count: popularArticlesCount, addInput: addPopularArticle } =
    useInputArray(3);

  const { count: recentTitlesCount, addInput: addRecentTitle } =
    useInputArray(3);

  const { count: desiredKeywordsCount, addInput: addDesiredKeyword } =
    useInputArray(3);

  const { register, handleSubmit, watch } = useForm<TemplateFormData>();
  const watchedValues = watch();

  useEffect(() => {
    onChange(watchedValues);
  }, [watchedValues, onChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <InputLabel text="ブログのテーマ" />
        <FormInput
          name="blogTheme"
          placeholder='例: "レトロゲーム"'
          register={register}
        />
      </div>
      <div className="mb-6">
        <InputLabel text="ターゲットオーディエンス" />
        <FormInput
          name="targetAudience"
          placeholder='例: "ゲーム愛好家"'
          register={register}
        />
      </div>
      <div className="mb-6">
        <InputLabel text="ブログスタイル" />
        <FormInput
          name="blogStyle"
          placeholder='例: "エンターテイメント"'
          register={register}
        />
      </div>
      <div className="mb-6">
        <InputLabel text="既存のカテゴリー" />
        {Array.from({ length: existingCategoriesCount }, (_, index) => (
          <FormInput
            key={index}
            name={`existingCategories[${index}]`}
            placeholder={`例: "アーケード, コンソール, 名作"`}
            register={register}
          />
        ))}
        <button
          type="button"
          className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
          onClick={addExistingCategory}
        >
          カテゴリーを追加
        </button>
      </div>
      <div className="mb-6">
        <InputLabel text="人気記事" />
        {Array.from({ length: popularArticlesCount }, (_, index) => (
          <FormInput
            key={index}
            name={`popularArticles[${index}]`}
            placeholder='例: "スーパーマリオ, メタルギアシリーズ, ゲームボーイ"'
            register={register}
          />
        ))}
        <button
          type="button"
          className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
          onClick={addPopularArticle}
        >
          人気記事を追加
        </button>
      </div>
      <div className="mb-6">
        <InputLabel text="最近の記事タイトル" />
        {Array.from({ length: recentTitlesCount }, (_, index) => (
          <FormInput
            key={index}
            name={`recentTitles[${index}]`}
            placeholder='例: "ファミコンのゲームを紹介します", "メガドライブのゲームを紹介します"'
            register={register}
          />
        ))}
        <button
          type="button"
          className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
          onClick={addRecentTitle}
        >
          最近の記事タイトルを追加
        </button>
      </div>
      <div className="mb-6">
        <InputLabel text="希望するキーワード" />
        {Array.from({ length: desiredKeywordsCount }, (_, index) => (
          <FormInput
            key={index}
            name={`desiredKeywords[${index}]`}
            placeholder='例: "ゲーム, レトロゲーム, ファミコン"'
            register={register}
          />
        ))}
        <button
          type="button"
          className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
          onClick={addDesiredKeyword}
        >
          キーワードを追加
        </button>
      </div>
      <div className="mb-6">
        <InputLabel text="トーン" />
        <FormInput
          name="tone"
          placeholder='例: "フレンドリー"'
          register={register}
        />
      </div>
      <button
        className="to-light-blue-500 hover:to-light-blue-600 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-600 px-8 py-3 text-base font-medium text-white hover:from-cyan-700 md:py-4 md:px-10 md:text-lg"
        type="submit"
      >
        コピー
      </button>
    </form>
  );
};

export default TemplateForm;
