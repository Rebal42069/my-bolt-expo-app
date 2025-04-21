import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MoodSlider } from '@/components/MoodSlider';
import { useRouter } from 'expo-router';
import { saveMoodEntry } from '@/services/dataService';

export default function LogScreen() {
  const [moodValue, setMoodValue] = useState(3); // 1-5, where 5 is happiest
  const [journalEntry, setJournalEntry] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    if (moodValue === 0) {
      Alert.alert('Error', 'Please select your mood');
      return;
    }

    setLoading(true);
    try {
      await saveMoodEntry({
        mood: moodValue,
        journal: journalEntry,
        timestamp: new Date(),
      });
      
      Alert.alert('Success', 'Your mood has been logged successfully!', [
        { text: 'OK', onPress: () => router.push('/') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save your mood');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.question}>How are you feeling today?</Text>
        
        <MoodSlider value={moodValue} onChange={setMoodValue} />
        
        <View style={styles.journalContainer}>
          <TextInput
            style={styles.journalInput}
            onChangeText={setJournalEntry}
            value={journalEntry}
            placeholder="Ex. arg startled..."
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            multiline
            numberOfLines={4}
          />
        </View>
        
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.saveButtonText}>
            {loading ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  question: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  journalContainer: {
    width: '100%',
    backgroundColor: 'rgba(28, 27, 45, 0.6)',
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
    marginBottom: 40,
  },
  journalInput: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: 'white',
    textAlignVertical: 'top',
    minHeight: 100,
  },
  saveButton: {
    backgroundColor: '#8661DD',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  saveButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: 'white',
  },
});