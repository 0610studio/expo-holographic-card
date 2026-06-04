import { LightingType } from './enums';

export const CARD_ASPECT_RATIO = 840 / 528;
export const CARD_HORIZONTAL_ASPECT_RATIO = CARD_ASPECT_RATIO;
export const CARD_VERTICAL_ASPECT_RATIO = 528 / 840;
export const MAX_TILT_DEG = 20;
export const SPRING_CONFIG = { damping: 18, stiffness: 120, mass: 0.6 };
export const RESET_SPRING_CONFIG = { damping: 14, stiffness: 140, mass: 0.5 };
export const LIFT_SPRING_CONFIG = { damping: 12, stiffness: 220 };
export const RELEASE_LIFT_SPRING_CONFIG = { damping: 14, stiffness: 180 };
export const FLIP_DURATION = 700;
export const FLIP_SWIPE_VELOCITY = 600;
export const TAP_ZONE_RATIO = 0.2;

export const LIGHTING_LABELS: Record<LightingType, string> = {
  [LightingType.Normal]: 'Normal',
  [LightingType.Prismatic]: 'Prismatic',
  [LightingType.Aurora]: 'Aurora',
  [LightingType.Reverse]: 'Reverse',
  [LightingType.Cosmos]: 'Cosmos',
  [LightingType.Etched]: 'Etched',
};

export const LIGHTING_TYPES: LightingType[] = Object.values(LightingType);
