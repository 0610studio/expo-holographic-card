---
title: AnimatedCard props
---

# AnimatedCard props

## Size and Shape

| prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `window.width * widthRatio` | Card width |
| `height` | `number` | `width / aspectRatio` | Card height |
| `widthRatio` | `number` | `0.8` | Screen-width multiplier used when `width` is not provided |
| `orientation` | `CardOrientation` | `Horizontal` | Horizontal or vertical ratio |
| `aspectRatio` | `number` | Orientation default | Custom image ratio |
| `radius` | `number` | `20` | Card corner radius |

## Lighting and Image

| prop | Type | Default | Description |
| --- | --- | --- | --- |
| `frontImageSource` | `ImageSourcePropType` | None | Front artwork |
| `imageFit` | `ImageFit` | `Cover` | Image resize mode |
| `lightingType` | `LightingType` | `Normal` | Lighting style |
| `showTexture` | `boolean` | `false` | Shows Skia turbulence texture |

## Motion and Flip

| prop | Type | Default | Description |
| --- | --- | --- | --- |
| `maxTiltDeg` | `number` | `20` | Maximum tilt angle |
| `perspective` | `number` | `1000` | 3D transform perspective |
| `sensorEnabled` | `boolean` | `false` | Uses DeviceMotion sensor input |
| `sensorUpdateInterval` | `number` | `16` | Sensor update interval in milliseconds |
| `enableTapToFlip` | `boolean` | `true` | Enables left/right tap-zone flip |
| `enableSwipeToFlip` | `boolean` | `true` | Enables horizontal swipe flip |
| `tapZoneRatio` | `number` | `0.2` | Width ratio for each side tap zone |
| `flipDuration` | `number` | `700` | Flip animation duration in milliseconds |
| `flipSwipeVelocity` | `number` | `600` | Minimum velocity for swipe flip |
| `onFlip` | `(direction, nextFlipDegrees) => void` | None | Called with the flip direction and target degrees |

## Spring Options

| prop | Type | Default | Description |
| --- | --- | --- | --- |
| `springConfig` | `WithSpringConfig` | `SPRING_CONFIG` | Tilt spring used while dragging or reading sensor input |
| `resetSpringConfig` | `WithSpringConfig` | `RESET_SPRING_CONFIG` | Spring used to reset tilt to neutral |
| `liftSpringConfig` | `WithSpringConfig` | `LIFT_SPRING_CONFIG` | Spring used when the card lifts on gesture begin |
| `releaseLiftSpringConfig` | `WithSpringConfig` | `RELEASE_LIFT_SPRING_CONFIG` | Spring used when the lifted card settles |

## Rendering and Styles

| prop | Type | Description |
| --- | --- | --- |
| `frontComponent` | `ReactNode \| AnimatedCardFaceRenderer` | Front overlay or full front renderer |
| `backComponent` | `ReactNode \| AnimatedCardFaceRenderer` | Custom back renderer |
| `style` | `StyleProp<ViewStyle>` | Card wrapper style |
| `cardStyle` | `StyleProp<ViewStyle>` | Flip-motion wrapper style |
| `faceStyle` | `StyleProp<ViewStyle>` | Front/back face `Animated.View` style |
| `faceClipStyle` | `StyleProp<ViewStyle>` | Inner clipped face style |
| `accessibilityLabel` | `string` | Card accessibility label |
