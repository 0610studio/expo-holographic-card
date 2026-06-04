---
title: Quick Start
---

# Quick Start

Pass one image to the card front and holographic lighting, tilt, and tap-to-flip work out of the box.

```tsx
import AnimatedCard, { CardOrientation, LightingType } from '@0610studio/expo-holographic-card';

export function CardPreview() {
  return (
    <AnimatedCard
      orientation={CardOrientation.Horizontal}
      radius={24}
      frontImageSource={require('./assets/card-horizontal.png')}
      lightingType={LightingType.Aurora}
      showTexture={false}
    />
  );
}
```

## Vertical Card

```tsx
import AnimatedCard, { CardOrientation, LightingType } from '@0610studio/expo-holographic-card';

export function VerticalCardPreview() {
  return (
    <AnimatedCard
      orientation={CardOrientation.Vertical}
      width={260}
      radius={26}
      frontImageSource={require('./assets/card-vertical.png')}
      lightingType={LightingType.Prismatic}
      showTexture
    />
  );
}
```

## Sensor Mode

Enable `sensorEnabled` to move the card with device tilt instead of finger drag.

```tsx
<AnimatedCard
  frontImageSource={require('./assets/card-horizontal.png')}
  sensorEnabled
  sensorUpdateInterval={16}
/>
```

## Example Image

![Horizontal card example](/img/card-horizontal.png)
