import React from 'react';

type InputLabelProps = {
  text: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ text }) => {
  return <label className="mb-2 block text-gray-700">{text}</label>;
};

export default InputLabel;
