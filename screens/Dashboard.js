
// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Platform } from 'react-native';
// import { THERAPIES } from '../data/therapyData';
// import { useUser } from '../context/UserContext'; // Get the user status

// const { height } = Dimensions.get('window');

// export default function Dashboard({ navigation }) {
//   const { user } = useUser(); // Check if user exists

//   return (
//     <View style={{ flex: 1, backgroundColor: '#F5F7F8' }}>
      
//       {/* --- NEW HEADER SECTION --- */}
//       <SafeAreaView style={styles.safeHeader}>
//         <View style={styles.headerRow}>
          
//           {/* Top Left: Back Button */}
//           <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.iconButton}>
//             <Text style={styles.backArrow}>←</Text>
//           </TouchableOpacity>

//           {/* Top Right: Dynamic Login/Profile Button */}
//           {user ? (
//             // IF LOGGED IN: Show Profile Icon
//             <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//               <Image 
//                 source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
//                 style={styles.profileIcon} 
//               />
//             </TouchableOpacity>
//           ) : (
//             // IF NOT LOGGED IN: Show "Login" Text
//             <TouchableOpacity onPress={() => navigation.navigate('LoginSignup')} style={styles.loginBtn}>
//               <Text style={styles.loginText}>Login / Sign Up</Text>
//             </TouchableOpacity>
//           )}

//         </View>
//       </SafeAreaView>

//       <ScrollView showsVerticalScrollIndicator={false}>
        
//         {/* Quote Section (Adjusted height to account for header) */}
//         <View style={[styles.quoteContainer, { height: height - 100 }]}>
//           <View style={styles.quoteBox}>
//             <Text style={styles.quoteText}>
//               "Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal."
//             </Text>
//             <Text style={styles.quoteAuthor}>- Swami Vivekananda</Text>
//           </View>
//           <Text style={styles.scrollHint}>Scroll down to begin</Text>
//           <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2985/2985150.png' }} style={styles.arrowIcon} />
//         </View>

//         {/* Journey Section */}
//         <View style={styles.journeySection}>
//           <Text style={styles.journeyTitle}>Let's take on this journey with Sahaara...</Text>
//         </View>

//         {/* Therapy List */}
//         <View style={styles.therapyList}>
//           {THERAPIES.map((therapy) => (
//             <TouchableOpacity 
//               key={therapy.id} 
//               style={styles.therapyCard} 
//               activeOpacity={0.9}
//               onPress={() => {
//       // SWITCH LOGIC: Go to specific screens based on ID
//       if (therapy.id === 'audio') navigation.navigate('AudioTherapy');
//       else if (therapy.id === 'reading') navigation.navigate('ReadingTherapy');
//       else if (therapy.id === 'yoga') navigation.navigate('YogaTherapy');
//       else if (therapy.id === 'spiritual') navigation.navigate('SpiritualTherapy');
//     }}
//             >
//               <Image source={{ uri: therapy.icon }} style={styles.cardIcon} />
//               <View style={styles.cardTextContainer}>
//                 <Text style={styles.cardTitle}>{therapy.title}</Text>
//                 <Text style={styles.cardDesc}>{therapy.desc}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//           <View style={{ height: 50 }} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // New Header Styles
//   safeHeader: { backgroundColor: '#16423C' },
//   headerRow: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     paddingHorizontal: 20, 
//     paddingVertical: 10,
//     marginTop: Platform.OS === 'android' ? 30 : 0 
//   },
//   iconButton: { padding: 10 },
//   backArrow: { color: '#fff', fontSize: 35, fontWeight: 'bold' },
//   profileIcon: { width: 40, height: 40, borderRadius: 17, borderWidth: 1, borderColor: '#fff' },
//   loginBtn: { paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: '#fff', borderRadius: 20 },
//   loginText: { color: '#fff', fontSize: 12, fontWeight: '600' },

//   // Existing Styles
//   quoteContainer: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#16423C', padding: 30 },
//   quoteBox: { borderLeftWidth: 4, borderLeftColor: '#C4DAD2', paddingLeft: 20 },
//   quoteText: { fontSize: 22, color: '#E9EFEC', lineHeight: 34, fontStyle: 'italic', fontWeight: '300' },
//   quoteAuthor: { fontSize: 16, color: '#C4DAD2', marginTop: 20, fontWeight: 'bold', textAlign: 'right' },
//   scrollHint: { position: 'absolute', bottom: 60, color: 'rgba(255,255,255,0.5)', fontSize: 14 },
//   arrowIcon: { width: 24, height: 24, position: 'absolute', bottom: 30, tintColor: 'rgba(255,255,255,0.5)' },
//   journeySection: { padding: 30, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30 },
//   journeyTitle: { fontSize: 24, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
//   therapyList: { paddingHorizontal: 20, paddingBottom: 40 },
//   therapyCard: { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 20, marginBottom: 15, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
//   cardIcon: { width: 50, height: 50, marginRight: 20 },
//   cardTextContainer: { flex: 1 },
//   cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', marginBottom: 4 },
//   cardDesc: { fontSize: 14, color: '#6A9C89' },
// });


import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Platform, FlatList } from 'react-native';
import { useUser } from '../context/UserContext'; 
import { THERAPIES } from '../data/therapyData';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');
//const CARD_WIDTH = width * 0.45; 

const GAP = 15;
const PADDING = 20;
// (Screen Width - Side Padding - Gap between cards) / 2
const GRID_CARD_WIDTH = (width - (PADDING * 2) - GAP) / 2;
export default function Dashboard({ navigation }) {
  const { user } = useUser(); 

  const handleTherapyPress = (therapyId) => {
    switch(therapyId) {
      case 'audio': navigation.navigate('AudioTherapy'); break;
      case 'reading': navigation.navigate('ReadingTherapy'); break;
      case 'yoga': navigation.navigate('YogaTherapy'); break;
      case 'spiritual': navigation.navigate('SpiritualTherapy'); break;
      default: console.warn('Unknown therapy route');
    }
  };
const goToSOS = () => navigation.navigate('SOSMode');
  const renderTherapyCard = ({ item }) => (
    <TouchableOpacity 
      style={[styles.gridCard , {width:GRID_CARD_WIDTH }]} 
      activeOpacity={0.9}
      onPress={() => handleTherapyPress(item.id)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color || '#fff' }]}>
        <Image source={{ uri: item.icon }} style={styles.hugeIcon} />
      </View>
      <View style={styles.cardTextContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc} numberOfLines={2}>{item.desc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f0c0" }}>
      {/* Header */}
      {/* <SafeAreaView style={styles.safeHeader}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.iconButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          {user ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* 1. NEW: Zen Space Link */}
      {/* <TouchableOpacity 
            onPress={() => navigation.navigate('ZenSpace')} 
            style={{ marginRight: 15, backgroundColor: 'rgba(255,255,255,0.2)', padding: 6, borderRadius: 12 }}
          >
            <Text style={{ fontSize: 18 }}>🧘‍♂️</Text> 
          </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.profileIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('LoginSignup')} style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView> */}

      <SafeAreaView style={styles.safeHeader}>
        <View style={styles.headerRow}>
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Start")}
            style={styles.iconButton}
          >
            <Ionicons name="chevron-back" size={24} color="#ffffff" />
          </TouchableOpacity>

          {/* Right Side Logic */}
          {user ? (
            // IF LOGGED IN: Show Zen Link + Profile
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ZenSpace")}
                style={{
                  fontStyle: "underline",
                  marginRight: 70,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  padding: 6,
                  borderRadius: 12,
                }}
              >
                <Text style={[styles.quoteText, { fontSize: 25 }]}>
                  My Zen Space
                </Text>
                <View style={styles.divider} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                  }}
                  style={styles.profileIcon}
                />
              </TouchableOpacity>
            </View>
          ) : (
            // IF LOGGED OUT: Show Login Button
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginSignup")}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quote Section */}
        <View style={[styles.quoteContainer, { height: height - 120 }]}>
          <View style={styles.quoteBox}>
            <Text style={styles.quoteText}>
              "Each soul is potentially divine. The goal is to manifest this
              divinity within by controlling nature, external and internal."
            </Text>
            <Text style={styles.quoteAuthor}>- Swami Vivekananda</Text>
          </View>
          <Text style={styles.scrollHint}>Scroll down to begin</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2985/2985150.png",
            }}
            style={styles.arrowIcon}
          />
        </View>

        {/* Journey Title */}
       

        {/* Therapy List */}
        {/* <View style={styles.carouselContainer}>
          <FlatList 
            data={THERAPIES}
            renderItem={renderTherapyCard}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
          />
        </View> */}

        <TouchableOpacity
          style={styles.sosCard}
          activeOpacity={0.9}
          onPress={goToSOS}
        >
          <View style={styles.sosIconBox}>
            <Text style={{ fontSize: 45 }}>🆘</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sosTitle}>Panic Relief</Text>
            <Text style={styles.sosSub}>
              Tap for immediate calm & breathing.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#decdcd" />
        </TouchableOpacity>

         <View style={styles.journeySection}>
          <Text style={styles.journeyTitle}>Your Wellness Toolkit</Text>
          <Text style={styles.journeySubtitle}>
            Select a path to begin your healing.
          </Text>
        </View>

        <View style={styles.gridContainer}>
          {THERAPIES.map((item) => (
            <View key={item.id} style={{ marginBottom: GAP }}>
              {renderTherapyCard({ item })}
            </View>
          ))}
        </View>

        {/* --- NEW SECTION: AI COMPANION --- */}
        <View style={styles.aiSection}>
          <Text style={styles.sectionHeader}>Need to talk?</Text>
          <TouchableOpacity
            style={styles.chatbotCard}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Chatbot")} // <--- Navigate to new screen
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
              }}
              style={styles.botAvatar}
            />
            <View style={styles.botTextContainer}>
              <Text style={styles.botTitle}>Sahaara Companion</Text>
              <Text style={styles.botSubtitle}>
                Chat with us for an instant stress venting session.
              </Text>
            </View>
            <View style={styles.arrowCircle}>
              {/* <Text style={{ color: "#fff", fontSize: 25,fontWeight:'bold'}}>→</Text> */}
               <Ionicons name="chevron-forward" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeHeader: { backgroundColor: '#16423C' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, marginTop: Platform.OS === 'android' ? 30 : 0 },
  iconButton: { padding: 10 },
  backArrow: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  profileIcon: { width: 40, height: 40, borderRadius: 19, borderWidth: 1, borderColor: '#f8f0c0' },
  loginBtn: { paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderColor: '#fff', borderRadius: 20 },
  loginText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  divider: { height: 2, backgroundColor: '#f8f0c0', width: '60%', alignSelf: 'center', marginVertical: 0},
  // Quote
  quoteContainer: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#16423C', padding: 40 },
  quoteBox: { borderLeftWidth: 4, borderLeftColor: '#C4DAD2', paddingLeft: 20 },
  quoteText: { marginTop:0,fontSize: 45, color: '#ffffff', lineHeight: 42, fontStyle: 'italic', fontWeight: '300', },
  quoteAuthor: { fontSize: 16, color: '#dee8e4', marginTop: 30, marginBottom : 15, fontWeight: 'bold', textAlign: 'right' },
  scrollHint: { position: 'absolute', bottom: 60, color: 'rgba(255, 255, 255, 0.92)', fontSize: 14 },
  arrowIcon: { width: 24, height: 24, position: 'absolute', bottom: 30, tintColor: 'rgba(255,255,255,0.5)' },
  
  // Journey
  journeySection: { padding: 30, paddingBottom: 10, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 0 },
  journeyTitle: { fontSize: 28, fontWeight: 'bold', color: '#16423C' },
  journeySubtitle: { fontSize: 18, color: '#3b6c59', marginTop: 2 },

  // // Horizontal Card
  // carouselContainer: { marginTop: 10 },
  // horizCard: { width: CARD_WIDTH, height: 220, backgroundColor: '#fff', borderRadius: 20, marginRight: 15, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  // iconContainer: { width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' },
  // hugeIcon: { width: 60, height: 60, resizeMode: 'contain' },
  // cardTextContent: { alignItems: 'center' },
  // cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#16423C', textAlign: 'center', marginBottom: 5 },
  // cardDesc: { fontSize: 11, color: '#888', textAlign: 'center', paddingHorizontal: 5 },


  gridContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    paddingHorizontal: PADDING, 
    justifyContent: 'space-between',
    marginTop: 10 
  },
  gridCard: { 
    height: 210, // Slightly shorter for grid balance
    backgroundColor: '#ffffff', 
    borderRadius: 20, 
    padding: 20, 
    alignItems: 'center', 
    shadowColor: '#425c47', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 7 
  },
  sosCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#852736' ,//'#FFEBEE', // Light Red Background
    marginHorizontal: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    elevation: 5,
    shadowColor:'#852736',
    marginBottom:5,
  },
  sosIconBox: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  sosTitle: { fontSize: 23, fontWeight: 'bold', color: '#ffffff' },
  sosSub: { fontSize: 16, color: '#e7d4d7' },
  iconContainer: { width: 90, height: 90, borderRadius: 44, justifyContent: 'center', alignItems: 'center', marginBottom: 2, borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' },
  hugeIcon: { width: 65, height: 65, resizeMode: 'contain' },
  cardTextContent: { alignItems: 'center' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', textAlign: 'center', marginBottom: 3, marginTop:5, },
  cardDesc: { fontSize: 14, color: '#6a6a6a', textAlign: 'center' },
  // --- AI SECTION STYLES ---
  aiSection: { padding: 20, marginTop: 10 },
  sectionHeader: { fontSize: 25, fontWeight: 'bold', color: '#16423C', marginBottom: 15 },
  chatbotCard: { flexDirection: 'row', backgroundColor: '#16423C', borderRadius: 20, padding: 20, alignItems: 'center', elevation: 3 },
  botAvatar: { width: 70, height: 70, marginRight: 15 },
  botTextContainer: { flex: 1 },
  botTitle: { fontSize: 20, fontWeight: 'bold', color: '#ffffff' },
  botSubtitle: { fontSize: 15, color: '#c4e2df', marginTop: 4, lineHeight: 18 },
  arrowCircle: { width: 33, height: 33, borderRadius: 17, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
});