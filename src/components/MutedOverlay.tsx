import React from 'react';
import { Volume2 } from 'lucide-react';
import { usePlayerStore } from '../store/usePlayerStore';

interface MutedOverlayProps {
  onClick: () => void;
}

const MutedOverlay: React.FC<MutedOverlayProps> = ({ onClick }) => {
  const { overlayTopText, overlayBottomText, overlayBackgroundColor } = usePlayerStore();

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div 
        onClick={onClick}
        className="w-[65%] sm:w-[45%] md:w-[35%] lg:w-[25%] rounded-lg flex flex-col items-center justify-between py-3 px-2 sm:p-4 md:p-5 cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-sm"
        style={{ 
          backgroundColor: `${overlayBackgroundColor}e6`,
        }}
      >
        <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center leading-tight">
          {overlayTopText.slice(0, 50)}
        </p>
        
        <div className="my-2 sm:my-3 md:my-4">
          <div className="animate-pulse">
            <Volume2 
              size={20} 
              className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" 
            />
          </div>
        </div>
        
        <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center leading-tight">
          {overlayBottomText.slice(0, 50)}
        </p>
      </div>
    </div>
  );
};

export default MutedOverlay;