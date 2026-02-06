// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
// import { useUser } from '../context/UserContext'; // Import our new tool

// export default function LoginSignup({ navigation }) {
//   const { login } = useUser();
//   const [name, setName] = useState('');

//   const handleLogin = () => {
//     if (name.trim().length > 0) {
//       login(name); // Tell the app we are logged in
//       navigation.goBack(); // Go back to Dashboard
//     } else {
//       alert("Please enter a name");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Welcome to Sahaara</Text>
//         <Text style={styles.subtitle}>Begin your wellness journey</Text>

//         <TextInput 
//           style={styles.input}
//           placeholder="Enter your name"
//           value={name}
//           onChangeText={setName}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Sign In / Sign Up</Text>
//         </TouchableOpacity>
        
//         <Text style={styles.note}>(This is a simulation. No password needed yet.)</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F7F8' },
//   content: { flex: 1, padding: 30, justifyContent: 'center' },
//   title: { fontSize: 32, fontWeight: 'bold', color: '#16423C', marginBottom: 10 },
//   subtitle: { fontSize: 18, color: '#6A9C89', marginBottom: 40 },
//   input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, fontSize: 16, marginBottom: 20 },
//   button: { backgroundColor: '#16423C', padding: 18, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
//   note: { marginTop: 20, textAlign: 'center', color: '#888', fontStyle: 'italic' },
// });



import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

export default function LoginSignup({ navigation }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    setLoading(true);
    setError('');

    console.log("--------------------------------");
    console.log(`🔘 Button Pressed: ${isLogin ? "LOGIN" : "SIGNUP"}`); 
    console.log(`📧 Email provided: ${email}`);
    
    try {
      if (isLogin) {
        // LOGIN LOGIC
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // SIGNUP LOGIC
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Set their display name immediately
        await updateProfile(userCredential.user, { displayName: name });
      }
      // Navigate to Dashboard on success
      navigation.replace('Dashboard');
    } catch (err) {
      // Friendly error messages
      let msg = err.message;
      if (msg.includes('invalid-email')) msg = "That email doesn't look right.";
      if (msg.includes('user-not-found')) msg = "No account found with this email.";
      if (msg.includes('wrong-password')) msg = "Incorrect password.";
      if (msg.includes('email-already-in-use')) msg = "That email is already taken.";
      if (msg.includes('weak-password')) msg = "Password should be at least 6 characters.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formCard}>
        
        {/* LOGO */}
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={styles.logo} />
        <Text style={styles.title}>{isLogin ? 'Welcome Back' : 'Join Sahaara'}</Text>
        <Text style={styles.subtitle}>{isLogin ? 'Sign in to continue your journey' : 'Start your healing journey today'}</Text>

        {/* INPUTS */}
        {!isLogin && (
          <TextInput 
            style={styles.input} 
            placeholder="Full Name" 
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        )}
        
        <TextInput 
          style={styles.input} 
          placeholder="Email Address" 
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* BUTTON */}
        <TouchableOpacity style={styles.mainBtn} onPress={handleAuth} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          )}
        </TouchableOpacity>

        {/* TOGGLE */}
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchContainer}>
          <Text style={styles.switchText}>
            {isLogin ? "Don't have an account? " : "Already have an account? "} 
            <Text style={styles.switchBold}>{isLogin ? "Sign Up" : "Login"}</Text>
          </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#16423C', justifyContent: 'center', padding: 20 },
  formCard: { backgroundColor: '#fff', borderRadius: 25, padding: 30, alignItems: 'center', shadowColor: "#000", shadowOffset: {width:0, height:10}, shadowOpacity: 0.2, shadowRadius: 20, elevation: 10 },
  logo: { width: 60, height: 60, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#16423C', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#6A9C89', marginBottom: 30 },
  input: { width: '100%', height: 50, backgroundColor: '#F5F7F8', borderRadius: 12, paddingHorizontal: 15, marginBottom: 15, fontSize: 16, color: '#333' },
  mainBtn: { width: '100%', height: 50, backgroundColor: '#16423C', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10, elevation: 2 },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  switchContainer: { marginTop: 20 },
  switchText: { color: '#666', fontSize: 14 },
  switchBold: { color: '#16423C', fontWeight: 'bold' },
  errorText: { color: '#D32F2F', marginBottom: 10, fontSize: 13, textAlign: 'center' }
});