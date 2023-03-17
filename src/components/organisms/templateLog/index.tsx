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
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        作成中のテンプレート
      </h2>
      <pre className="whitespace-pre-wrap text-gray-800">
        {convertFormDataToText(formData)}
      </pre>
    </div>
  );
};

export default TemplateLog;
