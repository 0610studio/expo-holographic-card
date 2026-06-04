import { Canvas } from '@shopify/react-native-skia';
import React from 'react';
import { Image, StyleSheet, View, type ImageResizeMode } from 'react-native';

import CardLighting from './CardLighting';
import type { HolographicCardFrontProps } from './ExpoHoloCard.types';
import { ImageFit, LightingType } from './enums';

const IMAGE_RESIZE_MODE: Record<ImageFit, ImageResizeMode> = {
  [ImageFit.Cover]: 'cover',
  [ImageFit.Contain]: 'contain',
  [ImageFit.Fill]: 'stretch',
  [ImageFit.FitHeight]: 'contain',
  [ImageFit.FitWidth]: 'contain',
  [ImageFit.None]: 'center',
  [ImageFit.ScaleDown]: 'contain',
};

export default function HolographicCardFront({
  imageSource,
  width,
  height,
  tiltX,
  tiltY,
  maxTiltDeg,
  lightingType = LightingType.Normal,
  showTexture = false,
  imageFit = ImageFit.Cover,
}: HolographicCardFrontProps) {
  return (
    <View style={{ width, height }}>
      <Image source={imageSource} resizeMode={IMAGE_RESIZE_MODE[imageFit]} style={styles.image} />
      <Canvas style={[StyleSheet.absoluteFill, styles.lightingCanvas]}>
        <CardLighting
          type={lightingType}
          width={width}
          height={height}
          tiltX={tiltX}
          tiltY={tiltY}
          maxTiltDeg={maxTiltDeg}
          showTexture={showTexture}
        />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  lightingCanvas: {
    opacity: 0.58,
  },
});
