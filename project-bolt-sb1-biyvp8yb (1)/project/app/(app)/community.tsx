import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RewardCard } from '@/components/RewardCard';
import { BadgeItem } from '@/components/BadgeItem';
import { ProgressBar } from '@/components/ProgressBar';
import { LeaderboardItem } from '@/components/LeaderboardItem';

export default function CommunityScreen() {
  const badges = [
    { id: '1', name: 'Calm Streak', icon: '🏆', color: '#FFC107' },
    { id: '2', name: 'Self-Care', icon: '✓', color: '#3D3BBB' },
    { id: '3', name: 'Reflection', icon: '🌙', color: '#8661DD' },
    { id: '4', name: 'Sleep Master', icon: '⭐', color: '#FFD700' },
  ];

  const leaderboard = [
    { id: '1', name: 'Lisa G.', points: 1235, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { id: '2', name: 'Mark T.', points: 1130, avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg' },
    { id: '3', name: 'You', points: 1045, avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', isCurrentUser: true },
  ];

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>LifeOS</Text>
        </View>

        <View style={styles.rewardsSection}>
          <Text style={styles.sectionTitle}>Rewards</Text>
          <View style={styles.rewardsRow}>
            <RewardCard title="Calm Streak" icon="🏆" />
            <RewardCard title="Self-Care" icon="✓" />
          </View>
        </View>

        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Level 3 Progress</Text>
          <View style={styles.badgesGrid}>
            {badges.map((badge) => (
              <BadgeItem key={badge.id} title={badge.name} icon={badge.icon} color={badge.color} />
            ))}
          </View>
          <ProgressBar progress={0.65} />
        </View>

        <View style={styles.leaderboardSection}>
          <Text style={styles.sectionTitle}>Leaderboard</Text>
          {leaderboard.map((user) => (
            <LeaderboardItem
              key={user.id}
              name={user.name}
              points={user.points}
              avatar={user.avatar}
              isCurrentUser={user.isCurrentUser}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: 'white',
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
  },
  rewardsSection: {
    marginBottom: 30,
  },
  rewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressSection: {
    marginBottom: 30,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leaderboardSection: {
    marginBottom: 30,
  },
});