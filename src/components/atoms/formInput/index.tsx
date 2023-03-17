import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

type FormInputProps = {
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  register,
  validation,
}) => {
  return (
    <input
      className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
      type="text"
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};

export default FormInput;
