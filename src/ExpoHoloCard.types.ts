import type { ReactNode } from 'react';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import type { SharedValue, WithSpringConfig } from 'react-native-reanimated';

import type { CardOrientation, FlipDirection, ImageFit, LightingType } from './enums';

export type AnimatedCardFaceRenderProps = {
  width: number;
  height: number;
  orientation: CardOrientation;
  radius: number;
  tiltX: SharedValue<number>;
  tiltY: SharedValue<number>;
  maxTiltDeg: number;
  lightingType: LightingType;
  showTexture: boolean;
  flipLeft: () => void;
  flipRight: () => void;
};

export type AnimatedCardFaceRenderer = (props: AnimatedCardFaceRenderProps) => ReactNode;
export type AnimatedCardFaceComponent = ReactNode | AnimatedCardFaceRenderer;

export type AnimatedCardProps = {
  width?: number;
  height?: number;
  widthRatio?: number;
  orientation?: CardOrientation;
  aspectRatio?: number;
  radius?: number;
  maxTiltDeg?: number;
  perspective?: number;
  sensorEnabled?: boolean;
  sensorUpdateInterval?: number;
  lightingType?: LightingType;
  showTexture?: boolean;
  frontImageSource?: ImageSourcePropType;
  imageFit?: ImageFit;
  frontComponent?: AnimatedCardFaceComponent;
  backComponent?: AnimatedCardFaceComponent;
  enableTapToFlip?: boolean;
  enableSwipeToFlip?: boolean;
  tapZoneRatio?: number;
  flipDuration?: number;
  flipSwipeVelocity?: number;
  style?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
  faceStyle?: StyleProp<ViewStyle>;
  faceClipStyle?: StyleProp<ViewStyle>;
  springConfig?: WithSpringConfig;
  resetSpringConfig?: WithSpringConfig;
  liftSpringConfig?: WithSpringConfig;
  releaseLiftSpringConfig?: WithSpringConfig;
  onFlip?: (direction: FlipDirection, nextFlipDegrees: number) => void;
  accessibilityLabel?: string;
};

export type CardLightingProps = {
  type: LightingType;
  width: number;
  height: number;
  tiltX: SharedValue<number>;
  tiltY: SharedValue<number>;
  maxTiltDeg: number;
  showTexture?: boolean;
};

export type HolographicCardFrontProps = Omit<CardLightingProps, 'type'> & {
  imageSource: ImageSourcePropType;
  lightingType?: LightingType;
  imageFit?: ImageFit;
};

export type DefaultCardBackProps = {
  width: number;
  height: number;
  brand?: string;
  cvvLabel?: string;
  backgroundColor?: string;
  stripeColor?: string;
  signatureColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
};
