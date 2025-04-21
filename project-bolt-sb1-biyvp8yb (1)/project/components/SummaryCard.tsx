import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface SummaryCardProps {
  title: string;
  content: ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, content }) => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.backgroundDark }]}>
      <Text style={styles.title}>{title}</Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
});