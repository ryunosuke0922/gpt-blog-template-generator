import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TemplateFormData,
  TONES,
  testData,
} from '../../../domains/models/templateFormData';
import InputLabel from '../../atoms/inputLabel';
import FormInput from '../../atoms/formInput';

type TemplateFormProps = {
  onSubmit: (data: TemplateFormData) => void;
  onChange: (data: TemplateFormData) => void;
};

type UseInputArray = {
  count: number;
  addInput: () => void;
  setCount: (count: number) => void;
};

function useInputArray(initialCount: number): UseInputArray {
  const [count, setCount] = useState(initialCount);

  const addInput = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, addInput, setCount };
}

const TemplateForm: React.FC<TemplateFormProps> = ({ onSubmit, onChange }) => {
  const {
    count: existingCategoriesCount,
    addInput: addExistingCategory,
    setCount: setExistingCategoriesCount,
  } = useInputArray(1);

  const {
    count: popularArticlesCount,
    addInput: addPopularArticle,
    setCount: setPopularArticlesCount,
  } = useInputArray(1);

  const {
    count: recentTitlesCount,
    addInput: addRecentTitle,
    setCount: setRecentTitlesCount,
  } = useInputArray(1);

  const {
    count: desiredKeywordsCount,
    addInput: addDesiredKeyword,
    setCount: setDesiredKeywordsCount,
  } = useInputArray(1);

  const { register, handleSubmit, watch, setValue } =
    useForm<TemplateFormData>();
  const watchedValues = watch();

  useEffect(() => {
    onChange(watchedValues);
  }, [watchedValues, onChange]);

  const handleAddSample = () => {
    handleClear();
    const randomIndex = Math.floor(Math.random() * testData.length); // ランダムなインデックスを取得
    const sampleData = testData[randomIndex]; // ランダムに選択されたテストデータを取得します。

    // 配列のフィールドに値を設定し、カウントを更新
    setExistingCategoriesCount(sampleData.existingCategories.length);
    sampleData.existingCategories.forEach((value, index) => {
      setValue(`existingCategories.${index}`, value);
    });

    setPopularArticlesCount(sampleData.popularArticles.length);
    sampleData.popularArticles.forEach((value, index) => {
      setValue(`popularArticles.${index}`, value);
    });

    setRecentTitlesCount(sampleData.recentTitles.length);
    sampleData.recentTitles.forEach((value, index) => {
      setValue(`recentTitles.${index}`, value);
    });

    setDesiredKeywordsCount(sampleData.desiredKeywords.length);
    sampleData.desiredKeywords.forEach((value, index) => {
      setValue(`desiredKeywords.${index}`, value);
    });

    // それ以外のフィールドに値を設定
    setValue('blogTheme', sampleData.blogTheme);
    setValue('targetAudience', sampleData.targetAudience);
    setValue('blogStyle', sampleData.blogStyle);
    setValue('tone', sampleData.tone);
    setValue('additionalNotes', sampleData.additionalNotes);
  };

  const handleClear = () => {
    // すべてのフィールドをクリア
    setValue('blogTheme', '');
    setValue('targetAudience', '');
    setValue('blogStyle', '');
    setValue('tone', TONES[0]);
    setValue('additionalNotes', '');

    setExistingCategoriesCount(1);
    Array.from({ length: existingCategoriesCount }, (_, index) => {
      setValue(`existingCategories.${index}`, '');
    });

    setPopularArticlesCount(1);
    Array.from({ length: popularArticlesCount }, (_, index) => {
      setValue(`popularArticles.${index}`, '');
    });

    setRecentTitlesCount(1);
    Array.from({ length: recentTitlesCount }, (_, index) => {
      setValue(`recentTitles.${index}`, '');
    });

    setDesiredKeywordsCount(1);
    Array.from({ length: desiredKeywordsCount }, (_, index) => {
      setValue(`desiredKeywords.${index}`, '');
    });
  };

  return (
    <>
      <button
        type="button"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handleAddSample}
      >
        サンプルを追加
      </button>
      <button
        className="mt-4 w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-base font-medium text-white hover:from-red-700 md:py-4 md:px-10 md:text-lg"
        type="button"
        onClick={handleClear}
      >
        クリア
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <InputLabel text="ブログのテーマ" />
          <FormInput
            name="blogTheme"
            placeholder="例: レトロゲームの名作と魅力的なゲーム"
            register={register}
          />
        </div>
        <div className="mb-6">
          <InputLabel text="ブログのターゲット" />
          <FormInput
            name="targetAudience"
            placeholder="例: レトロゲーム愛好家、ファミコンやスーパーファミコンが好きな人"
            register={register}
          />
        </div>
        <div className="mb-6">
          <InputLabel text="ブログのスタイル" />
          <FormInput
            name="blogStyle"
            placeholder="例: 紹介記事"
            register={register}
          />
        </div>
        <div className="mb-6">
          <InputLabel text="ブログのカテゴリー" />
          {Array.from({ length: existingCategoriesCount }, (_, index) => (
            <FormInput
              key={index}
              name={`existingCategories[${index}]`}
              placeholder={`例: アーケードゲーム、ファミコン、ゲームボーイ`}
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
          <InputLabel text="人気の記事" />
          {Array.from({ length: popularArticlesCount }, (_, index) => (
            <FormInput
              key={index}
              name={`popularArticles[${index}]`}
              placeholder="例: スーパーマリオの魅力、ドラクエシリーズの魅力"
              register={register}
            />
          ))}
          <button
            type="button"
            className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
            onClick={addPopularArticle}
          >
            人気の記事を追加
          </button>
        </div>
        <div className="mb-6">
          <InputLabel text="最近の記事" />
          {Array.from({ length: recentTitlesCount }, (_, index) => (
            <FormInput
              key={index}
              name={`recentTitles[${index}]`}
              placeholder="例: レトロゲームの名作とその魅力、スーパーマリオの進化と変遷"
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
          <InputLabel text="使用したいキーワード" />
          {Array.from({ length: desiredKeywordsCount }, (_, index) => (
            <FormInput
              key={index}
              name={`desiredKeywords[${index}]`}
              placeholder="例: ゲーム, レトロゲーム, ファミコン"
              register={register}
            />
          ))}
          <button
            type="button"
            className="mt-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white hover:from-blue-600 hover:to-indigo-600"
            onClick={addDesiredKeyword}
          >
            使用したいキーワードを追加
          </button>
        </div>
        <div className="mb-6">
          <InputLabel text="ブログのトーン" />
          <FormInput
            name="tone"
            placeholder="例: 記事では、丁寧でわかりやすい説明を心掛けてください。"
            register={register}
          />
        </div>
        <div className="mb-6">
          <InputLabel text="その他の要求事項" />
          <textarea
            placeholder="その他の要求事項を記入してください"
            rows={4}
            className="w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-base text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            {...register('additionalNotes')}
          />
        </div>
        <button
          className="to-light-blue-500 hover:to-light-blue-600 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-600 px-8 py-3 text-base font-medium text-white hover:from-cyan-700 md:py-4 md:px-10 md:text-lg"
          type="submit"
        >
          テンプレートをコピー
        </button>
      </form>
    </>
  );
};

export default TemplateForm;
