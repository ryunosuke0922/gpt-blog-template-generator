import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TemplateFormData } from '../../../domains/models/templateFormData';
import InputLabel from '../../atoms/inputLabel';
import FormInput from '../../atoms/formInput';

type TemplateFormProps = {
  onSubmit: (data: TemplateFormData) => void;
  onChange: (data: TemplateFormData) => void;
};

const TemplateForm: React.FC<TemplateFormProps> = ({ onSubmit, onChange }) => {
  const { register, handleSubmit, watch } = useForm<TemplateFormData>();
  const watchedValues = watch();

  useEffect(() => {
    onChange(watchedValues);
  }, [watchedValues, onChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <InputLabel text="カテゴリー" />
        <FormInput
          name="category"
          placeholder='例: "プログラミング"'
          register={register}
        />
      </div>
      <div className="mb-6">
        <InputLabel text="テーマ" />
        <FormInput name="theme" placeholder='例: "React"' register={register} />
      </div>
      <div className="mb-6">
        <InputLabel text="タグ" />
        <FormInput
          name="tags"
          placeholder='例: "React, Next.js, TypeScript"'
          register={register}
        />
      </div>
      <div className="mb-6">
        <InputLabel text="ペルソナ" />
        <FormInput
          name="persona"
          placeholder='例: "React, Next.js, TypeScript"'
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
