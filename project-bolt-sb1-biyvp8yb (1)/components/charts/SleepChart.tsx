import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { useTheme } from '@/contexts/ThemeContext';
import { generateRandomPoints, createPath } from '@/utils/chartUtils';

interface SleepChartProps {
  days: number;
}

export const SleepChart: React.FC<SleepChartProps> = ({ days }) => {
  const { theme } = useTheme();
  const width = Dimensions.get('window').width - 80;
  const height = 150;
  
  // Generate mock data
  const dayLabels = days === 7 
    ? Array.from({ length: 7 }, (_, i) => String.fromCharCode(83 + i))
    : Array.from({ length: 8 }, (_, i) => i.toString());
  
  const hours = [0, 8];
  
  const points = generateRandomPoints(days === 7 ? 7 : 30, 0.4, 0.9);
  const path = createPath(points, width, height);
  
  return (
    <View style={styles.container}>
      <View style={styles.hoursContainer}>
        {hours.map((hour, index) => (
          <Text key={index} style={styles.hourLabel}>
            {hour}
          </Text>
        ))}
      </View>
      
      <Svg width={width} height={height}>
        <Path
          d={path}
          fill="transparent"
          stroke="#B4A5FF"
          strokeWidth={3}
          strokeLinejoin="round"
        />
        
        {/* Add data points as circles */}
        {points.map((point, index) => (
          <Circle
            key={index}
            cx={point.x * width}
            cy={point.y * height}
            r={4}
            fill="#B4A5FF"
          />
        ))}
      </Svg>
      
      <View style={styles.dayLabelsContainer}>
        {dayLabels.map((day, index) => (
          <Text key={index} style={styles.dayLabel}>
            {day}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  hoursContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    justifyContent: 'space-between',
  },
  hourLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  dayLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dayLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});