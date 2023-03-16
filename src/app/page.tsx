'use client';

import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import './globals.css';

type FormData = {
  category: string;
  theme: string;
  tags: string;
  persona: string;
};

const Page: NextPage = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert('Submitted values: ' + JSON.stringify(data));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* カテゴリー */}
            <div className="mb-4">
              <label className="block text-gray-700">カテゴリー</label>
              <input
                className="focus:border-light-blue-500 focus:ring-light-blue-500 mt-1 block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-1"
                type="text"
                placeholder='例: "プログラミング"'
                {...register('category')}
              />
            </div>
            {/* Theme */}
            <div className="mb-4">
              <label className="block text-gray-700">テーマ</label>
              <input
                className="focus:border-light-blue-500 focus:ring-light-blue-500 mt-1 block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-1"
                type="text"
                placeholder='例: "React"'
                {...register('theme')}
              />

              {/* Tags */}
              <div className="mb-4">
                <label className="block text-gray-700">タグ</label>
                <input
                  className="focus:border-light-blue-500 focus:ring-light-blue-500 mt-1 block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-1"
                  type="text"
                  placeholder='例: "React, Next.js, TypeScript"'
                  {...register('tags')}
                />
              </div>

              {/* Persona */}
              <div className="mb-4">
                <label className="block text-gray-700">ペルソナ</label>
                <input
                  className="focus:border-light-blue-500 focus:ring-light-blue-500 mt-1 block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-1"
                  type="text"
                  placeholder='例: "React, Next.js, TypeScript"'
                  {...register('persona')}
                />
              </div>

              {/* Submit button */}
              <button
                className="to-light-blue-500 hover:to-light-blue-600 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-600 px-8 py-3 text-base font-medium text-white hover:from-cyan-700 md:py-4 md:px-10 md:text-lg"
                type="submit"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
