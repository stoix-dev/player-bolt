import React from 'react';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import 'videojs-contrib-quality-levels';
interface StoixStreamPlayerProps {
    src: string;
    width: number;
}
declare const StoixStreamPlayer: React.FC<StoixStreamPlayerProps>;
export default StoixStreamPlayer;
