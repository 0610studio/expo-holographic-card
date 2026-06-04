---
title: Render props
---

# Render props

Pass a render function to `frontComponent` or `backComponent` to receive these values.

```ts
type AnimatedCardFaceRenderProps = {
  width: number;
  height: number;
  orientation: CardOrientation;
  radius: number;
  tiltX: SharedValue<number>;
  tiltY: SharedValue<number>;
  maxTiltDeg: number;
  lightingType: LightingType;
  showTexture: boolean;
  flipLeft: () => void;
  flipRight: () => void;
};
```

## Common Values

| Value | Description |
| --- | --- |
| `width`, `height` | Resolved card size |
| `orientation` | Current card orientation |
| `radius` | Card radius |
| `tiltX`, `tiltY` | Reanimated SharedValue tilt values |
| `flipLeft`, `flipRight` | Manual flip helpers |

## Compose Lighting Directly

You can pass `tiltX` and `tiltY` directly to `CardLighting`.

```tsx
import { Canvas } from '@shopify/react-native-skia';
import { CardLighting, LightingType } from '@0610studio/expo-holographic-card';

frontComponent={({ width, height, tiltX, tiltY, maxTiltDeg }) => (
  <Canvas style={{ width, height }}>
    <CardLighting
      type={LightingType.Etched}
      width={width}
      height={height}
      tiltX={tiltX}
      tiltY={tiltY}
      maxTiltDeg={maxTiltDeg}
    />
  </Canvas>
)}
```
