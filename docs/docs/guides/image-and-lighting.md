---
title: Image and Lighting
---

# Image and Lighting

`frontImageSource` accepts the same value shape as React Native `Image` `source`.

```tsx
<AnimatedCard
  frontImageSource={require('./assets/card.png')}
  imageFit={ImageFit.Cover}
  lightingType={LightingType.Prismatic}
  showTexture
/>
```

## Image Fit

| Value | Behavior |
| --- | --- |
| `ImageFit.Cover` | Fills the card area. |
| `ImageFit.Contain` | Fits the full image inside the card. |
| `ImageFit.Fill` | Stretches the image to the card size. |
| `ImageFit.None` | Centers the source image. |
| `ImageFit.FitHeight`, `ImageFit.FitWidth`, `ImageFit.ScaleDown` | Fall back to `contain` for React Native images. |

## Lighting Types

| Value | Look |
| --- | --- |
| `LightingType.Normal` | Basic highlight |
| `LightingType.Prismatic` | Rainbow prism band |
| `LightingType.Aurora` | Green and blue aurora band |
| `LightingType.Reverse` | Soft reversed color band |
| `LightingType.Cosmos` | Violet cosmic glow |
| `LightingType.Etched` | Metallic etched lines |

Use `LIGHTING_TYPES` and `LIGHTING_LABELS` to build control UI.

```tsx
import { LIGHTING_LABELS, LIGHTING_TYPES } from '@0610studio/expo-holographic-card';

LIGHTING_TYPES.map((type) => ({
  value: type,
  label: LIGHTING_LABELS[type],
}));
```
