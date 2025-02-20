import React from 'react';

interface TimerProps {
  currentTime: number;
  duration: number;
}

const Timer: React.FC<TimerProps> = ({ currentTime, duration }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <span className="text-sm">
      {formatTime(currentTime)} / {formatTime(duration)}
    </span>
  );
};

export default Timer;