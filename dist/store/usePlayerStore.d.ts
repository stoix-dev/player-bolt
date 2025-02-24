export interface PlayerState {
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
export declare const usePlayerStore: import("zustand").UseBoundStore<import("zustand").StoreApi<PlayerState>>;
