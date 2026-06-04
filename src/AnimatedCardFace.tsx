import React, { type ComponentProps, type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type AnimatedViewStyle = ComponentProps<typeof Animated.View>['style'];

type AnimatedCardFaceProps = {
  children: ReactNode;
  faceClipStyle?: StyleProp<ViewStyle>;
  faceStyle?: AnimatedViewStyle;
  flipStyle: AnimatedViewStyle;
  height: number;
  radius: number;
  width: number;
};

export default function AnimatedCardFace({
  children,
  faceClipStyle,
  faceStyle,
  flipStyle,
  height,
  radius,
  width,
}: AnimatedCardFaceProps) {
  return (
    <Animated.View
      style={[styles.face, { width, height, borderRadius: radius }, faceStyle, flipStyle]}>
      <View style={[styles.faceClip, { borderRadius: radius }, faceClipStyle]}>{children}</View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  face: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    backfaceVisibility: 'hidden',
    boxShadow: '0px 18px 34px rgba(15, 23, 42, 0.28)',
  },
  faceClip: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});
