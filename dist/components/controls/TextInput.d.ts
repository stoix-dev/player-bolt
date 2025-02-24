import React from 'react';
interface TextInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    maxLength?: number;
    placeholder?: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
