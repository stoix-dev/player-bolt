import type Player from 'video.js/dist/types/player';
export declare const useVideoPlayer: (src: string) => {
    playerRef: import("react").MutableRefObject<Player | null>;
    isPlaying: boolean;
    isMuted: boolean;
    isFullscreen: boolean;
    progress: number;
    duration: number;
    currentTime: number;
    initializePlayer: (videoElement: HTMLVideoElement) => void;
    cleanup: () => void;
    controls: {
        togglePlay: () => void;
        toggleMute: () => void;
        toggleFullscreen: () => void;
        seekTo: (percentage: number) => void;
    };
};
