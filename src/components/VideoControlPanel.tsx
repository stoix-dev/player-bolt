import React from 'react';
import { Settings, Eye, TrendingUp, Play } from 'lucide-react';
import { usePlayerStore } from '../store/usePlayerStore';
import ColorPicker from './controls/ColorPicker';
import ToggleSwitch from './controls/ToggleSwitch';
import OverlayTextSection from './controls/OverlayTextSection';

const VideoControlPanel: React.FC = () => {
  const {
    progressColor,
    overlayBackgroundColor,
    showProgressBar,
    autoHideControls,
    showFakeProgress,
    autoPlay,
    overlayTopText,
    overlayBottomText,
    setProgressColor,
    setOverlayBackgroundColor,
    setShowProgressBar,
    setAutoHideControls,
    setShowFakeProgress,
    setAutoPlay,
    setOverlayTopText,
    setOverlayBottomText,
  } = usePlayerStore();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="bg-blue-50 p-2 rounded-lg">
          <Settings className="text-blue-600" size={20} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Player Controls</h2>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <ColorPicker
            label="Progress Bar Color"
            color={progressColor}
            onChange={setProgressColor}
          />

          <ColorPicker
            label="Overlay Background"
            color={overlayBackgroundColor}
            onChange={setOverlayBackgroundColor}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ToggleSwitch
            label="Show Progress Bar"
            icon={Eye}
            checked={showProgressBar}
            onChange={setShowProgressBar}
            id="toggle-progress"
          />

          <ToggleSwitch
            label="Auto-hide Controls"
            icon={Eye}
            checked={autoHideControls}
            onChange={setAutoHideControls}
            id="toggle-autohide"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ToggleSwitch
            label="Non-linear Progress"
            icon={TrendingUp}
            checked={showFakeProgress}
            onChange={setShowFakeProgress}
            id="toggle-fake-progress"
          />

          <ToggleSwitch
            label="Auto-play (Muted)"
            icon={Play}
            checked={autoPlay}
            onChange={setAutoPlay}
            id="toggle-autoplay"
          />
        </div>

        <OverlayTextSection
          topText={overlayTopText}
          bottomText={overlayBottomText}
          onTopTextChange={setOverlayTopText}
          onBottomTextChange={setOverlayBottomText}
        />
      </div>
    </div>
  );
};

export default VideoControlPanel;