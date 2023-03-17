import React from 'react';

type TemplateTextProps = {
  text: string;
};

const TemplateText: React.FC<TemplateTextProps> = ({ text }) => {
  return <span className="text-gray-600">{text}</span>;
};

export default TemplateText;
