import React from 'react';
interface ProgressBarProps {
    progress: number;
    onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    color?: string;
    className?: string;
}
declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
