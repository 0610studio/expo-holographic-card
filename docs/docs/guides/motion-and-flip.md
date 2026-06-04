---
title: Motion and Flip
---

# Motion and Flip

`AnimatedCard` supports three interaction layers.

| Interaction | Default | Description |
| --- | --- | --- |
| Drag tilt | Enabled | Calculates `rotateX` and `rotateY` from finger movement. |
| Tap flip | Enabled | Flips the card left or right with side tap zones. |
| Swipe flip | Enabled | Flips the card when horizontal swipe velocity passes the threshold. |

## Flip Options

```tsx
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AnimatedCard, type FlipDirection } from '@0610studio/expo-holographic-card';

export function FlipCard() {
  const [lastFlip, setLastFlip] = useState<FlipDirection | null>(null);

  return (
    <View>
      <AnimatedCard
        enableTapToFlip
        enableSwipeToFlip
        tapZoneRatio={0.2}
        flipDuration={700}
        flipSwipeVelocity={600}
        onFlip={(direction) => {
          setLastFlip(direction);
        }}
      />
      <Text>{lastFlip ? `Last flip: ${lastFlip}` : 'Not flipped yet'}</Text>
    </View>
  );
}
```

For a simple setup, pass only the options you need.

```tsx
<AnimatedCard
  enableTapToFlip
  enableSwipeToFlip
  tapZoneRatio={0.2}
  flipDuration={700}
  flipSwipeVelocity={600}
/>
```

## Tilt Strength

Use `maxTiltDeg` to control the maximum rotation angle.

```tsx
<AnimatedCard maxTiltDeg={16} perspective={1000} />
```

## Sensor Mode

When `sensorEnabled` is on, the card follows DeviceMotion values and ignores drag updates.

```tsx
<AnimatedCard sensorEnabled sensorUpdateInterval={16} />
```

Sensor mode is best verified on a real device. Simulators and emulators may provide limited sensor input.
