import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SleepQualityDisplayProps {
  hours: number;
  minutes: number;
}

export const SleepQualityDisplay: React.FC<SleepQualityDisplayProps> = ({ hours, minutes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {hours} h {minutes} m
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  time: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: 'white',
  },
});