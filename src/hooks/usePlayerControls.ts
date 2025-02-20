import { useState, useEffect } from 'react';
import { usePlayerStore } from '../store/usePlayerStore';

export const usePlayerControls = () => {
  const { autoHideControls } = usePlayerStore();
  const [showControls, setShowControls] = useState(!autoHideControls);

  useEffect(() => {
    setShowControls(!autoHideControls);
  }, [autoHideControls]);

  const handleMouseEnter = () => autoHideControls && setShowControls(true);
  const handleMouseLeave = () => autoHideControls && setShowControls(false);

  return {
    showControls,
    handleMouseEnter,
    handleMouseLeave
  };
};