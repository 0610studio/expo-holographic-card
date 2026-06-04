import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import AnimatedCardFace from './AnimatedCardFace';
import DefaultCardBack from './DefaultCardBack';
import DefaultCardFront from './DefaultCardFront';
import type {
  AnimatedCardFaceComponent,
  AnimatedCardFaceRenderProps,
  AnimatedCardProps,
} from './ExpoHoloCard.types';
import HolographicCardFront from './HolographicCardFront';
import { ImageFit, LightingType } from './enums';
import useCardMetrics from './useCardMetrics';
import useCardMotion from './useCardMotion';

const renderFace = (
  component: AnimatedCardFaceComponent | undefined,
  props: AnimatedCardFaceRenderProps
) => (typeof component === 'function' ? component(props) : component);

const hasNode = (node: React.ReactNode) => node !== null && node !== undefined;

export default function AnimatedCard({
  width,
  height,
  widthRatio,
  orientation,
  aspectRatio,
  radius,
  maxTiltDeg,
  perspective,
  sensorEnabled,
  sensorUpdateInterval,
  lightingType = LightingType.Normal,
  showTexture = false,
  frontImageSource,
  imageFit = ImageFit.Cover,
  frontComponent,
  backComponent,
  enableTapToFlip = true,
  enableSwipeToFlip,
  tapZoneRatio,
  flipDuration,
  flipSwipeVelocity,
  style,
  cardStyle,
  faceStyle,
  faceClipStyle,
  springConfig,
  resetSpringConfig,
  liftSpringConfig,
  releaseLiftSpringConfig,
  onFlip,
  accessibilityLabel = 'Animated card',
}: AnimatedCardProps) {
  const { cardHeight, cardOrientation, cardRadius, cardWidth, tapZoneWidth } = useCardMetrics({
    aspectRatio,
    height,
    orientation,
    radius,
    tapZoneRatio,
    width,
    widthRatio,
  });
  const {
    backFlipStyle,
    cardMotionStyle,
    flipLeft,
    flipMotionStyle,
    flipRight,
    frontFlipStyle,
    maxTiltDeg: resolvedMaxTiltDeg,
    panGesture,
    rotateX,
    rotateY,
  } = useCardMotion({
    cardHeight,
    cardWidth,
    enableTapToFlip,
    enableSwipeToFlip,
    flipDuration,
    flipSwipeVelocity,
    liftSpringConfig,
    maxTiltDeg,
    onFlip,
    perspective,
    releaseLiftSpringConfig,
    resetSpringConfig,
    sensorEnabled,
    sensorUpdateInterval,
    springConfig,
    tapZoneWidth,
  });

  const faceProps: AnimatedCardFaceRenderProps = {
    width: cardWidth,
    height: cardHeight,
    orientation: cardOrientation,
    radius: cardRadius,
    tiltX: rotateX,
    tiltY: rotateY,
    maxTiltDeg: resolvedMaxTiltDeg,
    lightingType,
    showTexture,
    flipLeft,
    flipRight,
  };

  const frontOverlay = renderFace(frontComponent, faceProps);
  const backOverlay = renderFace(backComponent, faceProps);
  const hasFrontOverlay = hasNode(frontOverlay);

  const frontImageContent = frontImageSource ? (
    <HolographicCardFront
      imageSource={frontImageSource}
      width={cardWidth}
      height={cardHeight}
      tiltX={rotateX}
      tiltY={rotateY}
      maxTiltDeg={resolvedMaxTiltDeg}
      lightingType={lightingType}
      showTexture={showTexture}
      imageFit={imageFit}
    />
  ) : !hasFrontOverlay ? (
    <DefaultCardFront width={cardWidth} height={cardHeight} />
  ) : null;

  const frontContent = hasFrontOverlay ? (
    <View style={styles.faceFill}>
      {frontImageContent}
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        {frontOverlay}
      </View>
    </View>
  ) : (
    frontImageContent
  );

  const backContent = hasNode(backOverlay) ? (
    backOverlay
  ) : (
    <DefaultCardBack width={cardWidth} height={cardHeight} />
  );

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.cardWrapper,
          {
            width: cardWidth,
            height: cardHeight,
            borderRadius: cardRadius,
          },
          style,
          cardMotionStyle,
        ]}>
        <Animated.View
          style={[
            styles.flipMotion,
            { width: cardWidth, height: cardHeight, borderRadius: cardRadius },
            cardStyle,
            flipMotionStyle,
          ]}>
          <AnimatedCardFace
            width={cardWidth}
            height={cardHeight}
            radius={cardRadius}
            faceStyle={faceStyle}
            faceClipStyle={faceClipStyle}
            flipStyle={frontFlipStyle}>
            {frontContent}
          </AnimatedCardFace>

          <AnimatedCardFace
            width={cardWidth}
            height={cardHeight}
            radius={cardRadius}
            faceStyle={faceStyle}
            faceClipStyle={faceClipStyle}
            flipStyle={backFlipStyle}>
            {backContent}
          </AnimatedCardFace>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    position: 'relative',
    overflow: 'visible',
    backgroundColor: 'transparent',
  },
  flipMotion: {
    position: 'relative',
    zIndex: 1,
  },
  faceFill: {
    width: '100%',
    height: '100%',
  },
});
