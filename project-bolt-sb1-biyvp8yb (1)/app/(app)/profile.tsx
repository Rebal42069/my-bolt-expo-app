import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [weekStartsMonday, setWeekStartsMonday] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleSwitch = (setter) => (value) => {
    setter(value);
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
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Alex Turner</Text>
          <Text style={styles.userEmail}>alex@example.com</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Manage Subscription</Text>
            <ChevronRight size={20} color="rgba(255, 255, 255, 0.6)" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Notifications</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#8661DD' }}
              thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch(setNotificationsEnabled)}
              value={notificationsEnabled}
            />
          </View>
          
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Week starts on Monday</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#8661DD' }}
              thumbColor={weekStartsMonday ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch(setWeekStartsMonday)}
              value={weekStartsMonday}
            />
          </View>
          
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Dark Mode</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#8661DD' }}
              thumbColor={darkMode ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch(setDarkMode)}
              value={darkMode}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutText}>Log out</Text>
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
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: 'white',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 15,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: 'white',
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 15,
    letterSpacing: 1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 27, 45, 0.6)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  menuItemText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: 'white',
  },
  logoutButton: {
    backgroundColor: 'rgba(28, 27, 45, 0.6)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#FF5A5A',
  },
});