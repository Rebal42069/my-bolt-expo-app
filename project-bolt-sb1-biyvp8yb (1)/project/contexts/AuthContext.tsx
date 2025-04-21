import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import firebase from '@/services/firebase';

// Mock data and functions for the prototype
// In a production app, these would interact with Firebase Auth

interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

interface AuthContextType {
  user: User | null;
  initializing: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  initializing: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  signInWithGoogle: async () => {},
  signInWithApple: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Simulating auth state check
    const checkAuthState = async () => {
      try {
        // In a real app, this would check Firebase auth state
        // const currentUser = await firebase.auth().currentUser;
        const currentUser = null; // For demo purposes, start logged out
        setUser(currentUser);
      } catch (error) {
        console.error('Auth state check error:', error);
      } finally {
        setInitializing(false);
      }
    };

    checkAuthState();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // For demo, we'll just use a mock user
      // In production, this would be:
      // await firebase.auth().signInWithEmailAndPassword(email, password);
      
      setUser({
        uid: '123456',
        email: email,
        displayName: 'Demo User',
        photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      });
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      // For demo, we'll just use a mock user
      // In production, this would be:
      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      setUser({
        uid: '123456',
        email: email,
        displayName: 'New User',
      });
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      // In production, this would be:
      // await firebase.auth().signOut();
      
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      // For demo purposes only
      // In production, this would integrate with Firebase Google Auth
      
      setUser({
        uid: '123456',
        email: 'demo@example.com',
        displayName: 'Google User',
        photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      });
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    }
  };

  const signInWithApple = async () => {
    try {
      // For demo purposes only
      // In production, this would integrate with Firebase Apple Auth
      
      setUser({
        uid: '123456',
        email: 'demo@example.com',
        displayName: 'Apple User',
        photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      });
    } catch (error) {
      console.error('Apple sign in error:', error);
      throw error;
    }
  };

  const value = {
    user,
    initializing,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    signInWithApple,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};