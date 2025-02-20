import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

const VolumeButton: React.FC<VolumeButtonProps> = ({ isMuted, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-white/20 transition-colors"
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
};

export default VolumeButton;