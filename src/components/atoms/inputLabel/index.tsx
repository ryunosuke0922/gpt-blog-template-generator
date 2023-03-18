import React from 'react';

type InputLabelProps = {
  text: string;
  subtext?: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ text, subtext }) => {
  return (
    <div className="mb-2 flex items-center">
      <label className="mr-2 flex-none text-xs font-bold text-slate-300">
        {text}
      </label>
      {subtext && (
        <small className="flex-grow text-xs text-gray-500">※{subtext}</small>
      )}
    </div>
  );
};

export default InputLabel;
