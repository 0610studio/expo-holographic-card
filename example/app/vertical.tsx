import { CardOrientation } from '@0610studio/expo-holographic-card';

import CardDemoScreen from '../components/CardDemoScreen';

export default function VerticalCardPage() {
  return <CardDemoScreen mode={CardOrientation.Vertical} />;
}
