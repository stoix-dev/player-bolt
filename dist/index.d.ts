import React from 'react';
import * as zustand from 'zustand';

interface StoixStreamPlayerProps {
    src: string;
    width: number;
}
declare const StoixStreamPlayer: React.FC<StoixStreamPlayerProps>;

interface PlayerState {
    progressColor: string;
    overlayBackgroundColor: string;
    showProgressBar: boolean;
    autoHideControls: boolean;
    showFakeProgress: boolean;
    autoPlay: boolean;
    overlayTopText: string;
    overlayBottomText: string;
    setProgressColor: (color: string) => void;
    setOverlayBackgroundColor: (color: string) => void;
    setShowProgressBar: (show: boolean) => void;
    setAutoHideControls: (autoHide: boolean) => void;
    setShowFakeProgress: (show: boolean) => void;
    setAutoPlay: (autoPlay: boolean) => void;
    setOverlayTopText: (text: string) => void;
    setOverlayBottomText: (text: string) => void;
}
declare const usePlayerStore: zustand.UseBoundStore<zustand.StoreApi<PlayerState>>;

export { type PlayerState, StoixStreamPlayer as StoixPlayer, usePlayerStore };
