import React, { useState, useCallback } from 'react';
import { Palette } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClose = useCallback(() => {
    setShowPicker(false);
  }, []);

  return (
    <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <label className="flex items-center gap-2 text-gray-700">
        <div className="bg-gray-100 p-1.5 rounded-md group-hover:bg-white transition-colors">
          <Palette size={18} className="text-gray-600" />
        </div>
        {label}
      </label>
      <div className="relative">
        <div
          className="w-14 h-8 rounded-md cursor-pointer border shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <div className="absolute right-0 z-50 mt-2">
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={handleClose}
            />
            <div className="relative">
              <div className="p-3 bg-white rounded-xl shadow-xl transform scale-100 transition-transform">
                <HexColorPicker
                  color={color}
                  onChange={onChange}
                />
                <div className="mt-2 px-2 py-1 bg-gray-50 rounded-md text-xs font-mono text-gray-600 text-center">
                  {color.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;