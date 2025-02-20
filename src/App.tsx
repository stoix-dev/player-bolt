import React from 'react';
import StoixStreamPlayer from './components/StoixStreamPlayer';
import VideoControlPanel from './components/VideoControlPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Custom Video Player</h1>
        
        <VideoControlPanel />

        <StoixStreamPlayer
          src="https://atenavideo-production-bucket.sfo3.cdn.digitaloceanspaces.com/videos/m3u8/0194b7a5-a32a-7dda-b86d-cac4552683da_0194b7a5-a579-700f-9710-9ea93d335321/playlist.m3u8"
          width={1280}
        />
        
        <div className="mt-6 text-gray-400 text-center">
          <p className="text-sm">
            Hover over the video player to reveal controls. Click the icons to play/pause, 
            mute/unmute, or toggle fullscreen mode.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;