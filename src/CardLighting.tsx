import {
  Fill,
  LinearGradient as SkiaLinearGradient,
  RadialGradient,
  Turbulence,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { type SharedValue, useDerivedValue } from 'react-native-reanimated';

import type { CardLightingProps } from './ExpoHoloCard.types';
import { LightingType } from './enums';

const safeRatio = (value: SharedValue<number>, maxTiltDeg: number) => {
  'worklet';
  return maxTiltDeg === 0 ? 0 : value.value / maxTiltDeg;
};

export default function CardLighting({
  type,
  width,
  height,
  tiltX,
  tiltY,
  maxTiltDeg,
  showTexture = false,
}: CardLightingProps) {
  const lightCenter = useDerivedValue(() =>
    vec(
      width * 0.78 - safeRatio(tiltY, maxTiltDeg) * width * 0.35,
      height * 0.18 + safeRatio(tiltX, maxTiltDeg) * height * 0.35
    )
  );

  const bandStart = useDerivedValue(() =>
    vec(
      -width * 0.5 + safeRatio(tiltY, maxTiltDeg) * width * 0.8,
      -height * 0.3 + safeRatio(tiltX, maxTiltDeg) * height * 0.4
    )
  );
  const bandEnd = useDerivedValue(() =>
    vec(
      width * 1.5 + safeRatio(tiltY, maxTiltDeg) * width * 0.8,
      height * 1.3 + safeRatio(tiltX, maxTiltDeg) * height * 0.4
    )
  );

  const counterBandStart = useDerivedValue(() =>
    vec(
      width * 1.5 - safeRatio(tiltY, maxTiltDeg) * width * 0.6,
      -height * 0.3 + safeRatio(tiltX, maxTiltDeg) * height * 0.4
    )
  );
  const counterBandEnd = useDerivedValue(() =>
    vec(
      -width * 0.5 - safeRatio(tiltY, maxTiltDeg) * width * 0.6,
      height * 1.3 + safeRatio(tiltX, maxTiltDeg) * height * 0.4
    )
  );

  const tiltMagnitude = useDerivedValue(() => {
    if (maxTiltDeg === 0) {
      return 0;
    }

    const mag = Math.sqrt(tiltX.value * tiltX.value + tiltY.value * tiltY.value) / maxTiltDeg;
    return Math.min(mag, 1);
  });

  return (
    <>
      <Fill blendMode="overlay">
        <SkiaLinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0)', 'rgba(0,0,0,0.25)']}
          positions={[0, 0.45, 1]}
        />
      </Fill>

      {type === LightingType.Normal && (
        <Fill blendMode="screen">
          <RadialGradient
            c={lightCenter}
            r={width * 0.8}
            colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.05)', 'rgba(255,255,255,0)']}
            positions={[0, 0.5, 1]}
          />
        </Fill>
      )}

      {type === LightingType.Prismatic && (
        <>
          <Fill blendMode="overlay">
            <SkiaLinearGradient
              start={bandStart}
              end={bandEnd}
              colors={[
                'transparent',
                'rgba(255,77,109,0.42)',
                'rgba(255,159,67,0.42)',
                'rgba(255,209,102,0.4)',
                'rgba(6,214,160,0.38)',
                'rgba(76,201,240,0.38)',
                'rgba(114,9,183,0.42)',
                'rgba(247,37,133,0.4)',
                'transparent',
              ]}
              positions={[0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]}
            />
          </Fill>
          <Fill blendMode="screen">
            <RadialGradient
              c={lightCenter}
              r={width * 0.45}
              colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0)']}
            />
          </Fill>
        </>
      )}

      {type === LightingType.Aurora && (
        <>
          <Fill blendMode="screen">
            <SkiaLinearGradient
              start={bandStart}
              end={bandEnd}
              colors={[
                'rgba(0,255,150,0)',
                'rgba(0,255,150,0.35)',
                'rgba(0,200,255,0.45)',
                'rgba(180,0,255,0.35)',
                'rgba(180,0,255,0)',
              ]}
              positions={[0, 0.3, 0.5, 0.7, 1]}
            />
          </Fill>
          <Fill blendMode="plus">
            <RadialGradient
              c={lightCenter}
              r={width * 0.4}
              colors={['rgba(220,255,240,0.2)', 'rgba(220,255,240,0)']}
            />
          </Fill>
        </>
      )}

      {type === LightingType.Reverse && (
        <>
          <Fill blendMode="overlay">
            <SkiaLinearGradient
              start={bandStart}
              end={bandEnd}
              colors={[
                'transparent',
                'rgba(180,220,255,0.3)',
                'rgba(255,230,210,0.25)',
                'rgba(210,255,220,0.3)',
                'rgba(220,200,255,0.3)',
                'transparent',
              ]}
              positions={[0, 0.2, 0.4, 0.6, 0.8, 1]}
            />
          </Fill>
          <Fill blendMode="screen">
            <RadialGradient
              c={lightCenter}
              r={width * 0.5}
              colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0)']}
            />
          </Fill>
        </>
      )}

      {type === LightingType.Cosmos && (
        <>
          <Fill blendMode="overlay">
            <SkiaLinearGradient
              start={vec(0, 0)}
              end={vec(width, height)}
              colors={[
                'rgba(30,15,70,0.35)',
                'rgba(90,40,160,0.45)',
                'rgba(150,70,210,0.35)',
                'rgba(40,20,90,0.4)',
              ]}
              positions={[0, 0.4, 0.6, 1]}
            />
          </Fill>
          <Fill blendMode="plus" opacity={tiltMagnitude}>
            <RadialGradient
              c={lightCenter}
              r={width * 0.4}
              colors={['rgba(180,140,255,0.3)', 'rgba(180,140,255,0)']}
            />
          </Fill>
        </>
      )}

      {type === LightingType.Etched && (
        <>
          <Fill blendMode="screen">
            <SkiaLinearGradient
              start={bandStart}
              end={bandEnd}
              colors={[
                'transparent',
                'rgba(230,235,245,0.4)',
                'transparent',
                'rgba(230,235,245,0.3)',
                'transparent',
              ]}
              positions={[0.25, 0.35, 0.5, 0.65, 0.75]}
            />
          </Fill>
          <Fill blendMode="screen">
            <SkiaLinearGradient
              start={counterBandStart}
              end={counterBandEnd}
              colors={[
                'transparent',
                'rgba(200,210,230,0.35)',
                'transparent',
                'rgba(200,210,230,0.25)',
                'transparent',
              ]}
              positions={[0.3, 0.4, 0.5, 0.6, 0.7]}
            />
          </Fill>
          <Fill blendMode="overlay" opacity={tiltMagnitude}>
            <RadialGradient
              c={lightCenter}
              r={width * 0.4}
              colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0)']}
            />
          </Fill>
        </>
      )}

      {showTexture && (
        <Fill blendMode="overlay" opacity={0.3}>
          <Turbulence freqX={0.5} freqY={0.5} octaves={3} seed={101} />
        </Fill>
      )}
    </>
  );
}
