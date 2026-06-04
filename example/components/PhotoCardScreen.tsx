import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimatedCard, {
  CardOrientation,
  LightingType,
  type AnimatedCardFaceRenderProps,
} from '@0610studio/expo-holographic-card';

import CardControls from './CardControls';
import ExampleScreenHeader from './ExampleScreenHeader';

const FLOWER_IMAGE_RATIO = 941 / 1672;
const SCREEN_BACKGROUND = '#eef2f7';
const PHOTO_PASS_NUMBER = 'BLM-2026-0610';

export default function PhotoCardScreen() {
  const { width: windowWidth } = useWindowDimensions();
  const [lightingType, setLightingType] = useState<LightingType>(LightingType.Prismatic);
  const [showTexture, setShowTexture] = useState(true);
  const [sensorEnabled, setSensorEnabled] = useState(false);
  const cardWidth = Math.min(Math.max(windowWidth - 104, 226), 286);

  return (
    <SafeAreaView style={styles.container}>
      <ExampleScreenHeader title="Photo Card" />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>expo-holographic-card</Text>
          <Text style={styles.title}>SPRING BLOOM</Text>
          <Text style={styles.description}>A front component layered over a photo</Text>
        </View>

        <View style={styles.stage}>
          <AnimatedCard
            width={cardWidth}
            orientation={CardOrientation.Vertical}
            aspectRatio={FLOWER_IMAGE_RATIO}
            radius={26}
            frontImageSource={require('../assets/flower-photo-card.png')}
            lightingType={lightingType}
            showTexture={showTexture}
            sensorEnabled={sensorEnabled}
            frontComponent={(props) => <PhotoCardFront {...props} />}
            backComponent={(props) => <PhotoCardBack {...props} />}
          />
        </View>

        <CardControls
          lightingType={lightingType}
          onLightingTypeChange={setLightingType}
          showTexture={showTexture}
          onShowTextureChange={setShowTexture}
          sensorEnabled={sensorEnabled}
          onSensorEnabledChange={setSensorEnabled}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function PhotoCardFront({ radius }: AnimatedCardFaceRenderProps) {
  return (
    <View style={[styles.frontOverlay, { borderRadius: radius }]}>
      <View style={styles.frontBadge}>
        <Text style={styles.frontBadgeLabel}>PHOTO CARD</Text>
      </View>
      <View style={styles.frontCaption}>
        <Text style={styles.frontCaptionTitle}>BLOOM</Text>
        <Text style={styles.frontCaptionText}>FLOWER PORTRAIT</Text>
      </View>
    </View>
  );
}

function PhotoCardBack({ height, radius, width }: AnimatedCardFaceRenderProps) {
  return (
    <View style={[styles.backRoot, { width, height, borderRadius: radius }]}>
      <View style={styles.backHeader}>
        <View style={styles.backPortrait}>
          <Image
            source={require('../assets/flower-photo-card.png')}
            resizeMode="cover"
            style={styles.backPortraitImage}
          />
        </View>
        <View style={styles.backIdentity}>
          <Text style={styles.backEyebrow}>PHOTO PASS</Text>
          <Text style={styles.backTitle}>BLOOM</Text>
          <Text style={styles.backSubtitle}>Spring Collection</Text>
        </View>
      </View>

      <View style={styles.detailGrid}>
        <View style={[styles.detailItem, styles.detailItemWide]}>
          <Text style={styles.detailLabel}>Collection</Text>
          <Text style={styles.detailValue}>Spring Bloom</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mood</Text>
          <Text style={styles.detailValue}>Warm</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValueSmall}>2026-06-10</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Light</Text>
          <Text style={styles.detailValue}>Golden</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Palette</Text>
          <Text style={styles.detailValue}>Coral</Text>
        </View>
      </View>

      <View style={styles.registrationBlock}>
        <Text style={styles.registrationLabel}>Pass No.</Text>
        <Text style={styles.registrationNumber}>{PHOTO_PASS_NUMBER}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BACKGROUND,
  },
  content: {
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },
  header: {
    gap: 4,
    marginBottom: 12,
  },
  eyebrow: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '900',
  },
  description: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '700',
  },
  stage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  frontOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 18,
  },
  frontBadge: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  frontBadgeLabel: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '900',
  },
  frontCaption: {
    alignSelf: 'stretch',
    borderRadius: 8,
    backgroundColor: 'rgba(17, 24, 39, 0.42)',
    padding: 12,
  },
  frontCaptionTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '900',
  },
  frontCaptionText: {
    color: '#f8fafc',
    fontSize: 11,
    fontWeight: '800',
    opacity: 0.82,
  },
  backRoot: {
    overflow: 'hidden',
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#efcdbb',
    padding: 16,
  },
  backHeader: {
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#f4dfcf',
    padding: 10,
  },
  backPortrait: {
    width: 74,
    height: 74,
    overflow: 'hidden',
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#fffaf3',
    backgroundColor: '#ffffff',
  },
  backPortraitImage: {
    width: '100%',
    height: '100%',
  },
  backIdentity: {
    flex: 1,
    marginLeft: 12,
  },
  backEyebrow: {
    color: '#91624b',
    fontSize: 10,
    fontWeight: '900',
  },
  backTitle: {
    color: '#2f2925',
    fontSize: 29,
    fontWeight: '900',
    marginTop: 3,
  },
  backSubtitle: {
    color: '#6f6158',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 2,
  },
  detailGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 14,
  },
  detailItem: {
    width: '48%',
    minHeight: 51,
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#f1e3d7',
  },
  detailItemWide: {
    width: '100%',
    minHeight: 49,
  },
  detailLabel: {
    color: '#9b6d58',
    fontSize: 11,
    fontWeight: '900',
  },
  detailValue: {
    color: '#2f2925',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 5,
  },
  detailValueSmall: {
    color: '#2f2925',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 5,
  },
  registrationBlock: {
    marginTop: 'auto',
    borderRadius: 16,
    backgroundColor: '#25372d',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  registrationLabel: {
    color: '#bddfca',
    fontSize: 10,
    fontWeight: '900',
  },
  registrationNumber: {
    color: '#fffaf3',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 2,
  },
});
