# Stoix Player

A customizable React video player component with advanced features.

## Installation

```bash
npm install stoix-player
```

## Usage

First, import the component and its styles:

```tsx
import { StoixPlayer, usePlayerStore } from 'stoix-player';
import 'stoix-player/dist/index.css';

function App() {
  return (
    <div>
      <StoixPlayer
        src="https://example.com/video.m3u8"
        width={1280}
      />
    </div>
  );
}
```

## Customization

The player can be customized using the `usePlayerStore` hook:

```tsx
import { StoixPlayer, usePlayerStore } from 'stoix-player';
import 'stoix-player/dist/index.css';

function VideoPlayer() {
  const {
    setProgressColor,
    setOverlayBackgroundColor,
    setAutoPlay,
    setShowProgressBar,
    setAutoHideControls,
    setShowFakeProgress,
    setOverlayTopText,
    setOverlayBottomText
  } = usePlayerStore();

  // Example: Customize the player
  useEffect(() => {
    setProgressColor('#FF0000');
    setAutoPlay(true);
    setOverlayTopText('Video is playing');
    setOverlayBottomText('Click to unmute');
  }, []);

  return (
    <StoixPlayer
      src="https://example.com/video.m3u8"
      width={1280}
    />
  );
}
```

## Available Options

### Player Props

| Prop | Type | Description |
|------|------|-------------|
| src | string | URL of the video (HLS stream) |
| width | number | Maximum width of the player |

### Store Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| progressColor | string | '#FF7070' | Color of the progress bar |
| overlayBackgroundColor | string | '#000000' | Background color of the muted overlay |
| showProgressBar | boolean | true | Show/hide progress bar |
| autoHideControls | boolean | false | Auto-hide controls when not hovering |
| showFakeProgress | boolean | false | Use non-linear progress animation |
| autoPlay | boolean | true | Enable autoplay (muted) |
| overlayTopText | string | 'Your video has already started' | Top text in muted overlay |
| overlayBottomText | string | 'Click here to unmute and play' | Bottom text in muted overlay |

### Store Actions

```tsx
interface PlayerState {
  setProgressColor: (color: string) => void;
  setOverlayBackgroundColor: (color: string) => void;
  setShowProgressBar: (show: boolean) => void;
  setAutoHideControls: (autoHide: boolean) => void;
  setShowFakeProgress: (show: boolean) => void;
  setAutoPlay: (autoPlay: boolean) => void;
  setOverlayTopText: (text: string) => void;
  setOverlayBottomText: (text: string) => void;
}
```

## Requirements

### Peer Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## Bundler Configuration

### Vite
If you're using Vite, no additional configuration is needed. The CSS imports should work out of the box.

### Webpack
For webpack, ensure you have the proper loaders configured:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

### Next.js
For Next.js applications, you can import the CSS directly in your `_app.tsx`:

```tsx
// pages/_app.tsx
import 'stoix-player/dist/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

## Troubleshooting

### CSS Import Issues

If you're seeing the error:
```
Failed to resolve import "stoix-player/dist/index.css"
```

Try these solutions:

1. Make sure you've installed the package correctly:
```bash
npm install stoix-player
```

2. Verify the import path is correct:
```tsx
import 'stoix-player/dist/index.css';
```

3. Check if your bundler supports CSS imports. The package includes both the compiled CSS and the source files.

4. If using TypeScript, ensure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

### Video Format Support
The player supports HLS streams by default. Make sure your video source is in the correct format (m3u8).

## License

MIT