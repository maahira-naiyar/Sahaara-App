// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, Modal, Dimensions, SafeAreaView, Image } from 'react-native';
// import { Audio } from 'expo-av';
// import YoutubePlayer from "react-native-youtube-iframe";
// import { Ionicons } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// // --- ASSETS (Hardcoded for speed) ---
// const OM_CHANT = require('../assets/sounds/omchant.mp3'); 
// const HEALING_FREQ = require('../assets/sounds/285Hz.mp3');
// const MEDITATION_ID = 'inpok4MKVLM'; // "Meditation You Can Do Anywhere"

// export default function SOSMode({ navigation }) {
//   const [sound, setSound] = useState();
//   const [playingType, setPlayingType] = useState(null); // 'om' | 'freq'
//   const [videoVisible, setVideoVisible] = useState(false);
  
//   // Breathing Animation Values
//   const scaleAnim = useRef(new Animated.Value(1)).current;
//   const [breatheText, setBreatheText] = useState("Inhale");

//   // --- 1. BREATHING LOOP ---
//   useEffect(() => {
//     const breathe = () => {
//       setBreatheText("Inhale");
//       Animated.timing(scaleAnim, {
//         toValue: 1.5,
//         duration: 4000,
//         useNativeDriver: true,
//         easing: Easing.inOut(Easing.ease),
//       }).start(() => {
//         setBreatheText("Exhale");
//         Animated.timing(scaleAnim, {
//           toValue: 1,
//           duration: 4000,
//           useNativeDriver: true,
//           easing: Easing.inOut(Easing.ease),
//         }).start(() => breathe()); // Loop
//       });
//     };
//     breathe();
//   }, []);

//   // --- 2. AUDIO HANDLER ---
//   const playAudio = async (type) => {
//     const file = type === 'om' ? OM_CHANT : HEALING_FREQ;

//     // If clicking same button, Stop.
//     if (playingType === type) {
//       if (sound) await sound.unloadAsync();
//       setPlayingType(null);
//       setSound(null);
//       return;
//     }

//     // Stop previous
//     if (sound) await sound.unloadAsync();

//     try {
//       await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
//       const { sound: newSound } = await Audio.Sound.createAsync(file, { shouldPlay: true, isLooping: true });
//       setSound(newSound);
//       setPlayingType(type);
//     } catch (e) { console.log(e); }
//   };

//   // Cleanup
//   useEffect(() => {
//     return sound ? () => { sound.unloadAsync(); } : undefined;
//   }, [sound]);

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
//              <Text style={styles.closeText}>✕ Close SOS</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.title}>You are safe.</Text>
//         <Text style={styles.subtitle}>Follow the circle. Just breathe.</Text>

//         {/* --- BREATHING CIRCLE --- */}
//         <View style={styles.breathingContainer}>
//           <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
//             <View style={styles.innerCircle}>
//                <Text style={styles.breatheText}>{breatheText}</Text>
//             </View>
//           </Animated.View>
//         </View>

//         {/* --- INSTANT CALM BUTTONS --- */}
//         <View style={styles.controls}>
          
//           {/* OM CHANT */}
//           <TouchableOpacity style={[styles.controlBtn, playingType === 'om' && styles.activeBtn]} onPress={() => playAudio('om')}>
//             <Ionicons name="musical-note" size={24} color={playingType === 'om' ? "#fff" : "#16423C"} />
//             <Text style={[styles.btnText, playingType === 'om' && {color:'#fff'}]}>OM Chant</Text>
//           </TouchableOpacity>

//           {/* 285Hz FREQ */}
//           <TouchableOpacity style={[styles.controlBtn, playingType === 'freq' && styles.activeBtn]} onPress={() => playAudio('freq')}>
//             <Ionicons name="pulse" size={24} color={playingType === 'freq' ? "#fff" : "#16423C"} />
//             <Text style={[styles.btnText, playingType === 'freq' && {color:'#fff'}]}>285 Hz</Text>
//           </TouchableOpacity>

//           {/* VIDEO */}
//           <TouchableOpacity style={styles.controlBtn} onPress={() => setVideoVisible(true)}>
//             <Ionicons name="play-circle" size={24} color="#16423C" />
//             <Text style={styles.btnText}>Guided Med.</Text>
//           </TouchableOpacity>

//         </View>

//       </SafeAreaView>

//       {/* VIDEO MODAL */}
//       <Modal animationType="slide" visible={videoVisible} onRequestClose={() => setVideoVisible(false)}>
//          <View style={{flex:1, backgroundColor:'#000', justifyContent:'center'}}>
//             <TouchableOpacity style={styles.closeVideo} onPress={() => setVideoVisible(false)}>
//                <Text style={{color:'#fff', fontSize: 18}}>✕ Close</Text>
//             </TouchableOpacity>
//             <YoutubePlayer height={300} play={true} videoId={MEDITATION_ID} />
//          </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#263238' }, // Dark calming background
//   safeArea: { flex: 1, alignItems: 'center' },
//   header: { width: '100%', alignItems: 'flex-end', padding: 20 },
//   closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
//   closeText: { color: '#fff', fontWeight: 'bold' },
  
//   title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 20 },
//   subtitle: { fontSize: 16, color: '#B0BEC5', marginTop: 5 },

//   breathingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   circle: { width: 150, height: 150, borderRadius: 75, backgroundColor: 'rgba(77, 182, 172, 0.3)', justifyContent: 'center', alignItems: 'center' },
//   innerCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#4DB6AC', justifyContent: 'center', alignItems: 'center', shadowColor: "#4DB6AC", shadowOpacity: 0.8, shadowRadius: 20, elevation: 10 },
//   breatheText: { color: '#fff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1 },

//   controls: { flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: 50 },
//   controlBtn: { alignItems: 'center', backgroundColor: '#fff', width: 90, height: 90, borderRadius: 20, justifyContent: 'center', elevation: 5 },
//   activeBtn: { backgroundColor: '#4DB6AC' },
//   btnText: { marginTop: 5, fontSize: 12, fontWeight: 'bold', color: '#16423C' },
  
//   closeVideo: { position: 'absolute', top: 50, right: 20, zIndex: 10 },
// });



import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, Modal, Dimensions,  Image } from 'react-native';
import { Audio } from 'expo-av';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

// --- ASSETS ---
const OM_CHANT = require('../assets/sounds/omchant.mp3'); 
const HEALING_FREQ = require('../assets/sounds/285Hz.mp3');
const MEDITATION_ID = 'inpok4MKVLM'; 

export default function SOSMode({ navigation }) {
  const [sound, setSound] = useState();
  const [playingType, setPlayingType] = useState(null); // 'om' | 'freq'
  const [videoVisible, setVideoVisible] = useState(false);
  
  // Breathing Animation Values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [breatheText, setBreatheText] = useState("Inhale");

  // --- 1. BREATHING LOOP ---
  useEffect(() => {
    const breathe = () => {
      setBreatheText("Inhale");
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }).start(() => {
        setBreatheText("Exhale");
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }).start(() => breathe()); 
      });
    };
    breathe();
  }, []);

  // --- 2. AUDIO HANDLER (TOGGLE LOGIC) ---
  const playAudio = async (type) => {
    const file = type === 'om' ? OM_CHANT : HEALING_FREQ;

    // A. IF CLICKING THE ACTIVE BUTTON -> PAUSE IT
    if (playingType === type) {
      if (sound) await sound.unloadAsync();
      setPlayingType(null);
      setSound(null);
      return;
    }

    // B. IF PLAYING SOMETHING ELSE -> STOP IT FIRST
    if (sound) await sound.unloadAsync();

    // C. PLAY NEW SOUND
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound: newSound } = await Audio.Sound.createAsync(file, { shouldPlay: true, isLooping: true });
      setSound(newSound);
      setPlayingType(type);
    } catch (e) { console.log(e); }
  };

  useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
             <Text style={styles.closeText}>✕ Close SOS</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>You are safe.</Text>
        <Text style={styles.subtitle}>Follow the circle. Just breathe.</Text>

        {/* --- BREATHING CIRCLE --- */}
        <View style={styles.breathingContainer}>
          <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
            <View style={styles.innerCircle}>
               <Text style={styles.breatheText}>{breatheText}</Text>
            </View>
          </Animated.View>
        </View>

        {/* --- INSTANT CALM BUTTONS --- */}
        <View style={styles.controls}>
          
          {/* OM CHANT BUTTON */}
          <TouchableOpacity 
            style={[styles.controlBtn, playingType === 'om' && styles.activeBtn]} 
            onPress={() => playAudio('om')}
          >
            <Ionicons 
              name={playingType === 'om' ? "pause" : "play"} 
              size={30} 
              color={playingType === 'om' ? "#fff" : "#162542"} 
            />
            <Text style={[styles.btnText, playingType === 'om' && {color:'#fff'}]}>
              {playingType === 'om' ? "Pause" : "OM Chant"}
            </Text>
          </TouchableOpacity>

          {/* 285Hz FREQ BUTTON */}
          <TouchableOpacity 
            style={[styles.controlBtn, playingType === 'freq' && styles.activeBtn]} 
            onPress={() => playAudio('freq')}
          >
            <Ionicons 
              name={playingType === 'freq' ? "pause" : "play"} 
              size={30} 
              color={playingType === 'freq' ? "#fff" : "#162242"} 
            />
            <Text style={[styles.btnText, playingType === 'freq' && {color:'#fff'}]}>
              {playingType === 'freq' ? "Pause" : "285 Hz"}
            </Text>
          </TouchableOpacity>

          {/* VIDEO BUTTON */}
          <TouchableOpacity style={styles.controlBtn} onPress={() => setVideoVisible(true)}>
            <Ionicons name="videocam" size={30} color="#162442" />
            <Text style={styles.btnText}>Guided Med.</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>

      {/* VIDEO MODAL */}
      <Modal animationType="slide" visible={videoVisible} onRequestClose={() => setVideoVisible(false)}>
         <View style={{flex:1, backgroundColor:'#000', justifyContent:'center'}}>
            <TouchableOpacity style={styles.closeVideo} onPress={() => setVideoVisible(false)}>
               <Text style={{color:'#fff', fontSize: 18}}>✕ Close</Text>
            </TouchableOpacity>
            <YoutubePlayer height={300} play={true} videoId={MEDITATION_ID} />
         </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3f53b1f5' },
  safeArea: { flex: 1, alignItems: 'center' },
  header: { width: '100%', alignItems: 'flex-end', padding: 20 },
  closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  closeText: { color: '#fff', fontWeight: 'bold' },
  
  title: { fontSize: 35, fontWeight: 'bold', color: '#fff', marginTop: 20 },
  subtitle: { fontSize: 23, color: '#bfcfd7', marginTop: 5 },

  breathingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  circle: { width: 230, height: 230, borderRadius: 108, backgroundColor: '#d5e4f7', justifyContent: 'center', alignItems: 'center' },
  innerCircle: { width: 160, height: 160, borderRadius: 92, backgroundColor: '#69c1ed', justifyContent: 'center', alignItems: 'center', shadowColor: "#4DB6AC", shadowOpacity: 0.8, shadowRadius: 20, elevation: 10 },
  breatheText: { color: '#fff', fontSize: 30, fontWeight: 'bold', letterSpacing: 1 },

  controls: { flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: 50, marginBottom: 30 },
  controlBtn: { alignItems: 'center', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 20, justifyContent: 'center', elevation: 5 },
  activeBtn: { backgroundColor: '#4DB6AC' },
  btnText: { marginTop: 5, fontSize: 15, fontWeight: 'bold', color: '#1d255c' },
  
  closeVideo: { position: 'absolute', top: 50, right: 20, zIndex: 10 },
});
//#c0e1f1