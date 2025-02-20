import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import { usePlayerStore } from '../store/usePlayerStore';

export const useVideoPlayer = (src: string) => {
  const { autoPlay } = usePlayerStore();
  const playerRef = useRef<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const initializePlayer = (videoElement: HTMLVideoElement) => {
    playerRef.current = videojs(videoElement, {
      controls: false,
      autoplay: autoPlay,
      muted: autoPlay,
      preload: 'auto',
      fluid: true,
      html5: {
        vhs: {
          overrideNative: true
        },
        nativeAudioTracks: false,
        nativeVideoTracks: false
      },
      sources: [{
        src: src,
        type: 'application/x-mpegURL'
      }]
    });

    playerRef.current.on('play', () => setIsPlaying(true));
    playerRef.current.on('pause', () => setIsPlaying(false));
    playerRef.current.on('volumechange', () => setIsMuted(playerRef.current?.muted() || false));
    playerRef.current.on('fullscreenchange', () => setIsFullscreen(playerRef.current?.isFullscreen() || false));
    playerRef.current.on('timeupdate', () => {
      if (playerRef.current) {
        const time = playerRef.current.currentTime();
        const duration = playerRef.current.duration();
        setCurrentTime(time);
        setProgress((time / duration) * 100);
      }
    });
    playerRef.current.on('loadedmetadata', () => {
      if (playerRef.current) {
        setDuration(playerRef.current.duration());
      }
    });

    // Initialize quality levels
    playerRef.current.qualityLevels();
  };

  const cleanup = () => {
    if (playerRef.current) {
      playerRef.current.dispose();
      playerRef.current = null;
    }
  };

  const controls = {
    togglePlay: () => {
      if (playerRef.current) {
        if (isPlaying) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
      }
    },
    toggleMute: () => {
      if (playerRef.current) {
        playerRef.current.muted(!playerRef.current.muted());
      }
    },
    toggleFullscreen: () => {
      if (playerRef.current) {
        if (!playerRef.current.isFullscreen()) {
          playerRef.current.requestFullscreen();
        } else {
          playerRef.current.exitFullscreen();
        }
      }
    },
    seekTo: (percentage: number) => {
      if (playerRef.current) {
        const targetTime = percentage * duration;
        playerRef.current.currentTime(targetTime);
      }
    }
  };

  return {
    playerRef,
    isPlaying,
    isMuted,
    isFullscreen,
    progress,
    duration,
    currentTime,
    initializePlayer,
    cleanup,
    controls
  };
};