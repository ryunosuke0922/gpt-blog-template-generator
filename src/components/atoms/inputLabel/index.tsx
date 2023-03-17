import React from 'react';

type InputLabelProps = {
  text: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ text }) => {
  return (
    <label className="block text-sm font-medium text-gray-400">{text}</label>
  );
};

export default InputLabel;
