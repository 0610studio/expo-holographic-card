/* eslint-disable @typescript-eslint/no-redeclare */

export const LightingType = {
  Normal: 'normal',
  Prismatic: 'prismatic',
  Aurora: 'aurora',
  Reverse: 'reverse',
  Cosmos: 'cosmos',
  Etched: 'etched',
} as const;

export type LightingType = (typeof LightingType)[keyof typeof LightingType];

export const CardOrientation = {
  Horizontal: 'horizontal',
  Vertical: 'vertical',
} as const;

export type CardOrientation = (typeof CardOrientation)[keyof typeof CardOrientation];

export const ImageFit = {
  Cover: 'cover',
  Contain: 'contain',
  Fill: 'fill',
  FitHeight: 'fitHeight',
  FitWidth: 'fitWidth',
  None: 'none',
  ScaleDown: 'scaleDown',
} as const;

export type ImageFit = (typeof ImageFit)[keyof typeof ImageFit];

export const FlipDirection = {
  Left: -1,
  Right: 1,
} as const;

export type FlipDirection = (typeof FlipDirection)[keyof typeof FlipDirection];
