import {
  CARD_ASPECT_RATIO,
  CARD_HORIZONTAL_ASPECT_RATIO,
  CARD_VERTICAL_ASPECT_RATIO,
  LIGHTING_LABELS,
  LIGHTING_TYPES,
} from '../constants';
import { LightingType } from '../enums';

describe('card constants', () => {
  it('keeps the source card image ratio', () => {
    expect(CARD_ASPECT_RATIO).toBeCloseTo(840 / 528);
    expect(CARD_HORIZONTAL_ASPECT_RATIO).toBeCloseTo(840 / 528);
    expect(CARD_VERTICAL_ASPECT_RATIO).toBeCloseTo(528 / 840);
  });

  it('has a label for every lighting type', () => {
    expect(LIGHTING_TYPES).toEqual(Object.values(LightingType));
    expect(LIGHTING_TYPES.every((type) => Boolean(LIGHTING_LABELS[type]))).toBe(true);
  });
});
