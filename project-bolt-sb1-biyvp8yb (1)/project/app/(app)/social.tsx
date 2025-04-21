import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialPost } from '@/components/SocialPost';
import { MessageCircle, Heart } from 'lucide-react-native';
import { fetchSocialPosts } from '@/services/dataService';

// TEMP: define comments so styles don’t break
const comments = 0;


export default function SocialScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchSocialPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const tabs = ['Home', 'Social', 'Log', 'Community'];

  const renderItem = ({ item }) => (
    <SocialPost
      username={item.username}
      userAvatar={item.userAvatar}
      timeAgo={item.timeAgo}
      content={item.content}
      likes={item.likes}
      comments={item.comments}
      emoji={item.emoji}
    />
  );

  if (loading) {
    return (
      <LinearGradient
        colors={['#512888', '#3D3BBB']}
        style={[styles.container, styles.loadingContainer]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ActivityIndicator size="large" color="white" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#512888', '#3D3BBB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Social</Text>

        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  tabText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  activeTabText: {
    color: 'white',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});