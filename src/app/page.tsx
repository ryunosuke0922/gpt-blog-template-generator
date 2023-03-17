'use client';

import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import './globals.css';
import TemplateForm from '../components/organisms/templateForm';
import TemplateLog from '../components/organisms/templateLog';
import { TemplateFormData } from '../domains/models/templateFormData';
import { useState } from 'react';

const Page: NextPage = () => {
  const [formData, setFormData] = useState<TemplateFormData>({
    category: '',
    theme: '',
    tags: '',
    persona: '',
  });

  const handleSubmit = async (data: TemplateFormData) => {
    setFormData(data);
    const copiedData = JSON.stringify(data);
    try {
      await navigator.clipboard.writeText(copiedData);
      alert(`Submitted values: ${copiedData}\n\nCopied to clipboard!`);
    } catch (err) {
      alert(`Submitted values: ${copiedData}\n\nFailed to copy to clipboard.`);
    }
  };

  const handleChange = (data: TemplateFormData) => {
    setFormData(data);
  };

  return (
    <div className="flex bg-gray-100 py-6 sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
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
