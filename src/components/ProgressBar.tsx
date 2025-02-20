import React, { forwardRef, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  color?: string;
  className?: string;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, onProgressClick, color = '#FFFFFF', className = '' }, ref) => {
    const [tooltipPosition, setTooltipPosition] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      setTooltipPosition(position);
    };

    return (
      <div 
        className={`relative ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={handleMouseMove}
      >
        <div 
          ref={ref}
          className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer relative group"
          onClick={onProgressClick}
        >
          <div 
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
          {showTooltip && (
            <div 
              className="absolute bottom-4 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded pointer-events-none"
              style={{ left: `${tooltipPosition}%` }}
            >
              {Math.round(tooltipPosition)}%
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;