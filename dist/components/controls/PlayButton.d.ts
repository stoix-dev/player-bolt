import React from 'react';
interface PlayButtonProps {
    isPlaying: boolean;
    onToggle: () => void;
}
declare const PlayButton: React.FC<PlayButtonProps>;
export default PlayButton;
