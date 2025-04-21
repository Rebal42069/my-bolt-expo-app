import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InsightCard } from '@/components/InsightCard';
import { MoodChart } from '@/components/charts/MoodChart';
import { SleepChart } from '@/components/charts/SleepChart';
import { StressChart } from '@/components/charts/StressChart';

const FILTER_OPTIONS = ['7', '30'];

export default function InsightsScreen() {
  const [moodFilter, setMoodFilter] = useState('7');
  const [sleepFilter, setSleepFilter] = useState('7');
  const [stressFilter, setStressFilter] = useState('7');

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Insights</Text>
        </View>

        <InsightCard 
          title="Mood" 
          chart={<MoodChart days={parseInt(moodFilter)} />}
          filterOptions={FILTER_OPTIONS}
          selectedFilter={moodFilter}
          onFilterChange={setMoodFilter}
        />

        <InsightCard 
          title="Sleep" 
          chart={<SleepChart days={parseInt(sleepFilter)} />}
          filterOptions={FILTER_OPTIONS}
          selectedFilter={sleepFilter}
          onFilterChange={setSleepFilter}
        />

        <InsightCard 
          title="Stress" 
          chart={<StressChart days={parseInt(stressFilter)} />}
          filterOptions={FILTER_OPTIONS}
          selectedFilter={stressFilter}
          onFilterChange={setStressFilter}
        />

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>You're often stressed around 2-mid. Try going for a short walk then</Text>
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
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: 'white',
  },
  tipCard: {
    backgroundColor: 'rgba(28, 27, 45, 0.6)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  tipTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
});