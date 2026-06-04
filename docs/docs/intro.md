---
sidebar_position: 1
title: Introduction
---

# expo-holographic-card

`@0610studio/expo-holographic-card` helps you build holographic card UI in Expo and React Native apps.

It blends Skia lighting over card artwork and exposes Reanimated-powered tilt, flip motion, and optional `expo-sensors` device motion through one API.

## Demo Videos

<table>
  <tr>
    <td align="center">
      <strong>Horizontal card</strong><br />
      <video controls muted playsInline preload="metadata" width="220" src="/expo-holographic-card/video/horizontal-card-demo.mp4"></video>
    </td>
    <td align="center">
      <strong>Vertical card</strong><br />
      <video controls muted playsInline preload="metadata" width="220" src="/expo-holographic-card/video/vertical-card-demo.mp4"></video>
    </td>
    <td align="center">
      <strong>Photo card</strong><br />
      <video controls muted playsInline preload="metadata" width="220" src="/expo-holographic-card/video/photo-card-demo.mp4"></video>
    </td>
  </tr>
</table>

## What's Included?

- `AnimatedCard`: the main component for sizing, orientation, tilt, flip, and lighting
- `frontImageSource`: artwork for the card front
- `frontComponent`, `backComponent`: extension points for custom front overlays and backs
- `CardLighting`, `HolographicCardFront`: lighting components you can compose directly inside a Canvas
- `LightingType`, `CardOrientation`, `ImageFit`, `FlipDirection`: constant objects and TypeScript types

## Verified Environment

- Expo 56
- React Native 0.85
- React 19
- React Native Reanimated 4.3
- React Native Skia 2.6

## Next Step

Start with [Installation](/docs/getting-started/installation) if you are adding the package to a new app.
