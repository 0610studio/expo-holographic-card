import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { DefaultCardBackProps } from './ExpoHoloCard.types';

export default function DefaultCardBack({
  width,
  height,
  brand = 'CARD',
  cvvLabel = 'CVV ***',
  backgroundColor = '#1a1f2e',
  stripeColor = '#0a0d14',
  signatureColor = '#f5f5f0',
  textColor = '#ffffff',
  style,
}: DefaultCardBackProps) {
  return (
    <View style={[styles.container, { width, height, backgroundColor }, style]}>
      <View style={[styles.magneticStripe, { backgroundColor: stripeColor }]} />
      <View style={styles.signatureArea}>
        <View style={[styles.signatureLine, { backgroundColor: signatureColor }]} />
        <Text style={[styles.cvv, { color: textColor }]}>{cvvLabel}</Text>
      </View>
      <Text style={[styles.brand, { color: textColor }]}>{brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  magneticStripe: {
    height: 56,
    marginHorizontal: -24,
  },
  signatureArea: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  signatureLine: {
    flex: 1,
    height: 36,
    borderRadius: 4,
  },
  cvv: {
    fontSize: 13,
    letterSpacing: 1,
  },
  brand: {
    marginTop: 'auto',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'right',
  },
});
