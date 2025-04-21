import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeItemProps {
  title: string;
  icon: string;
  color: string;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ title, icon, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '22%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    fontSize: 18,
  },
  title: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});