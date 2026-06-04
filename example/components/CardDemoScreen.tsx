import { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimatedCard, {
  CardOrientation,
  DefaultCardBack,
  LightingType,
  type AnimatedCardFaceRenderProps,
} from '@0610studio/expo-holographic-card';

import CardControls from './CardControls';
import ExampleScreenHeader from './ExampleScreenHeader';

type CardMode = CardOrientation;

const SCREEN_BACKGROUND = '#eef2f7';

type ExampleCard = {
  id: string;
  title: string;
  subtitle: string;
  defaultLighting: LightingType;
  texture: boolean;
  colors: [string, string, string];
  textColor: string;
  accentColor: string;
  back: {
    brand: string;
    backgroundColor: string;
    stripeColor: string;
    signatureColor: string;
    textColor: string;
  };
};

type CardDemoScreenProps = {
  mode: CardMode;
};

const CARD_IMAGES: Record<CardMode, ImageSourcePropType> = {
  horizontal: require('../assets/card-horizontal.png'),
  vertical: require('../assets/card-vertical.png'),
};

const EXAMPLE_CARDS: ExampleCard[] = [
  {
    id: 'aurora-pass',
    title: 'AURORA PASS',
    subtitle: 'NOVA 0219',
    defaultLighting: LightingType.Aurora,
    texture: false,
    colors: ['#0b132b', '#2ec4b6', '#f72585'],
    textColor: '#ffffff',
    accentColor: '#92f6d8',
    back: {
      brand: 'AURORA',
      backgroundColor: '#121826',
      stripeColor: '#030712',
      signatureColor: '#f7fee7',
      textColor: '#ffffff',
    },
  },
  {
    id: 'prism-club',
    title: 'PRISM CLUB',
    subtitle: 'MEMBER 777',
    defaultLighting: LightingType.Prismatic,
    texture: true,
    colors: ['#111827', '#ffbf69', '#4cc9f0'],
    textColor: '#ffffff',
    accentColor: '#ffef9f',
    back: {
      brand: 'PRISM',
      backgroundColor: '#191724',
      stripeColor: '#0f0b18',
      signatureColor: '#fff7ed',
      textColor: '#ffffff',
    },
  },
  {
    id: 'etched-silver',
    title: 'ETCHED SILVER',
    subtitle: 'SERIAL 0408',
    defaultLighting: LightingType.Etched,
    texture: true,
    colors: ['#e5e7eb', '#94a3b8', '#1f2937'],
    textColor: '#111827',
    accentColor: '#334155',
    back: {
      brand: 'ETCHED',
      backgroundColor: '#e5e7eb',
      stripeColor: '#334155',
      signatureColor: '#ffffff',
      textColor: '#111827',
    },
  },
  {
    id: 'cosmos-ticket',
    title: 'COSMOS TICKET',
    subtitle: 'ORBIT 1201',
    defaultLighting: LightingType.Cosmos,
    texture: false,
    colors: ['#180633', '#5b21b6', '#22d3ee'],
    textColor: '#ffffff',
    accentColor: '#c4b5fd',
    back: {
      brand: 'COSMOS',
      backgroundColor: '#10051f',
      stripeColor: '#020617',
      signatureColor: '#ede9fe',
      textColor: '#ffffff',
    },
  },
];

export default function CardDemoScreen({ mode }: CardDemoScreenProps) {
  const { width: windowWidth } = useWindowDimensions();
  const [selectedCardId, setSelectedCardId] = useState(EXAMPLE_CARDS[0].id);
  const [lightingType, setLightingType] = useState<LightingType>(EXAMPLE_CARDS[0].defaultLighting);
  const [showTexture, setShowTexture] = useState(EXAMPLE_CARDS[0].texture);
  const [sensorEnabled, setSensorEnabled] = useState(false);
  const isVertical = mode === CardOrientation.Vertical;

  const selectedCard = useMemo(
    () => EXAMPLE_CARDS.find((card) => card.id === selectedCardId) ?? EXAMPLE_CARDS[0],
    [selectedCardId]
  );
  const cardWidth = Math.min(
    Math.max(windowWidth - (isVertical ? 96 : 40), isVertical ? 218 : 260),
    isVertical ? 250 : 360
  );
  const selectCard = (card: ExampleCard) => {
    setSelectedCardId(card.id);
    setLightingType(card.defaultLighting);
    setShowTexture(card.texture);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExampleScreenHeader title={isVertical ? 'Vertical Card' : 'Horizontal Card'} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>expo-holographic-card</Text>
          <Text style={styles.selectedTitle}>{selectedCard.title}</Text>
        </View>

        <View style={[styles.stage, isVertical && styles.stageVertical]}>
          <AnimatedCard
            key={`${mode}-${selectedCard.id}`}
            width={cardWidth}
            orientation={mode}
            radius={isVertical ? 24 : 22}
            frontImageSource={CARD_IMAGES[mode]}
            lightingType={lightingType}
            showTexture={showTexture}
            sensorEnabled={sensorEnabled}
            frontComponent={(props) => <ExampleCardFront {...props} card={selectedCard} />}
            backComponent={({ width, height }) => (
              <DefaultCardBack
                width={width}
                height={height}
                brand={selectedCard.back.brand}
                backgroundColor={selectedCard.back.backgroundColor}
                stripeColor={selectedCard.back.stripeColor}
                signatureColor={selectedCard.back.signatureColor}
                textColor={selectedCard.back.textColor}
              />
            )}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardTabsContent}>
          {EXAMPLE_CARDS.map((card) => {
            const isActive = card.id === selectedCard.id;
            return (
              <Pressable
                key={card.id}
                onPress={() => selectCard(card)}
                style={[styles.cardTab, isActive && styles.cardTabActive]}>
                <Text style={[styles.cardTabTitle, isActive && styles.cardTabTitleActive]}>
                  {card.title}
                </Text>
                <View style={styles.swatches}>
                  {card.colors.map((color) => (
                    <View key={color} style={[styles.swatch, { backgroundColor: color }]} />
                  ))}
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

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

function ExampleCardFront({
  card,
  orientation,
  radius,
}: AnimatedCardFaceRenderProps & { card: ExampleCard }) {
  const isVertical = orientation === CardOrientation.Vertical;

  return (
    <View style={[styles.faceRoot, { borderRadius: radius }]}>
      <View style={[styles.faceVignette, { borderRadius: radius }]} />
      <View style={[styles.faceContent, isVertical && styles.faceContentVertical]}>
        <View style={styles.faceTopRow}>
          <Text style={[styles.faceKicker, { color: card.textColor }]}>HOLO CARD</Text>
          <View
            style={[
              styles.faceChip,
              isVertical && styles.faceChipVertical,
              { borderColor: card.accentColor },
            ]}>
            <View style={[styles.faceChipDot, { backgroundColor: card.accentColor }]} />
          </View>
        </View>
        <View style={styles.faceBottom}>
          <View style={styles.overlaySwatches}>
            {card.colors.map((color) => (
              <View key={color} style={[styles.overlaySwatch, { backgroundColor: color }]} />
            ))}
          </View>
          <Text
            style={[
              styles.faceTitle,
              isVertical && styles.faceTitleVertical,
              { color: card.textColor },
            ]}>
            {card.title}
          </Text>
          <Text style={[styles.faceSubtitle, { color: card.textColor }]}>{card.subtitle}</Text>
        </View>
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
    marginBottom: 8,
  },
  eyebrow: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '700',
  },
  selectedTitle: {
    color: '#475569',
    fontSize: 28,
    fontWeight: '800',
  },
  stage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  stageVertical: {
    paddingVertical: 18,
  },
  cardTabsContent: {
    gap: 10,
    paddingVertical: 8,
  },
  cardTab: {
    width: 150,
    minHeight: 78,
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d8dee9',
    backgroundColor: '#ffffff',
  },
  cardTabActive: {
    borderColor: '#111827',
    backgroundColor: '#111827',
  },
  cardTabTitle: {
    color: '#111827',
    fontSize: 12,
    fontWeight: '800',
  },
  cardTabTitleActive: {
    color: '#ffffff',
  },
  swatches: {
    flexDirection: 'row',
    gap: 5,
  },
  swatch: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  faceRoot: {
    flex: 1,
    overflow: 'hidden',
  },
  faceVignette: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.24)',
    backgroundColor: 'rgba(15,23,42,0.12)',
  },
  faceContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  faceContentVertical: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  faceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faceKicker: {
    fontSize: 11,
    fontWeight: '800',
    opacity: 0.78,
  },
  faceChip: {
    width: 48,
    height: 34,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  faceChipVertical: {
    width: 42,
    height: 30,
  },
  faceChipDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  faceBottom: {
    gap: 8,
  },
  overlaySwatches: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 2,
  },
  overlaySwatch: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.58)',
  },
  faceTitle: {
    fontSize: 26,
    fontWeight: '900',
  },
  faceTitleVertical: {
    fontSize: 25,
  },
  faceSubtitle: {
    fontSize: 13,
    fontWeight: '800',
    opacity: 0.78,
  },
});
