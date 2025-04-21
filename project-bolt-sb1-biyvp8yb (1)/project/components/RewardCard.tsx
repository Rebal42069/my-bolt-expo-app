import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface RewardCardProps {
  title: string;
  icon: string;
}

export const RewardCard: React.FC<RewardCardProps> = ({ title, icon }) => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.backgroundDark }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 100,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 36,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});