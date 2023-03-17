import React from 'react';

type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return <span className="font-semibold text-gray-700">{text}:</span>;
};

export default Label;
