import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface InsightCardProps {
  title: string;
  chart: React.ReactNode;
  filterOptions: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  chart,
  filterOptions,
  selectedFilter,
  onFilterChange,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.backgroundDark }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.filterContainer}>
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.filterOption,
                selectedFilter === option && styles.selectedFilterOption,
              ]}
              onPress={() => onFilterChange(option)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === option && styles.selectedFilterText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.chartContainer}>{chart}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 2,
  },
  filterOption: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  selectedFilterOption: {
    backgroundColor: 'white',
  },
  filterText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  selectedFilterText: {
    color: '#3D3BBB',
  },
  chartContainer: {
    marginTop: 10,
  },
});