import 'video.js/dist/video-js.css';
import './index.css';

export { default as StoixPlayer } from './components/StoixStreamPlayer';
export { usePlayerStore } from './store/usePlayerStore';
export type { PlayerState } from './store/usePlayerStore';