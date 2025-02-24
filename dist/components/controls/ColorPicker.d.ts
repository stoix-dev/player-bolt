import React from 'react';
interface ColorPickerProps {
    label: string;
    color: string;
    onChange: (color: string) => void;
}
declare const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
