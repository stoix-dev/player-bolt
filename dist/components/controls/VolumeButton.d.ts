import React from 'react';
interface VolumeButtonProps {
    isMuted: boolean;
    onToggle: () => void;
}
declare const VolumeButton: React.FC<VolumeButtonProps>;
export default VolumeButton;
