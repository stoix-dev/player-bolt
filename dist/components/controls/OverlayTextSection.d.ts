import React from 'react';
interface OverlayTextSectionProps {
    topText: string;
    bottomText: string;
    onTopTextChange: (text: string) => void;
    onBottomTextChange: (text: string) => void;
}
declare const OverlayTextSection: React.FC<OverlayTextSectionProps>;
export default OverlayTextSection;
