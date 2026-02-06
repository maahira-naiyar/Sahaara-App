// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const AUDIO_PLAYLISTS = [
//   { id: '1', title: 'Nature Sounds', image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80', desc: 'Rain, Forest & Ocean' },
//   { id: '2', title: 'Cortisol Release', image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&q=80', desc: '528Hz & 432Hz Frequencies' },
//   { id: '3', title: 'Indian Classical', image: 'https://images.unsplash.com/photo-1563804365824-0c5866163dc1?w=400&q=80', desc: 'Ragas for deep calm' },
//   { id: '4', title: 'Deep Sleep', image: 'https://images.unsplash.com/photo-1515890492928-be2cb49a45e4?w=400&q=80', desc: 'Delta waves' },
// ];

// const AUDIO_BOOKS = [
//   { id: '1', title: 'The Power of Now', author: 'Eckhart Tolle', chapter: 'Chapter 1: You Are Not Your Mind', duration: '12:04', cover: 'https://m.media-amazon.com/images/I/71Simple+L._AC_UF1000,1000_QL80_.jpg' },
//   { id: '2', title: 'Atomic Habits', author: 'James Clear', chapter: 'The 1% Rule: Tiny Changes', duration: '08:45', cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg' },
// ];

// export default function AudioTherapy({ navigation }) {
//   const renderPlaylist = ({ item }) => (
//     <TouchableOpacity style={styles.playlistCard}>
//       <Image source={{ uri: item.image }} style={styles.playlistImage} />
//       <View style={styles.playlistOverlay}>
//         <Text style={styles.playlistTitle}>{item.title}</Text>
//         <Text style={styles.playlistDesc}>{item.desc}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderBookChapter = (item) => (
//     <TouchableOpacity key={item.id} style={styles.bookCard}>
//       <Image source={{ uri: item.cover }} style={styles.bookCover} />
//       <View style={styles.bookInfo}>
//         <Text style={styles.bookTitle}>{item.title}</Text>
//         <Text style={styles.bookChapter}>{item.chapter}</Text>
//         <Text style={styles.bookAuthor}>{item.author} • {item.duration}</Text>
//       </View>
//       <View style={styles.playButton}><Text style={styles.playIcon}>▶</Text></View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={[styles.container, { backgroundColor: '#E0F4FF' }]}>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Audio Therapy</Text>
//           <View style={{ width: 40 }} /> 
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
//           <Text style={styles.sectionHeader}>Curated For You</Text>
//           <Text style={styles.sectionSubHeader}>Soundscapes to align your frequency.</Text>
//           <View style={styles.horizontalSection}>
//             <FlatList data={AUDIO_PLAYLISTS} renderItem={renderPlaylist} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }} />
//           </View>

//           <Text style={[styles.sectionHeader, { marginTop: 30, paddingLeft: 20 }]}>Wisdom Bytes</Text>
//           <Text style={[styles.sectionSubHeader, { paddingLeft: 20, marginBottom: 20 }]}>Short chapters to shift your perspective.</Text>
//           <View style={styles.bookList}>{AUDIO_BOOKS.map((book) => renderBookChapter(book))}</View>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C' },
//   scrollContent: { paddingBottom: 50 },
//   sectionHeader: { fontSize: 22, fontWeight: 'bold', color: '#16423C', paddingLeft: 20, marginTop: 10 },
//   sectionSubHeader: { fontSize: 14, color: '#6A9C89', paddingLeft: 20, marginBottom: 15 },
//   horizontalSection: { height: 160 },
//   playlistCard: { width: 140, height: 140, marginRight: 15, borderRadius: 15, overflow: 'hidden', backgroundColor: '#fff', elevation: 3 },
//   playlistImage: { width: '100%', height: '100%', position: 'absolute' },
//   playlistOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'flex-end', padding: 10 },
//   playlistTitle: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
//   playlistDesc: { color: '#e0e0e0', fontSize: 10 },
//   bookList: { paddingHorizontal: 20 },
//   bookCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginBottom: 15, borderRadius: 15, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
//   bookCover: { width: 50, height: 75, borderRadius: 5, marginRight: 15 },
//   bookInfo: { flex: 1 },
//   bookTitle: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   bookChapter: { fontSize: 13, color: '#555', marginTop: 2 },
//   bookAuthor: { fontSize: 12, color: '#999', marginTop: 4 },
//   playButton: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   playIcon: { color: '#fff', fontSize: 14 },
// });
// ------------------------------------------------------

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const { width } = Dimensions.get('window');

// // --- DATA: PLAYLISTS ---
// const AUDIO_LIBRARY = [
//   { 
//     id: 'nature', 
//     title: 'Nature Sounds', 
//     image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80', 
//     desc: 'Immerse in the wild',
//     tracks: [
//       { id: 'n1', title: 'Heavy Rain & Thunder', duration: '10:00' },
//       { id: 'n2', title: 'Forest Birds Morning', duration: '08:30' },
//       { id: 'n3', title: 'Ocean Waves at Night', duration: '12:00' },
//       { id: 'n4', title: 'Crackling Campfire', duration: '15:00' },
//       { id: 'n5', title: 'River Stream Flow', duration: '09:45' },
//       { id: 'n6', title: 'Wind in the Trees', duration: '06:20' },
//       { id: 'n7', title: 'Tropical Rainforest', duration: '11:10' },
//       { id: 'n8', title: 'Midnight Crickets', duration: '07:55' },
//     ]
//   },
//   { 
//     id: 'freq', 
//     title: 'Healing Frequencies', 
//     image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&q=80', 
//     desc: 'Align your energy',
//     tracks: [
//       { id: 'f1', title: '432 Hz - Miracle Tone', duration: '11:11' },
//       { id: 'f2', title: '528 Hz - DNA Repair', duration: '09:00' },
//       { id: 'f3', title: '396 Hz - Remove Fear', duration: '10:30' },
//       { id: 'f4', title: '639 Hz - Relationships', duration: '08:45' },
//       { id: 'f5', title: '741 Hz - Detox Aura', duration: '12:00' },
//       { id: 'f6', title: '852 Hz - Awaken Intuition', duration: '07:30' },
//       { id: 'f7', title: '963 Hz - God Frequency', duration: '15:00' },
//       { id: 'f8', title: 'Theta Waves (Deep Sleep)', duration: '20:00' },
//     ]
//   },
//   { 
//     id: 'classical', 
//     title: 'Indian Classical', 
//     image: 'https://images.unsplash.com/photo-1563804365824-0c5866163dc1?w=400&q=80', 
//     desc: 'Ragas for the soul',
//     tracks: [
//       { id: 'c1', title: 'Raag Yaman - Peace', duration: '14:20' },
//       { id: 'c2', title: 'Raag Bhairav - Morning', duration: '10:15' },
//       { id: 'c3', title: 'Flute Meditation', duration: '08:50' },
//       { id: 'c4', title: 'Sitar Instrumental', duration: '12:30' },
//       { id: 'c5', title: 'Raag Darbari - Deep', duration: '16:00' },
//       { id: 'c6', title: 'Tabla Solo Rhythm', duration: '05:45' },
//       { id: 'c7', title: 'Veena Soothing Vibes', duration: '09:10' },
//       { id: 'c8', title: 'Om Chanting 108', duration: '21:00' },
//     ]
//   },
//   { 
//     id: 'lofi', 
//     title: 'Calm Lo-Fi', 
//     image: 'https://images.unsplash.com/photo-1515890492928-be2cb49a45e4?w=400&q=80', 
//     desc: 'Beats to relax to',
//     tracks: [
//       { id: 'l1', title: 'Rainy Window Jazz', duration: '03:45' },
//       { id: 'l2', title: 'Midnight Study Session', duration: '04:20' },
//       { id: 'l3', title: 'Coffee Shop Vibes', duration: '03:15' },
//       { id: 'l4', title: 'Slow Sunday Morning', duration: '05:00' },
//       { id: 'l5', title: 'Vinyl Crackle Loop', duration: '02:50' },
//       { id: 'l6', title: 'Soft Piano Dreams', duration: '04:10' },
//       { id: 'l7', title: 'Sunset Drive', duration: '03:55' },
//       { id: 'l8', title: 'Sleepy Cat Beats', duration: '04:30' },
//     ]
//   },
// ];

// // --- DATA: AUDIO BOOKS ---
// const AUDIO_BOOKS = [
//   { id: 'b1', title: 'The Power of Now', author: 'Eckhart Tolle', chapter: 'Ch 1: You Are Not Your Mind', duration: '12:04', cover: 'https://m.media-amazon.com/images/I/71Simple+L._AC_UF1000,1000_QL80_.jpg' },
//   { id: 'b2', title: 'Atomic Habits', author: 'James Clear', chapter: 'The 1% Rule: Tiny Changes', duration: '08:45', cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg' },
//   { id: 'b3', title: 'Ikigai', author: 'H. Garcia', chapter: 'Finding Your Purpose', duration: '15:20', cover: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg' },
//   { id: 'b4', title: 'The Alchemist', author: 'Paulo Coelho', chapter: 'Listening to Your Heart', duration: '10:10', cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg' },
//   { id: 'b5', title: 'Think Like a Monk', author: 'Jay Shetty', chapter: 'Train Your Mind for Peace', duration: '14:30', cover: 'https://m.media-amazon.com/images/I/71ru1Xg+KVL._AC_UF1000,1000_QL80_.jpg' },
// ];

// export default function Audio_Therapy({ navigation }) {
//   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

//   // --- RENDER: Track Row (Inside Playlist) ---
//   const renderTrackItem = ({ item, index }) => (
//     <TouchableOpacity style={styles.trackRow}>
//       <Text style={styles.trackNumber}>{index + 1}</Text>
//       <View style={styles.trackInfo}>
//         <Text style={styles.trackTitle}>{item.title}</Text>
//         <Text style={styles.trackSubtitle}>Sahaara Original</Text>
//       </View>
//       <Text style={styles.trackDuration}>{item.duration}</Text>
//       <TouchableOpacity>
//         <Text style={styles.playIcon}>▶</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   // --- RENDER: Book Card (Main Screen) ---
//   const renderBookItem = (book) => (
//     <TouchableOpacity key={book.id} style={styles.bookCard}>
//       <Image source={{ uri: book.cover }} style={styles.bookCover} />
//       <View style={styles.bookInfo}>
//         <Text style={styles.bookTitle}>{book.title}</Text>
//         <Text style={styles.bookChapter}>{book.chapter}</Text>
//         <Text style={styles.bookAuthor}>{book.author} • {book.duration}</Text>
//       </View>
//       <View style={styles.playButton}><Text style={styles.playIconWhite}>▶</Text></View>
//     </TouchableOpacity>
//   );

//   // --- VIEW 1: OPENED PLAYLIST ---
//   if (selectedPlaylist) {
//     return (
//       <View style={[styles.container, { backgroundColor: '#F5F7F8' }]}>
//         <SafeAreaView style={styles.safeArea}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => setSelectedPlaylist(null)} style={styles.backButton}>
//               <Text style={styles.backButtonText}>← Library</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles.playlistHeader}>
//               <Image source={{ uri: selectedPlaylist.image }} style={styles.playlistBigImage} />
//               <Text style={styles.playlistBigTitle}>{selectedPlaylist.title}</Text>
//               <Text style={styles.playlistBigDesc}>{selectedPlaylist.desc} • {selectedPlaylist.tracks.length} Songs</Text>
//               <TouchableOpacity style={styles.bigPlayButton}>
//                 <Text style={styles.bigPlayText}>SHUFFLE PLAY</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.trackListContainer}>
//               {selectedPlaylist.tracks.map((track, index) => (
//                 <View key={track.id}>{renderTrackItem({ item: track, index })}</View>
//               ))}
//               <View style={{height: 40}} />
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     );
//   }

//   // --- VIEW 2: MAIN LIBRARY ---
//   return (
//     <View style={[styles.container, { backgroundColor: '#E0F4FF' }]}>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Dashboard</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Audio Therapy</Text>
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          
//           {/* SECTION 1: PLAYLISTS GRID */}
//           <Text style={styles.sectionHeader}>Your Collections</Text>
//           <Text style={styles.sectionSubHeader}>Select a mood to view the playlist.</Text>

//           <View style={styles.gridContainer}>
//             {AUDIO_LIBRARY.map((playlist) => (
//               <TouchableOpacity 
//                 key={playlist.id} 
//                 style={styles.largeCard}
//                 activeOpacity={0.9}
//                 onPress={() => setSelectedPlaylist(playlist)}
//               >
//                 <Image source={{ uri: playlist.image }} style={styles.cardImage} />
//                 <View style={styles.cardOverlay}>
//                   <Text style={styles.cardTitle}>{playlist.title}</Text>
//                   <Text style={styles.cardDesc}>{playlist.tracks.length} Tracks</Text>
//                 </View>
//                 <View style={styles.floatingPlay}>
//                    <Text style={{color:'#fff', fontSize:18}}>▶</Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* SECTION 2: AUDIO BOOKS */}
//           <Text style={[styles.sectionHeader, { marginTop: 30 }]}>Wisdom Bytes</Text>
//           <Text style={styles.sectionSubHeader}>Short audio chapters for daily inspiration.</Text>

//           <View style={styles.bookListContainer}>
//             {AUDIO_BOOKS.map((book) => renderBookItem(book))}
//           </View>

//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', marginRight: 10 },

//   // HEADERS
//   sectionHeader: { fontSize: 24, fontWeight: 'bold', color: '#16423C', paddingLeft: 20, marginTop: 10 },
//   sectionSubHeader: { fontSize: 14, color: '#555', paddingLeft: 20, marginBottom: 20 },
  
//   // GRID
//   gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
//   largeCard: { width: (width / 2) - 25, height: (width / 2) - 25, marginBottom: 20, borderRadius: 15, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5 },
//   cardImage: { width: '100%', height: '100%', borderRadius: 15 },
//   cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
//   cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
//   cardDesc: { color: '#ddd', fontSize: 12 },
//   floatingPlay: { position: 'absolute', bottom: 10, right: 10, width: 35, height: 35, borderRadius: 18, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center', elevation: 6 },

//   // BOOK CARDS
//   bookListContainer: { paddingHorizontal: 20 },
//   bookCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginBottom: 15, borderRadius: 15, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
//   bookCover: { width: 50, height: 75, borderRadius: 5, marginRight: 15 },
//   bookInfo: { flex: 1 },
//   bookTitle: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   bookChapter: { fontSize: 13, color: '#555', marginTop: 2 },
//   bookAuthor: { fontSize: 12, color: '#999', marginTop: 4 },
//   playButton: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   playIconWhite: { color: '#fff', fontSize: 14 },

//   // PLAYLIST VIEW
//   playlistHeader: { alignItems: 'center', padding: 20, paddingBottom: 30 },
//   playlistBigImage: { width: 200, height: 200, borderRadius: 10, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, elevation: 10 },
//   playlistBigTitle: { fontSize: 28, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
//   playlistBigDesc: { fontSize: 14, color: '#666', marginTop: 5, textAlign: 'center' },
//   bigPlayButton: { marginTop: 20, backgroundColor: '#16423C', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 30, elevation: 5 },
//   bigPlayText: { color: '#fff', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
//   trackListContainer: { backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, minHeight: 400 },
//   trackRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   trackNumber: { width: 30, fontSize: 14, color: '#888', textAlign: 'center' },
//   trackInfo: { flex: 1, paddingHorizontal: 10 },
//   trackTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
//   trackSubtitle: { fontSize: 12, color: '#888' },
//   trackDuration: { fontSize: 14, color: '#666', marginRight: 15 },
//   playIcon: { fontSize: 18, color: '#16423C' },
// });
// ----------------------
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Audio } from 'expo-av'; // <--- 1. IMPORT AUDIO LIBRARY
// import HeartButton from '../components/HeartButton';
// const { width } = Dimensions.get('window');

// // --- DATA: PLAYLISTS WITH REAL URLs ---
// const AUDIO_LIBRARY = [
//   { 
//     id: 'nature', 
//     title: 'Nature Sounds', 
//     image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80', 
//     desc: 'Immerse in the wild',
//     tracks: [
      
//       // I added 'url' to these items. These are reliable test sounds.
//       { id: 'n1', title: 'Heavy Rain & Thunder', duration: '1:30', file: require('../assets/sounds/rain&thunder.mp3')},
//       { id: 'n2', title: 'Forest Birds Morning', duration: '15:03', file: require('../assets/sounds/forestsound.mp3')},
//       { id: 'n3', title: 'Ocean Waves at Night', duration: '10:00', file: require('../assets/sounds/oceanwaves.mp3')},
//       { id: 'n4', title: 'Crackling Campfire', duration: '10:00',file: require('../assets/sounds/campfiresound.mp3') },
//       { id: 'n5', title: 'River Stream Flow', duration: '10:00', file: require('../assets/sounds/riverstream.mp3')},
//       { id: 'n6', title: 'Drowning Bliss', duration: '02:00', file: require('../assets/sounds/underwatersound.mp3')},
//       //{ id: 'n7', title: 'Tropical Rainforest', duration: '11:10', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
//       //{ id: 'n8', title: 'Midnight Crickets', duration: '07:55', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    
//       // I added 'url' to these items. These are reliable test sounds.
//       // { id: 'n1', title: 'Heavy Rain & Thunder', duration: '10:00', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
//       // { id: 'n2', title: 'Forest Birds Morning', duration: '08:30', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
//       // { id: 'n3', title: 'Ocean Waves at Night', duration: '12:00', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
//       // { id: 'n4', title: 'Crackling Campfire', duration: '15:00', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
//       // { id: 'n5', title: 'River Stream Flow', duration: '09:45', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
//       // { id: 'n6', title: 'Wind in the Trees', duration: '06:20', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
//       // { id: 'n7', title: 'Tropical Rainforest', duration: '11:10', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
//      // { id: 'n8', title: 'Midnight Crickets', duration: '07:55', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
//     ]
//   },
//   { 
//     id: 'freq', 
//     title: 'Healing Frequencies', 
//     image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&q=80', 
//     desc: 'Align your energy',
//     tracks: [
//        { id: 'f1', title: '285 Hz - Sound Bath', duration: '10:00', file: require('../assets/sounds/285Hz.mp3') },
//       { id: 'f2', title: 'Raise Your Vibration', duration: '10:00',  file: require('../assets/sounds/raiseyourvibration.mp3') },
//       { id: 'f3', title: 'Miracle Healing Tone', duration: '10:17', file: require('../assets/sounds/miracleheal.mp3') },
//       { id: 'f4', title: 'OM Chant', duration: '10:00',  file: require('../assets/sounds/omchant.mp3') },
//       // ... add more URLs as needed
//     ]
//   },
//   { 
//     id: 'classical', 
//     title: 'Indian Classical', 
//     image: 'https://images.unsplash.com/photo-1563804365824-0c5866163dc1?w=400&q=80', 
//     desc: 'Ragas for the soul',
//     tracks: [
//       { id: 'c1', title: 'Healing Sitar & Flute Tunes', duration: '30:00',file: require('../assets/sounds/sitarflute.mp3') },
//       { id: 'c2', title: 'Flute Rhythms', duration: '05:20', file: require('../assets/sounds/flute.mp3')},
//       { id: 'c3', title: 'Burning Ghat', duration: '06:58', file: require('../assets/sounds/burningghat.mp3')},
    
//     ]
//   },
//   { 
//     id: 'lofi', 
//     title: 'Calm Lo-Fi', 
//     image: 'https://images.unsplash.com/photo-1515890492928-be2cb49a45e4?w=400&q=80', 
//     desc: 'Beats to relax to',
//     tracks: [
//       { id: 'l1', title: 'Watching the Sunset', duration: '42:09',  file: require('../assets/sounds/sunsetwatch.mp3') },
//       { id: 'l2', title: 'Drowned By The Sirens', duration: '02:12', file: require('../assets/sounds/sirensong.mp3') },
//       { id: 'l3', title: 'Playlist For Wanderers', duration: '34:30',  file: require('../assets/sounds/forwanderers.mp3') },
//       { id: 'l4', title: 'Music That Tells Your Brain To Shut Up', duration: '1:00:00',  file: require('../assets/sounds/musictoshutbrain.mp3') },
//     ]
//   },
// ];

// // const AUDIO_BOOKS = [
// //   { id: 'b1', title: 'The Power of Now', author: 'Eckhart Tolle', chapter: 'Ch 1: You Are Not Your Mind', duration: '12:04', cover: 'https://m.media-amazon.com/images/I/71Simple+L._AC_UF1000,1000_QL80_.jpg' },
// //   { id: 'b2', title: 'Atomic Habits', author: 'James Clear', chapter: 'The 1% Rule: Tiny Changes', duration: '08:45', cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg' },
// //   { id: 'b3', title: 'Ikigai', author: 'H. Garcia', chapter: 'Finding Your Purpose', duration: '15:20', cover: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg' },
// //   { id: 'b4', title: 'The Alchemist', author: 'Paulo Coelho', chapter: 'Listening to Your Heart', duration: '10:10', cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg' },
// //   { id: 'b5', title: 'Think Like a Monk', author: 'Jay Shetty', chapter: 'Train Your Mind for Peace', duration: '14:30', cover: 'https://m.media-amazon.com/images/I/71ru1Xg+KVL._AC_UF1000,1000_QL80_.jpg' },
// // ];
// // const AUDIO_BOOKS = [
// //   { id: 'b1', title: 'The Power of Now', author: 'Eckhart Tolle', chapter: 'Ch 1: You Are Not Your Mind', duration: '12:04', cover: 'https://m.media-amazon.com/images/I/71Simple+L._AC_UF1000,1000_QL80_.jpg', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
// //   { id: 'b2', title: 'Atomic Habits', author: 'James Clear', chapter: 'The 1% Rule', duration: '08:45', cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
// //   { id: 'b3', title: 'Ikigai', author: 'H. Garcia', chapter: 'Finding Purpose', duration: '15:20', cover: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
// //   { id: 'b4', title: 'The Alchemist', author: 'Paulo Coelho', chapter: 'The Journey', duration: '10:10', cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
// //   { id: 'b5', title: 'Think Like a Monk', author: 'Jay Shetty', chapter: 'Peace of Mind', duration: '14:30', cover: 'https://m.media-amazon.com/images/I/71ru1Xg+KVL._AC_UF1000,1000_QL80_.jpg', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
// // ];

// const AUDIO_BOOKS = [
//   { id: 'b1', title: 'The Power of Now', author: 'Eckhart Tolle', chapter: 'Ch 1: You Are Not Your Mind', duration: '12:04', cover: 'https://m.media-amazon.com/images/I/71Simple+L._AC_UF1000,1000_QL80_.jpg', file: require('../assets/bookaudio/101reasons.mp3')},
//   { id: 'b2', title: 'Atomic Habits', author: 'James Clear', chapter: 'The 1% Rule', duration: '08:45', cover: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg',  file: require('../assets/bookaudio/bigmagic.mp3')},
//   { id: 'b3', title: 'Ikigai', author: 'H. Garcia', chapter: 'Finding Purpose', duration: '15:20', cover: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg',  file: require('../assets/bookaudio/littlelife.mp3') },
//   { id: 'b4', title: 'The Alchemist', author: 'Paulo Coelho', chapter: 'The Journey', duration: '10:10', cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg',  file: require('../assets/bookaudio/midnightlib.mp3') },
//   { id: 'b5', title: 'Think Like a Monk', author: 'Jay Shetty', chapter: 'Peace of Mind', duration: '14:30', cover: 'https://m.media-amazon.com/images/I/71ru1Xg+KVL._AC_UF1000,1000_QL80_.jpg',  file: require('../assets/bookaudio/mountainisyou.mp3')},
// ];

// export default function Audio_Therapy({ navigation }) {
//   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  
//   // --- 2. NEW AUDIO STATE ---
//   const [sound, setSound] = useState(); 
//   const [playingTrackId, setPlayingTrackId] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // --- 3. AUDIO FUNCTIONALITY ---
//   //async function playSound(url, trackId) {
//   // async function playSound(audioFile, trackId) {
//   //   try {
//   //     // If clicking the same track that is already playing, stop it.
//   //     if (playingTrackId === trackId) {
//   //       if (sound) await sound.unloadAsync();
//   //       setPlayingTrackId(null);
//   //       setSound(null);
//   //       return;
//   //     }

//   //     // Stop previous sound if any
//   //     if (sound) {
//   //       await sound.unloadAsync();
//   //     }

//   //     // // Load new sound
//   //     // if (!url) {
//   //     //   alert("Audio source coming soon!");
//   //     //   return;
//   //     // }

//   //     //setIsLoading(true);
      
//   //     // Enable playback in silent mode (iOS)
//   //     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

//   //     const { sound: newSound } = await Audio.Sound.createAsync(
//   //       { uri: url },
//   //       { shouldPlay: true }
//   //     );
      
//   //     setSound(newSound);
//   //     setPlayingTrackId(trackId);
//   //     //setIsLoading(false);

//   //   } catch (error) {
//   //     console.error(error);
//   //     //setIsLoading(false);
//   //   }
//   // }
// // --- FIXED PLAY SOUND FUNCTION ---
//   async function playSound(audioSource, trackId) {
//     try {
//       // 1. If clicking the same track, stop it
//       if (playingTrackId === trackId) {
//         if (sound) await sound.unloadAsync();
//         setPlayingTrackId(null);
//         setSound(null);
//         return;
//       }

//       // 2. Stop previous sound
//       if (sound) await sound.unloadAsync();

//       // 3. Play
//       // setIsLoading(true); // Optional: Commented out for local files as they are instant
//       await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

//       // LOGIC: Check if it's a Remote URL (string) or Local File (number/object)
//       const source = typeof audioSource === 'string' ? { uri: audioSource } : audioSource;

//       const { sound: newSound } = await Audio.Sound.createAsync(
//         source,
//         { shouldPlay: true }
//       );
      
//       setSound(newSound);
//       setPlayingTrackId(trackId);
//       // setIsLoading(false);

//     } catch (error) {
//       console.error("Playback Error:", error);
//       alert("Could not play audio");
//     }
//   }
//   // Cleanup when leaving the screen
//   useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);


//   // --- RENDER: Track Row (Updated with Logic) ---
//   const renderTrackItem = ({ item, index }) => {
//     const isPlaying = playingTrackId === item.id;

//     return (
//       <TouchableOpacity 
//         style={[styles.trackRow, isPlaying && styles.activeTrackRow]} 
//        // onPress={() => playSound(item.url, item.id)}
//         onPress={() => playSound(item.file, item.id)}
//       >
//         <Text style={styles.trackNumber}>{index + 1}</Text>
//         <View style={styles.trackInfo}>
//           <Text style={[styles.trackTitle, isPlaying && styles.activeText]}>{item.title}</Text>
//           <Text style={styles.trackSubtitle}>Sahaara Original</Text>
//         </View>
//         <Text style={styles.trackDuration}>{item.duration}</Text>
        
//         {/* Play/Pause Icon Logic */}
//         <View style={styles.playIconContainer}>
//           {isPlaying && isLoading ? (
//              <ActivityIndicator size="small" color="#16423C" />
//           ) : (
//              <Text style={[styles.playIcon, isPlaying && styles.activeText]}>
//                {isPlaying ? "⏸" : "▶"}
//              </Text>
//           )}
//         </View>

//       </TouchableOpacity>
//     );
//   };

//   // --- RENDER: Book Card (Unchanged) ---
//   // const renderBookItem = (book) => (
//   //   <TouchableOpacity key={book.id} style={styles.bookCard}>
//   //     <Image source={{ uri: book.cover }} style={styles.bookCover} />
//   //     <View style={styles.bookInfo}>
//   //       <Text style={styles.bookTitle}>{book.title}</Text>
//   //       <Text style={styles.bookChapter}>{book.chapter}</Text>
//   //       <Text style={styles.bookAuthor}>{book.author} • {book.duration}</Text>
//   //     </View>
//   //     <View style={styles.playButton}><Text style={styles.playIconWhite}>▶</Text></View>
//   //   </TouchableOpacity>
//   // );

//   // const renderBookItem = (book) => {
//   //   const isPlaying = playingTrackId === book.id;

//   //   return (
//   //     <TouchableOpacity 
//   //       key={book.id} 
//   //       style={[styles.bookCard, isPlaying && styles.activeBookCard]}
//   //       onPress={() => playSound(book.url, book.id)} // <--- FIXED: Now plays sound!
//   //     >
//   //       <Image source={{ uri: book.cover }} style={styles.bookCover} />
//   //       <View style={styles.bookInfo}>
//   //         <Text style={[styles.bookTitle, isPlaying && styles.activeText]}>{book.title}</Text>
//   //         <Text style={styles.bookChapter}>{book.chapter}</Text>
//   //         <Text style={styles.bookAuthor}>{book.author} • {book.duration}</Text>
//   //       </View>
        
//   //       <View style={[styles.playButton, isPlaying && { backgroundColor: '#E0F2F1' }]}>
//   //          {isPlaying && isLoading ? (
//   //             <ActivityIndicator size="small" color="#16423C" />
//   //          ) : (
//   //             <Text style={[styles.playIconWhite, isPlaying && { color: '#16423C' }]}>
//   //               {isPlaying ? "⏸" : "▶"}
//   //             </Text>
//   //          )}
//   //       </View>
//   //     </TouchableOpacity>
//   //   );
//   // };

//   const renderBookItem = (book) => {
//     const isPlaying = playingTrackId === book.id;

//     return (
//       <TouchableOpacity 
//         key={book.id} 
//         style={[styles.bookCard, isPlaying && styles.activeBookCard]}
//         // CHANGE THIS LINE: Use book.file instead of book.url
//         onPress={() => playSound(book.file, book.id)} 
//       >
//         <Image source={{ uri: book.cover }} style={styles.bookCover}  
//          />
//         <View style={styles.bookInfo}>
//           <Text style={[styles.bookTitle, isPlaying && styles.activeText]}>{book.title}</Text>
//           <Text style={styles.bookChapter}>{book.chapter}</Text>
//           <Text style={styles.bookAuthor}>{book.author} • {book.duration}</Text>
//         </View>
        
//         <View style={[styles.playButton, isPlaying && { backgroundColor: '#E0F2F1' }]}>
//            {isPlaying && isLoading ? (
//               <ActivityIndicator size="small" color="#16423C" />
//            ) : (
//               <Text style={[styles.playIconWhite, isPlaying && { color: '#16423C' }]}>
//                 {isPlaying ? "⏸" : "▶"}
//               </Text>
//            )}
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   // --- VIEW 1: OPENED PLAYLIST ---
//   if (selectedPlaylist) {
//     return (
//       <View style={[styles.container, { backgroundColor: '#F5F7F8' }]}>
//         <SafeAreaView style={styles.safeArea}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => {
//                 if(sound) sound.unloadAsync(); // Stop audio when going back
//                 setPlayingTrackId(null);
//                 setSelectedPlaylist(null);
//             }} style={styles.backButton}>
//               <Text style={styles.backButtonText}>← Library</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles.playlistHeader}>
//               <Image source={{ uri: selectedPlaylist.image }} style={styles.playlistBigImage} />
//               <Text style={styles.playlistBigTitle}>{selectedPlaylist.title}</Text>
//               <Text style={styles.playlistBigDesc}>{selectedPlaylist.desc} • {selectedPlaylist.tracks.length} Songs</Text>
//               <TouchableOpacity style={styles.bigPlayButton}>
//                 <Text style={styles.bigPlayText}>SHUFFLE PLAY</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.trackListContainer}>
//               {selectedPlaylist.tracks.map((track, index) => (
//                 <View key={track.id}>{renderTrackItem({ item: track, index })}</View>
//               ))}
//               <View style={{height: 40}} />
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     );
//   }

//   // --- VIEW 2: MAIN LIBRARY ---
//   return (
//     <View style={[styles.container, { backgroundColor: '#E0F4FF' }]}>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Dashboard</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Audio Therapy</Text>
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          
//           {/* SECTION 1: PLAYLISTS GRID */}
//           <Text style={styles.sectionHeader}>Your Collections</Text>
//           <Text style={styles.sectionSubHeader}>Select a mood to view the playlist.</Text>

//           <View style={styles.gridContainer}>
//             {AUDIO_LIBRARY.map((playlist) => (
//               <TouchableOpacity 
//                 key={playlist.id} 
//                 style={styles.largeCard}
//                 activeOpacity={0.9}
//                 onPress={() => setSelectedPlaylist(playlist)}
//               >
//                 <Image source={{ uri: playlist.image }} style={styles.cardImage} />
//                 <View style={styles.cardOverlay}>
//                   <Text style={styles.cardTitle}>{playlist.title}</Text>
//                   <Text style={styles.cardDesc}>{playlist.tracks.length} Tracks</Text>
//                 </View>
//                 <View style={styles.floatingPlay}>
//                    <Text style={{color:'#fff', fontSize:18}}>▶</Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* SECTION 2: AUDIO BOOKS */}
//           <Text style={[styles.sectionHeader, { marginTop: 30 }]}>Wisdom Bytes</Text>
//           <Text style={styles.sectionSubHeader}>Short audio chapters for daily inspiration.</Text>

//           <View style={styles.bookListContainer}>
//             {AUDIO_BOOKS.map((book) => renderBookItem(book))}
//           </View>

//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', marginRight: 10 },

//   // HEADERS
//   sectionHeader: { fontSize: 24, fontWeight: 'bold', color: '#16423C', paddingLeft: 20, marginTop: 10 },
//   sectionSubHeader: { fontSize: 14, color: '#555', paddingLeft: 20, marginBottom: 20 },
  
//   // GRID
//   gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
//   largeCard: { width: (width / 2) - 25, height: (width / 2) - 25, marginBottom: 20, borderRadius: 15, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5 },
//   cardImage: { width: '100%', height: '100%', borderRadius: 15 },
//   cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
//   cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
//   cardDesc: { color: '#ddd', fontSize: 12 },
//   floatingPlay: { position: 'absolute', bottom: 10, right: 10, width: 35, height: 35, borderRadius: 18, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center', elevation: 6 },

//   // BOOK CARDS
//   bookListContainer: { paddingHorizontal: 20 },
//   bookCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginBottom: 15, borderRadius: 15, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
//   bookCover: { width: 50, height: 75, borderRadius: 5, marginRight: 15 },
//   bookInfo: { flex: 1 },
//   bookTitle: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
//   bookChapter: { fontSize: 13, color: '#555', marginTop: 2 },
//   bookAuthor: { fontSize: 12, color: '#999', marginTop: 4 },
//   playButton: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   playIconWhite: { color: '#fff', fontSize: 14 },

//   // PLAYLIST VIEW
//   playlistHeader: { alignItems: 'center', padding: 20, paddingBottom: 30 },
//   playlistBigImage: { width: 200, height: 200, borderRadius: 10, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, elevation: 10 },
//   playlistBigTitle: { fontSize: 28, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
//   playlistBigDesc: { fontSize: 14, color: '#666', marginTop: 5, textAlign: 'center' },
//   bigPlayButton: { marginTop: 20, backgroundColor: '#16423C', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 30, elevation: 5 },
//   bigPlayText: { color: '#fff', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
  
//   trackListContainer: { backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, minHeight: 400 },
  
//   // Updated Track Row Styles for Active State
//   trackRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, padding: 10, borderRadius: 10 },
//   activeTrackRow: { backgroundColor: '#E0F2F1' }, // Light green background when playing
  
//   trackNumber: { width: 30, fontSize: 14, color: '#888', textAlign: 'center' },
//   trackInfo: { flex: 1, paddingHorizontal: 10 },
//   trackTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
//   activeText: { color: '#16423C', fontWeight: 'bold' }, // Green text when playing
//   trackSubtitle: { fontSize: 12, color: '#888' },
//   trackDuration: { fontSize: 14, color: '#666', marginRight: 15 },
//   playIconContainer: { width: 20, alignItems: 'center' },
//   playIcon: { fontSize: 18, color: '#16423C' },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import HeartButton from '../components/HeartButton'; // <--- IMPORTED
//import Ionicons from 'react-native-vector-icons/Ionicons'; // <--- IMPORTED
const { width } = Dimensions.get('window');

// --- DATA: PLAYLISTS ---
const AUDIO_LIBRARY = [
  { 
    id: 'nature', 
    title: 'Nature Sounds', 
    image: require('../assets/nature.jpg') , //'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=80', 
    desc: 'Immerse in the wild',
    tracks: [
      { id: 'n1', title: 'Heavy Rain & Thunder', duration: '1:30', file: require('../assets/sounds/rain&thunder.mp3')},
      { id: 'n2', title: 'Forest Birds Morning', duration: '15:03', file: require('../assets/sounds/forestsound.mp3')},
      { id: 'n3', title: 'Ocean Waves at Night', duration: '10:00', file: require('../assets/sounds/oceanwaves.mp3')},
      { id: 'n4', title: 'Crackling Campfire', duration: '10:00',file: require('../assets/sounds/campfiresound.mp3') },
      { id: 'n5', title: 'River Stream Flow', duration: '10:00', file: require('../assets/sounds/riverstream.mp3')},
      { id: 'n6', title: 'Drowning Bliss', duration: '02:00', file: require('../assets/sounds/underwatersound.mp3')},
    ]
  },
  { 
    id: 'freq', 
    title: 'Healing Frequencies', 
    image:  require('../assets/freq.jpg') ,//'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&q=80', 
    desc: 'Align your energy',
    tracks: [
       { id: 'f1', title: '285 Hz - Sound Bath', duration: '10:00', file: require('../assets/sounds/285Hz.mp3') },
      { id: 'f2', title: 'Raise Your Vibration', duration: '10:00',  file: require('../assets/sounds/raiseyourvibration.mp3') },
      { id: 'f3', title: 'Miracle Healing Tone', duration: '10:17', file: require('../assets/sounds/miracleheal.mp3') },
      { id: 'f4', title: 'OM Chant', duration: '10:00',  file: require('../assets/sounds/omchant.mp3') },
    ]
  },
  { 
    id: 'classical', 
    title: 'Indian Classical', 
    image: require('../assets/india.jpg') ,//'https://images.unsplash.com/photo-1563804365824-0c5866163dc1?w=400&q=80', 
    desc: 'Ragas for the soul',
    tracks: [
      { id: 'c1', title: 'Healing Sitar & Flute Tunes', duration: '30:00',file: require('../assets/sounds/sitarflute.mp3') },
      { id: 'c2', title: 'Flute Rhythms', duration: '05:20', file: require('../assets/sounds/flute.mp3')},
      { id: 'c3', title: 'Burning Ghat', duration: '06:58', file: require('../assets/sounds/burningghat.mp3')},
    ]
  },
  { 
    id: 'lofi', 
    title: 'Calm Lo-Fi', 
    image: require('../assets/lofi.jpg') ,//'https://images.unsplash.com/photo-1515890492928-be2cb49a45e4?w=400&q=80', 
    desc: 'Beats to relax to',
    tracks: [
      { id: 'l1', title: 'Watching the Sunset', duration: '42:09',  file: require('../assets/sounds/sunsetwatch.mp3') },
      { id: 'l2', title: 'Drowned By The Sirens', duration: '02:12', file: require('../assets/sounds/sirensong.mp3') },
      { id: 'l3', title: 'Playlist For Wanderers', duration: '34:30',  file: require('../assets/sounds/forwanderers.mp3') },
      { id: 'l4', title: 'Music That Tells Your Brain To Shut Up', duration: '1:00:00',  file: require('../assets/sounds/musictoshutbrain.mp3') },
    ]
  },
];

const AUDIO_BOOKS = [
  { id: 'b1', title: '101 Essays That Will Change The Way You Think', author: 'Brianna Wiest',  duration: '1:39', cover: require('../assets/101reasons.jpg') ,  file: require('../assets/bookaudio/101reasons.mp3')},
  { id: 'b2', title: 'Big Magic', author: 'Elizabeth Gilbert',  duration: '00:48', cover:  require('../assets/bigmagic.jpg'),  file: require('../assets/bookaudio/bigmagic.mp3')},
  { id: 'b3', title: 'A Little Life', author: 'Hanya Yanagihara', duration: '00:38', cover: require('../assets/littlelife.jpg'),  file: require('../assets/bookaudio/littlelife.mp3') },
  { id: 'b4', title: 'The Midnight Library', author: 'Matt Haig',  duration: '1:06', cover:  require('../assets/midnight.jpg'),  file: require('../assets/bookaudio/midnightlib.mp3') },
  { id: 'b5', title: 'The Mountain Is You', author: 'Brianna Wiest', duration: '1:02', cover: require('../assets/mountain.jpg'),  file: require('../assets/bookaudio/mountainisyou.mp3')},
];

export default function Audio_Therapy({ navigation }) {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [sound, setSound] = useState(); 
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- PLAY SOUND FUNCTION ---
  async function playSound(audioSource, trackId) {
    try {
      if (playingTrackId === trackId) {
        if (sound) await sound.unloadAsync();
        setPlayingTrackId(null);
        setSound(null);
        return;
      }
      if (sound) await sound.unloadAsync();
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const source = typeof audioSource === 'string' ? { uri: audioSource } : audioSource;
      const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      setSound(newSound);
      setPlayingTrackId(trackId);
    } catch (error) {
      console.error("Playback Error:", error);
      alert("Could not play audio");
    }
  }

  // Cleanup
  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);


  // --- RENDER: Track Row (Inside Playlist) ---
  const renderTrackItem = ({ item, index }) => {
    const isPlaying = playingTrackId === item.id;

    return (
      <TouchableOpacity 
        style={[styles.trackRow, isPlaying && styles.activeTrackRow]} 
        onPress={() => playSound(item.file, item.id)}
      >
        <Text style={styles.trackNumber}>{index + 1}</Text>
        <View style={styles.trackInfo}>
          <Text style={[styles.trackTitle, isPlaying && styles.activeText]}>{item.title}</Text>
          <Text style={styles.trackSubtitle}>Sahaara Original</Text>
        </View>
        
        {/* --- HEART BUTTON (Added Here) --- */}
        <View style={{ marginRight: 10 }}>
           <HeartButton item={item} size={20} color="#888" />
        </View>

        <Text style={styles.trackDuration}>{item.duration}</Text>
        
        <View style={styles.playIconContainer}>
          {isPlaying && isLoading ? (
             <ActivityIndicator size="small" color="#16423C" />
          ) : (
             <Text style={[styles.playIcon, isPlaying && styles.activeText]}>
               {isPlaying ? "⏸" : "▶"}
             </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // --- RENDER: Book Card (Main Library) ---
  const renderBookItem = (book) => {
    const isPlaying = playingTrackId === book.id;

    return (
      <TouchableOpacity 
        key={book.id} 
        style={[styles.bookCard, isPlaying && styles.activeBookCard]}
        onPress={() => playSound(book.file, book.id)} 
      >
        <Image source={book.cover } style={styles.bookCover} />
        <View style={styles.bookInfo}>
          <Text style={[styles.bookTitle, isPlaying && styles.activeText]}>{book.title}</Text>
          <Text style={styles.bookChapter}>{book.chapter}</Text>
          <Text style={styles.bookAuthor}>{book.author} • {book.duration}</Text>
        </View>
        
        {/* --- HEART BUTTON (Added Here) --- */}
        <View style={{ marginRight: 15 }}>
            <HeartButton item={book} size={22} color="#16423C" />
        </View>

        <View style={[styles.playButton, isPlaying && { backgroundColor: '#E0F2F1' }]}>
           {isPlaying && isLoading ? (
              <ActivityIndicator size="small" color="#16423C" />
           ) : (
              <Text style={[styles.playIconWhite, isPlaying && { color: '#16423C' }]}>
                {isPlaying ? "⏸" : "▶"}
              </Text>
           )}
        </View>
      </TouchableOpacity>
    );
  };

  // --- VIEW 1: OPENED PLAYLIST ---
  if (selectedPlaylist) {
    return (
      <View style={[styles.container, { backgroundColor: '#F5F7F8' }]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {
                if(sound) sound.unloadAsync();
                setPlayingTrackId(null);
                setSelectedPlaylist(null);
            }} style={styles.backButton}>
              <Text style={styles.backButtonText}>← Library</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.playlistHeader}>
              <Image source={{ uri: selectedPlaylist.image }} style={styles.playlistBigImage} />
              <Text style={styles.playlistBigTitle}>{selectedPlaylist.title}</Text>
              <Text style={styles.playlistBigDesc}>{selectedPlaylist.desc} • {selectedPlaylist.tracks.length} Songs</Text>
              
              {/* --- HEART BUTTON FOR PLAYLIST --- */}
              <View style={{ marginTop: 10 }}>
                 <HeartButton item={selectedPlaylist} size={30} color="#16423C" />
              </View>

            </View>
            <View style={styles.trackListContainer}>
              {selectedPlaylist.tracks.map((track, index) => (
                <View key={track.id}>{renderTrackItem({ item: track, index })}</View>
              ))}
              <View style={{height: 40}} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  // --- VIEW 2: MAIN LIBRARY ---
  return (
    <View style={[styles.container, { backgroundColor:'#aadffc' }]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Dashboard</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Audio Therapy</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
          
          {/* SECTION 1: PLAYLISTS GRID */}
          <Text style={styles.sectionHeader}>Your Collections</Text>
          <Text style={styles.sectionSubHeader}>Select a mood to view the playlist.</Text>

          <View style={styles.gridContainer}>
            {AUDIO_LIBRARY.map((playlist) => (
              <TouchableOpacity 
                key={playlist.id} 
                style={styles.largeCard}
                activeOpacity={0.9}
                onPress={() => setSelectedPlaylist(playlist)}
              >
                {/* <Image source={ {uri: playlist.image} } style={styles.cardImage} /> */}
                <Image 
  source={typeof playlist.image === 'string' ? { uri: playlist.image } : playlist.image} 
  style={styles.cardImage} 
/>
                {/* --- HEART BUTTON (Top Right Overlay) --- */}
                <View style={styles.heartOverlay}>
                   <HeartButton item={playlist} size={22} />
                </View>

                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{playlist.title}</Text>
                  <Text style={styles.cardDesc}>{playlist.tracks.length} Tracks</Text>
                </View>
                <View style={styles.floatingPlay}>
                   <Text style={{color:'#fff', fontSize:18}}>▶</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* SECTION 2: AUDIO BOOKS */}
          <Text style={[styles.sectionHeader, { marginTop: 30 }]}>Wisdom Bytes</Text>
          <Text style={styles.sectionSubHeader}>Short audio chapters for daily inspiration.</Text>

          <View style={styles.bookListContainer}>
            {AUDIO_BOOKS.map((book) => renderBookItem(book))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' },
  backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 10 },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#16423C' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', marginRight: 10 },

  sectionHeader: { fontSize: 24, fontWeight: 'bold', color: '#16423C', paddingLeft: 20, marginTop: 10 },
  sectionSubHeader: { fontSize: 14, color: '#353434', paddingLeft: 20, marginBottom: 20 },
  
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  largeCard: { width: (width / 2) - 25, height: (width / 2) - 25, marginBottom: 20, borderRadius: 15, backgroundColor: '#fff', elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 5 },
  cardImage: { width: '100%', height: '100%', borderRadius: 15 },
  cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cardDesc: { color: '#ddd', fontSize: 14 },
  floatingPlay: { position: 'absolute', bottom: 12, right: 10, width: 35, height: 35, borderRadius: 18, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center', elevation: 6 },
  
  // New Style for Heart Overlay on Playlists
  heartOverlay: { position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 15, padding: 2 },

  bookListContainer: { paddingHorizontal: 20 },
  bookCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginBottom: 15, borderRadius: 15, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  bookCover: { width: 50, height: 80, borderRadius: 3, marginRight: 15 },
  bookInfo: { flex: 1 },
  bookTitle: { fontSize: 20, fontWeight: 'bold', color: '#16423C' },
  //bookChapter: { fontSize: 13, color: '#555', marginTop: 2 },
  bookAuthor: { fontSize: 12, color: '#999', marginTop: 0},
  playButton: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
  playIconWhite: { color: '#fff', fontSize: 14 },

  playlistHeader: { alignItems: 'center', padding: 20, paddingBottom: 30 },
  playlistBigImage: { width: 200, height: 200, borderRadius: 10, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, elevation: 10 },
  playlistBigTitle: { fontSize: 28, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
  playlistBigDesc: { fontSize: 14, color: '#666', marginTop: 5, textAlign: 'center' },
  
  trackListContainer: { backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, minHeight: 400 },
  trackRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, padding: 10, borderRadius: 10 },
  activeTrackRow: { backgroundColor: '#E0F2F1' }, 
  trackNumber: { width: 30, fontSize: 14, color: '#888', textAlign: 'center' },
  trackInfo: { flex: 1, paddingHorizontal: 10 },
  trackTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
  activeText: { color: '#16423C', fontWeight: 'bold' },
  trackSubtitle: { fontSize: 12, color: '#888' },
  trackDuration: { fontSize: 14, color: '#666', marginRight: 15 },
  playIconContainer: { width: 20, alignItems: 'center' },
  playIcon: { fontSize: 18, color: '#16423C' },
});