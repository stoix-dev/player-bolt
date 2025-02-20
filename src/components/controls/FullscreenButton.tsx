import React from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface FullscreenButtonProps {
  isFullscreen: boolean;
  onToggle: () => void;
}

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ isFullscreen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-white/20 transition-colors"
    >
      {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
    </button>
  );
};

export default FullscreenButton;