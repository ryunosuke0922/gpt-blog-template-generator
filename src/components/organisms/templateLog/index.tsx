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
    <div className="rounded-lg bg-black p-6 shadow-lg">
      <h2 className="mb-4 text-3xl font-bold text-white">
        作成中のテンプレート
      </h2>
      <div className="rounded-md bg-white p-4 text-gray-800">
        <code className="whitespace-pre-wrap break-all font-mono text-sm">
          {convertFormDataToText(formData)}
        </code>
      </div>
    </div>
  );
};

export default TemplateLog;
