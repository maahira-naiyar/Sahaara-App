

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Modal } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Video, ResizeMode } from 'expo-av';

// const { width } = Dimensions.get('window');

// // --- DATA: DYNAMIC FACTS (The 5 Switching Items) ---
// const MOVEMENT_FACTS = [
//   {
//     id: '1',
//     title: 'The Vagus Nerve Switch',
//     text: 'Yoga stimulates the Vagus Nerve, the main controller of your parasympathetic nervous system. This physically forces your body to switch from "Fight or Flight" to "Rest and Digest," lowering your heart rate instantly.'
//   },
//   {
//     id: '2',
//     title: 'Natural Anti-Anxiety Meds',
//     text: 'Studies show that a single hour of yoga increases GABA levels in the brain by 27%. GABA is a neurotransmitter that inhibits fear and anxiety—it is essentially your brain’s natural "chill pill."'
//   },
//   {
//     id: '3',
//     title: 'Cortisol Detox',
//     text: 'Holding poses like "Child\'s Pose" or "Forward Fold" compresses the stomach area, which signals the adrenal glands to stop pumping cortisol (the stress hormone). It is literally a biological "Off" switch for stress.'
//   },
//   {
//     id: '4',
//     title: 'Hippocampus Growth',
//     text: 'Chronic stress shrinks the hippocampus (the part of the brain controlling memory and emotion). Consistent yoga practice has been proven to increase gray matter volume in this area, rebuilding your emotional resilience.'
//   },
//   {
//     id: '5',
//     title: 'The Lymphatic Flush',
//     text: 'Unlike blood, your lymph system (which fights infection and removes waste) has no pump. It relies on movement. Inversions like "Legs Up The Wall" use gravity to flush stagnant toxins from your body, boosting immunity.'
//   }
// ];

// // --- DATA: ASANA TUTORIALS ---
// const ASANAS = [
//   { id: '1', name: 'Balasana', english: 'Child’s Pose', benefit: 'Calms the Brain', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80' },
//   { id: '2', name: 'Vrikshasana', english: 'Tree Pose', benefit: 'Focus & Balance', image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=400&q=80' },
//   { id: '3', name: 'Viparita Karani', english: 'Legs Up The Wall', benefit: 'Relieves Anxiety', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
//   { id: '4', name: 'Savasana', english: 'Corpse Pose', benefit: 'Deep Relaxation', image: 'https://images.unsplash.com/photo-1552286450-4a669f378434?w=400&q=80' },
// ];

// // --- DATA: ROUTINES ---
// const ROUTINES = [
//   { id: '1', title: 'Morning Clarity Flow', duration: '15 min', level: 'Beginner', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
//   { id: '2', title: 'Stress Melt (After Work)', duration: '20 min', level: 'All Levels', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=80' },
//   { id: '3', title: 'Bedtime Wind Down', duration: '10 min', level: 'Gentle', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400&q=80' },
// ];

// export default function YogaTherapy({ navigation }) {
//   // State for the Random Fact
//   const [dailyFact, setDailyFact] = useState(MOVEMENT_FACTS[0]);
  
//   // State for Video Modal (Added back for functionality)
//   const [videoModalVisible, setVideoModalVisible] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   // Logic: Pick a random fact on mount
//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * MOVEMENT_FACTS.length);
//     setDailyFact(MOVEMENT_FACTS[randomIndex]);
//   }, []);

//   // --- RENDER: Asana Card ---
//   const renderAsana = ({ item }) => (
//     <TouchableOpacity style={styles.asanaCard}>
//       <Image source={{ uri: item.image }} style={styles.asanaImage} />
//       <View style={styles.asanaOverlay}>
//         <Text style={styles.asanaTitle}>{item.english}</Text>
//         <Text style={styles.asanaSanskrit}>{item.name}</Text>
//         <View style={styles.benefitBadge}>
//           <Text style={styles.benefitText}>{item.benefit}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Yoga Studio</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. CREATIVE TOUCH: Interactive Breathe Card */}
//           <View style={styles.breatheCard}>
//             <View style={styles.breatheContent}>
//               <Text style={styles.breatheTitle}>Pause & Breathe</Text>
//               <Text style={styles.breatheDesc}>Before you move, take a deep breath in... and let it all out.</Text>
//             </View>
//             <View style={styles.breatheCircle}>
//                <Text style={{fontSize: 24}}>🍃</Text>
//             </View>
//           </View>

//           {/* 2. SECTION: Dynamic "Movement is Medicine" Card */}
//           <View style={styles.infoSection}>
//             <Text style={styles.sectionTitle}>{dailyFact.title}</Text>
//             <Text style={styles.infoText}>{dailyFact.text}</Text>
//             <Text style={styles.refreshHint}>*Refreshes daily</Text>
//           </View>

//           {/* 3. HORIZONTAL: Essential Asanas */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Asanas for the Mind</Text>
//             <Text style={styles.sectionSubtitle}>Poses specifically for mental release.</Text>
            
//             <FlatList 
//               data={ASANAS}
//               renderItem={renderAsana}
//               keyExtractor={item => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
//             />
//           </View>

//           {/* 4. VERTICAL: Curated Routines */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Guided Routines</Text>
//             <Text style={styles.sectionSubtitle}>Follow along to shift your state.</Text>
            
//             <View style={styles.routineList}>
//               {ROUTINES.map((routine) => (
//                 <TouchableOpacity 
//                   key={routine.id} 
//                   style={styles.routineCard}
//                   onPress={() => {
//                      // Adding the video modal trigger back so it works like we discussed
//                      setCurrentVideo('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'); 
//                      setVideoModalVisible(true);
//                   }}
//                 >
//                   <Image source={{ uri: routine.image }} style={styles.routineImage} />
//                   <View style={styles.routineInfo}>
//                     <Text style={styles.routineTitle}>{routine.title}</Text>
//                     <View style={styles.routineMetaRow}>
//                       <Text style={styles.routineMeta}>⏱ {routine.duration}</Text>
//                       <Text style={styles.routineMeta}>•</Text>
//                       <Text style={styles.routineMeta}>{routine.level}</Text>
//                     </View>
//                   </View>
//                   <View style={styles.playBtn}>
//                     <Text style={{color: '#fff', fontSize: 12}}>START</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//         </ScrollView>
//       </SafeAreaView>

//       {/* Video Modal (Kept this from previous steps for functionality) */}
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={videoModalVisible}
//         onRequestClose={() => setVideoModalVisible(false)}
//       >
//         <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
//           <TouchableOpacity 
//               style={{position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5}}
//               onPress={() => setVideoModalVisible(false)}
//           >
//               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>✕ Close</Text>
//           </TouchableOpacity>
          
//           <Video
//             style={{ width: '100%', height: 300 }}
//             source={{ uri: currentVideo }}
//             useNativeControls
//             resizeMode={ResizeMode.CONTAIN}
//             isLooping
//             shouldPlay
//           />
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#E0FFE4' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#1B5E20' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20' },
//   scrollContent: { paddingBottom: 50 },

//   // TEXT STYLES
//   sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#1B5E20', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 14, color: '#4CAF50', marginLeft: 20, marginBottom: 15 },
//   sectionContainer: { marginTop: 30 },

//   // BREATHE CARD
//   breatheCard: { marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#A5D6A7', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   breatheContent: { flex: 1, marginRight: 15 },
//   breatheTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5 },
//   breatheDesc: { fontSize: 13, color: '#2E7D32', lineHeight: 18 },
//   breatheCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },

//   // DYNAMIC INFO SECTION
//   infoSection: { marginTop: 30, marginHorizontal: 20, padding: 20, backgroundColor: '#fff', borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#1B5E20', elevation: 2 },
//   infoText: { fontSize: 15, color: '#333', lineHeight: 22, marginTop: 5 },
//   refreshHint: { fontSize: 10, color: '#999', marginTop: 10, fontStyle: 'italic', textAlign: 'right' },

//   // ASANA CARDS
//   asanaCard: { width: 200, height: 250, marginRight: 15, borderRadius: 15, overflow: 'hidden', backgroundColor: '#000' },
//   asanaImage: { width: '100%', height: '100%', opacity: 0.8 },
//   asanaOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 15, backgroundColor: 'rgba(0,0,0,0.6)' },
//   asanaTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   asanaSanskrit: { color: '#A5D6A7', fontSize: 14, fontStyle: 'italic', marginBottom: 8 },
//   benefitBadge: { alignSelf: 'flex-start', backgroundColor: '#4CAF50', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5 },
//   benefitText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },

//   // ROUTINE LIST
//   routineList: { paddingHorizontal: 20 },
//   routineCard: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15, borderRadius: 15, padding: 10, alignItems: 'center', elevation: 2 },
//   routineImage: { width: 70, height: 70, borderRadius: 10, marginRight: 15 },
//   routineInfo: { flex: 1 },
//   routineTitle: { fontSize: 16, fontWeight: 'bold', color: '#1B5E20' },
//   routineMetaRow: { flexDirection: 'row', marginTop: 5 },
//   routineMeta: { fontSize: 12, color: '#666', marginRight: 5 },
//   playBtn: { backgroundColor: '#1B5E20', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
// });


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Video, ResizeMode } from 'expo-av';

// const { width } = Dimensions.get('window');
// // Calculate width for 3 columns: (Screen Width - Padding - Gaps) / 3
// const ASANA_WIDTH = (width - 40 - 20) / 2; 

// // --- DATA: DYNAMIC FACTS ---
// const MOVEMENT_FACTS = [
//   { id: '1', title: 'The Vagus Nerve Switch', text: 'Yoga stimulates the Vagus Nerve, forcing your body to switch from "Fight or Flight" to "Rest and Digest."' },
//   { id: '2', title: 'Natural Anti-Anxiety', text: 'One hour of yoga increases GABA levels in the brain by 27%, inhibiting fear and anxiety.' },
//   { id: '3', title: 'Cortisol Detox', text: 'Poses like "Forward Fold" signal the adrenal glands to stop pumping cortisol (stress hormone).' },
//   { id: '4', title: 'Brain Growth', text: 'Consistent practice increases gray matter in the hippocampus, rebuilding emotional resilience.' },
//   { id: '5', title: 'Lymphatic Flush', text: 'Inversions use gravity to flush stagnant toxins from your body, boosting immunity.' }
// ];

// // --- DATA: ASANAS (Updated to 6 items) ---
// const ASANAS = [
//   { id: '1', name: 'Balasana', english: 'Child’s Pose', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80' },
//   { id: '2', name: 'Vrikshasana', english: 'Tree Pose', image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=400&q=80' },
//   { id: '3', name: 'Viparita', english: 'Legs Up Wall', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
//   { id: '4', name: 'Savasana', english: 'Corpse Pose', image: 'https://images.unsplash.com/photo-1552286450-4a669f378434?w=400&q=80' },
//   { id: '5', name: 'Bhujangasana', english: 'Cobra Pose', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80' },
//   { id: '6', name: 'Setu Bandha', english: 'Bridge Pose', image: 'https://images.unsplash.com/photo-1599447421405-0753f5d1b5ea?w=400&q=80' },
// ];

// // --- DATA: ROUTINES ---
// const ROUTINES = [
//   { id: '1', title: 'Morning Clarity Flow', duration: '15 min', level: 'Beginner', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
//   { id: '2', title: 'Stress Melt (After Work)', duration: '20 min', level: 'All Levels', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=80' },
//   { id: '3', title: 'Bedtime Wind Down', duration: '10 min', level: 'Gentle', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400&q=80' },
// ];

// export default function YogaTherapy({ navigation }) {
//   const [dailyFact, setDailyFact] = useState(MOVEMENT_FACTS[0]);
//   const [videoModalVisible, setVideoModalVisible] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * MOVEMENT_FACTS.length);
//     setDailyFact(MOVEMENT_FACTS[randomIndex]);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Yoga Studio</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. BREATHE CARD */}
//           <View style={styles.breatheCard}>
//             <View style={styles.breatheContent}>
//               <Text style={styles.breatheTitle}>Pause & Breathe</Text>
//               <Text style={styles.breatheDesc}>Take a deep breath in... hold... and let it all out.</Text>
//             </View>
//             <View style={styles.breatheCircle}><Text style={{fontSize: 24}}>🍃</Text></View>
//           </View>

//           {/* 2. DYNAMIC FACT */}
//           <View style={styles.infoSection}>
//             <Text style={styles.sectionTitle}>{dailyFact.title}</Text>
//             <Text style={styles.infoText}>{dailyFact.text}</Text>
//             <Text style={styles.refreshHint}>*Refreshes daily</Text>
//           </View>

//           {/* 3. ASANA MATRIX (3x2 Grid) */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Essential Asanas</Text>
//             <Text style={styles.sectionSubtitle}>Tap to learn form.</Text>
            
//             <View style={styles.gridContainer}>
//               {ASANAS.map((item) => (
//                 <TouchableOpacity key={item.id} style={styles.asanaCard}>
//                   <Image source={{ uri: item.image }} style={styles.asanaImage} />
//                   <View style={styles.asanaTextContainer}>
//                     <Text style={styles.asanaTitle} numberOfLines={1}>{item.english}</Text>
//                     <Text style={styles.asanaSanskrit} numberOfLines={1}>{item.name}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           {/* 4. ROUTINES */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Guided Routines</Text>
            
//             <View style={styles.routineList}>
//               {ROUTINES.map((routine) => (
//                 <TouchableOpacity 
//                   key={routine.id} 
//                   style={styles.routineCard}
//                   onPress={() => {
//                      setCurrentVideo('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'); 
//                      setVideoModalVisible(true);
//                   }}
//                 >
//                   <Image source={{ uri: routine.image }} style={styles.routineImage} />
//                   <View style={styles.routineInfo}>
//                     <Text style={styles.routineTitle}>{routine.title}</Text>
//                     <View style={styles.routineMetaRow}>
//                       <Text style={styles.routineMeta}>⏱ {routine.duration}</Text>
//                       <Text style={styles.routineMeta}>•</Text>
//                       <Text style={styles.routineMeta}>{routine.level}</Text>
//                     </View>
//                   </View>
//                   <View style={styles.playBtn}><Text style={{color: '#fff', fontSize: 12}}>START</Text></View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//         </ScrollView>
//       </SafeAreaView>

//       {/* Video Modal */}
//       <Modal animationType="slide" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
//         <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
//           <TouchableOpacity 
//               style={{position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5}}
//               onPress={() => setVideoModalVisible(false)}
//           >
//               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>✕ Close</Text>
//           </TouchableOpacity>
//           <Video style={{ width: '100%', height: 300 }} source={{ uri: currentVideo }} useNativeControls resizeMode={ResizeMode.CONTAIN} isLooping shouldPlay />
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#E0FFE4' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#1B5E20' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20' },
//   scrollContent: { paddingBottom: 50 },

//   // TEXT
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 13, color: '#4CAF50', marginLeft: 20, marginBottom: 15 },
//   sectionContainer: { marginTop: 25 },

//   // BREATHE CARD
//   breatheCard: { marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#A5D6A7', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   breatheContent: { flex: 1, marginRight: 15 },
//   breatheTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5 },
//   breatheDesc: { fontSize: 13, color: '#2E7D32' },
//   breatheCircle: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },

//   // INFO CARD
//   infoSection: { marginTop: 20, marginHorizontal: 20, padding: 15, backgroundColor: '#fff', borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#1B5E20', elevation: 2 },
//   infoText: { fontSize: 14, color: '#333', lineHeight: 20, marginTop: 5 },
//   refreshHint: { fontSize: 10, color: '#999', marginTop: 8, fontStyle: 'italic', textAlign: 'right' },

//   // GRID MATRIX STYLES
//   gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },
//   asanaCard: { width: ASANA_WIDTH, marginBottom: 15, borderRadius: 10, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
//   asanaImage: { width: '100%', height: ASANA_WIDTH, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, // Square image
//   asanaTextContainer: { padding: 5, alignItems: 'center', height: 45, justifyContent: 'center' },
//   asanaTitle: { fontSize: 12, fontWeight: 'bold', color: '#1B5E20', textAlign: 'center' },
//   asanaSanskrit: { fontSize: 10, color: '#666', fontStyle: 'italic', textAlign: 'center' },

//   // ROUTINES
//   routineList: { paddingHorizontal: 20, marginTop: 10 },
//   routineCard: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15, borderRadius: 15, padding: 10, alignItems: 'center', elevation: 2 },
//   routineImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
//   routineInfo: { flex: 1 },
//   routineTitle: { fontSize: 15, fontWeight: 'bold', color: '#1B5E20' },
//   routineMetaRow: { flexDirection: 'row', marginTop: 3 },
//   routineMeta: { fontSize: 11, color: '#666', marginRight: 5 },
//   playBtn: { backgroundColor: '#1B5E20', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },
// });





// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Video, ResizeMode } from 'expo-av';

// const { width, height } = Dimensions.get('window');
// const ASANA_WIDTH = (width - 40 - 20) / 3; 

// // --- DATA: DYNAMIC FACTS ---
// const MOVEMENT_FACTS = [
//   { id: '1', title: 'The Vagus Nerve Switch', text: 'Yoga stimulates the Vagus Nerve, forcing your body to switch from "Fight or Flight" to "Rest and Digest."' },
//   { id: '2', title: 'Natural Anti-Anxiety', text: 'One hour of yoga increases GABA levels in the brain by 27%, inhibiting fear and anxiety.' },
//   { id: '3', title: 'Cortisol Detox', text: 'Poses like "Forward Fold" signal the adrenal glands to stop pumping cortisol (stress hormone).' },
//   { id: '4', title: 'Brain Growth', text: 'Consistent practice increases gray matter in the hippocampus, rebuilding emotional resilience.' },
// ];

// // --- DATA: ASANAS (With Directions, Benefits & Video Links) ---
// const ASANAS = [
//   { 
//     id: '1', 
//     name: 'Balasana', 
//     english: 'Child’s Pose', 
//     image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', // Placeholder URL
//     directions: '1. Kneel on the floor, touching your big toes together.\n2. Sit back on your heels and separate your knees wide.\n3. Exhale and lay your torso down between your thighs.\n4. Extend your arms forward and rest your forehead on the mat.',
//     benefit: 'This resting pose gently stretches the hips, thighs, and ankles while calming the brain and helping relieve stress and fatigue. It quiets the nervous system, making it an excellent pause button during a busy day.'
//   },
//   { 
//     id: '2', 
//     name: 'Vrikshasana', 
//     english: 'Tree Pose', 
//     image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     directions: '1. Stand tall, shifting weight to your left foot.\n2. Place your right foot on your left inner thigh (avoid the knee).\n3. Bring hands to prayer position at your chest.\n4. Find a focal point to balance and breathe deeply.',
//     benefit: 'Tree pose improves focus and balance, forcing the mind to stay present. It strengthens the legs and core while opening the hips. Psychologically, it builds confidence and grounding, helping you feel rooted amidst chaos.'
//   },
//   { 
//     id: '3', 
//     name: 'Viparita Karani', 
//     english: 'Legs Up Wall', 
//     image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     directions: '1. Sit sideways next to a wall.\n2. Swing your legs up the wall as you lie back.\n3. Rest your arms by your sides, palms facing up.\n4. Close your eyes and breathe for 5-10 minutes.',
//     benefit: 'This inversion is pure magic for anxiety. By reversing gravity, it encourages venous drainage and lymph flow, reducing fatigue in the legs. It instantly calms the nervous system and is perfect for insomnia.'
//   },
//   { 
//     id: '4', 
//     name: 'Savasana', 
//     english: 'Corpse Pose', 
//     image: 'https://images.unsplash.com/photo-1552286450-4a669f378434?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     directions: '1. Lie flat on your back, legs extended.\n2. Let your feet flop open and arms rest by your sides.\n3. Close your eyes and scan your body for tension.\n4. Release all control of the breath and surrender to gravity.',
//     benefit: 'Often called the hardest pose, Savasana is the practice of letting go. It reduces blood pressure, relaxes muscle tension, and allows the body to absorb the benefits of practice. It teaches the mind to be still.'
//   },
//   { 
//     id: '5', 
//     name: 'Bhujangasana', 
//     english: 'Cobra Pose', 
//     image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     directions: '1. Lie face down, hands under shoulders.\n2. Press tops of feet into the mat.\n3. Inhale and lift your chest, keeping elbows close to ribs.\n4. Keep gaze forward and neck long.',
//     benefit: 'Cobra opens the heart and lungs, combating the "slumped" posture of depression. It strengthens the spine and stimulates abdominal organs. Energetically, it is associated with rising above fear.'
//   },
//   { 
//     id: '6', 
//     name: 'Setu Bandha', 
//     english: 'Bridge Pose', 
//     image: 'https://images.unsplash.com/photo-1599447421405-0753f5d1b5ea?w=400&q=80',
//     videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     directions: '1. Lie on back, knees bent, feet flat on floor.\n2. Press feet down and lift hips toward the ceiling.\n3. Clasp hands underneath your back.\n4. Lift chest toward chin, but keep chin away from chest.',
//     benefit: 'A gentle backbend that energizes the body and calms the brain. It stretches the chest, neck, and spine while reducing anxiety, fatigue, and headaches. It is known to be therapeutic for high blood pressure.'
//   },
// ];

// const ROUTINES = [
//   { id: '1', title: 'Morning Clarity Flow', duration: '15 min', level: 'Beginner', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
//   { id: '2', title: 'Stress Melt (After Work)', duration: '20 min', level: 'All Levels', image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&q=80' },
//   { id: '3', title: 'Bedtime Wind Down', duration: '10 min', level: 'Gentle', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=400&q=80' },
// ];

// export default function YogaTherapy({ navigation }) {
//   const [dailyFact, setDailyFact] = useState(MOVEMENT_FACTS[0]);
  
//   // --- MODAL STATES ---
//   const [selectedAsana, setSelectedAsana] = useState(null); // Which asana is open?
//   const [asanaModalVisible, setAsanaModalVisible] = useState(false); // Is the detail card visible?
  
//   const [videoModalVisible, setVideoModalVisible] = useState(false); // Is the video player visible?
//   const [currentVideo, setCurrentVideo] = useState(null); // Which URL to play?

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * MOVEMENT_FACTS.length);
//     setDailyFact(MOVEMENT_FACTS[randomIndex]);
//   }, []);

//   // --- HANDLERS ---
//   const openAsanaDetail = (asana) => {
//     setSelectedAsana(asana);
//     setAsanaModalVisible(true);
//   };

//   const playVideo = (url) => {
//     setCurrentVideo(url);
//     setVideoModalVisible(true); // Open video ON TOP of asana modal
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Yoga Studio</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* BREATHE CARD */}
//           <View style={styles.breatheCard}>
//             <View style={styles.breatheContent}>
//               <Text style={styles.breatheTitle}>Pause & Breathe</Text>
//               <Text style={styles.breatheDesc}>Take a deep breath in... hold... and let it all out.</Text>
//             </View>
//             <View style={styles.breatheCircle}><Text style={{fontSize: 24}}>🍃</Text></View>
//           </View>

//           {/* DYNAMIC FACT */}
//           <View style={styles.infoSection}>
//             <Text style={styles.sectionTitle}>{dailyFact.title}</Text>
//             <Text style={styles.infoText}>{dailyFact.text}</Text>
//           </View>

//           {/* ASANA MATRIX */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Essential Asanas</Text>
//             <Text style={styles.sectionSubtitle}>Tap to learn form & benefits.</Text>
            
//             <View style={styles.gridContainer}>
//               {ASANAS.map((item) => (
//                 <TouchableOpacity key={item.id} style={styles.asanaCard} onPress={() => openAsanaDetail(item)}>
//                   <Image source={{ uri: item.image }} style={styles.asanaImage} />
//                   <View style={styles.asanaTextContainer}>
//                     <Text style={styles.asanaTitle} numberOfLines={1}>{item.english}</Text>
//                     <Text style={styles.asanaSanskrit} numberOfLines={1}>{item.name}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           {/* ROUTINES */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Guided Routines</Text>
//             <View style={styles.routineList}>
//               {ROUTINES.map((routine) => (
//                 <TouchableOpacity 
//                   key={routine.id} 
//                   style={styles.routineCard}
//                   onPress={() => playVideo('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')}
//                 >
//                   <Image source={{ uri: routine.image }} style={styles.routineImage} />
//                   <View style={styles.routineInfo}>
//                     <Text style={styles.routineTitle}>{routine.title}</Text>
//                     <View style={styles.routineMetaRow}>
//                       <Text style={styles.routineMeta}>⏱ {routine.duration}</Text>
//                       <Text style={styles.routineMeta}>•</Text>
//                       <Text style={styles.routineMeta}>{routine.level}</Text>
//                     </View>
//                   </View>
//                   <View style={styles.playBtn}><Text style={{color: '#fff', fontSize: 12}}>START</Text></View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//         </ScrollView>
//       </SafeAreaView>

//       {/* --- MODAL 1: ASANA DETAILS --- */}
//       <Modal animationType="slide" transparent={true} visible={asanaModalVisible} onRequestClose={() => setAsanaModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.detailModal}>
//             <TouchableOpacity onPress={() => setAsanaModalVisible(false)} style={styles.closeCircle}>
//                <Text style={styles.closeText}>✕</Text>
//             </TouchableOpacity>

//             {selectedAsana && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Image source={{ uri: selectedAsana.image }} style={styles.detailImage} />
                
//                 <View style={styles.detailContent}>
//                   <Text style={styles.detailTitle}>{selectedAsana.english}</Text>
//                   <Text style={styles.detailSubtitle}>{selectedAsana.name}</Text>

//                   <View style={styles.divider} />

//                   <Text style={styles.detailHeader}>How to do it:</Text>
//                   <Text style={styles.detailText}>{selectedAsana.directions}</Text>

//                   <Text style={[styles.detailHeader, {marginTop: 20}]}>Why it helps:</Text>
//                   <Text style={styles.detailText}>{selectedAsana.benefit}</Text>

//                   <TouchableOpacity style={styles.videoButton} onPress={() => playVideo(selectedAsana.videoUrl)}>
//                     <Text style={styles.videoButtonText}>▶  Watch Video Tutorial</Text>
//                   </TouchableOpacity>
//                   <View style={{height: 30}}/>
//                 </View>
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* --- MODAL 2: VIDEO PLAYER --- */}
//       <Modal animationType="fade" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
//         <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
//           <TouchableOpacity 
//               style={{position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5}}
//               onPress={() => setVideoModalVisible(false)}
//           >
//               <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>✕ Close Video</Text>
//           </TouchableOpacity>
//           <Video style={{ width: '100%', height: 300 }} source={{ uri: currentVideo }} useNativeControls resizeMode={ResizeMode.CONTAIN} shouldPlay />
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#E0FFE4' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#1B5E20' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20' },
//   scrollContent: { paddingBottom: 50 },

//   // SECTIONS
//   sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 13, color: '#4CAF50', marginLeft: 20, marginBottom: 15 },
//   sectionContainer: { marginTop: 25 },

//   // BREATHE CARD
//   breatheCard: { marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#A5D6A7', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   breatheContent: { flex: 1, marginRight: 15 },
//   breatheTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5 },
//   breatheDesc: { fontSize: 13, color: '#2E7D32' },
//   breatheCircle: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },

//   // INFO CARD
//   infoSection: { marginTop: 20, marginHorizontal: 20, padding: 15, backgroundColor: '#fff', borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#1B5E20', elevation: 2 },
//   infoText: { fontSize: 14, color: '#333', lineHeight: 20, marginTop: 5 },
//   refreshHint: { fontSize: 10, color: '#999', marginTop: 8, fontStyle: 'italic', textAlign: 'right' },

//   // ASANA MATRIX
//   gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },
//   asanaCard: { width: ASANA_WIDTH, marginBottom: 15, borderRadius: 10, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
//   asanaImage: { width: '100%', height: ASANA_WIDTH, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
//   asanaTextContainer: { padding: 5, alignItems: 'center', height: 45, justifyContent: 'center' },
//   asanaTitle: { fontSize: 12, fontWeight: 'bold', color: '#1B5E20', textAlign: 'center' },
//   asanaSanskrit: { fontSize: 10, color: '#666', fontStyle: 'italic', textAlign: 'center' },

//   // ROUTINES
//   routineList: { paddingHorizontal: 20, marginTop: 10 },
//   routineCard: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15, borderRadius: 15, padding: 10, alignItems: 'center', elevation: 2 },
//   routineImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
//   routineInfo: { flex: 1 },
//   routineTitle: { fontSize: 15, fontWeight: 'bold', color: '#1B5E20' },
//   routineMetaRow: { flexDirection: 'row', marginTop: 3 },
//   routineMeta: { fontSize: 11, color: '#666', marginRight: 5 },
//   playBtn: { backgroundColor: '#1B5E20', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },

//   // --- DETAIL MODAL STYLES ---
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
//   detailModal: { height: '85%', backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, overflow: 'hidden' },
//   closeCircle: { position: 'absolute', top: 15, right: 15, width: 35, height: 35, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: 'center', alignItems: 'center', zIndex: 10 },
//   closeText: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  
//   detailImage: { width: '100%', height: 250 },
//   detailContent: { padding: 25 },
//   detailTitle: { fontSize: 28, fontWeight: 'bold', color: '#1B5E20' },
//   detailSubtitle: { fontSize: 18, color: '#4CAF50', fontStyle: 'italic', marginBottom: 15 },
//   divider: { height: 2, backgroundColor: '#E8F5E9', width: '100%', marginBottom: 20 },
//   detailHeader: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', marginBottom: 10 },
//   detailText: { fontSize: 16, color: '#444', lineHeight: 26 },
  
//   videoButton: { backgroundColor: '#1B5E20', padding: 18, borderRadius: 30, marginTop: 30, alignItems: 'center', elevation: 5 },
//   videoButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe"; // <--- NEW IMPORT
import HeartButton from '../components/HeartButton';
const { width } = Dimensions.get('window');
const ASANA_WIDTH = (width - 40 - 20) / 2; 

const MOVEMENT_FACTS = [
  { id: '1', title: 'The Vagus Nerve Switch', text: 'Yoga stimulates the Vagus Nerve, forcing your body to switch from "Fight or Flight" to "Rest and Digest."' },
  { id: '2', title: 'Natural Anti-Anxiety', text: 'One hour of yoga increases GABA levels in the brain by 27%, inhibiting fear and anxiety.' },
  { id: '3', title: 'Cortisol Detox', text: 'Poses like "Forward Fold" signal the adrenal glands to stop pumping cortisol (stress hormone).' },
  { id: '4', title: 'Brain Growth', text: 'Consistent practice increases gray matter in the hippocampus, rebuilding emotional resilience.' },
];

// --- DATA: ASANAS (With REAL YouTube IDs) ---
// Note: We only need the ID part (e.g. "EqKn5d-35sU"), not the full URL
const ASANAS = [
  { 
    id: 'asana_1', name: 'Balasana', english: 'Child’s Pose', 
    image: require('../assets/balasana.jpg'), // Local image
    videoId: '2MJGg-dUKh0', // Real Tutorial
    directions: '1. Kneel on the floor, touching your big toes together.\n2. Sit back on your heels.\n3. Exhale and lay your torso down.\n4. Rest your forehead on the mat.',
    benefit: 'Calms the brain and relieves stress. It quiets the nervous system, making it an excellent pause button.'
  },
  { 
    id: 'asana_2', name: 'Vrikshasana', english: 'Tree Pose', 
    image: require('../assets/vrikshasana.jpg'),
    videoId: 'A9OzH3kYvyU', 
    directions: '1. Stand tall, shift weight to left foot.\n2. Place right foot on left inner thigh.\n3. Hands to prayer at chest.\n4. Find a focal point.',
    benefit: 'Improves focus and balance. It strengthens the legs and core while helping you feel rooted amidst chaos.'
  },
  { 
    id: 'asana_3', name: 'Viparita Karani', english: 'Legs Up Wall', 
    image: require('../assets/viparita.jpg'),
    videoId: 'YHxoiq1YivE', 
    directions: '1. Sit sideways next to a wall.\n2. Swing legs up as you lie back.\n3. Arms by sides, palms up.\n4. Breathe for 5-10 minutes.',
    benefit: 'Pure magic for anxiety. Reverses gravity to flush toxins and calms the nervous system instantly.'
  },
  { 
    id: 'asana_4', name: 'Savasana', english: 'Corpse Pose', 
    image: require('../assets/savasana.jpg'),
    videoId: 'dXYtWuYxWmQ', 
    directions: '1. Lie flat on back.\n2. Feet flop open, arms by sides.\n3. Close eyes, scan body for tension.\n4. Surrender to gravity.',
    benefit: 'Reduces blood pressure and relaxes muscle tension. It teaches the mind to be still.'
  },
  { 
    id: 'asana_5', name: 'Bhujangasana', english: 'Cobra Pose', 
    image: require('../assets/bhujanagasana.jpg'),
    videoId: 'fOdrW7nf9gw', 
    directions: '1. Lie face down, hands under shoulders.\n2. Press feet into mat.\n3. Inhale and lift chest.\n4. Keep elbows close to ribs.',
    benefit: 'Opens the heart and lungs, combating the "slumped" posture of depression. Associated with rising above fear.'
  },
  { 
    id: 'asana_6', name: 'Setu Bandha', english: 'Bridge Pose', 
    image: require('../assets/setu.jpg'),
    videoId: 'cNvVl-Q3GD4', 
    directions: '1. Lie on back, knees bent.\n2. Press feet down, lift hips.\n3. Clasp hands under back.\n4. Lift chest toward chin.',
    benefit: 'Energizes the body and calms the brain. Therapeutic for high blood pressure and fatigue.'
  },
];

const ROUTINES = [
  { id: 'routine_1', title: 'Morning Yoga: Full Body Stretch', duration: '20 min', level: 'All Levels', image: require('../assets/nature.jpg'), videoId: 'cxm0zdZDLeE' },
  { id: 'routine_2', title: 'Bedtime Wind Down', duration: '10 min', level: 'Gentle', image:require('../assets/lofi.jpg'), videoId: 'BiWDsfZ3zbo' },
  
  { id: 'routine_3', title: 'Stress Melt', duration: '20 min', level: 'All Levels', image:require('../assets/freq.jpg'), videoId: 'hJbRpHZr_d0' },
  
];

const MEDITATION = [
  { id: 'meditation_1', title: 'Meditation You Can Do Anywhere', duration: '5 min', level: 'All Levels', image: require('../assets/art4.jpg'), videoId: 'inpok4MKVLM' },
  { id: 'meditation_2', title: 'De-Stress Meditation ', duration: '5 min', level: 'Gentle', image:require('../assets/art2.jpg'), videoId: '9yj8mBfHlMk' },
  { id: 'meditation_3', title: 'Spin away your stress with this Pinwheel Breathing animation ', duration: '5 min', level: 'Gentle', image: require('../assets/art3.jpg'), videoId: 'NnDJ4CXHL-Y' },
]
export default function YogaTherapy({ navigation }) {
  const [dailyFact, setDailyFact] = useState(MOVEMENT_FACTS[0]);
  
  // Modal States
  const [selectedAsana, setSelectedAsana] = useState(null);
  const [asanaModalVisible, setAsanaModalVisible] = useState(false);
  
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null); // Changed to ID

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * MOVEMENT_FACTS.length);
    setDailyFact(MOVEMENT_FACTS[randomIndex]);
  }, []);

  // --- HANDLERS ---
  const openAsanaDetail = (asana) => {
    setSelectedAsana(asana);
    setAsanaModalVisible(true);
  };

  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
    setVideoModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Yoga Studio</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* BREATHE CARD */}
          <View style={styles.breatheCard}>
            <View style={styles.breatheContent}>
              <Text style={styles.breatheTitle}>Pause & Breathe</Text>
              <Text style={styles.breatheDesc}>Take a deep breath in... hold... and let it all out.</Text>
            </View>
            <View style={styles.breatheCircle}><Text style={{fontSize: 24}}>🍃</Text></View>
          </View>

          {/* DYNAMIC FACT */}
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{dailyFact.title}</Text>
            <Text style={styles.infoText}>{dailyFact.text}</Text>
          </View>

          {/* ASANA MATRIX */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Essential Asanas</Text>
            <Text style={styles.sectionSubtitle}>Tap to learn form & benefits.</Text>
            <View style={styles.gridContainer}>
              {ASANAS.map((item) => (
                <TouchableOpacity key={item.id} style={styles.asanaCard} onPress={() => openAsanaDetail(item)}>
                 <View style={{ position: 'absolute', top: 5, right: 5 }}>
                            <HeartButton item={item} size={22} color="#fff" />
                 </View>
                  <Image source={item.image } style={styles.asanaImage} />
                  <View style={styles.asanaTextContainer}>
                    <Text style={styles.asanaTitle} numberOfLines={1}>{item.english}</Text>
                    <Text style={styles.asanaSanskrit} numberOfLines={1}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>


          {/* meditation */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Guided Meditation</Text>
            <View style={styles.routineList}>
              {MEDITATION.map((meditation) => (
                <TouchableOpacity 
                  key={meditation.id} 
                  style={styles.routineCard}
                  onPress={() => playVideo(meditation.videoId)}
                >
                  <Image source={meditation.image } style={styles.routineImage} />
                  <View style={{ position: 'absolute', top: 5, right: 5 }}>
                             <HeartButton item={meditation} size={22} color="#fff" />
                  </View>
                  <View style={styles.routineInfo}>
                    <Text style={styles.routineTitle}>{meditation.title}</Text>
                    <View style={styles.routineMetaRow}>
                      <Text style={styles.routineMeta}>⏱ {meditation.duration}</Text>
                      <Text style={styles.routineMeta}>•</Text>
                      <Text style={styles.routineMeta}>{meditation.level}</Text>
                    </View>
                  </View>
                  <View style={styles.playBtn}><Text style={{color: '#fff', fontSize: 12}}>START</Text></View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* ROUTINES */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Guided Routines</Text>
            <View style={styles.routineList}>
              {ROUTINES.map((routine) => (
                <TouchableOpacity 
                  key={routine.id} 
                  style={styles.routineCard}
                  onPress={() => playVideo(routine.videoId)}
                >
                  <Image source={routine.image } style={styles.routineImage} />
                  <View style={{ position: 'absolute', top: 5, right: 5 }}>
                             <HeartButton item={routine} size={22} color="#fff" />
                  </View>
                  <View style={styles.routineInfo}>
                    <Text style={styles.routineTitle}>{routine.title}</Text>
                    <View style={styles.routineMetaRow}>
                      <Text style={styles.routineMeta}>⏱ {routine.duration}</Text>
                      <Text style={styles.routineMeta}>•</Text>
                      <Text style={styles.routineMeta}>{routine.level}</Text>
                    </View>
                  </View>
                  <View style={styles.playBtn}><Text style={{color: '#fff', fontSize: 12}}>START</Text></View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>

      {/* --- MODAL 1: ASANA DETAILS --- */}
      <Modal animationType="slide" transparent={true} visible={asanaModalVisible} onRequestClose={() => setAsanaModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.detailModal}>
            <TouchableOpacity onPress={() => setAsanaModalVisible(false)} style={styles.closeCircle}>
               <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            {selectedAsana && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={selectedAsana.image } style={styles.detailImage} />
                
                <View style={styles.detailContent}>
                  <Text style={styles.detailTitle}>{selectedAsana.english}</Text>
                  <Text style={styles.detailSubtitle}>{selectedAsana.name}</Text>

                  <View style={styles.divider} />

                  <Text style={styles.detailHeader}>How to do it:</Text>
                  <Text style={styles.detailText}>{selectedAsana.directions}</Text>

                  <Text style={[styles.detailHeader, {marginTop: 20}]}>Why it helps:</Text>
                  <Text style={styles.detailText}>{selectedAsana.benefit}</Text>

                  <TouchableOpacity style={styles.videoButton} onPress={() => playVideo(selectedAsana.videoId)}>
                    <Text style={styles.videoButtonText}>▶  Watch Video Tutorial</Text>
                  </TouchableOpacity>
                  <View style={{height: 30}}/>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      {/* --- MODAL 2: YOUTUBE PLAYER --- */}
      <Modal animationType="fade" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
          <TouchableOpacity 
              style={{position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5}}
              onPress={() => setVideoModalVisible(false)}
          >
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>✕ Close Video</Text>
          </TouchableOpacity>
          
          {/* YOUTUBE PLAYER */}
          <YoutubePlayer
            height={300}
            play={true}
            videoId={currentVideoId}
            onChangeState={(event) => {
               if(event === 'ended') setVideoModalVisible(false);
            }}
          />
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0FFE4' },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#1B5E20' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20' },
  scrollContent: { paddingBottom: 50 },

  // SECTIONS
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20', marginLeft: 20, marginBottom: 5 },
  sectionSubtitle: { fontSize: 13, color: '#4CAF50', marginLeft: 20, marginBottom: 15 },
  sectionContainer: { marginTop: 25 },

  // BREATHE CARD
  breatheCard: { marginHorizontal: 20, marginTop: 10, padding: 20, backgroundColor: '#A5D6A7', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  breatheContent: { flex: 1, marginRight: 15 },
  breatheTitle: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20', marginBottom: 5 },
  breatheDesc: { fontSize: 13, color: '#2E7D32' },
  breatheCircle: { width: 45, height: 45, borderRadius: 25, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },

  // INFO CARD
  infoSection: { marginTop: 20, marginHorizontal: 20, padding: 15, backgroundColor: '#fff', borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#1B5E20', elevation: 2 },
  infoText: { fontSize: 14, color: '#333', lineHeight: 20, marginTop: 5 },

  // ASANA MATRIX
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },
  asanaCard: { width: ASANA_WIDTH,height:250, marginBottom: 15, borderRadius: 10, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
  asanaImage: { width: '100%', height: ASANA_WIDTH +30, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  asanaTextContainer: { padding: 5, alignItems: 'center', height: 45, justifyContent: 'center' },
  asanaTitle: { fontSize: 15, fontWeight: 'bold', color: '#1B5E20', textAlign: 'center' },
  asanaSanskrit: { fontSize: 12, color: '#666', fontStyle: 'italic', textAlign: 'center' },

  // ROUTINES
  routineList: { paddingHorizontal: 20, marginTop: 10 },
  routineCard: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15, borderRadius: 15, padding: 10, alignItems: 'center', elevation: 2 },
  routineImage: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  routineInfo: { flex: 1 },
  routineTitle: { fontSize: 15, fontWeight: 'bold', color: '#1B5E20' },
  routineMetaRow: { flexDirection: 'row', marginTop: 3 },
  routineMeta: { fontSize: 11, color: '#666', marginRight: 5 },
  playBtn: { backgroundColor: '#1B5E20', marginTop: 15, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },

  // MODALS
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  detailModal: { height: '85%', backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, overflow: 'hidden' },
  closeCircle: { position: 'absolute', top: 15, right: 15, width: 35, height: 35, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  closeText: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  
  detailImage: { width: '100%', height: 250 },
  detailContent: { padding: 25 },
  detailTitle: { fontSize: 28, fontWeight: 'bold', color: '#1B5E20' },
  detailSubtitle: { fontSize: 18, color: '#4CAF50', fontStyle: 'italic', marginBottom: 15 },
  divider: { height: 2, backgroundColor: '#E8F5E9', width: '100%', marginBottom: 20 },
  detailHeader: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32', marginBottom: 10 },
  detailText: { fontSize: 16, color: '#444', lineHeight: 26 },
  
  videoButton: { backgroundColor: '#1B5E20', padding: 18, borderRadius: 30, marginTop: 30, alignItems: 'center', elevation: 5 },
  videoButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 },
});