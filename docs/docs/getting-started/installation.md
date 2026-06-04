---
title: Installation
---

# Installation

```sh
npx expo install @0610studio/expo-holographic-card @shopify/react-native-skia react-native-reanimated react-native-gesture-handler expo-sensors
```

## App Root Setup

`AnimatedCard` uses `GestureDetector`, so wrap your app root with `GestureHandlerRootView`.

```tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* app */}
    </GestureHandlerRootView>
  );
}
```

## Reanimated Babel Setup

If your project needs Reanimated's Babel plugin, add it to `babel.config.js`.

```js
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

## Peer Dependencies

The package expects these libraries as peer dependencies.

| Package | Role |
| --- | --- |
| `@shopify/react-native-skia` | Canvas-based lighting |
| `react-native-reanimated` | Tilt and flip animations |
| `react-native-gesture-handler` | Drag and swipe gestures |
| `expo-sensors` | DeviceMotion sensor mode |
