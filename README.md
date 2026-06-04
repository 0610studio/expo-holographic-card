# @0610studio/expo-holographic-card

Holographic card components for Expo and React Native. It combines Skia lighting, 3D tilt, tap/swipe flip, and optional device-motion control in one component.

Documentation: https://0610studio.github.io/expo-holographic-card/

## Demos

<table>
  <tr>
    <td align="center">
      <strong>Horizontal card</strong><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/horizontal-card-demo.mp4">
        <img width="180" alt="Horizontal holographic card demo preview" src="https://0610studio.github.io/expo-holographic-card/img/demo/horizontal-card-demo.gif" />
      </a><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/horizontal-card-demo.mp4">Watch video</a>
    </td>
    <td align="center">
      <strong>Vertical card</strong><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/vertical-card-demo.mp4">
        <img width="150" alt="Vertical holographic card demo preview" src="https://0610studio.github.io/expo-holographic-card/img/demo/vertical-card-demo.gif" />
      </a><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/vertical-card-demo.mp4">Watch video</a>
    </td>
    <td align="center">
      <strong>Photo card</strong><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/photo-card-demo.mp4">
        <img width="180" alt="Photo holographic card demo preview" src="https://0610studio.github.io/expo-holographic-card/img/demo/photo-card-demo.gif" />
      </a><br />
      <a href="https://0610studio.github.io/expo-holographic-card/video/photo-card-demo.mp4">Watch video</a>
    </td>
  </tr>
</table>

## Installation

```sh
npx expo install @0610studio/expo-holographic-card @shopify/react-native-skia react-native-reanimated react-native-gesture-handler expo-sensors
```

`AnimatedCard` uses `GestureDetector`, so wrap your app root with `GestureHandlerRootView`. If your project needs Reanimated's Babel plugin, add `react-native-reanimated/plugin` to your Babel config.

## Quick Start

```tsx
import AnimatedCard, { CardOrientation, LightingType } from '@0610studio/expo-holographic-card';

export function CardPreview() {
  return (
    <AnimatedCard
      orientation={CardOrientation.Horizontal}
      radius={24}
      frontImageSource={require('./assets/card.png')}
      lightingType={LightingType.Prismatic}
      showTexture
    />
  );
}
```

## Custom Faces

```tsx
import { AnimatedCard, CardOrientation, DefaultCardBack } from '@0610studio/expo-holographic-card';
import { Text, View } from 'react-native';

export function CustomCard() {
  return (
    <AnimatedCard
      orientation={CardOrientation.Vertical}
      frontImageSource={require('./assets/card.png')}
      frontComponent={({ radius }) => (
        <View style={{ flex: 1, justifyContent: 'space-between', padding: 24, borderRadius: radius }}>
          <Text style={{ color: 'white', fontWeight: '800' }}>HOLO CARD</Text>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: '900' }}>HOLO PASS</Text>
        </View>
      )}
      backComponent={({ width, height }) => (
        <DefaultCardBack width={width} height={height} />
      )}
    />
  );
}
```

## Local Development

```sh
pnpm install
pnpm build
pnpm test --runInBand
pnpm --dir example typecheck
pnpm docs:build
```

Example app:

```sh
pnpm example
pnpm example:ios
pnpm example:android
```

## Support

- Tested with Expo 56 and React Native 0.85+.
- Lighting layers are rendered with `@shopify/react-native-skia`.
- Tilt and flip animations use `react-native-reanimated` and `react-native-gesture-handler`.
- Sensor mode uses `DeviceMotion` from `expo-sensors`.

## License

MIT
