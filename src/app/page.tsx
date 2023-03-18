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
    <div className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 p-8 sm:flex-row sm:p-8 md:p-12 lg:p-16">
          <div className="flex-1">
            <TemplateForm onSubmit={handleSubmit} onChange={handleChange} />
          </div>
          <div className="flex-1">
            <TemplateLog formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
