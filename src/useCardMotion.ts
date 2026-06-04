/* eslint-disable react-hooks/immutability -- Reanimated SharedValue.value is mutable animation state. */
import { DeviceMotion } from 'expo-sensors';
import { useCallback, useEffect } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import type { AnimatedCardProps } from './ExpoHoloCard.types';
import {
  FLIP_DURATION,
  FLIP_SWIPE_VELOCITY,
  LIFT_SPRING_CONFIG,
  MAX_TILT_DEG,
  RELEASE_LIFT_SPRING_CONFIG,
  RESET_SPRING_CONFIG,
  SPRING_CONFIG,
} from './constants';
import { FlipDirection } from './enums';

const RAD_TO_DEG = 180 / Math.PI;

const clamp = (value: number, min: number, max: number) => {
  'worklet';
  return Math.min(Math.max(value, min), max);
};

type CardMotionParams = Pick<
  AnimatedCardProps,
  | 'enableSwipeToFlip'
  | 'flipDuration'
  | 'flipSwipeVelocity'
  | 'liftSpringConfig'
  | 'onFlip'
  | 'perspective'
  | 'releaseLiftSpringConfig'
  | 'resetSpringConfig'
  | 'sensorEnabled'
  | 'sensorUpdateInterval'
  | 'springConfig'
> & {
  cardHeight: number;
  cardWidth: number;
  maxTiltDeg?: number;
};

export default function useCardMotion({
  cardHeight,
  cardWidth,
  enableSwipeToFlip = true,
  flipDuration = FLIP_DURATION,
  flipSwipeVelocity = FLIP_SWIPE_VELOCITY,
  liftSpringConfig = LIFT_SPRING_CONFIG,
  maxTiltDeg = MAX_TILT_DEG,
  onFlip,
  perspective = 1000,
  releaseLiftSpringConfig = RELEASE_LIFT_SPRING_CONFIG,
  resetSpringConfig = RESET_SPRING_CONFIG,
  sensorEnabled = false,
  sensorUpdateInterval = 16,
  springConfig = SPRING_CONFIG,
}: CardMotionParams) {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const flipDeg = useSharedValue(0);
  const targetFlipDeg = useSharedValue(0);
  const lift = useSharedValue(0);

  const flip = useCallback(
    (direction: FlipDirection) => {
      targetFlipDeg.value += direction * 180;
      const nextFlipDegrees = targetFlipDeg.value;
      flipDeg.value = withTiming(nextFlipDegrees, {
        duration: flipDuration,
        easing: Easing.inOut(Easing.cubic),
      });
      onFlip?.(direction, nextFlipDegrees);
    },
    [flipDeg, flipDuration, onFlip, targetFlipDeg]
  );

  const flipLeft = useCallback(() => {
    flip(FlipDirection.Left);
  }, [flip]);

  const flipRight = useCallback(() => {
    flip(FlipDirection.Right);
  }, [flip]);

  useEffect(() => {
    if (!sensorEnabled) {
      rotateX.value = withSpring(0, resetSpringConfig);
      rotateY.value = withSpring(0, resetSpringConfig);
      return;
    }

    let subscription: ReturnType<typeof DeviceMotion.addListener> | null = null;
    let baseBeta: number | null = null;
    let baseGamma: number | null = null;

    const start = async () => {
      const available = await DeviceMotion.isAvailableAsync();
      if (!available) {
        return;
      }

      DeviceMotion.setUpdateInterval(sensorUpdateInterval);
      subscription = DeviceMotion.addListener(({ rotation }) => {
        if (!rotation) {
          return;
        }

        if (baseBeta === null || baseGamma === null) {
          baseBeta = rotation.beta;
          baseGamma = rotation.gamma;
          return;
        }

        const deltaBeta = (rotation.beta - baseBeta) * RAD_TO_DEG;
        const deltaGamma = (rotation.gamma - baseGamma) * RAD_TO_DEG;
        const pitchDeg = clamp(deltaBeta, -maxTiltDeg, maxTiltDeg);
        const rollDeg = clamp(deltaGamma, -maxTiltDeg, maxTiltDeg);

        rotateX.value = withSpring(-pitchDeg, springConfig);
        rotateY.value = withSpring(rollDeg, springConfig);
      });
    };

    start().catch(() => undefined);

    return () => {
      subscription?.remove();
    };
  }, [
    maxTiltDeg,
    resetSpringConfig,
    rotateX,
    rotateY,
    sensorEnabled,
    sensorUpdateInterval,
    springConfig,
  ]);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      lift.value = withSpring(1, liftSpringConfig);
    })
    .onUpdate((event) => {
      if (sensorEnabled) {
        return;
      }

      rotateY.value = clamp(
        (event.translationX / (cardWidth / 2)) * maxTiltDeg,
        -maxTiltDeg,
        maxTiltDeg
      );
      rotateX.value = clamp(
        (-event.translationY / (cardHeight / 2)) * maxTiltDeg,
        -maxTiltDeg,
        maxTiltDeg
      );
    })
    .onEnd((event) => {
      const isHorizontalSwipe =
        enableSwipeToFlip &&
        Math.abs(event.velocityX) > flipSwipeVelocity &&
        Math.abs(event.velocityX) > Math.abs(event.velocityY);

      if (isHorizontalSwipe) {
        const direction: FlipDirection =
          event.velocityX > 0 ? FlipDirection.Right : FlipDirection.Left;
        targetFlipDeg.value += direction * 180;
        const nextFlipDegrees = targetFlipDeg.value;
        flipDeg.value = withTiming(nextFlipDegrees, {
          duration: flipDuration,
          easing: Easing.inOut(Easing.cubic),
        });
        if (onFlip) {
          runOnJS(onFlip)(direction, nextFlipDegrees);
        }
      }

      if (!sensorEnabled) {
        rotateX.value = withSpring(0, resetSpringConfig);
        rotateY.value = withSpring(0, resetSpringConfig);
      }
    })
    .onFinalize(() => {
      lift.value = withSpring(0, releaseLiftSpringConfig);
    });

  const cardMotionStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective },
      { translateY: -lift.value * 10 },
      { scale: 1 + lift.value * 0.04 },
      { rotateX: `${rotateX.value}deg` },
      { rotateY: `${rotateY.value}deg` },
    ],
  }));

  const frontFlipStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flipDeg.value}deg` }],
  }));

  const backFlipStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${flipDeg.value + 180}deg` }],
  }));

  const flipMotionStyle = useAnimatedStyle(() => {
    const progress = Math.abs(Math.sin((flipDeg.value * Math.PI) / 180));
    return {
      transform: [
        { translateY: -progress * 18 },
        { scale: 1 + progress * 0.08 },
        { rotateX: `${progress * 6}deg` },
        { rotateZ: `${progress * 2}deg` },
      ],
    };
  });

  return {
    backFlipStyle,
    cardMotionStyle,
    flipLeft,
    flipMotionStyle,
    flipRight,
    frontFlipStyle,
    maxTiltDeg,
    panGesture,
    rotateX,
    rotateY,
  };
}
