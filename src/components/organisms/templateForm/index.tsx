import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TemplateFormData,
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
    setValue('tone', '');
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
      <div className="rounded-xl bg-gray-800 shadow-lg transition-shadow">
        <div className="flex items-center justify-start px-8 pt-6 pb-2">
          <div>
            <p className="mb-4 text-base font-bold text-slate-50">
              サンプルを入力可能です
            </p>
            <div className="flex items-center gap-8">
              <button
                type="button"
                className="custom-button px-4 py-2 font-bold text-teal-400 focus:outline-none"
                onClick={handleAddSample}
              >
                追加
              </button>
              <button
                type="button"
                className="custom-button px-4 py-2 font-bold text-red-400 focus:outline-none"
                onClick={handleClear}
              >
                削除
              </button>
            </div>
          </div>
        </div>
        <form className="mt-4 p-8 shadow-md" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-6 text-base font-bold text-slate-50">
            ブログ情報を入力してください
          </p>
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
          <div className="mb-2">
            <InputLabel text="ブログのカテゴリー" />
            {Array.from({ length: existingCategoriesCount }, (_, index) => (
              <FormInput
                key={index}
                name={`existingCategories[${index}]`}
                placeholder={`例: アーケードゲーム、ファミコン、ゲームボーイ`}
                register={register}
              />
            ))}
            <div className="mt-2 flex justify-end px-2">
              <button
                type="button"
                className="custom-plus-button px-2 pt-2 pb-1 text-sm font-bold text-teal-200"
                onClick={addExistingCategory}
              >
                ＋
              </button>
            </div>
          </div>
          <div className="mb-2">
            <InputLabel text="人気の記事" />
            {Array.from({ length: popularArticlesCount }, (_, index) => (
              <FormInput
                key={index}
                name={`popularArticles[${index}]`}
                placeholder="例: スーパーマリオの魅力、ドラクエシリーズの魅力"
                register={register}
              />
            ))}
            <div className="mt-2 flex justify-end px-2">
              <button
                type="button"
                className="custom-plus-button px-2 pt-2 pb-1 text-sm font-bold text-teal-200"
                onClick={addPopularArticle}
              >
                ＋
              </button>
            </div>
          </div>
          <div className="mb-2">
            <InputLabel text="最近の記事" />
            {Array.from({ length: recentTitlesCount }, (_, index) => (
              <FormInput
                key={index}
                name={`recentTitles[${index}]`}
                placeholder="例: レトロゲームの名作とその魅力、スーパーマリオの進化と変遷"
                register={register}
              />
            ))}
            <div className="mt-2 flex justify-end px-2">
              <button
                type="button"
                className="custom-plus-button px-2 pt-2 pb-1 text-sm font-bold text-teal-200"
                onClick={addRecentTitle}
              >
                ＋
              </button>
            </div>
          </div>
          <div className="mb-2">
            <InputLabel text="使用したいキーワード" />
            {Array.from({ length: desiredKeywordsCount }, (_, index) => (
              <FormInput
                key={index}
                name={`desiredKeywords[${index}]`}
                placeholder="例: ゲーム, レトロゲーム, ファミコン"
                register={register}
              />
            ))}
            <div className="mt-2 flex justify-end px-2">
              <button
                type="button"
                className="custom-plus-button px-2 pt-2 pb-1 text-sm font-bold text-teal-200"
                onClick={addDesiredKeyword}
              >
                ＋
              </button>
            </div>
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
              className="custom-textarea my-1 w-full px-6 py-4 text-sm text-slate-50 placeholder-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register('additionalNotes')}
            />
          </div>
          <button
            type="submit"
            className="custom-button px-4 py-2 font-bold text-teal-400 focus:outline-none"
          >
            テンプレートをコピー
          </button>
        </form>
      </div>
    </>
  );
};

export default TemplateForm;
