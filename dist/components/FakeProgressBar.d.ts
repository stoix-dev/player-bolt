import React from 'react';
interface FakeProgressBarProps {
    currentTime: number;
    duration: number;
    onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    color?: string;
    className?: string;
}
declare const FakeProgressBar: React.FC<FakeProgressBarProps>;
export default FakeProgressBar;
