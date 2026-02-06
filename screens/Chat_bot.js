// import React, { useState, useRef, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, FlatList, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

// const BOT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png';
// const USER_AVATAR = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

// // --- EMPATHETIC ENGINE (Simple Local Logic) ---
// const getBotResponse = (text) => {
//   const lowerText = text.toLowerCase();

//   if (lowerText.includes('sad') || lowerText.includes('depress') || lowerText.includes('cry')) {
//     return "I hear you, and it's okay to feel this way. You are carrying a lot. Remember, tears are just the soul's way of healing. Do you want to talk about what caused this?";
//   }
//   if (lowerText.includes('anx') || lowerText.includes('worry') || lowerText.includes('scared') || lowerText.includes('panic')) {
//     return "Take a deep breath with me... In... and Out. You are safe right now. Anxiety lies to us about the future. Let's focus on this exact moment. What is one thing you can see around you?";
//   }
//   if (lowerText.includes('stress') || lowerText.includes('tire') || lowerText.includes('work') || lowerText.includes('overwhelm')) {
//     return "It sounds like you've been carrying the weight of the world. You deserve rest, not just sleep, but mental rest. Have you taken a small pause for yourself today?";
//   }
//   if (lowerText.includes('happy') || lowerText.includes('good') || lowerText.includes('great')) {
//     return "I'm so happy to hear that! Hold onto this feeling. What is the best part of your day so far?";
//   }
//   if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
//     return "Hello, friend. I am here to listen. No judgments, just a safe space. How is your heart feeling right now?";
//   }
//   if (lowerText.includes('thank')) {
//     return "You are very welcome. I'm always here for you. 🌿";
//   }
  
//   // Default Response
//   return "I'm listening. Please, tell me more. I'm here to support you.";
// };

// export default function Chatbot({ navigation }) {
//   const [messages, setMessages] = useState([
//     { id: '1', text: "Hello there! How are you feeling today?", sender: 'bot' }
//   ]);
//   const [inputText, setInputText] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   const flatListRef = useRef();

//   const handleSend = () => {
//     if (inputText.trim() === '') return;

//     const userMsg = { id: Date.now().toString(), text: inputText, sender: 'user' };
//     setMessages(prev => [...prev, userMsg]);
//     setInputText('');
//     setIsTyping(true);

//     // Simulate "Thinking" time
//     setTimeout(() => {
//       const botReplyText = getBotResponse(userMsg.text);
//       const botMsg = { id: (Date.now() + 1).toString(), text: botReplyText, sender: 'bot' };
//       setMessages(prev => [...prev, botMsg]);
//       setIsTyping(false);
//     }, 1500); 
//   };

//   // Auto-scroll to bottom
//   useEffect(() => {
//     flatListRef.current?.scrollToEnd({ animated: true });
//   }, [messages, isTyping]);

//   const renderMessage = ({ item }) => {
//     const isBot = item.sender === 'bot';
//     return (
//       <View style={[styles.msgRow, isBot ? styles.msgRowLeft : styles.msgRowRight]}>
//         {isBot && <Image source={{ uri: BOT_AVATAR }} style={styles.avatar} />}
//         <View style={[styles.bubble, isBot ? styles.bubbleLeft : styles.bubbleRight]}>
//           <Text style={[styles.msgText, isBot ? styles.msgTextLeft : styles.msgTextRight]}>{item.text}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//             <Text style={styles.backText}>←</Text>
//           </TouchableOpacity>
//           <View>
//             <Text style={styles.headerTitle}>Sahaara Companion</Text>
//             <Text style={styles.headerSubtitle}>Always here to listen</Text>
//           </View>
//           <View style={{width: 30}} /> 
//         </View>

//         {/* CHAT LIST */}
//         <FlatList
//           ref={flatListRef}
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.chatContent}
//           showsVerticalScrollIndicator={false}
//           ListFooterComponent={isTyping ? (
//             <View style={styles.typingContainer}>
//               <Text style={styles.typingText}>Sahaara is typing...</Text>
//             </View>
//           ) : null}
//         />

//         {/* INPUT AREA */}
//         <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Type your feelings here..."
//               placeholderTextColor="#999"
//               value={inputText}
//               onChangeText={setInputText}
//               multiline
//             />
//             <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
//               <Text style={styles.sendIcon}>➤</Text>
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>

//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F0F4F8' },
//   safeArea: { flex: 1 },
  
//   // Header
//   header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', elevation: 2, borderBottomWidth: 1, borderBottomColor: '#eee' },
//   backBtn: { padding: 10 },
//   backText: { fontSize: 24, color: '#16423C' },
//   headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
//   headerSubtitle: { fontSize: 12, color: '#4DB6AC', textAlign: 'center' },

//   // Chat Area
//   chatContent: { padding: 20, paddingBottom: 20 },
//   msgRow: { flexDirection: 'row', marginBottom: 15, alignItems: 'flex-end' },
//   msgRowLeft: { justifyContent: 'flex-start' },
//   msgRowRight: { justifyContent: 'flex-end' },
//   avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  
//   bubble: { maxWidth: '75%', padding: 15, borderRadius: 20, elevation: 1 },
//   bubbleLeft: { backgroundColor: '#fff', borderBottomLeftRadius: 5 },
//   bubbleRight: { backgroundColor: '#16423C', borderBottomRightRadius: 5 },
  
//   msgText: { fontSize: 15, lineHeight: 22 },
//   msgTextLeft: { color: '#333' },
//   msgTextRight: { color: '#fff' },

//   typingContainer: { paddingLeft: 60, marginBottom: 10 },
//   typingText: { color: '#999', fontStyle: 'italic', fontSize: 12 },

//   // Input
//   inputContainer: { flexDirection: 'row', padding: 15, backgroundColor: '#fff', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#eee' },
//   input: { flex: 1, backgroundColor: '#F5F7F8', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, maxHeight: 100, color: '#333' },
//   sendBtn: { marginLeft: 10, width: 45, height: 45, borderRadius: 25, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
//   sendIcon: { color: '#fff', fontSize: 18, marginBottom: 2 },
// });


import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  TextInput, FlatList, KeyboardAvoidingView, Platform, Keyboard, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
// --- CONFIGURATION ---
// 1. PASTE YOUR API KEY HERE (Keep the quotes!)
//const GEMINI_API_KEY = 'AIzaSyCdSpI4x1Ra8J9sFuc_rtHtD81reY51bqQ'; 
import { GEMINI_API_KEY } from '../secrets';
const BOT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png';
const USER_AVATAR = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

// --- SYSTEM INSTRUCTION ---
// This tells the AI how to behave.
const SYSTEM_PROMPT = `
You are Sahaara, a warm, empathetic, and gentle mental health companion. 
Your goal is to listen, validate feelings, and offer calm, grounding advice.
- Keep responses concise (2-3 sentences max) to feel like a chat.
- Never judge. Always be supportive.
- If a user mentions self-harm, gently urge them to seek professional help immediately.
- Use soothing emojis occasionally (🌿, ☁️, 💜).
`;

export default function Chatbot({ navigation }) {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello there! I'm Sahaara. How is your heart feeling today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const flatListRef = useRef();

  // --- REAL AI FUNCTION ---
  const sendToGemini = async (userMessage, history) => {
    try {
      console.log("--------------------------------");
      console.log("📤 SENDING TO AI:", userMessage);
      // UPDATED MODEL: 'gemini-2.5-flash' (The current 2026 Free Tier Standard)
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        //`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              // System Instruction as the first message
              { 
                role: "user", 
                parts: [{ text: SYSTEM_PROMPT }] 
              },
              ...history, 
              { 
                role: "user", 
                parts: [{ text: userMessage }] 
              } 
            ]
          })
        }
      );

      const data = await response.json();

      // DEBUG LOGGING
      if (data.error) {
        console.log("API ERROR:", JSON.stringify(data.error, null, 2));
        
        // If 2.5 Flash also fails, we fall back to the ultra-light model
        if (data.error.code === 404 || data.error.code === 429) {
           return "I'm having trouble connecting to the 2.5 model. Please try changing the URL to 'gemini-2.5-flash-lite' in the code.";
        }
        return `Connection Error: ${data.error.message}`;
      }

      if (data.candidates && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "I'm listening, but I couldn't quite catch that. Could you say it again?";
      }

    } catch (error) {
      console.error(error);
      return "I'm sorry, I seem to be offline. Please try again later.";
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    // 1. Add User Message to UI
    const userMsg = { id: Date.now().toString(), text: inputText, sender: 'user' };
    const currentInput = inputText; // Save text for API call
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // 2. Prepare Conversation History for Context (Last 5 messages)
    // We format it the way Google Gemini expects: { role: "user" | "model", parts: [{ text: "..." }] }
    const history = messages.slice(-6).map(msg => ({
        role: msg.sender === 'user' ? "user" : "model",
        parts: [{ text: msg.text }]
    }));

    // 3. Get Real Response
    const botReplyText = await sendToGemini(currentInput, history);

    // 4. Add Bot Message to UI
    const botMsg = { id: (Date.now() + 1).toString(), text: botReplyText, sender: 'bot' };
    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  // Auto-scroll logic
  useEffect(() => {
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  }, [messages, isTyping]);

  const renderMessage = ({ item }) => {
    const isBot = item.sender === 'bot';
    return (
      <View style={[styles.msgRow, isBot ? styles.msgRowLeft : styles.msgRowRight]}>
        {isBot && <Image source={{ uri: BOT_AVATAR }} style={styles.avatar} />}
        <View style={[styles.bubble, isBot ? styles.bubbleLeft : styles.bubbleRight]}>
          <Text style={[styles.msgText, isBot ? styles.msgTextLeft : styles.msgTextRight]}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            {/* <Text style={styles.backText}>←</Text> */}
            <Ionicons name="chevron-back" size={24} color="#16423C" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Sahaara Companion</Text>
            <Text style={styles.headerSubtitle}>Powered by AI • Always listening</Text>
          </View>
          <View style={{width: 30}} /> 
        </View>

        {/* CHAT LIST */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={isTyping ? (
            <View style={styles.typingContainer}>
              <ActivityIndicator size="small" color="#16423C" />
              <Text style={styles.typingText}> Sahaara is thinking...</Text>
            </View>
          ) : null}
        />

        {/* INPUT AREA */}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}style={{ flexGrow: 0 }}>
          {/* earlier 10 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Share your thoughts..."
              placeholderTextColor="#999"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity style={styles.sendBtn} onPress={handleSend} disabled={isTyping}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8' },
  safeArea: { flex: 1 },
  
  // Header
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', elevation: 4, shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity:0.1, shadowRadius:4 },
  backBtn: { padding: 10 },
  backText: { fontSize: 27, color: '#16423C', fontStyle:'bold' },
  headerTitle: { fontSize: 25, fontWeight: 'bold', color: '#16423C', textAlign: 'center' },
  headerSubtitle: { fontSize: 17, color: '#4DB6AC', textAlign: 'center' },

  // Chat Area
  chatContent: { padding: 20, paddingBottom: 20 },
  msgRow: { flexDirection: 'row', marginBottom: 15, alignItems: 'flex-end' },
  msgRowLeft: { justifyContent: 'flex-start' },
  msgRowRight: { justifyContent: 'flex-end' },
  avatar: { width: 40, height: 40, borderRadius: 18, marginRight: 10 },
  
  bubble: { maxWidth: '75%', padding: 15, borderRadius: 20, elevation: 1 },
  bubbleLeft: { backgroundColor: '#f8f0c0', borderBottomLeftRadius: 5 },
  bubbleRight: { backgroundColor: '#16423C', borderBottomRightRadius: 5 },
  
  msgText: { fontSize: 18, lineHeight: 24 },
  msgTextLeft: { color: '#333' },
  msgTextRight: { color: '#fff' },

  typingContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: 50, marginBottom: 20, },
  typingText: { color: '#999', fontStyle: 'italic', fontSize: 12, marginLeft: 10 },

  // Input
  inputContainer: { flexDirection: 'row', padding: 15, backgroundColor: '#fff', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#eee' },
  input: { flex: 1, backgroundColor: '#F5F7F8', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 12, fontSize: 16, maxHeight: 100, color: '#333' },
  sendBtn: { marginLeft: 10, width: 45, height: 45, borderRadius: 25, backgroundColor: '#16423C', justifyContent: 'center', alignItems: 'center' },
  sendIcon: { color: '#fff', fontSize: 18, marginBottom: 2 },
});

