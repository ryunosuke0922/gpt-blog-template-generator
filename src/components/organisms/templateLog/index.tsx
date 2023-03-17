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
    <div className="rounded-lg bg-black p-4 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold text-white">
        作成中のテンプレート
      </h2>
      <div className="rounded-md bg-white p-2 text-gray-800">
        <code className="whitespace-pre-wrap break-all font-mono text-xs">
          {convertFormDataToText(formData)}
        </code>
      </div>
    </div>
  );
};

export default TemplateLog;
