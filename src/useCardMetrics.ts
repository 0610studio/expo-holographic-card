import { useWindowDimensions } from 'react-native';

import type { AnimatedCardProps } from './ExpoHoloCard.types';
import { CARD_ASPECT_RATIO, CARD_VERTICAL_ASPECT_RATIO, TAP_ZONE_RATIO } from './constants';
import { CardOrientation } from './enums';

type CardMetricsParams = Pick<
  AnimatedCardProps,
  'width' | 'height' | 'widthRatio' | 'orientation' | 'aspectRatio' | 'radius' | 'tapZoneRatio'
>;

const DEFAULT_CARD_RADIUS = 20;
const DEFAULT_WIDTH_RATIO = 0.8;

export default function useCardMetrics({
  width,
  height,
  widthRatio = DEFAULT_WIDTH_RATIO,
  orientation = CardOrientation.Horizontal,
  aspectRatio,
  radius = DEFAULT_CARD_RADIUS,
  tapZoneRatio = TAP_ZONE_RATIO,
}: CardMetricsParams) {
  const window = useWindowDimensions();
  const cardAspectRatio =
    aspectRatio ??
    (orientation === CardOrientation.Vertical ? CARD_VERTICAL_ASPECT_RATIO : CARD_ASPECT_RATIO);
  const cardWidth = width ?? window.width * widthRatio;
  const cardHeight = height ?? cardWidth / cardAspectRatio;

  return {
    cardHeight,
    cardOrientation: orientation,
    cardRadius: radius,
    cardWidth,
    tapZoneWidth: cardWidth * tapZoneRatio,
  };
}
