// import React, { useEffect, useRef } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// const { width, height } = Dimensions.get('window');
// const SLIDES = [{ id: '1', type: 'splash' }, { id: '2', type: 'about' }];

// export default function StartScreen({ navigation }) {
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     // Auto scroll to 2nd slide after 5 seconds
//     const timer = setTimeout(() => {
//       flatListRef.current?.scrollToIndex({ index: 1, animated: true });
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderItem = ({ item }) => {
//     if (item.type === 'splash') {
//       return (
//         <View style={styles.screenContainer}>
          
//           <View style={styles.splashContent}>
            
//             <Image source={require('../assets/logomain.png')} style={styles.logo} />
//             <Text style={styles.splashTitle}>Welcome to SAHAARA</Text>
//             <Text style={styles.splashSubtitle}>Your Mental Wellness Support</Text>
//             <Text style={styles.hintText}>(Swipe left to begin)</Text>
//           </View>
//         </View>
//       );
//     }
//     return (
//       <View style={styles.screenContainer}>
//         <View style={styles.homeSafeContainer}>
//           <Image source={require('../assets/homepage.png')} style={styles.heroImage} />
//            <View style={styles.textWrapper}> 
//             <Text style={styles.mainTitle}>Sahaara</Text>
//             <Text style={styles.description}>
//               Discover a sanctuary for your mind. Sahaara provides holistic therapy on the go, blending ancient wisdom with modern support to help you find your balance.
//             </Text>
//            </View> 
//           {/* NAVIGATION HAPPENS HERE */}
//           <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Dashboard')}>
//             <Text style={styles.buttonText}>Explore</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         ref={flatListRef}
//         data={SLIDES}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         bounces={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // screenContainer: { flex:1, width: width, height: height, backgroundColor: '#fff' },
//   // splashContent: { flex: 1, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   // logo: { width: 220, height: 220, marginBottom: 30, },
//   // splashTitle: { fontSize: 30, fontWeight: 'bold', color: '#f8f0c0', marginBottom: 10 },
//   // splashSubtitle: { fontSize: 17, color: '#ffffff' , fontStyle: 'italic' },
//   // hintText: { position: 'absolute', bottom: 50, color: '#ffffff', fontSize: 14 },
//   // homeSafeContainer: { flex: 1, justifyContent: 'space-between', paddingBottom: 40, alignItems: 'center' },
//   // heroImage: { width: width, height: height * 0.5, resizeMode: 'cover', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
//   // textWrapper: { paddingHorizontal: 30, alignItems: 'center' },
//   // mainTitle: { fontSize: 34, fontWeight: 'bold', color: '#16423C', marginBottom: 15 },
//   // description: { fontSize: 16, color: '#6A9C89', textAlign: 'center', lineHeight: 24 },
//   // button: { backgroundColor: '#16423C', paddingVertical: 18, paddingHorizontal: 60, borderRadius: 30, marginTop: 20 },
//   // buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },

//   screenContainer: { flex:1, width: width, height: height, backgroundColor: '#fff' },
//   splashContent: { flex: 1, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   logo: { width: 220, height: 220, marginBottom: 30, },
//   splashTitle: { fontSize: 30, fontWeight: 'bold', color: '#f8f0c0', marginBottom: 10 },
//   splashSubtitle: { fontSize: 17, color: '#ffffff' , fontStyle: 'italic' },
//   hintText: { position: 'absolute', bottom: 50, color: '#ffffff', fontSize: 14 },
//   homeSafeContainer: { flex: 1, justifyContent: 'space-between', paddingBottom: 40, alignItems: 'center' },
//   heroImage: {width: width, height: height * 0.5, resizeMode: 'cover', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
//   textWrapper: { paddingHorizontal: 30, alignItems: 'center' },
//   mainTitle: { fontSize: 34, fontWeight: 'bold', color: '#16423C', marginBottom: 15 },
//   description: { fontSize: 16, color: '#6A9C89', textAlign: 'center', lineHeight: 24 },
//   button: { backgroundColor: '#16423C', paddingVertical: 18, paddingHorizontal: 60, borderRadius: 30, marginTop: 20 },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },

// });
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, ImageBackground, StatusBar } from 'react-native';

// Use 'screen' height to ensure it covers bottom navigation bar areas
const { width, height } = Dimensions.get('screen');

const SLIDES = [{ id: '1', type: 'splash' }, { id: '2', type: 'about' }];

export default function StartScreen({ navigation }) {
  const flatListRef = useRef(null);

  useEffect(() => {
    // Auto scroll to 2nd slide after 5 seconds
    const timer = setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: 1, animated: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }) => {
    // --- SLIDE 1: SPLASH SCREEN ---
    if (item.type === 'splash') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.splashContent}>
            <Image source={require('../assets/logomain.png')} style={styles.logo} />
            <Text style={styles.splashTitle}>Welcome to SAHAARA</Text>
            <Text style={styles.splashSubtitle}>Your Mental Wellness Support</Text>
            <Text style={styles.hintText}>(Swipe left or wait...)</Text>
          </View>
        </View>
      );
    }

    // --- SLIDE 2: EXPLORE SCREEN (Modified) ---
    return (
      <View style={styles.screenContainer}>
        <ImageBackground 
          source={require('../assets/homepage.png')} 
          style={styles.fullScreenImage}
          resizeMode="cover"
        >
          {/* Dark Overlay to make text readable on the image */}
          <View style={styles.overlay}>
            
            {/* Text & Button Wrapper - Positioned at Top */}
            <View style={styles.topContentWrapper}> 
              <Text style={styles.mainTitle}>Sahaara</Text>
              
              <Text style={styles.description}>
                Discover a sanctuary for your mind. Sahaara provides holistic therapy on the go, blending ancient wisdom with modern support to help you find your balance.
              </Text>

              <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Dashboard')}>
                <Text style={styles.buttonText}>Explore</Text>
              </TouchableOpacity>
            </View> 

          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* This fixes the top/bottom gaps by making the app draw under the system bars */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        getItemLayout={(data, index) => (
          { length: width, offset: width * index, index }
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Container takes full screen dimensions
  screenContainer: { 
    width: width, 
    height: height, 
    backgroundColor: '#fff' 
  },

  // --- SPLASH STYLES ---
  splashContent: { 
    flex: 1, 
    backgroundColor: '#16423C', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logo: { 
    width: 220, 
    height: 220, 
    marginBottom: 20, 
    marginTop: 30,
  },
  splashTitle: { 
    fontSize: 33, 
    fontWeight: 'bold', 
    color: '#f8f0c0', 
    marginBottom: 10 
  },
  splashSubtitle: { 
    fontSize: 17, 
    color: '#ffffff', 
    fontStyle: 'italic' 
  },
  hintText: { 
    position: 'absolute', 
    bottom: 50, 
    marginBottom: 30,
    color: 'rgb(255, 255, 255)', 
    fontSize: 14 
  },

  // --- EXPLORE SCREEN STYLES ---
  fullScreenImage: {
    width: width,
    height: height,
     // Ensures it hits the absolute bottom
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adds a dark tint so white text pops
    alignItems: 'center',
  },
  topContentWrapper: {
    marginTop: 90, // Pushes content down (40px + StatusBar height)
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
  },
  mainTitle: { 
    fontSize: 48, // Made slightly bigger for impact
    fontWeight: 'bold', 
    color: '#fff', // White text to stand out on image
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  description: { 
    fontSize: 16, 
    color: '#E0F2F1', // Light mint/white color
    textAlign: 'center', 
    lineHeight: 24,
    marginBottom: 40,
  },
  button: { 
    backgroundColor: '#fff', // White button
    paddingVertical: 15, 
    paddingHorizontal: 50, 
    borderRadius: 30, 
    elevation: 5 
  },
  buttonText: { 
    color: '#16423C', // Dark Green text
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});