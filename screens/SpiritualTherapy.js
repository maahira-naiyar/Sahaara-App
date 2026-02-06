

// import React, { useRef, useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Animated, Pressable, ImageBackground, Modal } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Audio } from 'expo-av';

// const { width } = Dimensions.get('window');
// const GAP = 15;
// // Calculate width for 2 columns
// const CARD_WIDTH = (width - 40 - GAP) / 2; 

// // --- DATA: QUOTES CAROUSEL ---
// const QUOTES = [
//   { id: '1', source: 'Bhagavad Gita', text: '"You have the right to work, but for the work\'s sake only. You have no right to the fruits of work."', image: 'https://images.unsplash.com/photo-1621827979802-5a9a557b7272?w=600&q=80' },
//   { id: '2', source: 'The Bible', text: '"Peace I leave with you; my peace I give you. Do not let your hearts be troubled."', image: 'https://images.unsplash.com/photo-1507692049790-de58293a469d?w=600&q=80' },
//   { id: '3', source: 'The Quran', text: '"Verily, with hardship comes ease. So when you have finished your duties, then stand up for worship."', image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=600&q=80' },
//   { id: '4', source: 'The Buddha', text: '"The mind is everything. What you think you become. Peace comes from within."', image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&q=80' },
// ];

// // --- DATA: SOUL SCIENCE ---
// const SOUL_SCIENCE_DATA = [
//   { id: '1', title: 'Neurotheology', subtitle: 'Prayer & The Brain', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80', excerpt: '12 minutes of daily prayer strengthens the Frontal Lobe, rewiring your brain to be calmer.' },
//   { id: '2', title: 'The Witness Self', subtitle: 'Meta-Cognition', image: 'https://images.unsplash.com/photo-1499209974431-276138d71629?w=600&q=80', excerpt: 'Spirituality teaches watching your thoughts without attaching to them. This gap allows you to choose peace over anger.' },
//   { id: '3', title: 'Vibrational Healing', subtitle: 'Chanting & Vagus Nerve', image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&q=80', excerpt: 'Chanting "OM" stimulates the Vagus Nerve, sending a direct signal to lower heart rate instantly.' },
// ];

// // --- DATA: GITA AUDIO ---
// const GITA_AUDIO = [
//   { 
//     id: '1', 
//     title: 'Balancing The Mind', 
//     subtitle: 'Chapter 2 • Verse 54', 
//     image: 'https://images.unsplash.com/photo-1583324623707-164775d72d62?w=600&q=80',
//     audioFile: null // Add require('../assets/sounds/gita_1.mp3') here
//   },
//   { 
//     id: '2', 
//     title: 'The Path of Devotion', 
//     subtitle: 'Chapter 12 • Verse 6', 
//     image: 'https://images.unsplash.com/photo-1601053702127-142c65076326?w=600&q=80',
//     audioFile: null // Add require('../assets/sounds/gita_2.mp3') here
//   },
// ];

// // --- DATA: SACRED LIBRARY (TEXT MODALS) ---
// const SACRED_TEXTS = [
//   { 
//     id: '1', 
//     title: 'The Buddha', 
//     quote: '"The mind is everything. What you think you become."', 
//     image: 'https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=600&q=80',
//     content: "When we feel pain, we often add a second layer of suffering by resisting it. The Buddha taught that while pain is inevitable, *suffering* is optional. The core of his teaching is that our stress comes from 'Tanha'—the craving for reality to be different than it is.\n\nThe moment you accept the present moment exactly as it is—without wishing it were otherwise—the tension breaks. You are not your thoughts; you are the sky witnessing the clouds passing by. Release the grip of 'I need this to change,' and you will find peace."
//   },
//   { 
//     id: '2', 
//     title: 'The Bible', 
//     quote: '"Do not worry about tomorrow, for tomorrow will worry about itself."', 
//     image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80',
//     content: "Anxiety often stems from the exhausting feeling that you have to carry the weight of the world on your own shoulders. The Sermon on the Mount offers a radical alternative: spiritual surrender.\n\nConsider the 'Lilies of the Field'—they do not toil or stress, yet they are clothed in beauty. This teaching asks you to release the need for total control. You do not have to figure it all out today. Peace comes when you realize you are loved, held, and looked after."
//   },
//   { 
//     id: '3', 
//     title: 'Tao Te Ching', 
//     quote: '"Water is the softest thing, yet it can penetrate mountains."', 
//     image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=600&q=80',
//     content: "In a world that screams 'push harder,' the Tao whispers 'let go.' The core teaching is *Wu Wei*—effortless action. Think of water: it is soft and yields to obstacles, yet it cuts through rock by flow, not force.\n\nWhen you stop churning the water with your anxiety, clarity returns on its own. By surrendering to the natural rhythm of life rather than imposing your will upon it, you find that the right action arises spontaneously."
//   },
//   { 
//     id: '4', 
//     title: 'The Meditations', 
//     quote: '"You have power over your mind, not outside events."', 
//     image: 'https://images.unsplash.com/photo-1505535162959-9bbcb4fe3bbc?w=600&q=80',
//     content: "Anxiety is often the panic of trying to control things that are not up to us. Marcus Aurelius teaches the ultimate grounding tool: The Dichotomy of Control.\n\nWhen you are overwhelmed, ask yourself: 'Is this within my control?' Your thoughts and reactions are; the past and others' opinions are not. If it is outside your control, let it go. Retreat into your 'Inner Citadel'—a fortress of peace inside your own mind."
//   },
// ];

// export default function SpiritualTherapy({ navigation }) {
//   const [dailyCard, setDailyCard] = useState(SOUL_SCIENCE_DATA[0]);
  
//   // MODAL STATES
//   const [scienceModalVisible, setScienceModalVisible] = useState(false);
//   const [textModalVisible, setTextModalVisible] = useState(false);
//   const [selectedText, setSelectedText] = useState(null);

//   // AUDIO STATE
//   const [sound, setSound] = useState();
//   const [playingId, setPlayingId] = useState(null);

//   useEffect(() => {
//     setDailyCard(SOUL_SCIENCE_DATA[Math.floor(Math.random() * SOUL_SCIENCE_DATA.length)]);
//     return sound ? () => { sound.unloadAsync(); } : undefined;
//   }, [sound]);

//   // --- AUDIO LOGIC ---
//   const playGitaAudio = async (item) => {
//     if (playingId === item.id) {
//         if (sound) await sound.unloadAsync();
//         setPlayingId(null);
//         setSound(null);
//         return;
//     }

//     if (sound) await sound.unloadAsync();
    
//     if (!item.audioFile) {
//         console.log("No audio file found. Add to assets.");
//         return;
//     }

//     try {
//         const { sound: newSound } = await Audio.Sound.createAsync(item.audioFile);
//         setSound(newSound);
//         setPlayingId(item.id);
//         await newSound.playAsync();
//     } catch (error) {
//         console.log(error);
//     }
//   };

//   const openTextModal = (item) => {
//     setSelectedText(item);
//     setTextModalVisible(true);
//   };

//   const renderQuote = ({ item }) => (
//     <View style={styles.quoteContainer}>
//       <ImageBackground source={{ uri: item.image }} style={styles.quoteBg} imageStyle={{ borderRadius: 20 }}>
//         <View style={styles.quoteOverlay}>
//           <Text style={styles.quoteText}>{item.text}</Text>
//           <Text style={styles.quoteSource}>{item.source}</Text>
//         </View>
//       </ImageBackground>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Inner Sanctuary</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. CAROUSEL */}
//           <Text style={styles.sectionTitle}>Wisdom of the Ages</Text>
//           <FlatList data={QUOTES} renderItem={renderQuote} keyExtractor={item => item.id} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />

//           {/* 2. SCIENCE CARD */}
//           <Text style={[styles.sectionTitle, {marginTop: 20}]}>The Science of Soul</Text>
//           <TouchableOpacity style={styles.scienceCard} activeOpacity={0.9} onPress={() => setScienceModalVisible(true)}>
//              <ImageBackground source={{ uri: dailyCard.image }} style={styles.scienceBg} imageStyle={{ borderRadius: 20 }}>
//                 <View style={styles.scienceOverlay}>
//                     <Text style={styles.scienceTag}>DAILY DISCOVERY</Text>
//                     <Text style={styles.scienceTitle}>{dailyCard.title}</Text>
//                     <Text style={styles.scienceTap}>Tap to learn more →</Text>
//                 </View>
//              </ImageBackground>
//           </TouchableOpacity>

//           {/* 3. HEALING WITH GITA (Audio Section) */}
//           <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Healing With Bhagavad Gita</Text>
//           <Text style={styles.sectionSubtitle}>Listen to the divine song.</Text>
          
//           <View style={styles.matrixContainer}>
//             {GITA_AUDIO.map((item) => (
//               <TouchableOpacity 
//                 key={item.id} 
//                 style={styles.audioCard}
//                 activeOpacity={0.9}
//                 onPress={() => playGitaAudio(item)}
//               >
//                 <ImageBackground source={{ uri: item.image }} style={styles.cardBg} imageStyle={{ borderRadius: 15 }}>
//                   <View style={styles.audioOverlay}>
//                     <View style={styles.audioTextTop}>
//                         <Text style={styles.audioTitle}>{item.title}</Text>
//                         <Text style={styles.audioSubtitle}>{item.subtitle}</Text>
//                     </View>
//                     <View style={styles.playCircle}>
//                         <Text style={styles.playIcon}>{playingId === item.id ? '⏸' : '▶'}</Text>
//                     </View>
//                   </View>
//                 </ImageBackground>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* 4. SACRED LIBRARY (Text Section - Asana Style Cards) */}
//           <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Sacred Library</Text>
//           <Text style={styles.sectionSubtitle}>Tap for healing perspectives.</Text>

//           <View style={styles.matrixContainer}>
//             {SACRED_TEXTS.map((item) => (
//                <TouchableOpacity 
//                  key={item.id} 
//                  style={styles.wisdomCard} 
//                  activeOpacity={0.9}
//                  onPress={() => openTextModal(item)}
//                >
//                  <Image source={{ uri: item.image }} style={styles.wisdomImage} />
//                  <View style={styles.wisdomContent}>
//                     <Text style={styles.wisdomTitle}>{item.title}</Text>
//                     <Text style={styles.wisdomQuote} numberOfLines={3}>{item.quote}</Text>
//                  </View>
//                </TouchableOpacity>
//             ))}
//           </View>

//         </ScrollView>
//       </SafeAreaView>

      

//       {/* MODAL 1: SCIENCE */}
//       <Modal animationType="fade" transparent={true} visible={scienceModalVisible} onRequestClose={() => setScienceModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{dailyCard.title}</Text>
//             <Text style={styles.modalSubtitle}>{dailyCard.subtitle}</Text>
//             <View style={styles.divider} />
//             <Text style={styles.modalText}>{dailyCard.excerpt}</Text>
//             <TouchableOpacity style={styles.doneButton} onPress={() => setScienceModalVisible(false)}>
//                <Text style={styles.doneButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* MODAL 2: SACRED TEXT READING */}
//       <Modal animationType="slide" transparent={true} visible={textModalVisible} onRequestClose={() => setTextModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { height: '80%' }]}>
//             <View style={styles.modalHeader}>
//                 <TouchableOpacity onPress={() => setTextModalVisible(false)}><Text style={{fontSize:20}}>✕</Text></TouchableOpacity>
//             </View>
//             {selectedText && (
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <Image source={{ uri: selectedText.image }} style={styles.modalImage} />
//                     <Text style={styles.modalTitle}>{selectedText.title}</Text>
//                     <View style={styles.divider} />
//                     <Text style={styles.scriptureText}>{selectedText.content}</Text>
//                     <View style={{height:40}} />
//                 </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F3E5F5' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#4A148C' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#4A148C' },
//   scrollContent: { paddingBottom: 50 },

//   sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#4A148C', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 14, color: '#7B1FA2', marginLeft: 20, marginBottom: 15 },

//   // QUOTE CAROUSEL
//   quoteContainer: { width: width, paddingHorizontal: 20, marginBottom: 10 },
//   quoteBg: { width: '100%', height: 200, justifyContent: 'center' },
//   quoteOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 30 },
//   quoteText: { fontSize: 18, fontStyle: 'italic', color: '#fff', textAlign: 'center', lineHeight: 28, marginBottom: 10 },
//   quoteSource: { color: '#E1BEE7', fontWeight: 'bold', textTransform: 'uppercase' },

//   // SOUL SCIENCE
//   scienceCard: { marginHorizontal: 20, height: 160, borderRadius: 20, elevation: 5 },
//   scienceBg: { flex: 1, justifyContent: 'center' },
//   scienceOverlay: { flex: 1, backgroundColor: 'rgba(74, 20, 140, 0.7)', padding: 20, justifyContent: 'center', borderRadius: 20 },
//   scienceTag: { color: '#E1BEE7', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
//   scienceTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
//   scienceTap: { color: '#E1BEE7', fontSize: 12, marginTop: 10, fontWeight: 'bold' },

//   // --- MATRIX LAYOUT ---
//   matrixContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },

//   // --- AUDIO CARDS (Gita) ---
//   audioCard: { width: CARD_WIDTH, height: CARD_WIDTH * 1.3, marginBottom: GAP, borderRadius: 15, elevation: 4, backgroundColor: '#fff', overflow: 'hidden' },
//   cardBg: { flex: 1 },
//   audioOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'space-between', padding: 15 },
//   audioTextTop: { marginTop: 10 },
//   audioTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
//   audioSubtitle: { color: '#E1BEE7', fontSize: 12, textAlign: 'center', fontStyle: 'italic' },
//   playCircle: { alignSelf: 'center', width: 45, height: 45, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.9)', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
//   playIcon: { fontSize: 20, color: '#4A148C' },

//   // --- NEW WISDOM CARDS (Asana Style) ---
//   wisdomCard: { width: CARD_WIDTH, marginBottom: GAP, borderRadius: 15, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
//   wisdomImage: { width: '100%', height: 120 },
//   wisdomContent: { padding: 12 },
//   wisdomTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A148C', marginBottom: 5 },
//   wisdomQuote: { fontSize: 11, color: '#666', fontStyle: 'italic', lineHeight: 16 },

//   // MODAL
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: width - 40, backgroundColor: '#fff', borderRadius: 20, padding: 20, maxHeight: '80%', elevation: 10 },
//   modalHeader: { alignItems: 'flex-end', marginBottom: 10 },
//   modalImage: { width: '100%', height: 150, borderRadius: 15, marginBottom: 20 },
//   modalTitle: { fontSize: 24, fontWeight: 'bold', color: '#4A148C', textAlign: 'center', marginBottom: 5 },
//   modalSubtitle: { fontSize: 16, color: '#7B1FA2', textAlign: 'center', fontStyle: 'italic' },
//   divider: { height: 2, backgroundColor: '#E1BEE7', width: '60%', alignSelf: 'center', marginVertical: 20 },
//   modalText: { fontSize: 16, color: '#444', lineHeight: 26, textAlign: 'center' },
//   scriptureText: { fontSize: 17, color: '#444', lineHeight: 30, textAlign: 'left' },
//   doneButton: { backgroundColor: '#4A148C', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 30 },
//   doneButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });


// import React, { useRef, useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Animated, Pressable, ImageBackground, Modal } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Audio } from 'expo-av';
// import HeartButton from '../components/HeartButton';
// const { width } = Dimensions.get('window');
// const GAP = 15;
// const CARD_WIDTH = (width - 40 - GAP) / 2;

// // --- DATA: QUOTES CAROUSEL ---
// const QUOTES = [
//   { id: 'quote_1', source: 'Bhagavad Gita', text: '"You have the right to work, but for the work\'s sake only. You have no right to the fruits of work."', image:require('../assets/gita.jpg'), },
//   { id: 'quote_2', source: 'The Bible', text: '"Peace I leave with you; my peace I give you. Do not let your hearts be troubled."', image: require('../assets/bible.jpg'), },
//   { id: 'quote_3', source: 'The Quran', text: '"Verily, with hardship comes ease. So when you have finished your duties, then stand up for worship."', image: require('../assets/quran.jpg'), },
//   { id: 'quote_4', source: 'The Buddha', text: '"The mind is everything. What you think you become. Peace comes from within."', image: require('../assets/buddha.jpg'), },
// ];

// // --- DATA: SOUL SCIENCE ---
// const SOUL_SCIENCE_DATA = [
//   { id: 'science_1', title: 'Neurotheology', subtitle: 'Prayer & The Brain', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80', excerpt: '12 minutes of daily prayer strengthens the Frontal Lobe, rewiring your brain to be calmer.' },
//   { id: 'science_2', title: 'The Witness Self', subtitle: 'Meta-Cognition', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80', excerpt: 'Spirituality teaches watching your thoughts without attaching to them. This gap allows you to choose peace over anger.' },
//   { id: 'science_3', title: 'Vibrational Healing', subtitle: 'Chanting & Vagus Nerve', image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&q=80', excerpt: 'Chanting "OM" stimulates the Vagus Nerve, sending a direct signal to lower heart rate instantly.' },
// ];

// // --- DATA: GITA AUDIO ---
// export const GITA_AUDIO = [
//   { id: 'gita_1', title: 'Balancing The Mind', subtitle: 'Chapter 2 • Verse 54', image: require('../assets/gita1.jpg'), audioFile: require('../assets/sounds/gita_1.mp3') },
//   { id: 'gita_2', title: 'The Path of Devotion', subtitle: 'Chapter 12 • Verse 6', image: require('../assets/gita2.jpg'), audioFile: require('../assets/sounds/gita_2.mp3') },
// ];

// // --- DATA: SACRED LIBRARY (Text) ---
// const SACRED_TEXTS = [
//   { id: 'lesson_1', title: 'The Buddha', quote: '"The mind is everything. What you think you become."', image: require('../assets/buddha2.jpg'), content:"When we feel pain, we often add a second layer of suffering by resisting it. The Buddha taught that while pain is inevitable in life, suffering is optional. The core of his teaching is that our stress comes from 'Tanha'—the craving for reality to be different than it actually is. We hurt because we cling to things that are meant to change.The Four Noble Truths are not a pessimistic view of life, but a prescription for freedom. They invite you to stop fighting the current. The moment you accept the present moment exactly as it is—without wishing it were otherwise—the tension breaks. You are not your thoughts; you are the sky witnessing the clouds passing by. Release the grip of 'I need this to change,' and you will find the peace of Nirvana right here, right now."},
//   { id: 'lesson_2', title: 'The Bible', quote: '"Do not worry about tomorrow, for tomorrow will worry about itself."', image:  require('../assets/bible2.jpg'), content: "Anxiety often stems from the exhausting feeling that you have to carry the weight of the world on your own shoulders. The Sermon on the Mount offers a radical alternative: spiritual surrender. When the text says, 'Do not worry about tomorrow, for tomorrow will worry about itself,' it isn't dismissing your planning; it is inviting you to trust a higher power with the outcome.Consider the 'Lilies of the Field'—they do not toil or stress, yet they are clothed in beauty. This teaching asks you to release the need for total control. You do not have to figure it all out today. Peace comes when you realize you are loved, held, and looked after. You can put down the heavy load. You are not fighting this battle alone; rest in the assurance that you are safe." },
//   { id: 'lesson_3', title: 'Tao Te Ching', quote: '"Water is the softest thing, yet it can penetrate mountains."', image:  require('../assets/china.jpg'), content:"In a world that screams 'push harder,' the Tao whispers 'let go.' The core teaching is Wu Wei—effortless action. Think of water: it is soft and yields to obstacles, yet it cuts through solid rock not by force, but by flow. When you are stressed, you are likely swimming upstream, fighting against the reality of your situation.The Tao teaches that you do not need to force a solution. Stop struggling. As the text says, 'Do you have the patience to wait until your mud settles and the water is clear?' When you stop churning the water with your anxiety, clarity returns on its own. By surrendering to the natural rhythm of life rather than imposing your will upon it, you find that the right action arises spontaneously, without the exhausting friction of the ego." },
//   { id: 'lesson_4', title: 'The Meditations', quote: '"You have power over your mind, not outside events."', image: require('../assets/med.jpg'),content: "Anxiety is often the panic of trying to control things that are not up to us. Marcus Aurelius, a Roman Emperor who wrote this text while leading an army, teaches us the ultimate grounding tool: The Dichotomy of Control. He writes, 'You have power over your mind, not outside events. Realize this, and you will find strength.'When you are overwhelmed, ask yourself: 'Is this within my control?' Your thoughts and reactions are; the past, the future, and others' opinions are not. If it is outside your control, let it go—it is 'indifferent.' Nothing outside your own mind can truly hurt you unless you judge it to be hurtful. Retreat into your 'Inner Citadel.' No matter how chaotic the world gets, your internal character remains a fortress of peace that no one can breach."},
// ];

// // --- DATA: RUMI WISDOM (5 Rotating Cards) ---
// const RUMI_DATA = [
//   { 
//     id: 'rumi_1', 
//     title: 'The Guest House', 
//     image:  require('../assets/art1.jpg'), // Sunrise
//     content: "Rumi once whispered: 'This being human is a guest house. Every morning a new arrival. A joy, a depression, a meanness, some momentary awareness comes as an unexpected visitor.'\n\nWhy must we welcome them? Because even the dark thoughts are guides sent from beyond. They are not you; they are just passing through. Treat them honorably, and they will leave peace behind when they go."
//   },
//   { 
//     id: 'rumi_2', 
//     title: 'The Breeze at Dawn', 
//     image:  require('../assets/art2.jpg'), // Morning mist
//     content: "Rumi whispered across time: 'The breeze at dawn has secrets to tell you. Don't go back to sleep.'\n\nBut what are these secrets? They are the parts of you that can only be heard when the world stops speaking. There is a presence that lives beneath your name, your roles, and your habits. A being that waits patiently for you to simply listen."
//   },
//   { 
//     id: 'rumi_3', 
//     title: 'The Wound is the Place', 
//     image:  require('../assets/art3.jpg'), // Light through cracks
//     content: "'The wound is the place where the Light enters you.'\n\nWe spend our lives trying to hide our broken parts, feeling ashamed of our scars. Rumi teaches us that our heartbreak is not a failure—it is an opening. It is the very crack in your armor that allows compassion, empathy, and deeper understanding to flood in. Do not hide your wounds; they are your portals to grace."
//   },
//   { 
//     id: 'rumi_4', 
//     title: 'Beyond Right and Wrong', 
//     image:  require('../assets/art4.jpg'),// Open field
//     content: "'Out beyond ideas of wrongdoing and rightdoing, there is a field. I’ll meet you there.'\n\nSo much of our anxiety comes from judgment—am I doing this right? Am I good enough? Rumi invites us to step out of the courtroom of the mind and into the field of the soul. Here, the grass grows by itself, and you are accepted simply because you exist."
//   },
//   { 
//     id: 'rumi_5', 
//     title: 'You Are The Ocean', 
//     image:  require('../assets/art2.jpg'), // Deep ocean
//     content: "'Stop acting so small. You are the universe in ecstatic motion.'\n\n'You are not a drop in the ocean. You are the entire ocean in a drop.'\n\nWhen you feel small, insignificant, or overwhelmed by the world, remember your true nature. You contain multitudes. You are vast. The problems that seem huge are actually small waves on the surface of your infinite depth."
//   }
// ];

// export default function SpiritualTherapy({ navigation }) {
//   const [dailyCard, setDailyCard] = useState(SOUL_SCIENCE_DATA[0]);
//   const [dailyRumi, setDailyRumi] = useState(RUMI_DATA[0]);
  
//   // MODAL STATES
//   const [scienceModalVisible, setScienceModalVisible] = useState(false);
//   const [textModalVisible, setTextModalVisible] = useState(false);
//   const [rumiModalVisible, setRumiModalVisible] = useState(false);
//   const [selectedText, setSelectedText] = useState(null);

//   // AUDIO STATE
//   const [sound, setSound] = useState();
//   const [playingId, setPlayingId] = useState(null);

//   useEffect(() => {
//     // Randomize Science & Rumi on load
//     setDailyCard(SOUL_SCIENCE_DATA[Math.floor(Math.random() * SOUL_SCIENCE_DATA.length)]);
//     setDailyRumi(RUMI_DATA[Math.floor(Math.random() * RUMI_DATA.length)]);
    
//     return sound ? () => { sound.unloadAsync(); } : undefined;
//   }, [sound]);

//   // --- AUDIO LOGIC ---
//   const playGitaAudio = async (item) => {
//     if (playingId === item.id) {
//         if (sound) await sound.unloadAsync();
//         setPlayingId(null);
//         setSound(null);
//         return;
//     }
//     if (sound) await sound.unloadAsync();
//     if (!item.audioFile) return;
//     try {
//         const { sound: newSound } = await Audio.Sound.createAsync(item.audioFile);
//         setSound(newSound);
//         setPlayingId(item.id);
//         await newSound.playAsync();
//     } catch (error) { console.log(error); }
//   };

//   const openTextModal = (item) => {
//     setSelectedText(item);
//     setTextModalVisible(true);
//   };

//   const renderQuote = ({ item }) => (
//     <View style={styles.quoteContainer}>
//       <ImageBackground source={item.image } style={styles.quoteBg} imageStyle={{ borderRadius: 20 }}>
//         <View style={styles.quoteOverlay}>
//           <Text style={styles.quoteText}>{item.text}</Text>
//           <Text style={styles.quoteSource}>{item.source}</Text>
//         </View>
//       </ImageBackground>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Inner Sanctuary</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. CAROUSEL */}
//           <Text style={styles.sectionTitle}>Wisdom of the Ages</Text>
//           <FlatList data={QUOTES} renderItem={renderQuote} keyExtractor={item => item.id} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />

//           {/* 2. SCIENCE CARD */}
//           <Text style={[styles.sectionTitle, {marginTop: 20}]}>The Science of Soul</Text>
//           <TouchableOpacity style={styles.scienceCard} activeOpacity={0.9} onPress={() => setScienceModalVisible(true)}>
//              <ImageBackground source={{ uri: dailyCard.image }} style={styles.scienceBg} imageStyle={{ borderRadius: 20 }}>
//                 <View style={styles.scienceOverlay}>
//                     <Text style={styles.scienceTag}>DAILY DISCOVERY</Text>
//                     <Text style={styles.scienceTitle}>{dailyCard.title}</Text>
//                     <Text style={styles.scienceTap}>Tap to learn more →</Text>
//                 </View>
//              </ImageBackground>
//           </TouchableOpacity>

//           {/* 3. HEALING WITH GITA */}
//           <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Healing With Bhagavad Gita</Text>
//           <Text style={styles.sectionSubtitle}>Listen to the divine song.</Text>
//           <View style={styles.matrixContainer}>
//             {GITA_AUDIO.map((item) => (
//               <TouchableOpacity key={item.id} style={styles.audioCard} activeOpacity={0.9} onPress={() => playGitaAudio(item)}>
//                 <ImageBackground source={item.image } style={styles.cardBg} imageStyle={{ borderRadius: 15 }}>
//                   <View style={{ position: 'absolute', top: 5, right: 5 }}>
//                              <HeartButton item={item} size={22} color="#fff" />
//                           </View>
//                   <View style={styles.audioOverlay}>
//                     <View style={styles.audioTextTop}>
//                         <Text style={styles.audioTitle}>{item.title}</Text>
//                         <Text style={styles.audioSubtitle}>{item.subtitle}</Text>
//                     </View>
//                     <View style={styles.playCircle}>
//                         <Text style={styles.playIcon}>{playingId === item.id ? '⏸' : '▶'}</Text>
//                     </View>
//                   </View>
//                 </ImageBackground>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* 4. SACRED LIBRARY */}
//           <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Sacred Library</Text>
//           <Text style={styles.sectionSubtitle}>Tap for healing perspectives.</Text>
//           <View style={styles.matrixContainer}>
//             {SACRED_TEXTS.map((item) => (
//                <TouchableOpacity key={item.id} style={styles.wisdomCard} activeOpacity={0.9} onPress={() => openTextModal(item)}>
//                  <Image source={item.image } style={styles.wisdomImage} />
//                  <View style={{ position: 'absolute', top: 5, right: 5 }}>
//                             <HeartButton item={item} size={22} color="#fff" />
//                          </View>
//                  <View style={styles.wisdomContent}>
//                     <Text style={styles.wisdomTitle}>{item.title}</Text>
//                     <Text style={styles.wisdomQuote} numberOfLines={3}>{item.quote}</Text>
//                  </View>
//                </TouchableOpacity>
//             ))}
//           </View>

//           {/* 5. DIVINE WHISPERS OF RUMI (NEW SECTION) */}
//           <Text style={[styles.sectionTitle, {marginTop: 20}]}>Divine Whispers of Rumi</Text>
//           <TouchableOpacity style={[styles.scienceCard, {marginBottom: 30}]} activeOpacity={0.9} onPress={() => setRumiModalVisible(true)}>
//              <ImageBackground source={dailyRumi.image } style={styles.scienceBg} imageStyle={{ borderRadius: 20 }}>
                
//                 <View style={styles.scienceOverlay}>
//                     <Text style={styles.scienceTag}>POETRY FOR THE SOUL</Text>
//                     <Text style={styles.scienceTitle}>{dailyRumi.title}</Text>
//                     <Text style={styles.scienceTap}>Tap to read poem →</Text>
//                 </View>
//              </ImageBackground>
//           </TouchableOpacity>

//         </ScrollView>
//       </SafeAreaView>

//       {/* MODAL 1: SCIENCE */}
//       <Modal animationType="fade" transparent={true} visible={scienceModalVisible} onRequestClose={() => setScienceModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{dailyCard.title}</Text>
//             <Text style={styles.modalSubtitle}>{dailyCard.subtitle}</Text>
//             <View style={styles.divider} />
//             <Text style={styles.modalText}>{dailyCard.excerpt}</Text>
//             <TouchableOpacity style={styles.doneButton} onPress={() => setScienceModalVisible(false)}>
//                <Text style={styles.doneButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* MODAL 2: TEXT READER */}
//       <Modal animationType="slide" transparent={true} visible={textModalVisible} onRequestClose={() => setTextModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { height: '80%' }]}>
//             <View style={styles.modalHeader}>
//                 <TouchableOpacity onPress={() => setTextModalVisible(false)}><Text style={{fontSize:20}}>✕</Text></TouchableOpacity>
//             </View>
//             {selectedText && (
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <Image source={selectedText.image } style={styles.modalImage} />
//                     <Text style={styles.modalTitle}>{selectedText.title}</Text>
//                     <View style={styles.divider} />
//                     <Text style={styles.scriptureText}>{selectedText.content}</Text>
//                     <View style={{height:40}} />
//                 </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* MODAL 3: RUMI (NEW) */}
//       <Modal animationType="fade" transparent={true} visible={rumiModalVisible} onRequestClose={() => setRumiModalVisible(false)}>
        
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Divine Wisdom Of Rumi</Text>
//             <Text style={styles.modalSubtitle}>{dailyRumi.title}</Text>
//             <View style={styles.divider} />
//             <Text style={styles.scriptureText}>{dailyRumi.content}</Text>
//             <TouchableOpacity style={styles.doneButton} onPress={() => setRumiModalVisible(false)}>
//                <Text style={styles.doneButtonText}>Reflect & Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F3E5F5' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#4A148C' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#4A148C' },
//   scrollContent: { paddingBottom: 50 },

//   sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#4A148C', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 14, color: '#7B1FA2', marginLeft: 20, marginBottom: 15 },

//   // QUOTE CAROUSEL
//   quoteContainer: { width: width, paddingHorizontal: 20, marginBottom: 10 },
//   quoteBg: { width: '100%', height: 200, justifyContent: 'center' },
//   quoteOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 30 },
//   quoteText: { fontSize: 18, fontStyle: 'italic', color: '#fff', textAlign: 'center', lineHeight: 28, marginBottom: 10 },
//   quoteSource: { color: '#E1BEE7', fontWeight: 'bold', textTransform: 'uppercase' },

//   // SOUL SCIENCE / RUMI CARD
//   scienceCard: { marginHorizontal: 20, height: 160, borderRadius: 20, elevation: 5 },
//   scienceBg: { flex: 1, justifyContent: 'center' },
//   scienceOverlay: { flex: 1, backgroundColor: 'rgba(74, 20, 140, 0.7)', padding: 20, justifyContent: 'center', borderRadius: 20 },
//   scienceTag: { color: '#E1BEE7', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
//   scienceTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
//   scienceTap: { color: '#E1BEE7', fontSize: 12, marginTop: 10, fontWeight: 'bold' },

//   // MATRIX LAYOUT
//   matrixContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },

//   // AUDIO CARDS
//   audioCard: { width: CARD_WIDTH, height: CARD_WIDTH * 1.3, marginBottom: GAP, borderRadius: 15, elevation: 4, backgroundColor: '#fff', overflow: 'hidden' },
//   cardBg: { flex: 1 },
//   audioOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'space-between', padding: 15 },
//   audioTextTop: { marginTop: 10 },
//   audioTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
//   audioSubtitle: { color: '#E1BEE7', fontSize: 12, textAlign: 'center', fontStyle: 'italic' },
//   playCircle: { alignSelf: 'center', width: 45, height: 45, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.9)', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
//   playIcon: { fontSize: 20, color: '#4A148C' },

//   // WISDOM CARDS
//   wisdomCard: { width: CARD_WIDTH, marginBottom: GAP, borderRadius: 15, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
//   wisdomImage: { width: '100%', height: 120 },
//   wisdomContent: { padding: 12 },
//   wisdomTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A148C', marginBottom: 5 },
//   wisdomQuote: { fontSize: 11, color: '#666', fontStyle: 'italic', lineHeight: 16 },

//   // MODAL
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: width - 40, backgroundColor: '#fff', borderRadius: 20, padding: 20, maxHeight: '80%', elevation: 10 },
//   modalHeader: { alignItems: 'flex-end', marginBottom: 10 },
//   modalImage: { width: '100%', height: 150, borderRadius: 15, marginBottom: 20 },
//   modalTitle: { fontSize: 24, fontWeight: 'bold', color: '#4A148C', textAlign: 'center', marginBottom: 5 },
//   modalSubtitle: { fontSize: 16, color: '#7B1FA2', textAlign: 'center', fontStyle: 'italic' },
//   divider: { height: 2, backgroundColor: '#E1BEE7', width: '60%', alignSelf: 'center', marginVertical: 20 },
//   modalText: { fontSize: 16, color: '#444', lineHeight: 26, textAlign: 'center' },
//   scriptureText: { fontSize: 17, color: '#444', lineHeight: 30, textAlign: 'left' },
//   doneButton: { backgroundColor: '#4A148C', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 30 },
//   doneButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });






import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Animated, Pressable, ImageBackground, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import HeartButton from '../components/HeartButton';

const { width } = Dimensions.get('window');
const GAP = 15;
const CARD_WIDTH = (width - 40 - GAP) / 2;

// --- DATA: QUOTES CAROUSEL ---
const QUOTES = [
  { id: 'quote_1', source: 'Bhagavad Gita', text: '"You have the right to work, but for the work\'s sake only. You have no right to the fruits of work."', image: require('../assets/gita.jpg'), },
  { id: 'quote_2', source: 'The Bible', text: '"Peace I leave with you; my peace I give you. Do not let your hearts be troubled."', image: require('../assets/bible.jpg'), },
  { id: 'quote_3', source: 'The Quran', text: '"Verily, with hardship comes ease. So when you have finished your duties, then stand up for worship."', image: require('../assets/quran.jpg'), },
  { id: 'quote_4', source: 'The Buddha', text: '"The mind is everything. What you think you become. Peace comes from within."', image: require('../assets/buddha.jpg'), },
];

// --- DATA: SOUL SCIENCE ---
const SOUL_SCIENCE_DATA = [
  { id: 'science_1', title: 'Neurotheology', subtitle: 'Prayer & The Brain', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80', excerpt: '12 minutes of daily prayer strengthens the Frontal Lobe, rewiring your brain to be calmer.' },
  { id: 'science_2', title: 'The Witness Self', subtitle: 'Meta-Cognition', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80', excerpt: 'Spirituality teaches watching your thoughts without attaching to them. This gap allows you to choose peace over anger.' },
  { id: 'science_3', title: 'Vibrational Healing', subtitle: 'Chanting & Vagus Nerve', image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&q=80', excerpt: 'Chanting "OM" stimulates the Vagus Nerve, sending a direct signal to lower heart rate instantly.' },
];

// --- DATA: GITA AUDIO ---
export const GITA_AUDIO = [
  { id: 'gita_1', title: 'Balancing The Mind', subtitle: 'Chapter 2 • Verse 54', image: require('../assets/gita1.jpg'), audioFile: require('../assets/sounds/gita_1.mp3') },
  { id: 'gita_2', title: 'The Path of Devotion', subtitle: 'Chapter 12 • Verse 6', image: require('../assets/gita2.jpg'), audioFile: require('../assets/sounds/gita_2.mp3') },
];

// --- DATA: SACRED LIBRARY (Text) ---
const SACRED_TEXTS = [
  { id: 'lesson_1', title: 'The Buddha', quote: '"The mind is everything. What you think you become."', image: require('../assets/buddha2.jpg'), content: "When we feel pain, we often add a second layer of suffering by resisting it. The Buddha taught that while pain is inevitable in life, suffering is optional. The core of his teaching is that our stress comes from 'Tanha'—the craving for reality to be different than it actually is. We hurt because we cling to things that are meant to change. The Four Noble Truths are not a pessimistic view of life, but a prescription for freedom. They invite you to stop fighting the current. The moment you accept the present moment exactly as it is—without wishing it were otherwise—the tension breaks. You are not your thoughts; you are the sky witnessing the clouds passing by. Release the grip of 'I need this to change,' and you will find the peace of Nirvana right here, right now." },
  { id: 'lesson_2', title: 'The Bible', quote: '"Do not worry about tomorrow, for tomorrow will worry about itself."', image: require('../assets/bible2.jpg'), content: "Anxiety often stems from the exhausting feeling that you have to carry the weight of the world on your own shoulders. The Sermon on the Mount offers a radical alternative: spiritual surrender. When the text says, 'Do not worry about tomorrow, for tomorrow will worry about itself,' it isn't dismissing your planning; it is inviting you to trust a higher power with the outcome. Consider the 'Lilies of the Field'—they do not toil or stress, yet they are clothed in beauty. This teaching asks you to release the need for total control. You do not have to figure it all out today. Peace comes when you realize you are loved, held, and looked after. You can put down the heavy load. You are not fighting this battle alone; rest in the assurance that you are safe." },
  { id: 'lesson_3', title: 'Tao Te Ching', quote: '"Water is the softest thing, yet it can penetrate mountains."', image: require('../assets/china.jpg'), content: "In a world that screams 'push harder,' the Tao whispers 'let go.' The core teaching is Wu Wei—effortless action. Think of water: it is soft and yields to obstacles, yet it cuts through solid rock not by force, but by flow. When you are stressed, you are likely swimming upstream, fighting against the reality of your situation. The Tao teaches that you do not need to force a solution. Stop struggling. As the text says, 'Do you have the patience to wait until your mud settles and the water is clear?' When you stop churning the water with your anxiety, clarity returns on its own. By surrendering to the natural rhythm of life rather than imposing your will upon it, you find that the right action arises spontaneously, without the exhausting friction of the ego." },
  { id: 'lesson_4', title: 'The Meditations', quote: '"You have power over your mind, not outside events."', image: require('../assets/med.jpg'), content: "Anxiety is often the panic of trying to control things that are not up to us. Marcus Aurelius, a Roman Emperor who wrote this text while leading an army, teaches us the ultimate grounding tool: The Dichotomy of Control. He writes, 'You have power over your mind, not outside events. Realize this, and you will find strength.' When you are overwhelmed, ask yourself: 'Is this within my control?' Your thoughts and reactions are; the past, the future, and others' opinions are not. If it is outside your control, let it go—it is 'indifferent.' Nothing outside your own mind can truly hurt you unless you judge it to be hurtful. Retreat into your 'Inner Citadel.' No matter how chaotic the world gets, your internal character remains a fortress of peace that no one can breach." },
];

// --- DATA: RUMI WISDOM (5 Rotating Cards) ---
const RUMI_DATA = [
  {
    id: 'rumi_1',
    title: 'The Guest House',
    image: require('../assets/art1.jpg'), // Sunrise
    content: "Rumi once whispered: 'This being human is a guest house. Every morning a new arrival. A joy, a depression, a meanness, some momentary awareness comes as an unexpected visitor.'\n\nWhy must we welcome them? Because even the dark thoughts are guides sent from beyond. They are not you; they are just passing through. Treat them honorably, and they will leave peace behind when they go."
  },
  {
    id: 'rumi_2',
    title: 'The Breeze at Dawn',
    image: require('../assets/art2.jpg'), // Morning mist
    content: "Rumi whispered across time: 'The breeze at dawn has secrets to tell you. Don't go back to sleep.'\n\nBut what are these secrets? They are the parts of you that can only be heard when the world stops speaking. There is a presence that lives beneath your name, your roles, and your habits. A being that waits patiently for you to simply listen."
  },
  {
    id: 'rumi_3',
    title: 'The Wound is the Place',
    image: require('../assets/art3.jpg'), // Light through cracks
    content: "'The wound is the place where the Light enters you.'\n\nWe spend our lives trying to hide our broken parts, feeling ashamed of our scars. Rumi teaches us that our heartbreak is not a failure—it is an opening. It is the very crack in your armor that allows compassion, empathy, and deeper understanding to flood in. Do not hide your wounds; they are your portals to grace."
  },
  {
    id: 'rumi_4',
    title: 'Beyond Right and Wrong',
    image: require('../assets/art4.jpg'),// Open field
    content: "'Out beyond ideas of wrongdoing and rightdoing, there is a field. I’ll meet you there.'\n\nSo much of our anxiety comes from judgment—am I doing this right? Am I good enough? Rumi invites us to step out of the courtroom of the mind and into the field of the soul. Here, the grass grows by itself, and you are accepted simply because you exist."
  },
  {
    id: 'rumi_5',
    title: 'You Are The Ocean',
    image: require('../assets/art2.jpg'), // Deep ocean
    content: "'Stop acting so small. You are the universe in ecstatic motion.'\n\n'You are not a drop in the ocean. You are the entire ocean in a drop.'\n\nWhen you feel small, insignificant, or overwhelmed by the world, remember your true nature. You contain multitudes. You are vast. The problems that seem huge are actually small waves on the surface of your infinite depth."
  }
];

export default function SpiritualTherapy({ navigation }) {
  const [dailyCard, setDailyCard] = useState(SOUL_SCIENCE_DATA[0]);
  const [dailyRumi, setDailyRumi] = useState(RUMI_DATA[0]);

  // MODAL STATES
  const [scienceModalVisible, setScienceModalVisible] = useState(false);
  const [textModalVisible, setTextModalVisible] = useState(false);
  const [rumiModalVisible, setRumiModalVisible] = useState(false);
  const [selectedText, setSelectedText] = useState(null);

  // AUDIO STATE
  const [sound, setSound] = useState();
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    // Randomize Science & Rumi on load
    setDailyCard(SOUL_SCIENCE_DATA[Math.floor(Math.random() * SOUL_SCIENCE_DATA.length)]);
    setDailyRumi(RUMI_DATA[Math.floor(Math.random() * RUMI_DATA.length)]);

    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  // --- AUDIO LOGIC ---
  const playGitaAudio = async (item) => {
    if (playingId === item.id) {
      if (sound) await sound.unloadAsync();
      setPlayingId(null);
      setSound(null);
      return;
    }
    if (sound) await sound.unloadAsync();
    if (!item.audioFile) return;
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(item.audioFile);
      setSound(newSound);
      setPlayingId(item.id);
      await newSound.playAsync();
    } catch (error) { console.log(error); }
  };

  const openTextModal = (item) => {
    setSelectedText(item);
    setTextModalVisible(true);
  };

  const renderQuote = ({ item }) => (
    <View style={styles.quoteContainer}>
      {/* ADDED OVERFLOW HIDDEN AND RESIZEMODE FOR WEB */}
      <ImageBackground 
        source={item.image} 
        style={styles.quoteBg} 
        imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}
      >
        <View style={styles.quoteOverlay}>
          <Text style={styles.quoteText}>{item.text}</Text>
          <Text style={styles.quoteSource}>{item.source}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inner Sanctuary</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* 1. CAROUSEL */}
          <Text style={styles.sectionTitle}>Wisdom of the Ages</Text>
          <FlatList data={QUOTES} renderItem={renderQuote} keyExtractor={item => item.id} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />

          {/* 2. SCIENCE CARD */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>The Science of Soul</Text>
          <TouchableOpacity style={styles.scienceCard} activeOpacity={0.9} onPress={() => setScienceModalVisible(true)}>
            {/* ADDED RESIZEMODE TO PREVENT WEB DISTORTION */}
            <ImageBackground 
               source={{ uri: dailyCard.image }} 
               style={styles.scienceBg} 
               imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}
            >
              <View style={styles.scienceOverlay}>
                <Text style={styles.scienceTag}>DAILY DISCOVERY</Text>
                <Text style={styles.scienceTitle}>{dailyCard.title}</Text>
                <Text style={styles.scienceTap}>Tap to learn more →</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* 3. HEALING WITH GITA */}
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Healing With Bhagavad Gita</Text>
          <Text style={styles.sectionSubtitle}>Listen to the divine song.</Text>
          <View style={styles.matrixContainer}>
            {GITA_AUDIO.map((item) => (
              <TouchableOpacity key={item.id} style={styles.audioCard} activeOpacity={0.9} onPress={() => playGitaAudio(item)}>
                {/* ADDED RESIZEMODE: COVER TO FIX GITA CARD LAYOUT */}
                <ImageBackground 
                   source={item.image} 
                   style={styles.cardBg} 
                   imageStyle={{ borderRadius: 15, resizeMode: 'cover' }}
                >
                  <View style={{ position: 'absolute', top: 5, right: 5 }}>
                    <HeartButton item={item} size={22} color="#fff" />
                  </View>
                  <View style={styles.audioOverlay}>
                    <View style={styles.audioTextTop}>
                      <Text style={styles.audioTitle}>{item.title}</Text>
                      <Text style={styles.audioSubtitle}>{item.subtitle}</Text>
                    </View>
                    <View style={styles.playCircle}>
                      <Text style={styles.playIcon}>{playingId === item.id ? '⏸' : '▶'}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>

          {/* 4. SACRED LIBRARY */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Sacred Library</Text>
          <Text style={styles.sectionSubtitle}>Tap for healing perspectives.</Text>
          <View style={styles.matrixContainer}>
            {SACRED_TEXTS.map((item) => (
              <TouchableOpacity key={item.id} style={styles.wisdomCard} activeOpacity={0.9} onPress={() => openTextModal(item)}>
                {/* ADDED RESIZEMODE COVER */}
                <Image source={item.image} style={styles.wisdomImage} resizeMode="cover" />
                <View style={{ position: 'absolute', top: 5, right: 5 }}>
                  <HeartButton item={item} size={22} color="#fff" />
                </View>
                <View style={styles.wisdomContent}>
                  <Text style={styles.wisdomTitle}>{item.title}</Text>
                  <Text style={styles.wisdomQuote} numberOfLines={3}>{item.quote}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* 5. DIVINE WHISPERS OF RUMI (NEW SECTION) */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Divine Whispers of Rumi</Text>
          <TouchableOpacity style={[styles.scienceCard, { marginBottom: 30 }]} activeOpacity={0.9} onPress={() => setRumiModalVisible(true)}>
             {/* ADDED RESIZEMODE TO FIX RUMI CARD */}
            <ImageBackground 
               source={dailyRumi.image} 
               style={styles.scienceBg} 
               imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}
            >

              <View style={styles.scienceOverlay}>
                <Text style={styles.scienceTag}>POETRY FOR THE SOUL</Text>
                <Text style={styles.scienceTitle}>{dailyRumi.title}</Text>
                <Text style={styles.scienceTap}>Tap to read poem →</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>

      {/* MODAL 1: SCIENCE */}
      <Modal animationType="fade" transparent={true} visible={scienceModalVisible} onRequestClose={() => setScienceModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{dailyCard.title}</Text>
            <Text style={styles.modalSubtitle}>{dailyCard.subtitle}</Text>
            <View style={styles.divider} />
            <Text style={styles.modalText}>{dailyCard.excerpt}</Text>
            <TouchableOpacity style={styles.doneButton} onPress={() => setScienceModalVisible(false)}>
              <Text style={styles.doneButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL 2: TEXT READER */}
      <Modal animationType="slide" transparent={true} visible={textModalVisible} onRequestClose={() => setTextModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: '80%' }]}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setTextModalVisible(false)}><Text style={{ fontSize: 20 }}>✕</Text></TouchableOpacity>
            </View>
            {selectedText && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={selectedText.image} style={styles.modalImage} resizeMode="cover" />
                <Text style={styles.modalTitle}>{selectedText.title}</Text>
                <View style={styles.divider} />
                <Text style={styles.scriptureText}>{selectedText.content}</Text>
                <View style={{ height: 40 }} />
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      {/* MODAL 3: RUMI (NEW) */}
      <Modal animationType="fade" transparent={true} visible={rumiModalVisible} onRequestClose={() => setRumiModalVisible(false)}>

        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Divine Wisdom Of Rumi</Text>
            <Text style={styles.modalSubtitle}>{dailyRumi.title}</Text>
            <View style={styles.divider} />
            <Text style={styles.scriptureText}>{dailyRumi.content}</Text>
            <TouchableOpacity style={styles.doneButton} onPress={() => setRumiModalVisible(false)}>
              <Text style={styles.doneButtonText}>Reflect & Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3E5F5' },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#4A148C' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#4A148C' },
  scrollContent: { paddingBottom: 50 },

  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#4A148C', marginLeft: 20, marginBottom: 5 },
  sectionSubtitle: { fontSize: 14, color: '#7B1FA2', marginLeft: 20, marginBottom: 15 },

  // QUOTE CAROUSEL
  quoteContainer: { width: width, paddingHorizontal: 20, marginBottom: 10 },
  quoteBg: { width: '100%', height: 200, justifyContent: 'center', borderRadius: 20, overflow: 'hidden' }, // Added overflow: hidden for Web
  quoteOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 30 },
  quoteText: { fontSize: 18, fontStyle: 'italic', color: '#fff', textAlign: 'center', lineHeight: 28, marginBottom: 10 },
  quoteSource: { color: '#E1BEE7', fontWeight: 'bold', textTransform: 'uppercase' },

  // SOUL SCIENCE / RUMI CARD
  // Added overflow: 'hidden' to fix the Rumi "Exploding Image" bug on Web
  scienceCard: { marginHorizontal: 20, height: 160, borderRadius: 20, elevation: 5, overflow: 'hidden' },
  scienceBg: { flex: 1, justifyContent: 'center' },
  scienceOverlay: { flex: 1, backgroundColor: 'rgba(74, 20, 140, 0.7)', padding: 20, justifyContent: 'center', borderRadius: 20 },
  scienceTag: { color: '#E1BEE7', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
  scienceTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  scienceTap: { color: '#E1BEE7', fontSize: 12, marginTop: 10, fontWeight: 'bold' },

  // MATRIX LAYOUT
  matrixContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },

  // AUDIO CARDS
  audioCard: { width: CARD_WIDTH, height: CARD_WIDTH * 1.3, marginBottom: GAP, borderRadius: 15, elevation: 4, backgroundColor: '#fff', overflow: 'hidden' },
  cardBg: { flex: 1 },
  audioOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'space-between', padding: 15 },
  audioTextTop: { marginTop: 10 },
  audioTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  audioSubtitle: { color: '#E1BEE7', fontSize: 12, textAlign: 'center', fontStyle: 'italic' },
  playCircle: { alignSelf: 'center', width: 45, height: 45, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.9)', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  playIcon: { fontSize: 20, color: '#4A148C' },

  // WISDOM CARDS
  wisdomCard: { width: CARD_WIDTH, marginBottom: GAP, borderRadius: 15, backgroundColor: '#fff', elevation: 3, overflow: 'hidden' },
  wisdomImage: { width: '100%', height: 120, resizeMode: 'cover' }, // Added resizeMode: 'cover' for Web Layout Fix
  wisdomContent: { padding: 12 },
  wisdomTitle: { fontSize: 14, fontWeight: 'bold', color: '#4A148C', marginBottom: 5 },
  wisdomQuote: { fontSize: 11, color: '#666', fontStyle: 'italic', lineHeight: 16 },

  // MODAL
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width - 40, backgroundColor: '#fff', borderRadius: 20, padding: 20, maxHeight: '80%', elevation: 10 },
  modalHeader: { alignItems: 'flex-end', marginBottom: 10 },
  modalImage: { width: '100%', height: 150, borderRadius: 15, marginBottom: 20 },
  modalTitle: { fontSize: 24, fontWeight: 'bold', color: '#4A148C', textAlign: 'center', marginBottom: 5 },
  modalSubtitle: { fontSize: 16, color: '#7B1FA2', textAlign: 'center', fontStyle: 'italic' },
  divider: { height: 2, backgroundColor: '#E1BEE7', width: '60%', alignSelf: 'center', marginVertical: 20 },
  modalText: { fontSize: 16, color: '#444', lineHeight: 26, textAlign: 'center' },
  scriptureText: { fontSize: 17, color: '#444', lineHeight: 30, textAlign: 'left' },
  doneButton: { backgroundColor: '#4A148C', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 30 },
  doneButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});