import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Circle } from 'lucide-react-native';

export default function SplashScreen() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to app
    if (user) {
      router.replace('/(app)');
    }
  }, [user, router]);

  const handleGetStarted = () => {
    router.push('/onboarding');
  };

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Circle size={80} color="#FFFFFF" strokeWidth={2} />
          <View style={styles.logoInner} />
        </View>
        <Text style={styles.title}>LifeOS</Text>
        <Text style={styles.subtitle}>Your AI Co-Pilot for Life</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoInner: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#3D3BBB',
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 48,
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 40,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    color: 'white',
    fontSize: 18,
  },
});