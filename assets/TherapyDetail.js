import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function TherapyDetail({ route, navigation }) {
  // We extract the 'therapy' object passed from Dashboard
  const { therapy } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: therapy.color }]}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Image source={{ uri: therapy.icon }} style={styles.bigIcon} />
          <Text style={styles.title}>{therapy.title}</Text>
          <Text style={styles.desc}>{therapy.detailText}</Text>
          
          <View style={styles.comingSoonBox}>
            <Text style={styles.comingSoonText}>Content for {therapy.title} is loading...</Text>
          </View>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { padding: 20, paddingLeft: 30, paddingTop: 50 }, // Padding top for simple header
  backButton: { padding: 10, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, alignSelf: 'flex-start' },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
  content: { flex: 1, alignItems: 'center', paddingHorizontal: 30, paddingTop: 40 },
  bigIcon: { width: 100, height: 100, marginBottom: 30 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#16423C', marginBottom: 15 },
  desc: { fontSize: 18, color: '#555', textAlign: 'center', lineHeight: 28 },
  comingSoonBox: { marginTop: 50, padding: 20, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 15 },
  comingSoonText: { fontStyle: 'italic', color: '#888' },
});