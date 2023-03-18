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
      className="custom-input my-1 w-full px-6 py-4 text-sm text-slate-50 placeholder-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
      type="text"
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};

export default FormInput;
