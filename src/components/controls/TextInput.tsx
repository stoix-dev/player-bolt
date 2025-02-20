import React, { useId } from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  maxLength = 50,
  placeholder
}) => {
  const id = useId();

  return (
    <div className="group">
      <label htmlFor={id} className="block text-sm text-gray-600 mb-1.5 font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          className="w-full px-4 py-2.5 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all placeholder:text-gray-400"
          placeholder={placeholder}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-500 transition-opacity opacity-0 group-hover:opacity-100">
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
};

export default TextInput;