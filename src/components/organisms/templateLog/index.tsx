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
      <TemplateItem label="ブログのテーマ" text={formData.blogTheme} />
      <TemplateItem
        label="ターゲットオーディエンス"
        text={formData.targetAudience}
      />
      <TemplateItem label="ブログスタイル" text={formData.blogStyle} />
      <TemplateItem
        label="既存のカテゴリー"
        text={(formData.existingCategories || [])
          .filter((category) => category.trim() !== '')
          .join(', ')}
      />
      <TemplateItem
        label="人気記事"
        text={(formData.popularArticles || [])
          .filter((article) => article.trim() !== '')
          .join(', ')}
      />
      <TemplateItem
        label="最近の記事タイトル"
        text={(formData.recentTitles || [])
          .filter((title) => title.trim() !== '')
          .join(', ')}
      />
      <TemplateItem
        label="希望するキーワード"
        text={(formData.desiredKeywords || [])
          .filter((keyword) => keyword.trim() !== '')
          .join(', ')}
      />
      <TemplateItem label="トーン" text={formData.tone} />
    </div>
  );
};

export default TemplateLog;
