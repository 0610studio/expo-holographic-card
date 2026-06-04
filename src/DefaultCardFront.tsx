import React from 'react';
import { StyleSheet, View } from 'react-native';

type DefaultCardFrontProps = {
  width: number;
  height: number;
};

export default function DefaultCardFront({ width, height }: DefaultCardFrontProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.topBand} />
      <View style={styles.centerLine} />
      <View style={styles.bottomBand} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#243447',
    overflow: 'hidden',
  },
  topBand: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '38%',
    backgroundColor: '#e6edf3',
    opacity: 0.18,
  },
  centerLine: {
    position: 'absolute',
    top: '48%',
    left: '10%',
    right: '10%',
    height: 2,
    backgroundColor: '#ffffff',
    opacity: 0.28,
  },
  bottomBand: {
    position: 'absolute',
    left: '-10%',
    right: '-10%',
    bottom: '-18%',
    height: '44%',
    backgroundColor: '#4cc9f0',
    opacity: 0.22,
    transform: [{ rotate: '-8deg' }],
  },
});
