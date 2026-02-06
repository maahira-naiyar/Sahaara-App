// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
// import { useUser } from '../context/UserContext';

// export default function Profile({ navigation }) {
//   const { user, logout } = useUser();

//   const handleLogout = () => {
//     logout();
//     navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.avatar} />
//         <Text style={styles.greeting}>Hello, {user?.name}</Text>
//         <Text style={styles.status}>Your mind is currently: Peaceful</Text>

//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <Text style={styles.logoutText}>Log Out</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   content: { flex: 1, alignItems: 'center', paddingTop: 60 },
//   avatar: { width: 100, height: 100, marginBottom: 20 },
//   greeting: { fontSize: 28, fontWeight: 'bold', color: '#16423C' },
//   status: { fontSize: 16, color: '#6A9C89', marginTop: 10, marginBottom: 40 },
//   logoutButton: { paddingVertical: 12, paddingHorizontal: 30, borderWidth: 1, borderColor: '#ff4444', borderRadius: 20 },
//   logoutText: { color: '#ff4444', fontSize: 16 },
// });


import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  Alert } from 'react-native';
import { useUser } from '../context/UserContext';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Profile({ navigation }) {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to exit your sanctuary?",
      [
        { text: "Stay", style: "cancel" },
        { 
          text: "Log Out", 
          style: 'destructive',
          onPress: async () => {
            await logout();
            navigation.replace('Start'); // Go back to start screen
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>← Dashboard</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* AVATAR */}
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
              style={styles.avatar} 
            />
            <View style={styles.badge}>
              <Text style={{fontSize: 20}}>🧘‍♂️</Text>
            </View>
          </View>

          {/* USER INFO */}
          <Text style={styles.name}>{user?.displayName || "Sahaara Traveler"}</Text>
          <Text style={styles.email}>{user?.email}</Text>

          {/* STATS CARD */}
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>Your Journey</Text>
            <Text style={styles.statsText}>You are taking steps toward peace every day.</Text>
          </View>

          {/* LOGOUT BUTTON */}
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

          <Text style={styles.version}>Sahaara App v1.0</Text>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#852736' },
  safeArea: { flex: 1 },
  header: { padding: 20 },
  backText: { fontSize: 16, color: '#ffffff', fontWeight: 'bold' },
  content: { alignItems: 'center', paddingTop: 40 },
  
  avatarContainer: { marginBottom: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: '#fff' },
  badge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff', padding: 8, borderRadius: 20, elevation: 5 },
  
  name: { fontSize: 24, fontWeight: 'bold', color: '#ffffff' },
  email: { fontSize: 16, color: '#d9c6bb', marginBottom: 30 },
  
  statsCard: { width: '85%', backgroundColor: '#fff', padding: 25, borderRadius: 20, alignItems: 'center', marginBottom: 40, elevation: 3 },
  statsTitle: { fontSize: 25, fontWeight: 'bold', color: '#16423C', marginBottom: 10 },
  statsText: { fontSize: 16, color: '#4b3838', textAlign: 'center', lineHeight: 22 },
  
  logoutBtn: { width: '85%', backgroundColor: '#FFEBEE', padding: 18, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#FFCDD2' },
  logoutText: { color: '#D32F2F', fontSize: 16, fontWeight: 'bold' },
  
  version: { marginTop: 30, color: '#ccc', fontSize: 12 }
});