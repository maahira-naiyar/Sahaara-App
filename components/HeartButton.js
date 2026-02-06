import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // <--- Professional Icons
import { useUser } from '../context/UserContext';

export default function HeartButton({ item, size = 26, color = '#ffffff' }) {
  const { toggleFavorite, isLiked } = useUser();
  const liked = isLiked(item.id);

  // Optional: A tiny bounce animation could be added here later
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => toggleFavorite(item)}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Makes it easier to tap
    >
      <Ionicons 
        name={liked ? "heart" : "heart-outline"} 
        size={size} 
        color={liked ? "#FF5252" : color} // Red if liked, otherwise the color passed in props
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    zIndex: 10,
    // Adds a tiny shadow so the white outline is visible even on bright images
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 2,
  }
});