// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
        
//         {/* Header Section */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Sahaara App</Text>
//           <Text style={styles.subtitle}>Your mental wellness support</Text>
//         </View>

//         {/* Content Placeholder */}
//         <View style={styles.content}>
//           <Text style={styles.text}>Project initialized successfully.</Text>
        
//         </View>

//         <StatusBar style="auto" />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f5f5f5', 
//     paddingTop: Platform.OS === 'android' ? 30 : 0, 
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   header: {
//     marginTop: 20,
//     marginBottom: 40,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2d4150', 
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#7c96ab', 
//     marginTop: 5,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderRadius: 20,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5, 
//   },
//   text: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
// });
// --------------------------------------------------------------------
// import React, { useEffect, useRef } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// // Get exact screen width so each "page" takes up the full screen
// const { width, height } = Dimensions.get('window');

// // We define our 2 screens as data items
// const SLIDES = [
//   { id: '1', type: 'splash' },
//   { id: '2', type: 'home' },
// ];

// export default function App() {
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     // LOGIC: Wait 5 seconds, then automatically scroll to the second screen
//     const timer = setTimeout(() => {
//       // "index: 1" means the second item (Home) because computers start counting at 0
//       flatListRef.current?.scrollToIndex({ index: 1, animated: true });
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   // This function decides what to render for each item in the list
//   const renderItem = ({ item }) => {
    
//     // --- PAGE 1: SPLASH SCREEN ---
//     if (item.type === 'splash') {
//       return (
//         <View style={styles.screenContainer}>
//           <View style={styles.splashContent}>
//             <Image 
//               source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2649/2649365.png' }} 
//               style={styles.logo} 
//             />
//             <Text style={styles.splashTitle}>Welcome to SAHAARA</Text>
//             <Text style={styles.splashSubtitle}>Your Mental Wellness Support</Text>
//             <Text style={styles.hintText}>(Swipe left to begin)</Text>
//           </View>
//         </View>
//       );
//     }

//     // --- PAGE 2: HOME / ABOUT SCREEN ---
//     return (
//       <View style={styles.screenContainer}>
//         <SafeAreaView style={styles.homeSafeContainer}>
          
//           <Image 
//             source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} 
//             style={styles.heroImage} 
//           />

//           <View style={styles.textWrapper}>
//             <Text style={styles.mainTitle}>Sahaara</Text>
//             <Text style={styles.description}>
//               Discover a sanctuary for your mind. 
//               Sahaara provides holistic therapy on the go, blending ancient wisdom with modern support to help you find your balance.
//             </Text>
//           </View>

//           <TouchableOpacity 
//             style={styles.button} 
//             onPress={() => alert('Explore clicked!')}
//           >
//             <Text style={styles.buttonText}>Explore</Text>
//           </TouchableOpacity>

//         </SafeAreaView>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={SLIDES}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal // Makes it scroll left/right
//         pagingEnabled // Snaps to the screen (doesn't stop halfway)
//         showsHorizontalScrollIndicator={false} // Hides the scroll bar
//         bounces={false} // Prevents "overscroll" effect
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   // This makes sure every "page" is exactly the width of the phone
//   screenContainer: {
//     width: width,
//     height: height,
//     backgroundColor: '#fff',
//   },
  
//   // --- SPLASH STYLES ---
//   splashContent: {
//     flex: 1,
//     backgroundColor: '#6A9C89', // Sage Green
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     marginBottom: 30,
//     tintColor: '#fff',
//   },
//   splashTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     letterSpacing: 1,
//     marginBottom: 10,
//   },
//   splashSubtitle: {
//     fontSize: 16,
//     color: '#E9EFEC',
//     fontStyle: 'italic',
//   },
//   hintText: {
//     position: 'absolute',
//     bottom: 50,
//     color: 'rgba(255,255,255,0.6)',
//     fontSize: 12,
//   },

//   // --- HOME STYLES ---
//   homeSafeContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//     paddingBottom: 40,
//     alignItems: 'center',
//   },
//   heroImage: {
//     width: width,
//     height: height * 0.5, // Takes up top 50% of screen
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },
//   textWrapper: {
//     paddingHorizontal: 30,
//     alignItems: 'center',
//   },
//   mainTitle: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: '#16423C',
//     marginBottom: 15,
//   },
//   description: {
//     fontSize: 16,
//     color: '#6A9C89',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
//   button: {
//     backgroundColor: '#16423C',
//     paddingVertical: 18,
//     paddingHorizontal: 60,
//     borderRadius: 30,
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     letterSpacing: 1,
//   },
// });

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Import Screens
// import { UserProvider } from './context/UserContext';
// import StartScreen from './screens/StartScreen';
// import Dashboard from './screens/Dashboard';
// import SOSMode from './screens/SOSMode';
// // import TherapyDetail from './screens/TherapyDetail';
// import LoginSignup from './screens/LoginSignup';
// import ZenSpace from './screens/ZenSpace';
// import Profile from './screens/Profile';
// import AudioTherapy from './screens/Audio_Therapy';
// import ReadingTherapy from './screens/ReadingTherapy';
// import YogaTherapy from './screens/YogaTherapy';
// import SpiritualTherapy from './screens/SpiritualTherapy';
// import Chatbot from './screens/Chat_bot';
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     // Wrap the whole app in UserProvider so all screens can access user data
//     <UserProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
          
//           <Stack.Screen name="Start" component={StartScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           {/* <Stack.Screen name="TherapyDetail" component={TherapyDetail} /> */}
//           <Stack.Screen name="ZenSpace" component={ZenSpace} />
//           <Stack.Screen name="SOSMode" component={SOSMode} options={{ headerShown: false }} />
//           <Stack.Screen name="AudioTherapy" component={AudioTherapy} />
//           <Stack.Screen name="ReadingTherapy" component={ReadingTherapy} />
//           <Stack.Screen name="YogaTherapy" component={YogaTherapy} />
//           <Stack.Screen name="SpiritualTherapy" component={SpiritualTherapy} />
//           <Stack.Screen name="Chatbot" component={Chatbot} />
//           {/* New Screens */}
//           <Stack.Screen 
//             name="LoginSignup" 
//             component={LoginSignup} 
//             options={{ presentation: 'modal' }} // Makes it slide up like a popup
//           />
//           <Stack.Screen name="Profile" component={Profile} />
          
//         </Stack.Navigator>
//         <StatusBar style="auto" />
//       </NavigationContainer>
//     </UserProvider>
//   );
// }



import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Platform } from 'react-native'; // <--- Added Platform & View
import * as Font from 'expo-font'; // <--- Added for Icons
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen'; // Keep splash screen visible while loading

// Import Screens
import { UserProvider } from './context/UserContext';
import StartScreen from './screens/StartScreen';
import Dashboard from './screens/Dashboard';
import SOSMode from './screens/SOSMode';
import LoginSignup from './screens/LoginSignup';
import ZenSpace from './screens/ZenSpace';
import Profile from './screens/Profile';
import AudioTherapy from './screens/Audio_Therapy';
import ReadingTherapy from './screens/ReadingTherapy';
import YogaTherapy from './screens/YogaTherapy';
import SpiritualTherapy from './screens/SpiritualTherapy';
import Chatbot from './screens/Chat_bot';

const Stack = createNativeStackNavigator();

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // 1. PRE-LOAD FONTS (Crucial for Web & Mobile Icons)
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Ionicons.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // 2. HIDE SPLASH SCREEN WHEN READY
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Keep waiting
  }

  return (
    // 3. WRAPPER VIEW WITH CONDITIONAL STYLES
    <View style={styles.container} onLayout={onLayoutRootView}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ZenSpace" component={ZenSpace} />
            <Stack.Screen name="SOSMode" component={SOSMode} />
            <Stack.Screen name="AudioTherapy" component={AudioTherapy} />
            <Stack.Screen name="ReadingTherapy" component={ReadingTherapy} />
            <Stack.Screen name="YogaTherapy" component={YogaTherapy} />
            <Stack.Screen name="SpiritualTherapy" component={SpiritualTherapy} />
            <Stack.Screen name="Chatbot" component={Chatbot} />
            
            <Stack.Screen 
              name="LoginSignup" 
              component={LoginSignup} 
              options={{ presentation: 'modal' }} 
            />
            <Stack.Screen name="Profile" component={Profile} />
            
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // 4. THE MAGIC FIX:
    // Only apply '100vh' on Web. Mobile ignores this block safely.
    ...Platform.select({
      web: {
        height: '100vh', 
        overflow: 'hidden',
      },
    }),
  },
});