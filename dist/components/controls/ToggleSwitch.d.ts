import React from 'react';
interface ToggleSwitchProps {
    label: string;
    icon: LucideIcon;
    checked: boolean;
    onChange: (checked: boolean) => void;
    id: string;
}
declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
export default ToggleSwitch;
