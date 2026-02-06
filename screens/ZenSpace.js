// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, SafeAreaView } from 'react-native';
// import { useUser } from '../context/UserContext';
// import HeartButton from '../components/HeartButton';

// const { width } = Dimensions.get('window');

// export default function ZenSpace({ navigation }) {
//   const { favorites, user } = useUser();

//   const renderFavItem = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.title} numberOfLines={1}>{item.title || item.english || item.name}</Text>
//         <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle || item.author || "Saved Item"}</Text>
//       </View>
//       {/* Reusing the heart button to allow removing it right from here */}
//       <View style={styles.heartPos}>
//         <HeartButton item={item} size={20} color="#ccc" />
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={styles.backText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Personal Zen Space</Text>
//           <Image 
//             source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2913/2913584.png' }} 
//             style={{ width: 30, height: 30, tintColor: '#16423C' }} 
//           />
//         </View>

//         <View style={styles.welcomeSection}>
//           <Text style={styles.welcomeText}>Hello, {user?.displayName || 'Friend'}.</Text>
//           <Text style={styles.subText}>Here is your collection of peace.</Text>
//         </View>

//         {favorites.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Text style={{ fontSize: 40, marginBottom: 10 }}>🕸️</Text>
//             <Text style={styles.emptyText}>Your sanctuary is empty.</Text>
//             <Text style={styles.emptySub}>Go explore and save what heals you.</Text>
//           </View>
//         ) : (
//           <FlatList
//             data={favorites}
//             renderItem={renderFavItem}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={{ padding: 20 }}
//             showsVerticalScrollIndicator={false}
//           />
//         )}

//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F0F4F8' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#fff', elevation: 2 },
//   backText: { fontSize: 16, color: '#16423C', fontWeight: 'bold' },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C' },
  
//   welcomeSection: { padding: 20, backgroundColor: '#E0F2F1', marginBottom: 10 },
//   welcomeText: { fontSize: 22, fontWeight: 'bold', color: '#004D40' },
//   subText: { fontSize: 14, color: '#00796B' },

//   card: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 15, borderRadius: 15, padding: 10, alignItems: 'center', elevation: 2 },
//   image: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
//   textContainer: { flex: 1 },
//   title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   subtitle: { fontSize: 12, color: '#888', marginTop: 4 },
//   heartPos: { padding: 10 },

//   emptyState: { alignItems: 'center', marginTop: 100, opacity: 0.6 },
//   emptyText: { fontSize: 18, fontWeight: 'bold', color: '#555' },
//   emptySub: { fontSize: 14, color: '#888', marginTop: 5 },
// });



// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, SafeAreaView, Modal, Linking, ImageBackground, ActivityIndicator } from 'react-native';
// import { useUser } from '../context/UserContext';
// import { Audio } from 'expo-av';
// import YoutubePlayer from "react-native-youtube-iframe";
// import { Ionicons } from '@expo/vector-icons';
// import HeartButton from '../components/HeartButton';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 50) / 2; // 2 Column Grid

// export default function ZenSpace({ navigation }) {
//   const { favorites, user } = useUser();

//   // --- STATES FOR FUNCTIONALITY ---
//   const [sound, setSound] = useState();
//   const [playingId, setPlayingId] = useState(null);
  
//   // Modals
//   const [videoModalVisible, setVideoModalVisible] = useState(false);
//   const [currentVideoId, setCurrentVideoId] = useState(null);
  
//   const [bookModalVisible, setBookModalVisible] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const [wisdomModalVisible, setWisdomModalVisible] = useState(false);
//   const [selectedWisdom, setSelectedWisdom] = useState(null);

//   // --- 1. AUDIO LOGIC (Nature Sounds, Gita, Music) ---
//   useEffect(() => {
//     return sound ? () => { sound.unloadAsync(); } : undefined;
//   }, [sound]);

//   const playAudio = async (item) => {
//     const audioSource = item.file || item.audioFile; // Handle different naming conventions
    
//     if (!audioSource) return alert("Audio source not found.");

//     try {
//       if (playingId === item.id) {
//         // Stop if playing
//         if (sound) await sound.unloadAsync();
//         setPlayingId(null);
//         setSound(null);
//         return;
//       }

//       // Stop previous
//       if (sound) await sound.unloadAsync();

//       await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
//       const source = typeof audioSource === 'string' ? { uri: audioSource } : audioSource;
//       const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      
//       setSound(newSound);
//       setPlayingId(item.id);
//     } catch (error) {
//       console.log(error);
//       alert("Could not play audio");
//     }
//   };

//   // --- 2. SMART HANDLER (The Brain) ---
//   const handleItemPress = (item) => {
//     // A. YOGA / VIDEO
//     if (item.videoId) {
//       setCurrentVideoId(item.videoId);
//       setVideoModalVisible(true);
//       return;
//     }
    
//     // B. AUDIO (Nature, Gita, Tracks)
//     if (item.file || item.audioFile) {
//       playAudio(item);
//       return;
//     }

//     // C. BOOKS
//     if (item.summary || item.teachings) {
//       setSelectedBook(item);
//       setBookModalVisible(true);
//       return;
//     }

//     // D. WISDOM / QUOTES
//     if (item.excerpt || (item.quote && item.author)) {
//       setSelectedWisdom(item);
//       setWisdomModalVisible(true);
//       return;
//     }

//     // E. ARTICLES
//     if (item.url) {
//       Linking.openURL(item.url);
//       return;
//     }

//     // F. FALLBACK
//     alert("This item is saved, but full view is currently unavailable.");
//   };

//   // --- 3. RENDER CARD (Beautiful Grid) ---
//   const renderZenCard = ({ item }) => {
//     const isPlaying = playingId === item.id;
//     // Determine Icon based on type
//     let typeIcon = "leaf-outline";
//     if (item.videoId) typeIcon = "videocam-outline";
//     if (item.file || item.audioFile) typeIcon = isPlaying ? "pause-circle" : "play-circle";
//     if (item.summary) typeIcon = "book-outline";
//     if (item.url) typeIcon = "globe-outline";

//     return (
//       <TouchableOpacity 
//         style={[styles.card, isPlaying && styles.activeCard]} 
//         activeOpacity={0.9}
//         onPress={() => handleItemPress(item)}
//       >
//         {/* Image */}
//         <Image source={{ uri: item.image || item.cover }} style={styles.cardImage} />
        
//         {/* Heart Overlay */}
//         <View style={styles.heartContainer}>
//            <HeartButton item={item} size={20} />
//         </View>

//         {/* Type Icon Overlay */}
//         <View style={styles.typeIconContainer}>
//             <Ionicons name={typeIcon} size={16} color="#fff" />
//         </View>

//         {/* Content */}
//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle} numberOfLines={2}>
//             {item.title || item.english || item.name || "Daily Wisdom"}
//           </Text>
//           <Text style={styles.cardSubtitle} numberOfLines={1}>
//             {item.subtitle || item.author || item.desc || item.category || "Saved Item"}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//              <Ionicons name="arrow-back" size={24} color="#16423C" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Personal Zen Space</Text>
//           <View style={{width: 40}} />
//         </View>

//         {/* WELCOME BANNER */}
//         <View style={styles.banner}>
//           <View>
//              <Text style={styles.bannerTitle}>Hello, {user?.displayName?.split(' ')[0] || 'Friend'}</Text>
//              <Text style={styles.bannerSub}>Your sanctuary is waiting.</Text>
//           </View>
//           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2913/2913584.png' }} style={styles.bannerIcon} />
//         </View>

//         {favorites.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Ionicons name="flower-outline" size={60} color="#C4DAD2" />
//             <Text style={styles.emptyText}>It's quiet here.</Text>
//             <Text style={styles.emptySub}>Explore therapies and tap the ❤️ to save what heals you.</Text>
//             <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('Dashboard')}>
//                <Text style={styles.exploreText}>Explore Therapies</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <FlatList
//             data={favorites}
//             renderItem={renderZenCard}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
//             contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
//             showsVerticalScrollIndicator={false}
//           />
//         )}

//       </SafeAreaView>

//       {/* --- MODAL 1: YOUTUBE VIDEO --- */}
//       <Modal animationType="fade" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
//         <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
//           <TouchableOpacity style={styles.closeVideoBtn} onPress={() => setVideoModalVisible(false)}>
//               <Text style={{color: 'white', fontWeight: 'bold'}}>✕ Close</Text>
//           </TouchableOpacity>
//           <YoutubePlayer
//             height={300}
//             play={true}
//             videoId={currentVideoId}
//             onChangeState={(event) => { if(event === 'ended') setVideoModalVisible(false); }}
//           />
//         </View>
//       </Modal>

//       {/* --- MODAL 2: BOOK DETAILS --- */}
//       <Modal animationType="slide" transparent={true} visible={bookModalVisible} onRequestClose={() => setBookModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.closeCircle} onPress={() => setBookModalVisible(false)}>
//                <Text>✕</Text>
//             </TouchableOpacity>
//             {selectedBook && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                  <Image source={{ uri: selectedBook.cover }} style={styles.bookModalCover} />
//                  <Text style={styles.modalTitle}>{selectedBook.title}</Text>
//                  <Text style={styles.modalText}>{selectedBook.summary}</Text>
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* --- MODAL 3: WISDOM / QUOTE --- */}
//       <Modal animationType="slide" transparent={true} visible={wisdomModalVisible} onRequestClose={() => setWisdomModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//            <View style={[styles.modalContent, {backgroundColor: '#FFF8E1'}]}>
//              <TouchableOpacity style={styles.closeCircle} onPress={() => setWisdomModalVisible(false)}>
//                <Text>✕</Text>
//             </TouchableOpacity>
//              {selectedWisdom && (
//                <ScrollView showsVerticalScrollIndicator={false}>
//                   <Text style={styles.wisdomQuote}>"{selectedWisdom.quote}"</Text>
//                   <View style={styles.divider} />
//                   <Text style={styles.modalText}>{selectedWisdom.excerpt}</Text>
//                </ScrollView>
//              )}
//            </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F7F9F9' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#16423C' },
//   backButton: { padding: 5 },

//   // BANNER
//   banner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E9EFEC', marginHorizontal: 20, marginBottom: 20, padding: 20, borderRadius: 20 },
//   bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C' },
//   bannerSub: { fontSize: 14, color: '#6A9C89' },
//   bannerIcon: { width: 50, height: 50, opacity: 0.8 },

//   // GRID CARDS
//   card: { width: CARD_WIDTH, backgroundColor: '#fff', borderRadius: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, overflow: 'hidden' },
//   activeCard: { borderColor: '#16423C', borderWidth: 2 }, // Highlight playing card
//   cardImage: { width: '100%', height: 120 },
//   cardContent: { padding: 12 },
//   cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
//   cardSubtitle: { fontSize: 11, color: '#888' },
  
//   heartContainer: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 12, padding: 4 },
//   typeIconContainer: { position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(22, 66, 60, 0.8)', borderRadius: 12, padding: 6 },

//   // EMPTY STATE
//   emptyState: { alignItems: 'center', justifyContent: 'center', marginTop: 100, padding: 40 },
//   emptyText: { fontSize: 20, fontWeight: 'bold', color: '#6A9C89', marginTop: 20 },
//   emptySub: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 10, lineHeight: 22 },
//   exploreBtn: { marginTop: 30, backgroundColor: '#16423C', paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25 },
//   exploreText: { color: '#fff', fontWeight: 'bold' },

//   // MODALS
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
//   modalContent: { backgroundColor: '#fff', height: '70%', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25 },
//   closeVideoBtn: { position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5 },
//   closeCircle: { alignSelf: 'flex-end', padding: 10, backgroundColor: '#eee', borderRadius: 20, marginBottom: 10 },
  
//   bookModalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
//   modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C', textAlign: 'center', marginBottom: 10 },
//   modalText: { fontSize: 16, color: '#444', lineHeight: 26 },
  
//   wisdomQuote: { fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', color: '#5D4037', textAlign: 'center', marginTop: 10 },
//   divider: { height: 2, backgroundColor: '#ddd', width: '50%', alignSelf: 'center', marginVertical: 20 },
// });




import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Modal, Linking } from 'react-native';
import { useUser } from '../context/UserContext';
import { Audio } from 'expo-av';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import HeartButton from '../components/HeartButton';
import { SafeAreaView } from 'react-native-safe-area-context';
// 1. IMPORT GITA DATA
import { GITA_AUDIO } from './SpiritualTherapy';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 50) / 2;

export default function ZenSpace({ navigation }) {
  const { favorites, user } = useUser();
  
  // States
  const [sound, setSound] = useState();
  const [playingId, setPlayingId] = useState(null);
  
  // Modals
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  
  const [bookModalVisible, setBookModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [wisdomModalVisible, setWisdomModalVisible] = useState(false);
  const [selectedWisdom, setSelectedWisdom] = useState(null);

  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  // --- HELPER: GET FRESH ITEM ---
  const getFreshItem = (savedItem) => {
    // Only Gita verses need this fix because they use local audio files
    const freshGita = GITA_AUDIO.find(g => g.id === savedItem.id);
    if (freshGita) return freshGita;

    // For everything else (YouTube, Books), use the saved item directly
    return savedItem;
  };

  const playAudio = async (item) => {
    // 1. Look up the fresh item to get the valid audio ID
    const freshItem = getFreshItem(item);
    
    // 2. Get the audio source
    const audioSource = freshItem.file || freshItem.audioFile || item.file || item.audioFile;

    if (!audioSource) {
      alert("Audio source unavailable. Please unsave and resave this item.");
      return;
    }

    try {
      if (playingId === item.id) {
        if (sound) await sound.unloadAsync();
        setPlayingId(null);
        setSound(null);
        return;
      }

      if (sound) await sound.unloadAsync();

      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      
      const source = typeof audioSource === 'string' ? { uri: audioSource } : audioSource;
      const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      
      setSound(newSound);
      setPlayingId(item.id);
    } catch (error) {
      console.log("Playback Error:", error);
      alert("Could not play audio.");
    }
  };

  const handleItemPress = (item) => {
    // A. YOGA / VIDEO
    if (item.videoId) {
      setCurrentVideoId(item.videoId);
      setVideoModalVisible(true);
      return;
    }
    
    // B. AUDIO (Gita, Book Audio, Nature)
    if (item.file || item.audioFile) {
      playAudio(item);
      return;
    }

    // C. BOOKS (Text Summary)
    if (item.summary || item.teachings) {
      setSelectedBook(item);
      setBookModalVisible(true);
      return;
    }

    // D. WISDOM / QUOTES
    if (item.excerpt || (item.quote && item.author)) {
      setSelectedWisdom(item);
      setWisdomModalVisible(true);
      return;
    }

    // E. ARTICLES
    if (item.url) {
      Linking.openURL(item.url);
      return;
    }

    alert("Full view unavailable for this item.");
  };

  const renderZenCard = ({ item }) => {
    const isPlaying = playingId === item.id;
    let typeIcon = "leaf-outline";
    if (item.videoId) typeIcon = "videocam-outline";
    if (item.file || item.audioFile) typeIcon = isPlaying ? "pause-circle" : "play-circle";
    if (item.summary) typeIcon = "book-outline";
    if (item.url) typeIcon = "globe-outline";

    const rawImage = item.image || item.cover;
    const imageSource = typeof rawImage === 'string' ? { uri: rawImage } : rawImage;

    return (
      <TouchableOpacity
        style={[styles.card, isPlaying && styles.activeCard]}
        activeOpacity={0.9}
        onPress={() => handleItemPress(item)}
      >
        {/* <Image source={ item.image || item.cover } style={styles.cardImage} /> */}
        {/* Helper to pick image source */}
        {/* {(() => {
          const imgSource = item.image || item.cover;
          // If it's a URL string, wrap in {uri: ...}. If it's a number (require), use as is.
          const finalSource =
            typeof imgSource === "string" ? { uri: imgSource } : imgSource;

          return <Image source={finalSource} style={styles.cardImage} />;
        })()} */}

        <Image source={imageSource} style={styles.cardImage} />

        <View style={styles.heartContainer}>
          <HeartButton item={item} size={20} />
        </View>

        <View style={styles.typeIconContainer}>
          <Ionicons name={typeIcon} size={16} color="#fff" />
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title || item.english || item.name || "Daily Wisdom"}
          </Text>
          <Text style={styles.cardSubtitle} numberOfLines={1}>
            {item.subtitle ||
              item.author ||
              item.desc ||
              item.category ||
              "Saved Item"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <Ionicons name="arrow-back" size={24} color="#16423C" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Personal Zen Space</Text>
          <View style={{width: 40}} />
        </View>

        <View style={styles.banner}>
          <View>
             <Text style={styles.bannerTitle}>Hello, {user?.displayName?.split(' ')[0] || 'Friend'}</Text>
             <Text style={styles.bannerSub}>Your sanctuary is waiting.</Text>
          </View>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2913/2913584.png' }} style={styles.bannerIcon} />
        </View>

        {favorites.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="flower-outline" size={60} color="#C4DAD2" />
            <Text style={styles.emptyText}>It's quiet here.</Text>
            <Text style={styles.emptySub}>Tap the ❤️ on any item to save it here.</Text>
            <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('Dashboard')}>
               <Text style={styles.exploreText}>Explore Therapies</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={favorites}
            renderItem={renderZenCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
            contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
            showsVerticalScrollIndicator={false}
          />
        )}

      </SafeAreaView>

      {/* MODAL 1: YOUTUBE */}
      <Modal animationType="fade" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.closeVideoBtn} onPress={() => setVideoModalVisible(false)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>✕ Close</Text>
          </TouchableOpacity>
          <YoutubePlayer
            height={300}
            play={true}
            videoId={currentVideoId}
            onChangeState={(event) => { if(event === 'ended') setVideoModalVisible(false); }}
          />
        </View>
      </Modal>

      {/* MODAL 2: BOOKS */}
      <Modal animationType="slide" transparent={true} visible={bookModalVisible} onRequestClose={() => setBookModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeCircle} onPress={() => setBookModalVisible(false)}>
               <Text>✕</Text>
            </TouchableOpacity>
            {selectedBook && (
              <ScrollView showsVerticalScrollIndicator={false}>
                 <Image source={ selectedBook.cover } style={styles.bookModalCover} />
                 <Text style={styles.modalTitle}>{selectedBook.title}</Text>
                 <Text style={styles.modalText}>{selectedBook.summary}</Text>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      {/* MODAL 3: WISDOM */}
      <Modal animationType="slide" transparent={true} visible={wisdomModalVisible} onRequestClose={() => setWisdomModalVisible(false)}>
        <View style={styles.modalOverlay}>
           <View style={[styles.modalContent, {backgroundColor: '#FFF8E1'}]}>
             <TouchableOpacity style={styles.closeCircle} onPress={() => setWisdomModalVisible(false)}>
               <Text>✕</Text>
            </TouchableOpacity>
             {selectedWisdom && (
               <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.wisdomQuote}>"{selectedWisdom.quote}"</Text>
                  <View style={styles.divider} />
                  <Text style={styles.modalText}>{selectedWisdom.excerpt}</Text>
               </ScrollView>
             )}
           </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5e9958' },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 25, fontWeight: 'bold', color: '#ffffff' },
  backButton: { padding: 5 },
  banner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E9EFEC', marginHorizontal: 20, marginBottom: 20, padding: 20, borderRadius: 20 },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C' },
  bannerSub: { fontSize: 14, color: '#3c7f65' },
  bannerIcon: { width: 50, height: 50, opacity: 0.8 },
  card: { width: CARD_WIDTH, backgroundColor: '#fff', borderRadius: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, overflow: 'hidden' },
  activeCard: { borderColor: '#16423C', borderWidth: 2 }, 
  cardImage: { width: '100%', height: 120 },
  cardContent: { padding: 12 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  cardSubtitle: { fontSize: 11, color: '#888' },
  heartContainer: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 12, padding: 4 },
  typeIconContainer: { position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(22, 66, 60, 0.8)', borderRadius: 12, padding: 6 },
  emptyState: { alignItems: 'center', justifyContent: 'center', marginTop: 100, padding: 40 },
  emptyText: { fontSize: 20, fontWeight: 'bold', color: '#6A9C89', marginTop: 20 },
  emptySub: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  exploreBtn: { marginTop: 30, backgroundColor: '#16423C', paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25 },
  exploreText: { color: '#fff', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', height: '70%', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25 },
  closeVideoBtn: { position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5 },
  closeCircle: { alignSelf: 'flex-end', padding: 10, backgroundColor: '#eee', borderRadius: 20, marginBottom: 10 },
  bookModalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C', textAlign: 'center', marginBottom: 10 },
  modalText: { fontSize: 16, color: '#444', lineHeight: 26 },
  wisdomQuote: { fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', color: '#5D4037', textAlign: 'center', marginTop: 10 },
  divider: { height: 2, backgroundColor: '#ddd', width: '50%', alignSelf: 'center', marginVertical: 20 },
});


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Modal, Linking } from 'react-native';
// import { useUser } from '../context/UserContext';
// import { Audio } from 'expo-av';
// import YoutubePlayer from "react-native-youtube-iframe";
// import { Ionicons } from '@expo/vector-icons';
// import HeartButton from '../components/HeartButton';
// import { SafeAreaView } from 'react-native-safe-area-context';

// // 1. IMPORT DATA SOURCES TO REFRESH SAVED ITEMS
// import { GITA_AUDIO } from './SpiritualTherapy';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = (width - 50) / 2;

// // Fallback image if nothing is found
// const DEFAULT_IMAGE = 'https://cdn-icons-png.flaticon.com/512/3663/3663334.png'; 

// export default function ZenSpace({ navigation }) {
//   const { favorites, user } = useUser();
  
//   // States
//   const [sound, setSound] = useState();
//   const [playingId, setPlayingId] = useState(null);
  
//   // Modals
//   const [videoModalVisible, setVideoModalVisible] = useState(false);
//   const [currentVideoId, setCurrentVideoId] = useState(null);
  
//   const [bookModalVisible, setBookModalVisible] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const [wisdomModalVisible, setWisdomModalVisible] = useState(false);
//   const [selectedWisdom, setSelectedWisdom] = useState(null);

//   useEffect(() => {
//     return sound ? () => { sound.unloadAsync(); } : undefined;
//   }, [sound]);

//   // --- HELPER: REFRESH DATA ---
//   // This ensures we always have the correct local image ID (require) even if the app reloads
//   const getFreshItem = (savedItem) => {
//     // 1. Check Gita
//     const freshGita = GITA_AUDIO.find(g => g.id === savedItem.id);
//     if (freshGita) return freshGita;

//     // 2. If you exported BOOKS or AUDIO_LIBRARY, you could check them here too.
//     // For now, return savedItem if no match found.
//     return savedItem;
//   };

//   const playAudio = async (item) => {
//     const freshItem = getFreshItem(item);
//     const audioSource = freshItem.file || freshItem.audioFile || item.file || item.audioFile;

//     if (!audioSource) {
//       alert("Audio source unavailable. Please unsave and resave this item.");
//       return;
//     }

//     try {
//       if (playingId === item.id) {
//         if (sound) await sound.unloadAsync();
//         setPlayingId(null);
//         setSound(null);
//         return;
//       }

//       if (sound) await sound.unloadAsync();

//       await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      
//       const source = typeof audioSource === 'string' ? { uri: audioSource } : audioSource;
//       const { sound: newSound } = await Audio.Sound.createAsync(source, { shouldPlay: true });
      
//       setSound(newSound);
//       setPlayingId(item.id);
//     } catch (error) {
//       console.log("Playback Error:", error);
//       alert("Could not play audio.");
//     }
//   };

//   const handleItemPress = (item) => {
//     const freshItem = getFreshItem(item); // Always use fresh data

//     // A. YOGA / VIDEO
//     if (freshItem.videoId) {
//       setCurrentVideoId(freshItem.videoId);
//       setVideoModalVisible(true);
//       return;
//     }
    
//     // B. AUDIO
//     if (freshItem.file || freshItem.audioFile) {
//       playAudio(freshItem);
//       return;
//     }

//     // C. BOOKS
//     if (freshItem.summary || freshItem.teachings) {
//       setSelectedBook(freshItem);
//       setBookModalVisible(true);
//       return;
//     }

//     // D. WISDOM
//     if (freshItem.excerpt || (freshItem.quote && freshItem.author)) {
//       setSelectedWisdom(freshItem);
//       setWisdomModalVisible(true);
//       return;
//     }

//     // E. ARTICLES
//     if (freshItem.url) {
//       Linking.openURL(freshItem.url);
//       return;
//     }

//     alert("Full view unavailable for this item.");
//   };

//   const renderZenCard = ({ item }) => {
//     const freshItem = getFreshItem(item); // <--- CRITICAL FIX: Use fresh item for rendering too
//     const isPlaying = playingId === freshItem.id;
    
//     let typeIcon = "leaf-outline";
//     if (freshItem.videoId) typeIcon = "videocam-outline";
//     if (freshItem.file || freshItem.audioFile) typeIcon = isPlaying ? "pause-circle" : "play-circle";
//     if (freshItem.summary) typeIcon = "book-outline";
//     if (freshItem.url) typeIcon = "globe-outline";

//     // --- SMART IMAGE SOURCE LOGIC ---
//     const rawImage = freshItem.image || freshItem.cover;
//     let imageSource;

//     if (rawImage) {
//         // If it's a web URL (string), wrap in { uri: ... }
//         // If it's a local require (number), use it directly
//         imageSource = typeof rawImage === 'string' ? { uri: rawImage } : rawImage;
//     } else {
//         // Fallback if no image exists
//         imageSource = { uri: DEFAULT_IMAGE };
//     }

//     return (
//       <TouchableOpacity 
//         style={[styles.card, isPlaying && styles.activeCard]} 
//         activeOpacity={0.9}
//         onPress={() => handleItemPress(freshItem)}
//       >
//         <Image source={imageSource} style={styles.cardImage} resizeMode="cover" />
        
//         <View style={styles.heartContainer}>
//            <HeartButton item={freshItem} size={20} />
//         </View>

//         <View style={styles.typeIconContainer}>
//             <Ionicons name={typeIcon} size={16} color="#fff" />
//         </View>

//         <View style={styles.cardContent}>
//           <Text style={styles.cardTitle} numberOfLines={2}>
//             {freshItem.title || freshItem.english || freshItem.name || "Daily Wisdom"}
//           </Text>
//           <Text style={styles.cardSubtitle} numberOfLines={1}>
//             {freshItem.subtitle || freshItem.author || freshItem.desc || freshItem.category || "Saved Item"}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//              <Ionicons name="arrow-back" size={24} color="#16423C" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Personal Zen Space</Text>
//           <View style={{width: 40}} />
//         </View>

//         <View style={styles.banner}>
//           <View>
//               <Text style={styles.bannerTitle}>Hello, {user?.displayName?.split(' ')[0] || 'Friend'}</Text>
//               <Text style={styles.bannerSub}>Your sanctuary is waiting.</Text>
//           </View>
//           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2913/2913584.png' }} style={styles.bannerIcon} />
//         </View>

//         {favorites.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Ionicons name="flower-outline" size={60} color="#C4DAD2" />
//             <Text style={styles.emptyText}>It's quiet here.</Text>
//             <Text style={styles.emptySub}>Tap the ❤️ on any item to save it here.</Text>
//             <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('Dashboard')}>
//                <Text style={styles.exploreText}>Explore Therapies</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <FlatList
//             data={favorites}
//             renderItem={renderZenCard}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
//             contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
//             showsVerticalScrollIndicator={false}
//           />
//         )}

//       </SafeAreaView>

//       {/* MODAL 1: YOUTUBE */}
//       <Modal animationType="fade" transparent={false} visible={videoModalVisible} onRequestClose={() => setVideoModalVisible(false)}>
//         <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
//           <TouchableOpacity style={styles.closeVideoBtn} onPress={() => setVideoModalVisible(false)}>
//               <Text style={{color: 'white', fontWeight: 'bold'}}>✕ Close</Text>
//           </TouchableOpacity>
//           <YoutubePlayer
//             height={300}
//             play={true}
//             videoId={currentVideoId}
//             onChangeState={(event) => { if(event === 'ended') setVideoModalVisible(false); }}
//           />
//         </View>
//       </Modal>

//       {/* MODAL 2: BOOKS */}
//       <Modal animationType="slide" transparent={true} visible={bookModalVisible} onRequestClose={() => setBookModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.closeCircle} onPress={() => setBookModalVisible(false)}>
//                <Text>✕</Text>
//             </TouchableOpacity>
//             {selectedBook && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                  {/* FIXED BOOK COVER LOGIC */}
//                  <Image 
//                     source={typeof selectedBook.cover === 'string' ? {uri: selectedBook.cover} : selectedBook.cover} 
//                     style={styles.bookModalCover} 
//                  />
//                  <Text style={styles.modalTitle}>{selectedBook.title}</Text>
//                  <Text style={styles.modalText}>{selectedBook.summary}</Text>
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* MODAL 3: WISDOM */}
//       <Modal animationType="slide" transparent={true} visible={wisdomModalVisible} onRequestClose={() => setWisdomModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//            <View style={[styles.modalContent, {backgroundColor: '#FFF8E1'}]}>
//              <TouchableOpacity style={styles.closeCircle} onPress={() => setWisdomModalVisible(false)}>
//                <Text>✕</Text>
//             </TouchableOpacity>
//              {selectedWisdom && (
//                <ScrollView showsVerticalScrollIndicator={false}>
//                   <Text style={styles.wisdomQuote}>"{selectedWisdom.quote}"</Text>
//                   <View style={styles.divider} />
//                   <Text style={styles.modalText}>{selectedWisdom.excerpt}</Text>
//                </ScrollView>
//              )}
//            </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#5e9958' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   headerTitle: { fontSize: 25, fontWeight: 'bold', color: '#ffffff' },
//   backButton: { padding: 5 },
//   banner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E9EFEC', marginHorizontal: 20, marginBottom: 20, padding: 20, borderRadius: 20 },
//   bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C' },
//   bannerSub: { fontSize: 14, color: '#3c7f65' },
//   bannerIcon: { width: 50, height: 50, opacity: 0.8 },
//   card: { width: CARD_WIDTH, backgroundColor: '#fff', borderRadius: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, overflow: 'hidden' },
//   activeCard: { borderColor: '#16423C', borderWidth: 2 }, 
//   cardImage: { width: '100%', height: 120, backgroundColor: '#eee' }, // Added bg color for fallback
//   cardContent: { padding: 12 },
//   cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
//   cardSubtitle: { fontSize: 11, color: '#888' },
//   heartContainer: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 12, padding: 4 },
//   typeIconContainer: { position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(22, 66, 60, 0.8)', borderRadius: 12, padding: 6 },
//   emptyState: { alignItems: 'center', justifyContent: 'center', marginTop: 100, padding: 40 },
//   emptyText: { fontSize: 20, fontWeight: 'bold', color: '#6A9C89', marginTop: 20 },
//   emptySub: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 10, lineHeight: 22 },
//   exploreBtn: { marginTop: 30, backgroundColor: '#16423C', paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25 },
//   exploreText: { color: '#fff', fontWeight: 'bold' },
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
//   modalContent: { backgroundColor: '#fff', height: '70%', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25 },
//   closeVideoBtn: { position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5 },
//   closeCircle: { alignSelf: 'flex-end', padding: 10, backgroundColor: '#eee', borderRadius: 20, marginBottom: 10 },
//   bookModalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
//   modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#16423C', textAlign: 'center', marginBottom: 10 },
//   modalText: { fontSize: 16, color: '#444', lineHeight: 26 },
//   wisdomQuote: { fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', color: '#5D4037', textAlign: 'center', marginTop: 10 },
//   divider: { height: 2, backgroundColor: '#ddd', width: '50%', alignSelf: 'center', marginVertical: 20 },
// });