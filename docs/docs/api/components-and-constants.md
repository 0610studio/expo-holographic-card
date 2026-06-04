---
title: Components and constants
---

# Components and constants

## Exports

```ts
export { default } from './AnimatedCard';
export { default as AnimatedCard } from './AnimatedCard';
export { default as CardLighting } from './CardLighting';
export { default as DefaultCardBack } from './DefaultCardBack';
export { default as HolographicCardFront } from './HolographicCardFront';
export * from './constants';
export * from './enums';
export * from './ExpoHoloCard.types';
```

## Components

| Name | Description |
| --- | --- |
| `AnimatedCard` | Main card component |
| `HolographicCardFront` | Front component that blends an image with Skia lighting |
| `CardLighting` | Lighting layer used inside a Canvas |
| `DefaultCardBack` | Simple default card back |

## Enum Objects

| Name | Values |
| --- | --- |
| `CardOrientation` | `Horizontal`, `Vertical` |
| `LightingType` | `Normal`, `Prismatic`, `Aurora`, `Reverse`, `Cosmos`, `Etched` |
| `ImageFit` | `Cover`, `Contain`, `Fill`, `FitHeight`, `FitWidth`, `None`, `ScaleDown` |
| `FlipDirection` | `Left`, `Right` |

## Constants

| Name | Value |
| --- | --- |
| `CARD_ASPECT_RATIO` | `840 / 528` |
| `CARD_HORIZONTAL_ASPECT_RATIO` | `840 / 528` |
| `CARD_VERTICAL_ASPECT_RATIO` | `528 / 840` |
| `MAX_TILT_DEG` | `20` |
| `SPRING_CONFIG` | `{ damping: 18, stiffness: 120, mass: 0.6 }` |
| `RESET_SPRING_CONFIG` | `{ damping: 14, stiffness: 140, mass: 0.5 }` |
| `LIFT_SPRING_CONFIG` | `{ damping: 12, stiffness: 220 }` |
| `RELEASE_LIFT_SPRING_CONFIG` | `{ damping: 14, stiffness: 180 }` |
| `FLIP_DURATION` | `700` |
| `FLIP_SWIPE_VELOCITY` | `600` |
| `TAP_ZONE_RATIO` | `0.2` |
| `LIGHTING_TYPES` | Array of all lighting types |
| `LIGHTING_LABELS` | English label by lighting type |
