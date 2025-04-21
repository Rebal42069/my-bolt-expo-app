import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface LeaderboardItemProps {
  name: string;
  points: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  name,
  points,
  avatar,
  isCurrentUser = false,
}) => {
  const { theme } = useTheme();
  
  return (
    <View
      style={[
        styles.container,
        isCurrentUser && {
          backgroundColor: 'rgba(134, 97, 221, 0.3)',
        },
      ]}
    >
      <View style={styles.userInfo}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text
          style={[
            styles.name,
            isCurrentUser && { fontFamily: 'Inter_700Bold' },
          ]}
        >
          {name}
        </Text>
      </View>
      <Text style={styles.points}>{points} points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  name: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: 'white',
  },
  points: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});