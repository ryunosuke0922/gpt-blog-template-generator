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
      className="focus:border-light-blue-500 focus:ring-light-blue-500 w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-1"
      type="text"
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};

export default FormInput;
