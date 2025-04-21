import firebase from './firebase';

// Mock data for prototype
const mockSocialPosts = [
  {
    id: '1',
    username: 'Adriana K.',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    timeAgo: 'an hour ago',
    content: 'Just finished a 5 mile run! Feeling great today. How has your day been?',
    emoji: '🏃',
    likes: 5,
    comments: 2,
  },
  {
    id: '2',
    username: 'Ryan R.',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    timeAgo: '5 hours ago',
    content: 'Starting the day with some meditation',
    emoji: '🔺',
    likes: 12,
    comments: 3,
  },
  {
    id: '3',
    username: 'Amanda T.',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    timeAgo: 'a day ago',
    content: 'Feeling a bit overwhelm, but trying to stay positive.',
    emoji: '😔',
    likes: 8,
    comments: 5,
  },
];

// Types
export interface MoodEntry {
  mood: number;
  journal?: string;
  timestamp: Date;
}

// Service functions
export const saveMoodEntry = async (entry: MoodEntry): Promise<string> => {
  try {
    // In a real app, this would save to Firebase
    // const docRef = await firebase.firestore().collection('moodEntries').add(entry);
    // return docRef.id;
    
    // For prototype, just return a mock ID
    console.log('Saved mood entry:', entry);
    return 'mock-mood-entry-id';
  } catch (error) {
    console.error('Error saving mood entry:', error);
    throw error;
  }
};

export const fetchSocialPosts = async () => {
  try {
    // In a real app, this would fetch from Firebase
    // const snapshot = await firebase.firestore().collection('posts').get();
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // For prototype, return mock data
    return mockSocialPosts;
  } catch (error) {
    console.error('Error fetching social posts:', error);
    throw error;
  }
};

export const getUserStats = async (userId: string) => {
  try {
    // In a real app, this would fetch from Firebase
    // const doc = await firebase.firestore().collection('userStats').doc(userId).get();
    // return doc.exists ? doc.data() : null;
    
    // For prototype, return mock data
    return {
      streakDays: 5,
      totalPoints: 1045,
      sleepAverage: 7.5,
      level: 3,
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    throw error;
  }
};