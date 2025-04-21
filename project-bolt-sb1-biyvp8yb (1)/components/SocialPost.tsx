import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MessageCircle, Heart, MoreHorizontal } from 'lucide-react-native';

// TEMP HACK: define comments so styles don't crash
const comments = 0;



interface SocialPostProps {
  username: string;
  userAvatar: string;
  timeAgo: string;
  content: string;
  likes?: number;
  comments?: number;
  emoji?: string;
}

export const SocialPost: React.FC<SocialPostProps> = ({
  username,
  userAvatar,
  timeAgo,
  content,
  likes = 0,
  comments = 0,
  emoji,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: userAvatar }} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MoreHorizontal size={20} color="rgba(255, 255, 255, 0.6)" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          {emoji && <Text style={styles.emoji}>{emoji} </Text>}
          {content}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart size={20} color="rgba(255, 255, 255, 0.6)" />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={20} color="rgba(255, 255, 255, 0.6)" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
      </View>

      {comments > 0 && (
        <View style={styles.commentsContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' }}
            style={styles.commentAvatar}
          />
          <Text style={styles.comment}>That's awsome</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(28, 27, 45, 0.6)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: 'white',
  },
  timeAgo: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  contentContainer: {
    marginBottom: 15,
  },
  content: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  emoji: {
    fontSize: 18,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  //  borderBottomWidth: comments > 0 ? 1 : 0,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
   // paddingBottom: comments > 0 ? 10 : 0,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: 5,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  comment: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'white',
  },
});