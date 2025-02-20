import React, { useEffect, useRef, useState } from 'react';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import 'videojs-contrib-quality-levels';
import PlayerControls from './PlayerControls';
import MutedOverlay from './MutedOverlay';
import { useVideoPlayer } from '../hooks/useVideoPlayer';
import { usePlayerStore } from '../store/usePlayerStore';

interface StoixStreamPlayerProps {
  src: string;
  width: number;
}

const StoixStreamPlayer: React.FC<StoixStreamPlayerProps> = ({ src, width }) => {
  const { autoPlay, autoHideControls } = usePlayerStore();
  const [showControls, setShowControls] = useState(!autoHideControls);
  const videoRef = useRef<HTMLDivElement>(null);
  const {
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
  } = useVideoPlayer(src);

  useEffect(() => {
    setShowControls(!autoHideControls);
  }, [autoHideControls]);

  const handleMouseEnter = () => autoHideControls && setShowControls(true);
  const handleMouseLeave = () => autoHideControls && setShowControls(false);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = document.createElement('video');
      videoElement.className = 'video-js vjs-fluid vjs-big-play-centered';
      videoRef.current.appendChild(videoElement);
      initializePlayer(videoElement);
    }
    return cleanup;
  }, [src]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    controls.seekTo(percentage);
  };

  const handleOverlayClick = () => {
    if (playerRef.current) {
      playerRef.current.currentTime(0);
      playerRef.current.muted(false);
      playerRef.current.play();
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={videoRef}
        className="w-full aspect-video rounded-lg overflow-hidden shadow-xl"
        style={{ maxWidth: width }}
      />
      
      {autoPlay && isMuted && isPlaying && (
        <MutedOverlay onClick={handleOverlayClick} />
      )}
      
      <PlayerControls
        showControls={showControls}
        progress={progress}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        isMuted={isMuted}
        isFullscreen={isFullscreen}
        onProgressClick={handleProgressClick}
        onPlayToggle={controls.togglePlay}
        onMuteToggle={controls.toggleMute}
        onFullscreenToggle={controls.toggleFullscreen}
      />
    </div>
  );
};

export default StoixStreamPlayer;