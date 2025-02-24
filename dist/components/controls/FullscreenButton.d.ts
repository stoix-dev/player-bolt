import React from 'react';
interface FullscreenButtonProps {
    isFullscreen: boolean;
    onToggle: () => void;
}
declare const FullscreenButton: React.FC<FullscreenButtonProps>;
export default FullscreenButton;
