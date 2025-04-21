import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { useTheme } from '@/contexts/ThemeContext';
import { generateRandomPoints, createPath } from '@/utils/chartUtils';

interface StressChartProps {
  days: number;
}

export const StressChart: React.FC<StressChartProps> = ({ days }) => {
  const { theme } = useTheme();
  const width = Dimensions.get('window').width - 80;
  const height = 150;
  
  // Generate mock data
  const dayLabels = days === 7 
    ? ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    : Array.from({ length: 8 }, (_, i) => i.toString());
  
  const points = generateRandomPoints(days === 7 ? 7 : 30, 0.3, 0.7);
  const path = createPath(points, width, height);
  
  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Path
          d={path}
          fill="transparent"
          stroke="#6B8AFF"
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
            fill="#6B8AFF"
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