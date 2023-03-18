import React from 'react';

type InputLabelProps = {
  text: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ text }) => {
  return (
    <label className="mb-0 block pl-4 text-xs font-bold  text-slate-300">
      {text}
    </label>
  );
};

export default InputLabel;
