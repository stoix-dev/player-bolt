import React from 'react';
import ProgressBar from './ProgressBar';

interface FakeProgressBarProps {
  currentTime: number;
  duration: number;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  color?: string;
  className?: string;
}

const FakeProgressBar: React.FC<FakeProgressBarProps> = ({
  currentTime,
  duration,
  onProgressClick,
  color,
  className
}) => {
  const calculateFakeProgress = (time: number, totalDuration: number) => {
    const normalizedTime = time / totalDuration;
    // This formula creates a curve that starts fast and slows down
    // Using a power function with dynamic exponent based on progress
    const exponent = 0.5 + (normalizedTime * 0.5); // Exponent grows from 0.5 to 1
    const fakeProgressValue = Math.pow(normalizedTime, exponent);
    return fakeProgressValue * 100;
  };

  const fakeProgress = calculateFakeProgress(currentTime, duration);

  return (
    <ProgressBar
      progress={fakeProgress}
      onProgressClick={onProgressClick}
      color={color}
      className={className}
    />
  );
};

export default FakeProgressBar;