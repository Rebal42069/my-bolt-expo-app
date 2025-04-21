import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface MoodSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const MoodSlider: React.FC<MoodSliderProps> = ({ value, onChange }) => {
  const { theme } = useTheme();
  
  const moods = [
    { emoji: '😞', color: '#FF5A5A' },
    { emoji: '😕', color: '#FF9800' },
    { emoji: '😐', color: '#FFEB3B' },
    { emoji: '🙂', color: '#4CAF50' },
    { emoji: '😁', color: '#2196F3' },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View
          style={[
            styles.progressTrack,
            {
              width: `${((value - 1) / (moods.length - 1)) * 100}%`,
              backgroundColor: moods[value - 1]?.color || moods[0].color,
            },
          ]}
        />
      </View>
      
      <View style={styles.moodsContainer}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.moodButton,
              value === index + 1 && {
                borderColor: mood.color,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            ]}
            onPress={() => onChange(index + 1)}
          >
            <View
              style={[
                styles.emoji,
                { fontSize: value === index + 1 ? 40 : 30 },
              ]}
            >
              {mood.emoji}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  track: {
    width: '80%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressTrack: {
    height: '100%',
    borderRadius: 3,
  },
  moodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  moodButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  emoji: {
    fontSize: 30,
  },
});