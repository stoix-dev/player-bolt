import React from 'react';
interface PlayerControlsProps {
    showControls: boolean;
    progress: number;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    isMuted: boolean;
    isFullscreen: boolean;
    onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    onPlayToggle: () => void;
    onMuteToggle: () => void;
    onFullscreenToggle: () => void;
}
declare const PlayerControls: React.FC<PlayerControlsProps>;
export default PlayerControls;
