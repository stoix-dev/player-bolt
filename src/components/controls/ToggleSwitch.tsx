import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ToggleSwitchProps {
  label: string;
  icon: LucideIcon;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  icon: Icon,
  checked,
  onChange,
  id
}) => {
  return (
    <label 
      htmlFor={id}
      className="flex items-center justify-between group p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-2 text-gray-700">
        <div className="bg-gray-100 p-1.5 rounded-md group-hover:bg-white transition-colors">
          <Icon size={18} className="text-gray-600" />
        </div>
        <span>{label}</span>
      </div>
      
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
        />
      </div>
    </label>
  );
};

export default ToggleSwitch;