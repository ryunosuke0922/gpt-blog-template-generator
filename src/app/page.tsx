'use client';

import type { NextPage } from 'next';
import './globals.css';
import TemplateForm from '../components/organisms/templateForm';
import TemplateLog from '../components/organisms/templateLog';
import {
  TemplateFormData,
  convertFormDataToText,
} from '../domains/models/templateFormData';
import { useState } from 'react';

const Page: React.FC = () => {
  const [formData, setFormData] = useState<TemplateFormData>({
    blogTheme: '',
    targetAudience: '',
    blogStyle: '',
    existingCategories: [],
    popularArticles: [],
    recentTitles: [],
    desiredKeywords: [],
    tone: '',
    additionalNotes: '',
  });

  const handleSubmit = async (data: TemplateFormData) => {
    setFormData(data);
    const copiedData = convertFormDataToText(data);
    try {
      await navigator.clipboard.writeText(copiedData);
      alert(`テンプレートがクリップボードにコピーされました！`);
    } catch (err) {
      alert(`テンプレートがクリップボードへのコピーに失敗しました。`);
    }
  };

  const handleChange = (data: TemplateFormData) => {
    // only set the form data if it's different from the current value
    if (JSON.stringify(data) !== JSON.stringify(formData)) {
      setFormData(data);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col rounded-3xl p-8 shadow-lg sm:flex-row sm:p-10 md:p-16 lg:p-20">
          <div className="flex-1">
            <TemplateForm onSubmit={handleSubmit} onChange={handleChange} />
          </div>
          <div className="mt-8 flex-1 sm:mt-0 sm:ml-10">
            <TemplateLog formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
