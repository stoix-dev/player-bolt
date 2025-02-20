import React from 'react';
import { Play, Pause } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-white/20 transition-colors"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
  );
};

export default PlayButton;