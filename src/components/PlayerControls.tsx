import React from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import ProgressBar from './ProgressBar';
import FakeProgressBar from './FakeProgressBar';
import PlayButton from './controls/PlayButton';
import VolumeButton from './controls/VolumeButton';
import Timer from './controls/Timer';
import FullscreenButton from './controls/FullscreenButton';

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

const PlayerControls: React.FC<PlayerControlsProps> = ({
  showControls,
  progress,
  currentTime,
  duration,
  isPlaying,
  isMuted,
  isFullscreen,
  onProgressClick,
  onPlayToggle,
  onMuteToggle,
  onFullscreenToggle
}) => {
  const { showProgressBar, progressColor, showFakeProgress } = usePlayerStore();

  return (
    <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
      {showProgressBar && (
        showFakeProgress ? (
          <FakeProgressBar
            currentTime={currentTime}
            duration={duration}
            onProgressClick={onProgressClick}
            color={progressColor}
          />
        ) : (
          <ProgressBar
            progress={progress}
            onProgressClick={onProgressClick}
            color={progressColor}
          />
        )
      )}

      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-4">
          <PlayButton isPlaying={isPlaying} onToggle={onPlayToggle} />
          <VolumeButton isMuted={isMuted} onToggle={onMuteToggle} />
          {showProgressBar && (
            <Timer currentTime={currentTime} duration={duration} />
          )}
        </div>
        
        <FullscreenButton isFullscreen={isFullscreen} onToggle={onFullscreenToggle} />
      </div>
    </div>
  );
};

export default PlayerControls;