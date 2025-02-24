import { create } from 'zustand';

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

export const usePlayerStore = create<PlayerState>((set) => ({
  progressColor: '#FF7070',
  overlayBackgroundColor: '#000000',
  showProgressBar: true,
  autoHideControls: false,
  showFakeProgress: false,
  autoPlay: true,
  overlayTopText: 'Your video has already started',
  overlayBottomText: 'Click here to unmute and play',
  setProgressColor: (color) => set({ progressColor: color }),
  setOverlayBackgroundColor: (color) => set({ overlayBackgroundColor: color }),
  setShowProgressBar: (show) => set({ showProgressBar: show }),
  setAutoHideControls: (autoHide) => set({ autoHideControls: autoHide }),
  setShowFakeProgress: (show) => set({ showFakeProgress: show }),
  setAutoPlay: (autoPlay) => set({ autoPlay: autoPlay }),
  setOverlayTopText: (text) => set({ overlayTopText: text.slice(0, 50) }),
  setOverlayBottomText: (text) => set({ overlayBottomText: text.slice(0, 50) })
}));