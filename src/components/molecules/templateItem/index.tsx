import React from 'react';
import Label from '../../atoms/label';
import TemplateText from '../../atoms/templateText';

type TemplateItemProps = {
  label: string;
  text: string;
};

const TemplateItem: React.FC<TemplateItemProps> = ({ label, text }) => {
  return (
    <p className="mb-2 text-lg">
      <Label text={label} /> <TemplateText text={text} />
    </p>
  );
};

export default TemplateItem;
