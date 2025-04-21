import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StressLevel = 'low' | 'moderate' | 'high' | 'very high';

interface StressLevelBadgeProps {
  level: StressLevel;
}

export const StressLevelBadge: React.FC<StressLevelBadgeProps> = ({ level }) => {
  const getBadgeColor = () => {
    switch (level) {
      case 'low':
        return '#4CAF50'; // Green
      case 'moderate':
        return '#8661DD'; // Purple
      case 'high':
        return '#FF9800'; // Orange
      case 'very high':
        return '#FF5A5A'; // Red
      default:
        return '#8661DD';
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBadgeColor() }]}>
      <Text style={styles.text}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: 'white',
  },
});