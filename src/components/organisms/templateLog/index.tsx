import React from 'react';
import {
  TemplateFormData,
  convertFormDataToText,
} from '../../../domains/models/templateFormData';

type TemplateComponentProps = {
  formData: TemplateFormData;
};

const TemplateLog: React.FC<TemplateComponentProps> = ({ formData }) => {
  return (
    <div className="rounded-xl bg-gray-800 shadow-lg transition-shadow">
      <div className="px-8 py-6">
        <h2 className="mb-4 text-base font-bold text-slate-50">
          作成中のテンプレート
        </h2>
        <div className="rounded-xl bg-slate-100 p-4 text-gray-800">
          <code className="whitespace-pre-wrap break-all font-mono text-xs">
            {convertFormDataToText(formData)}
          </code>
        </div>
      </div>
    </div>
  );
};

export default TemplateLog;
