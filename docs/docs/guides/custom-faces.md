---
title: Custom Fronts and Backs
---

# Custom Fronts and Backs

`frontComponent` and `backComponent` accept either a React node or a render function. Render functions receive card size, radius, tilt values, and flip helpers, so your inner UI can react to card state.

```tsx
import { AnimatedCard, DefaultCardBack } from '@0610studio/expo-holographic-card';
import { Text, View } from 'react-native';

export function MembershipCard() {
  return (
    <AnimatedCard
      frontImageSource={require('./assets/card.png')}
      frontComponent={({ radius }) => (
        <View style={{ flex: 1, justifyContent: 'space-between', padding: 24, borderRadius: radius }}>
          <Text style={{ color: 'white', fontWeight: '800' }}>HOLO CARD</Text>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: '900' }}>AURORA PASS</Text>
        </View>
      )}
      backComponent={({ width, height }) => (
        <DefaultCardBack width={width} height={height} brand="AURORA" />
      )}
    />
  );
}
```

## Front Overlay Behavior

When you pass both `frontImageSource` and `frontComponent`, the image renders first and `frontComponent` is overlaid on top.

If you pass only `frontComponent`, you can draw the entire front face yourself.

## Add a Flip Button

Render functions receive `flipLeft` and `flipRight`.

```tsx
frontComponent={({ flipRight }) => (
  <Pressable onPress={flipRight}>
    <Text>Flip</Text>
  </Pressable>
)}
```
