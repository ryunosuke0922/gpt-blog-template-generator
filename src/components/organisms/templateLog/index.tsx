import React from 'react';
import { TemplateFormData } from '../../../domains/models/templateFormData';
import TemplateItem from '../../molecules/templateItem';

type TemplateComponentProps = {
  formData: TemplateFormData;
};

const TemplateLog: React.FC<TemplateComponentProps> = ({ formData }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        作成中のテンプレート
      </h2>
      <TemplateItem label="カテゴリー" text={formData.category} />
      <TemplateItem label="テーマ" text={formData.theme} />
      <TemplateItem label="タグ" text={formData.tags} />
      <TemplateItem label="ペルソナ" text={formData.persona} />
    </div>
  );
};

export default TemplateLog;
