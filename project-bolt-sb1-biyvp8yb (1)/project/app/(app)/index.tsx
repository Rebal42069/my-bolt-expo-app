import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { SummaryCard } from '@/components/SummaryCard';
import { StressLevelBadge } from '@/components/StressLevelBadge';
import { SleepQualityDisplay } from '@/components/SleepQualityDisplay';
import { X } from 'lucide-react-native';

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState('Jake'); // Would come from user profile in a real app

  const handleLogMood = () => {
    router.push('/log');
  };

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, {userName}!</Text>
        </View>

        <View style={styles.summaryContainer}>
          <SummaryCard 
            title="Today's Stress Level" 
            content={
              <View style={styles.stressContent}>
                <StressLevelBadge level="moderate" />
                <View style={styles.lastNightContainer}>
                  <Text style={styles.lastNightText}>Last night</Text>
                  <TouchableOpacity>
                    <X size={16} color="rgba(255, 255, 255, 0.6)" />
                  </TouchableOpacity>
                </View>
              </View>
            }
          />

          <SummaryCard 
            title="Sleep Quality" 
            content={
              <View style={styles.sleepContent}>
                <SleepQualityDisplay hours={6} minutes={58} />
                <Text style={styles.lastNightText}>Last night</Text>
              </View>
            }
          />
        </View>

        <TouchableOpacity 
          style={styles.logButton}
          onPress={handleLogMood}
        >
          <Text style={styles.logButtonText}>Log Mood</Text>
        </TouchableOpacity>
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
  greeting: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: 'white',
  },
  summaryContainer: {
    marginBottom: 30,
  },
  stressContent: {
    marginTop: 10,
  },
  sleepContent: {
    marginTop: 10,
  },
  lastNightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  lastNightText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  logButton: {
    backgroundColor: '#8661DD',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 100,
  },
  logButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: 'white',
  },
});