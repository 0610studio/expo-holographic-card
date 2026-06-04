import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { LIGHTING_LABELS, LIGHTING_TYPES, type LightingType } from '@0610studio/expo-holographic-card';

type CardControlsProps = {
  lightingType: LightingType;
  onLightingTypeChange: (lightingType: LightingType) => void;
  onSensorEnabledChange: (sensorEnabled: boolean) => void;
  onShowTextureChange: (showTexture: boolean) => void;
  sensorEnabled: boolean;
  showTexture: boolean;
};

export default function CardControls({
  lightingType,
  onLightingTypeChange,
  onSensorEnabledChange,
  onShowTextureChange,
  sensorEnabled,
  showTexture,
}: CardControlsProps) {
  return (
    <View style={styles.controls}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lightingScrollContent}>
        {LIGHTING_TYPES.map((type) => {
          const isActive = type === lightingType;
          return (
            <Pressable
              key={type}
              onPress={() => onLightingTypeChange(type)}
              style={[styles.lightingPill, isActive && styles.lightingPillActive]}>
              <Text style={[styles.lightingPillLabel, isActive && styles.lightingPillLabelActive]}>
                {LIGHTING_LABELS[type]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Texture</Text>
        <Switch value={showTexture} onValueChange={onShowTextureChange} />
      </View>
      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Sensor Mode</Text>
        <Switch value={sensorEnabled} onValueChange={onSensorEnabledChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    gap: 8,
    paddingTop: 12,
  },
  lightingScrollContent: {
    gap: 8,
    alignItems: 'center',
    paddingVertical: 4,
  },
  lightingPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#d0d0d8',
    backgroundColor: '#ffffff',
  },
  lightingPillActive: {
    backgroundColor: '#1a1f2e',
    borderColor: '#1a1f2e',
  },
  lightingPillLabel: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '500',
  },
  lightingPillLabelActive: {
    color: '#ffffff',
  },
  optionRow: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLabel: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
  },
});
