

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Dimensions, Modal, Linking, ImageBackground } from 'react-native';

// const { width, height } = Dimensions.get('window');

// // --- DATA: QUOTES (Top Carousel) ---
// const QUOTES = [
//   { id: '1', text: '"Everything you lose is a step you take. You have not lost anything. You have simply shifted."', author: 'Brianna Wiest' },
//   { id: '2', text: '"I closed my eyes to look inward and found a universe waiting to be loved."', author: 'Yung Pueblo' },
//   { id: '3', text: '"And, when you want something, all the universe conspires in helping you to achieve it."', author: 'Paulo Coelho' },
//   { id: '4', text: '"In the infinity of life where I am, all is perfect, whole, and complete."', author: 'Louise Hay' },
// ];

// // --- DATA: BOOKS (With Summaries) ---
// const BOOKS = [
//   { 
//     id: '1', 
//     title: 'Lighter', 
//     author: 'Yung Pueblo', 
//     cover: 'https://m.media-amazon.com/images/I/81X4R7QhFUL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Healing',
//     summary: "Healing isn't about becoming a different person; it is about unlearning who you were forced to be. This book invites you to let go of the heavy burdens—old pains and past versions of yourself. As you release them, you don't become empty; you become lighter.",
//     teachings: ['Radical Honesty: Change starts when you sit with your emotions.', 'The Power of Pause: Reacting is defense; pausing is healing.', 'Self-Love: It is the boundary that keeps toxicity out.'],
//     quote: "I closed my eyes to look inward and found a universe waiting to be loved."
//   },
//   { 
//     id: '2', 
//     title: '101 Essays', 
//     author: 'Brianna Wiest', 
//     cover: 'https://m.media-amazon.com/images/I/71r4k-a-uRL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Clarity',
//     summary: "Sometimes, the mountain standing in your way isn't the world—it's the way you are looking at it. This collection reassures you that feeling lost is a sign you are waking up. You are not falling behind; you are simply evolving.",
//     teachings: ['Discomfort is Growth: Feelings you run from are trying to teach you.', 'Subconscious Behaviors: We self-sabotage when happiness feels unfamiliar.', 'Routine as Sanctuary: Small daily acts matter more than big grand gestures.'],
//     quote: "Everything you lose is a step you take. Thus, you have not lost anything. You have simply shifted."
//   },
//   { 
//     id: '3', 
//     title: 'The Alchemist', 
//     author: 'Paulo Coelho', 
//     cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Purpose',
//     summary: "Have you ever felt a dream placed in your heart? This story reminds you that the universe is actively conspiring to help you. When you are anxious about the future, remember: the journey itself is the treasure.",
//     teachings: ['The Language of the World: The universe speaks in signs.', 'Fear is the Obstacle: The fear of suffering is worse than the suffering itself.', 'Maktub: Trust that what is meant for you will never pass you by.'],
//     quote: "And, when you want something, all the universe conspires in helping you to achieve it."
//   },
//   { 
//     id: '4', 
//     title: 'You Can Heal Your Life', 
//     author: 'Louise Hay', 
//     cover: 'https://m.media-amazon.com/images/I/81mXQdi5x+L._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Self Love',
//     summary: "Imagine if the most powerful medicine was being kind to yourself. Louise Hay teaches that self-criticism is the root of suffering. By changing the 'internal talk' from judgment to love, you create a safe environment for your body to heal.",
//     teachings: ['Forgiveness Sets You Free: It releases poison from your system.', 'The Mirror Exercise: Look in your eyes and say "I love you".', 'Thoughts Become Things: Every thought creates your future.'],
//     quote: "In the infinity of life where I am, all is perfect, whole, and complete."
//   },
// ];

// // --- DATA: ARTICLES (With Real Links) ---
// const ARTICLES = [
//   { id: '1', title: '5 Ways to Hack Anxiety', category: 'Anxiety', image: 'https://images.unsplash.com/photo-1499209974431-276138d71629?w=400&q=80', time: '3 min read', url: 'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety' },
//   { id: '2', title: 'The Japanese Art of Rest', category: 'Burnout', image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?w=400&q=80', time: '5 min read', url: 'https://time.com/5622094/what-is-niksen-dutch-concept-doing-nothing/' },
//   { id: '3', title: 'Why You Feel Lonely', category: 'Emotion', image: 'https://images.unsplash.com/photo-1516302752625-f7a252e2e11f?w=400&q=80', time: '4 min read', url: 'https://www.psychologytoday.com/us/basics/loneliness' },
//   { id: '4', title: 'Detox Your Dopamine', category: 'Focus', image: 'https://images.unsplash.com/photo-1555685812-4b943f3db990?w=400&q=80', time: '6 min read', url: 'https://jamesclear.com/marginal-gains' },
//   { id: '5', title: 'Journaling for Clarity', category: 'Habits', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80', time: '3 min read', url: 'https://zenhabits.net/process/' },
//   { id: '6', title: 'Sleep Better Tonight', category: 'Health', image: 'https://images.unsplash.com/photo-1541781777621-af1394372795?w=400&q=80', time: '4 min read', url: 'https://www.sleepfoundation.org/sleep-hygiene' },
// ];

// export default function ReadingTherapy({ navigation }) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const openBookSummary = (book) => {
//     setSelectedBook(book);
//     setModalVisible(true);
//   };

//   // --- RENDER: Quote Card (Top) ---
//   const renderQuote = ({ item }) => (
//     <View style={styles.quoteContainer}>
//       <View style={styles.quoteCard}>
//         <Text style={styles.quoteText}>{item.text}</Text>
//         <Text style={styles.quoteAuthor}>- {item.author}</Text>
//       </View>
//     </View>
//   );
  
//   // --- RENDER: Book Card ---
//   const renderBook = ({ item }) => (
//     <TouchableOpacity style={styles.bookCard} onPress={() => openBookSummary(item)}>
//       <Image source={{ uri: item.cover }} style={styles.bookCover} />
//       <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
//       <Text style={styles.bookAuthor}>{item.topic}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Reading Room</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. TOP SECTION: Quotes Carousel */}
//           <View style={styles.quoteSection}>
//              <FlatList 
//                 data={QUOTES}
//                 renderItem={renderQuote}
//                 keyExtractor={item => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//              />
//           </View>

//           {/* 2. CREATIVE TOUCH: "Daily Highlight" Hero Card */}
//           <View style={styles.heroSection}>
//             <Text style={styles.sectionTitle}>Daily Insight</Text>
//             <TouchableOpacity style={styles.heroCard} onPress={() => Linking.openURL('https://pemachodronfoundation.org/')}>
//               <View style={styles.heroContent}>
//                 <Text style={styles.heroTag}>#MINDFULNESS</Text>
//                 <Text style={styles.heroTitle}>"You are the sky. Everything else is just the weather."</Text>
//                 <Text style={styles.heroSubtitle}>Read Pema Chödrön's guide →</Text>
//               </View>
//               <Image 
//                 source={{ uri: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&q=80' }} 
//                 style={styles.heroImage} 
//               />
//             </TouchableOpacity>
//           </View>

//           {/* 3. HORIZONTAL SCROLL: Book Excerpts */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>From the Bookshelf</Text>
//             <Text style={styles.sectionSubtitle}>Tap for summaries & key teachings.</Text>
            
//             <FlatList 
//               data={BOOKS}
//               renderItem={renderBook}
//               keyExtractor={item => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
//             />
//           </View>

//           {/* 4. VERTICAL GRID: Articles & Blogs */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Understand Your Mind</Text>
//             <Text style={styles.sectionSubtitle}>Practical guides for everyday struggles.</Text>
            
//             <View style={styles.blogGrid}>
//               {ARTICLES.map((article) => (
//                 <TouchableOpacity 
//                   key={article.id} 
//                   style={styles.blogCard}
//                   onPress={() => Linking.openURL(article.url)} // <--- LINKING ADDED HERE
//                 >
//                   <Image source={{ uri: article.image }} style={styles.blogImage} />
//                   <View style={styles.blogTextContent}>
//                     <View style={styles.categoryBadge}>
//                       <Text style={styles.categoryText}>{article.category}</Text>
//                     </View>
//                     <Text style={styles.blogTitle}>{article.title}</Text>
//                     <Text style={styles.blogTime}>{article.time}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//         </ScrollView>
//       </SafeAreaView>

//       {/* --- BOOK SUMMARY MODAL --- */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
            
//             {/* Modal Header */}
//             <View style={styles.modalHeader}>
//               <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>✕</Text>
//               </TouchableOpacity>
//             </View>

//             {selectedBook && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Image source={{ uri: selectedBook.cover }} style={styles.modalCover} />
//                 <Text style={styles.modalTitle}>{selectedBook.title}</Text>
//                 <Text style={styles.modalAuthor}>by {selectedBook.author}</Text>
                
//                 <View style={styles.modalSection}>
//                   <Text style={styles.modalSectionTitle}>The Essence</Text>
//                   <Text style={styles.modalText}>{selectedBook.summary}</Text>
//                 </View>

//                 <View style={styles.modalQuoteBox}>
//                   <Text style={styles.modalQuoteText}>"{selectedBook.quote}"</Text>
//                 </View>

//                 <View style={styles.modalSection}>
//                   <Text style={styles.modalSectionTitle}>Key Teachings</Text>
//                   {selectedBook.teachings.map((teaching, index) => (
//                     <View key={index} style={styles.teachingRow}>
//                       <Text style={styles.bulletPoint}>•</Text>
//                       <Text style={styles.teachingText}>{teaching}</Text>
//                     </View>
//                   ))}
//                 </View>

//                 <TouchableOpacity style={styles.buyButton} onPress={() => setModalVisible(false)}>
//                   <Text style={styles.buyButtonText}>Close Summary</Text>
//                 </TouchableOpacity>
//                 <View style={{height: 30}} />
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FFF4E0' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#5D4037' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#5D4037' },
//   scrollContent: { paddingBottom: 50 },

//   // QUOTES CAROUSEL
//   quoteSection: { marginBottom: 15 },
//   quoteContainer: { width: width, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
//   quoteCard: { backgroundColor: '#5D4037', padding: 20, borderRadius: 15, width: '100%', alignItems: 'center' },
//   quoteText: { color: '#FFF4E0', fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginBottom: 10 },
//   quoteAuthor: { color: '#D7CCC8', fontSize: 12, fontWeight: 'bold' },

//   // HERO CARD
//   heroSection: { marginTop: 10 },
//   sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#5D4037', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 14, color: '#8D6E63', marginLeft: 20, marginBottom: 15 },
//   heroCard: { marginHorizontal: 20, marginTop: 10, height: 180, borderRadius: 20, backgroundColor: '#3E2723', overflow: 'hidden', flexDirection: 'row' },
//   heroContent: { flex: 1, padding: 20, justifyContent: 'center' },
//   heroTag: { color: '#FFCCBC', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
//   heroTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 10 },
//   heroSubtitle: { color: '#D7CCC8', fontSize: 12 },
//   heroImage: { width: 120, height: '100%', opacity: 0.8 },

//   // BOOK SHELF
//   sectionContainer: { marginTop: 30 },
//   bookCard: { width: 110, marginRight: 15 },
//   bookCover: { width: 110, height: 160, borderRadius: 10, marginBottom: 8, backgroundColor: '#ddd' },
//   bookTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723' },
//   bookAuthor: { fontSize: 12, color: '#8D6E63' },

//   // BLOG GRID
//   blogGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
//   blogCard: { width: (width / 2) - 25, backgroundColor: '#fff', marginBottom: 20, borderRadius: 15, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity:0.1, shadowRadius:4 },
//   blogImage: { width: '100%', height: 120 },
//   blogTextContent: { padding: 12 },
//   categoryBadge: { alignSelf: 'flex-start', backgroundColor: '#FFF3E0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 8 },
//   categoryText: { color: '#E65100', fontSize: 10, fontWeight: 'bold' },
//   blogTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723', marginBottom: 5, lineHeight: 20 },
//   blogTime: { fontSize: 11, color: '#999' },

//   // MODAL STYLES
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
//   modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, height: '85%', padding: 20 },
//   modalHeader: { alignItems: 'flex-end' },
//   closeButton: { padding: 5, backgroundColor: '#f0f0f0', borderRadius: 20, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
//   closeButtonText: { fontSize: 14, fontWeight: 'bold', color: '#333' },
//   modalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
//   modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', marginBottom: 5 },
//   modalAuthor: { fontSize: 16, color: '#8D6E63', textAlign: 'center', marginBottom: 20 },
//   modalSection: { marginBottom: 20 },
//   modalSectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#3E2723', marginBottom: 10 },
//   modalText: { fontSize: 15, color: '#555', lineHeight: 24 },
//   modalQuoteBox: { backgroundColor: '#FFF4E0', padding: 15, borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#E65100', marginBottom: 20 },
//   modalQuoteText: { fontSize: 16, fontStyle: 'italic', color: '#E65100', textAlign: 'center' },
//   teachingRow: { flexDirection: 'row', marginBottom: 8, paddingRight: 10 },
//   bulletPoint: { fontSize: 18, color: '#E65100', marginRight: 10 },
//   teachingText: { fontSize: 15, color: '#444', flex: 1 },
//   buyButton: { backgroundColor: '#3E2723', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
//   buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList, Dimensions, Modal, Linking, ImageBackground } from 'react-native';
// import HeartButton from '../components/HeartButton'; // Import HeartButton component
// const { width, height } = Dimensions.get('window');

// // --- DATA: TOP QUOTES CAROUSEL ---
// const QUOTES = [
//   { id: '1', text: '"Everything you lose is a step you take. You have not lost anything. You have simply shifted."', author: 'Brianna Wiest' },
//   { id: '2', text: '"I closed my eyes to look inward and found a universe waiting to be loved."', author: 'Yung Pueblo' },
//   { id: '3', text: '"And, when you want something, all the universe conspires in helping you to achieve it."', author: 'Paulo Coelho' },
// ];

// // --- DATA: DAILY WISDOM CARDS (New Section) ---
// // PASTE YOUR SOOTHING EXCERPTS HERE
// const DAILY_WISDOM = [
//   { 
//     id: '1', 
//     quote: " I started listening to my heart even when everyone around me had a different opinion", 
//     author: "Nikki Banas", 
//     image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80', // Forest
//     excerpt: "I started reading books and quotes that inspired me to be better or that helped me learn new things. I started changing my circle. I began spending more time with people who inspired me. People who are kind. People who lift me higher and people who I can help lift too. I started spending more time alone working on myself rather than with people who drained or discouraged me. I began unfollowing everyone online who didn't bring me joy, inspiration, or growth. Instead, I followed people who I wanted to become more like and people who inspired me in some way. I changed my mindset on fitness and training from, 'I have to do this' to, 'I get to do this, and I genuinely love seeing how capable my body is.' I started listening to my heart even when everyone around me had a different opinion. I began believing in myself, no matter what.",
//   },
//   { 
//     id: '2', 
//     quote: "Some things happen that we just cannot understand in the moment", 
//     author: "Nikki Banas", 
//     image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80', // Forest
//     excerpt: "Life does not always go in a straight line. Things get messy and tangled, and our paths twist and turn in many directions. The right things happen at the wrong time and opportunities get passed by. Some things happen that we just cannot understand in the moment no matter how badly we want an answer. And some things that we wish would happen just never do. Life can be a little messy, but that does not mean that it cannot be wonderful too. Because even in the messiness, even in the mistakes and missed chances, even in the midst of not knowing what to do or where to turn, there are still so many beautiful moments. There is still love and joy and light. There is still laughter and kindness. So maybe life is messy. But maybe, it does not need to be anything else. Maybe it is in all of the messiness that we can see all of the things that matter most of all.",
//   },
//   { 
//     id: '3', 
//     quote: "You are the sky. Everything else is just the weather.", 
//     author: "Pema Chödrön", 
//     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80', // Sky/Ocean
//     excerpt: "This teaching reminds us that our true nature is vast, open, and clear—like the sky. Fear, anxiety, and anger are just clouds passing through. They may look dark and stormy, but they cannot harm the sky. They eventually drift away, revealing the blue that was there all along. You are not your feelings; you are the space that holds them." 
//   },
  
//   { 
//     id: '4', 
//     quote: "Life is too short to keep waiting. ", 
//     author: "Unknown", 
//     image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?w=500&q=80', // Zen Garden
//     excerpt: "If nobody wants to go with me, I'll go alone.Life is too short to keep waiting. I'll go to that coffee shop by myself, order the drink I've been curious about, try every dessert on the menu if I feel like it, and sit by the window just watching the world go by. I'll wander through that bookstore I've been meaning to visit, take photos of streets I love, or just stroll in the park without worrying if someone is there to keep me company. I'll visit art exhibits, try new restaurants, or take a spontaneous road trip. I'll do the things that make my heart happy, even if it means doing them alone.Being alone doesn't mean being lonely.It's about learning to enjoy your own company, to find joy in the little things, and to savor moments that make your heart light. It's realizing that your plans, your dreams, and your happiness don't have to wait for anyone else. It's about discovering that the world is full of experiences waiting to be lived, and sometimes the best way to appreciate them is on your own. Sometimes the most meaningful adventures are the ones you take by yourself and they teach you how beautiful life can be when you're fully present with yourself." 
//   },
    
// ];

// // --- DATA: BOOKS ---
// const BOOKS = [
//   { 
//     id: '1', 
//     title: 'Lighter', 
//     author: 'Yung Pueblo', 
//     cover: 'https://m.media-amazon.com/images/I/81X4R7QhFUL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Healing',
//     summary: "Healing isn't about becoming a different person; it is about unlearning who you were forced to be. This book invites you to let go of the heavy burdens—old pains and past versions of yourself. As you release them, you don't become empty; you become lighter.",
//     teachings: ['Radical Honesty', 'The Power of Pause', 'Self-Love as Protection'],
//     quote: "I closed my eyes to look inward and found a universe waiting to be loved."
//   },
//   { 
//     id: '2', 
//     title: '101 Essays', 
//     author: 'Brianna Wiest', 
//     cover: 'https://m.media-amazon.com/images/I/71r4k-a-uRL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Clarity',
//     summary: "Sometimes, the mountain standing in your way isn't the world—it's the way you are looking at it. This collection reassures you that feeling lost is a sign you are waking up. You are not falling behind; you are simply evolving.",
//     teachings: ['Discomfort is Growth', 'Subconscious Behaviors', 'Routine as Sanctuary'],
//     quote: "Everything you lose is a step you take."
//   },
//   { 
//     id: '3', 
//     title: 'The Alchemist', 
//     author: 'Paulo Coelho', 
//     cover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Purpose',
//     summary: "Have you ever felt a dream placed in your heart? This story reminds you that the universe is actively conspiring to help you. When you are anxious about the future, remember: the journey itself is the treasure.",
//     teachings: ['The Language of the World', 'Fear is the Obstacle', 'Maktub (It is Written)'],
//     quote: "And, when you want something, all the universe conspires in helping you to achieve it."
//   },
//   { 
//     id: '4', 
//     title: 'You Can Heal Your Life', 
//     author: 'Louise Hay', 
//     cover: 'https://m.media-amazon.com/images/I/81mXQdi5x+L._AC_UF1000,1000_QL80_.jpg', 
//     topic: 'Self Love',
//     summary: "Imagine if the most powerful medicine was being kind to yourself. Louise Hay teaches that self-criticism is the root of suffering. By changing the 'internal talk' from judgment to love, you create a safe environment for your body to heal.",
//     teachings: ['Forgiveness Sets You Free', 'The Mirror Exercise', 'Thoughts Become Things'],
//     quote: "In the infinity of life where I am, all is perfect, whole, and complete."
//   },
// ];

// // --- DATA: ARTICLES ---
// const ARTICLES = [
//   { id: '1', title: '5 Ways to Hack Anxiety', category: 'Anxiety', image: 'https://images.unsplash.com/photo-1499209974431-276138d71629?w=400&q=80', time: '3 min read', url: 'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety' },
//   { id: '2', title: 'The Japanese Art of Rest', category: 'Burnout', image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?w=400&q=80', time: '5 min read', url: 'https://time.com/5622094/what-is-niksen-dutch-concept-doing-nothing/' },
//   { id: '3', title: 'Why You Feel Lonely', category: 'Emotion', image: 'https://images.unsplash.com/photo-1516302752625-f7a252e2e11f?w=400&q=80', time: '4 min read', url: 'https://www.psychologytoday.com/us/basics/loneliness' },
//   { id: '4', title: 'Detox Your Dopamine', category: 'Focus', image: 'https://images.unsplash.com/photo-1555685812-4b943f3db990?w=400&q=80', time: '6 min read', url: 'https://jamesclear.com/marginal-gains' },
// ];

// export default function ReadingTherapy({ navigation }) {
//   // Modal States
//   const [bookModalVisible, setBookModalVisible] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const [wisdomModalVisible, setWisdomModalVisible] = useState(false);
//   const [selectedWisdom, setSelectedWisdom] = useState(null);

//   const openBookSummary = (book) => {
//     setSelectedBook(book);
//     setBookModalVisible(true);
//   };

//   const openWisdomExcerpt = (wisdom) => {
//     setSelectedWisdom(wisdom);
//     setWisdomModalVisible(true);
//   };

//   // --- RENDERERS ---
//   const renderQuote = ({ item }) => (
//     <View style={styles.quoteContainer}>
//       <View style={styles.quoteCard}>
//         <Text style={styles.quoteText}>{item.text}</Text>
//         <Text style={styles.quoteAuthor}>- {item.author}</Text>
//       </View>
//     </View>
//   );

//   const renderWisdomCard = ({ item }) => (
//     <TouchableOpacity style={styles.wisdomCard} onPress={() => openWisdomExcerpt(item)} activeOpacity={0.9}>
//       <ImageBackground source={{ uri: item.image }} style={styles.wisdomBg} imageStyle={{ borderRadius: 15 }}>

//         <View style={styles.wisdomOverlay}>
//           <Text style={styles.wisdomTag}>DAILY WISDOM</Text>
//           <Text style={styles.wisdomQuote} numberOfLines={3}>"{item.quote}"</Text>
//           <Text style={styles.wisdomAuthor}>- {item.author}</Text>
//           <Text style={styles.wisdomTap}>Tap to read more →</Text>
  
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   );

//   const renderBook = ({ item }) => (
//     <TouchableOpacity style={styles.bookCard} onPress={() => openBookSummary(item)}>
//       <Image source={{ uri: item.cover }} style={styles.bookCover} />
//       <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
//       <Text style={styles.bookAuthor}>{item.topic}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
        
//         {/* HEADER */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Text style={styles.backButtonText}>← Back</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Reading Room</Text>
//           <View style={{ width: 40 }} />
//         </View>

//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* 1. TOP QUOTES CAROUSEL */}
//           <View style={styles.quoteSection}>
//              <FlatList 
//                 data={QUOTES}
//                 renderItem={renderQuote}
//                 keyExtractor={item => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//              />
//           </View>

//           {/* 2. HORIZONTAL WISDOM CARDS (Replacing Single Hero Card) */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Daily Insight</Text>
//             <Text style={styles.sectionSubtitle}>Swipe for a moment of peace.</Text>
//             <FlatList 
//               data={DAILY_WISDOM}
//               renderItem={renderWisdomCard}
//               keyExtractor={item => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
//             />
//           </View>

//           {/* 3. BOOK SHELF */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>From the Bookshelf</Text>
//             <Text style={styles.sectionSubtitle}>Tap for summaries & key teachings.</Text>
//             <FlatList 
//               data={BOOKS}
//               renderItem={renderBook}
//               keyExtractor={item => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
//             />
//           </View>

//           {/* 4. BLOG GRID */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Understand Your Mind</Text>
//             <Text style={styles.sectionSubtitle}>Practical guides for everyday struggles.</Text>
//             <View style={styles.blogGrid}>
//               {ARTICLES.map((article) => (
//                 <TouchableOpacity 
//                   key={article.id} 
//                   style={styles.blogCard}
//                   onPress={() => Linking.openURL(article.url)}
//                 >
//                   <Image source={{ uri: article.image }} style={styles.blogImage} />
//                   <View style={styles.blogTextContent}>
//                     <View style={styles.categoryBadge}>
//                       <Text style={styles.categoryText}>{article.category}</Text>
//                     </View>
//                     <Text style={styles.blogTitle}>{article.title}</Text>
//                     <Text style={styles.blogTime}>{article.time}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>

//       {/* --- MODAL 1: BOOK SUMMARY --- */}
//       <Modal animationType="slide" transparent={true} visible={bookModalVisible} onRequestClose={() => setBookModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <View style={styles.modalHeader}>
//               <TouchableOpacity onPress={() => setBookModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             {selectedBook && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Image source={{ uri: selectedBook.cover }} style={styles.modalCover} />
//                 <Text style={styles.modalTitle}>{selectedBook.title}</Text>
//                 <Text style={styles.modalAuthor}>by {selectedBook.author}</Text>
//                 <View style={styles.modalSection}>
//                   <Text style={styles.modalSectionTitle}>The Essence</Text>
//                   <Text style={styles.modalText}>{selectedBook.summary}</Text>
//                 </View>
//                 <View style={styles.modalQuoteBox}>
//                   <Text style={styles.modalQuoteText}>"{selectedBook.quote}"</Text>
//                 </View>
//                 <TouchableOpacity style={styles.buyButton} onPress={() => setBookModalVisible(false)}>
//                   <Text style={styles.buyButtonText}>Close</Text>
//                 </TouchableOpacity>
//                 <View style={{height:30}}/>
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//       {/* --- MODAL 2: WISDOM EXCERPT --- */}
//       <Modal animationType="fade" transparent={true} visible={wisdomModalVisible} onRequestClose={() => setWisdomModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { height: '60%', backgroundColor: '#FFF4E0' }]}>
//             <View style={styles.modalHeader}>
//               <TouchableOpacity onPress={() => setWisdomModalVisible(false)} style={styles.closeButton}>
//                 <Text style={styles.closeButtonText}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             {selectedWisdom && (
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Text style={styles.excerptTag}>DAILY WISDOM</Text>
//                 <Text style={styles.excerptQuote}>"{selectedWisdom.quote}"</Text>
//                 <View style={styles.divider} />
//                 <Text style={styles.excerptText}>{selectedWisdom.excerpt}</Text>
//                 <TouchableOpacity style={[styles.buyButton, { backgroundColor: '#5D4037', marginTop: 30 }]} onPress={() => setWisdomModalVisible(false)}>
//                   <Text style={styles.buyButtonText}>Reflect & Close</Text>
//                 </TouchableOpacity>
//               </ScrollView>
//             )}
//           </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FFF4E0' },
//   safeArea: { flex: 1 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
//   backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
//   backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#5D4037' },
//   headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#5D4037' },
//   scrollContent: { paddingBottom: 50 },
//   sectionContainer: { marginTop: 30 },
//   sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#5D4037', marginLeft: 20, marginBottom: 5 },
//   sectionSubtitle: { fontSize: 14, color: '#8D6E63', marginLeft: 20, marginBottom: 15 },

//   // QUOTES CAROUSEL
//   quoteSection: { marginBottom: 0 },
//   quoteContainer: { width: width, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
//   quoteCard: {backgroundColor: '#5D4037', padding: 20, borderRadius: 15, width: '100%', alignItems: 'center' },
//   quoteText: { color: '#FFF4E0', fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginBottom: 10 },
//   quoteAuthor: { color: '#D7CCC8', fontSize: 12, fontWeight: 'bold' },

//   // WISDOM CARDS (Horizontal)
//   wisdomCard: { width: 280, height: 180, marginRight: 15, borderRadius: 15, overflow: 'hidden' },
//   wisdomBg: { flex: 1, justifyContent: 'center' },
//   wisdomOverlay: { flex: 1, backgroundColor: 'rgba(62, 39, 35, 0.7)', padding: 20, justifyContent: 'center' },
//   wisdomTag: { color: '#FFCCBC', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
//   wisdomQuote: { color: '#fff', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 10 },
//   wisdomAuthor: { color: '#D7CCC8', fontSize: 12 },
//   wisdomTap: { color: '#FFCCBC', fontSize: 10, marginTop: 15, fontWeight: 'bold' },

//   // BOOK SHELF
//   bookCard: { width: 110, marginRight: 15 },
//   bookCover: { width: 110, height: 160, borderRadius: 10, marginBottom: 8, backgroundColor: '#ddd' },
//   bookTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723' },
//   bookAuthor: { fontSize: 12, color: '#8D6E63' },

//   // BLOG GRID
//   blogGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
//   blogCard: { width: (width / 2) - 25, backgroundColor: '#fff', marginBottom: 20, borderRadius: 15, overflow: 'hidden', elevation: 3 },
//   blogImage: { width: '100%', height: 120 },
//   blogTextContent: { padding: 12 },
//   categoryBadge: { alignSelf: 'flex-start', backgroundColor: '#FFF3E0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 8 },
//   categoryText: { color: '#E65100', fontSize: 10, fontWeight: 'bold' },
//   blogTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723', marginBottom: 5 },
//   blogTime: { fontSize: 11, color: '#999' },

//   // MODAL STYLES
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
//   modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, height: '85%', padding: 20 },
//   modalHeader: { alignItems: 'flex-end' },
//   closeButton: { padding: 5, backgroundColor: '#f0f0f0', borderRadius: 20, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
//   closeButtonText: { fontSize: 14, fontWeight: 'bold', color: '#333' },
//   modalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
//   modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', marginBottom: 5 },
//   modalAuthor: { fontSize: 16, color: '#8D6E63', textAlign: 'center', marginBottom: 20 },
//   modalSection: { marginBottom: 20 },
//   modalSectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#3E2723', marginBottom: 10 },
//   modalText: { fontSize: 15, color: '#555', lineHeight: 24 },
//   modalQuoteBox: { backgroundColor: '#FFF4E0', padding: 15, borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#E65100', marginBottom: 20 },
//   modalQuoteText: { fontSize: 16, fontStyle: 'italic', color: '#E65100', textAlign: 'center' },
//   buyButton: { backgroundColor: '#3E2723', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
//   buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  
//   // WISDOM MODAL SPECIFIC
//   excerptTag: { color: '#E65100', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, textAlign: 'center', marginBottom: 15 },
//   excerptQuote: { fontSize: 24, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', fontStyle: 'italic', marginBottom: 20 },
//   divider: { height: 2, backgroundColor: '#D7CCC8', width: '50%', alignSelf: 'center', marginBottom: 20 },
//   excerptText: { fontSize: 18, color: '#5D4037', lineHeight: 30, textAlign: 'center' },
// });


import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  ScrollView, FlatList, Dimensions, Modal, Linking, ImageBackground } from 'react-native';
import HeartButton from '../components/HeartButton'; // <--- IMPORT HEART BUTTON
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

// --- DATA: TOP QUOTES CAROUSEL ---
const QUOTES = [
  { id: '1', text: '"Everything you lose is a step you take. You have not lost anything. You have simply shifted."', author: 'Brianna Wiest' },
  { id: '2', text: '"I closed my eyes to look inward and found a universe waiting to be loved."', author: 'Yung Pueblo' },
  { id: '3', text: '"And, when you want something, all the universe conspires in helping you to achieve it."', author: 'Paulo Coelho' },
];

// --- DATA: DAILY WISDOM CARDS ---
const DAILY_WISDOM = [
  { 
    id: 'wisdom_1', 
    quote: " I started listening to my heart even when everyone around me had a different opinion", 
    author: "Nikki Banas", 
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80', // Forest
    excerpt: "I started reading books and quotes that inspired me to be better or that helped me learn new things. I started changing my circle. I began spending more time with people who inspired me. People who are kind. People who lift me higher and people who I can help lift too. I started spending more time alone working on myself rather than with people who drained or discouraged me. I began unfollowing everyone online who didn't bring me joy, inspiration, or growth. Instead, I followed people who I wanted to become more like and people who inspired me in some way. I changed my mindset on fitness and training from, 'I have to do this' to, 'I get to do this, and I genuinely love seeing how capable my body is.' I started listening to my heart even when everyone around me had a different opinion. I began believing in myself, no matter what.",
  },
  { 
    id: 'wisdom_2', 
    quote: "Some things happen that we just cannot understand in the moment", 
    author: "Nikki Banas", 
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80', // Forest
    excerpt: "Life does not always go in a straight line. Things get messy and tangled, and our paths twist and turn in many directions. The right things happen at the wrong time and opportunities get passed by. Some things happen that we just cannot understand in the moment no matter how badly we want an answer. And some things that we wish would happen just never do. Life can be a little messy, but that does not mean that it cannot be wonderful too. Because even in the messiness, even in the mistakes and missed chances, even in the midst of not knowing what to do or where to turn, there are still so many beautiful moments. There is still love and joy and light. There is still laughter and kindness. So maybe life is messy. But maybe, it does not need to be anything else. Maybe it is in all of the messiness that we can see all of the things that matter most of all.",
  },
  { 
    id: 'wisdom_3', 
    quote: "You are the sky. Everything else is just the weather.", 
    author: "Pema Chödrön", 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80', // Sky/Ocean
    excerpt: "This teaching reminds us that our true nature is vast, open, and clear—like the sky. Fear, anxiety, and anger are just clouds passing through. They may look dark and stormy, but they cannot harm the sky. They eventually drift away, revealing the blue that was there all along. You are not your feelings; you are the space that holds them." 
  },
  { 
    id: 'wisdom_4', 
    quote: "Life is too short to keep waiting. ", 
    author: "Unknown", 
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?w=500&q=80', // Zen Garden
    excerpt: "If nobody wants to go with me, I'll go alone.Life is too short to keep waiting. I'll go to that coffee shop by myself, order the drink I've been curious about, try every dessert on the menu if I feel like it, and sit by the window just watching the world go by. I'll wander through that bookstore I've been meaning to visit, take photos of streets I love, or just stroll in the park without worrying if someone is there to keep me company. I'll visit art exhibits, try new restaurants, or take a spontaneous road trip. I'll do the things that make my heart happy, even if it means doing them alone.Being alone doesn't mean being lonely.It's about learning to enjoy your own company, to find joy in the little things, and to savor moments that make your heart light. It's realizing that your plans, your dreams, and your happiness don't have to wait for anyone else. It's about discovering that the world is full of experiences waiting to be lived, and sometimes the best way to appreciate them is on your own. Sometimes the most meaningful adventures are the ones you take by yourself and they teach you how beautiful life can be when you're fully present with yourself." 
  },
];

// --- DATA: BOOKS ---
const BOOKS = [
  { 
    id: 'book_1', 
    title: 'Lighter', 
    author: 'Yung Pueblo', 
    cover: require('../assets/lighter.jpg'), 
    topic: 'Healing',
    summary: "Healing isn't about becoming a different person; it is about unlearning who you were forced to be. This book invites you to let go of the heavy burdens—old pains and past versions of yourself. As you release them, you don't become empty; you become lighter.",
    // --- NEW FIELDS ---
    excerpt: "You are not a burden. You are a person who is learning how to carry the weight of your own existence. Be patient with yourself. Healing is not a race.",
    amazonLink: 'https://www.amazon.com/Lighter-Let-Go-Past-Connect/dp/0593233174',
    teachings: ['Radical Honesty', 'The Power of Pause', 'Self-Love as Protection'],
    quote: "I closed my eyes to look inward and found a universe waiting to be loved."
  },
  { 
    id: 'book_2', 
    title: '101 Essays', 
    author: 'Brianna Wiest', 
    cover: require('../assets/101reasons.jpg'), 
    topic: 'Clarity',
    summary: "Sometimes, the mountain standing in your way isn't the world—it's the way you are looking at it. This collection reassures you that feeling lost is a sign you are waking up. You are not falling behind; you are simply evolving.",
    teachings: ['Discomfort is Growth', 'Subconscious Behaviors', 'Routine as Sanctuary'],
    excerpt: "Your life is not a schedule. It is a feeling. It is a progression. It is a series of moments. If you are always racing to the next moment, you will never actually live in this one.",
    amazonLink: 'https://www.amazon.com/101-Essays-Change-Way-Think/dp/1945796065',
    teachings: ['Discomfort is Growth', 'Subconscious Behaviors', 'Routine as Sanctuary'],
    quote: "Everything you lose is a step you take."
  },
  { 
    id: 'book_3', 
    title: 'The Alchemist', 
    author: 'Paulo Coelho', 
    cover: require('../assets/alch.jpg'), 
    topic: 'Purpose',
    summary: "Have you ever felt a dream placed in your heart? This story reminds you that the universe is actively conspiring to help you. When you are anxious about the future, remember: the journey itself is the treasure.",
    excerpt: "It's the possibility of having a dream come true that makes life interesting. When you want something, all the universe conspires in helping you to achieve it.",
    amazonLink: 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005',
    teachings: ['The Language of the World', 'Fear is the Obstacle', 'Maktub (It is Written)'],
    quote: "And, when you want something, all the universe conspires in helping you to achieve it."
  },
  { 
    id: 'book_4', 
    title: 'You Can Heal Your Life', 
    author: 'Louise Hay', 
    cover: require('../assets/youcanhealcover.jpg'), 
    topic: 'Self Love',
    summary: "Imagine if the most powerful medicine was being kind to yourself. Louise Hay teaches that self-criticism is the root of suffering. By changing the 'internal talk' from judgment to love, you create a safe environment for your body to heal.",
    excerpt: "Remember, you have been criticizing yourself for years and it hasn't worked. Try approving of yourself and see what happens.",
    amazonLink: 'https://www.amazon.com/You-Can-Heal-Your-Life/dp/0937611018',
    teachings: ['Forgiveness Sets You Free', 'The Mirror Exercise', 'Thoughts Become Things'],
    quote: "In the infinity of life where I am, all is perfect, whole, and complete."
  },
];

// const BOOKS = [
//   { 
//     id: 'book_1', 
//     title: 'Lighter', 
//     author: 'Yung Pueblo', 
//     cover: require('../assets/lighter.jpg'), 
//     topic: 'Healing',
//     summary: "Healing isn't about becoming a different person; it is about unlearning who you were forced to be. This book invites you to let go of the heavy burdens—old pains and past versions of yourself. As you release them, you don't become empty; you become lighter.",
//     teachings: ['Radical Honesty', 'The Power of Pause', 'Self-Love as Protection'],
//     quote: "I closed my eyes to look inward and found a universe waiting to be loved."
//   },
//   { 
//     id: 'book_2', 
//     title: '101 Essays', 
//     author: 'Brianna Wiest', 
//     cover: require('../assets/101reasons.jpg'), 
//     topic: 'Clarity',
//     summary: "Sometimes, the mountain standing in your way isn't the world—it's the way you are looking at it. This collection reassures you that feeling lost is a sign you are waking up. You are not falling behind; you are simply evolving.",
//     teachings: ['Discomfort is Growth', 'Subconscious Behaviors', 'Routine as Sanctuary'],
//     quote: "Everything you lose is a step you take."
//   },
//   { 
//     id: 'book_3', 
//     title: 'The Alchemist', 
//     author: 'Paulo Coelho', 
//     cover: require('../assets/alch.jpg'), 
//     topic: 'Purpose',
//     summary: "Have you ever felt a dream placed in your heart? This story reminds you that the universe is actively conspiring to help you. When you are anxious about the future, remember: the journey itself is the treasure.",
//     teachings: ['The Language of the World', 'Fear is the Obstacle', 'Maktub (It is Written)'],
//     quote: "And, when you want something, all the universe conspires in helping you to achieve it."
//   },
//   { 
//     id: 'book_4', 
//     title: 'You Can Heal Your Life', 
//     author: 'Louise Hay', 
//     cover: require('../assets/youcanhealcover.jpg'), 
//     topic: 'Self Love',
//     summary: "Imagine if the most powerful medicine was being kind to yourself. Louise Hay teaches that self-criticism is the root of suffering. By changing the 'internal talk' from judgment to love, you create a safe environment for your body to heal.",
//     teachings: ['Forgiveness Sets You Free', 'The Mirror Exercise', 'Thoughts Become Things'],
//     quote: "In the infinity of life where I am, all is perfect, whole, and complete."
//   },
// ];

// --- DATA: ARTICLES ---
const ARTICLES = [
  { id: 'art_1', title: '5 Ways to Hack Anxiety', category: 'Anxiety', image: require('../assets/art3.jpg'), time: '3 min read', url: 'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety' },
  { id: 'art_2', title: 'The Japanese Art of Rest', category: 'Burnout', image:  require('../assets/art2.jpg'), time: '5 min read', url: 'https://time.com/5622094/what-is-niksen-dutch-concept-doing-nothing/' },
  { id: 'art_3', title: 'Why You Feel Lonely', category: 'Emotion', image:  require('../assets/art1.jpg'), time: '4 min read', url: 'https://www.psychologytoday.com/us/basics/loneliness' },
  { id: 'art_4', title: 'Detox Your Dopamine', category: 'Focus', image:  require('../assets/art4.jpg'), time: '6 min read', url: 'https://jamesclear.com/marginal-gains' },
];

export default function ReadingTherapy({ navigation }) {
  // Modal States
  const [bookModalVisible, setBookModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [wisdomModalVisible, setWisdomModalVisible] = useState(false);
  const [selectedWisdom, setSelectedWisdom] = useState(null);

  const openBookSummary = (book) => {
    setSelectedBook(book);
    setBookModalVisible(true);
  };

  const openWisdomExcerpt = (wisdom) => {
    setSelectedWisdom(wisdom);
    setWisdomModalVisible(true);
  };

  // --- RENDERERS ---
  const renderQuote = ({ item }) => (
    <View style={styles.quoteContainer}>
      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>{item.text}</Text>
        <Text style={styles.quoteAuthor}>- {item.author}</Text>
      </View>
    </View>
  );

  const renderWisdomCard = ({ item }) => (
    <TouchableOpacity style={styles.wisdomCard} onPress={() => openWisdomExcerpt(item)} activeOpacity={0.9}>
      <ImageBackground source={{ uri: item.image }} style={styles.wisdomBg} imageStyle={{ borderRadius: 15 }}>
        
        {/* --- HEART BUTTON (Top Right of Card) --- */}
        <View style={{ position: 'absolute', top: 5, right: 5 }}>
           <HeartButton item={item} size={22} color="#fff" />
        </View>

        <View style={styles.wisdomOverlay}>
          <Text style={styles.wisdomTag}>DAILY WISDOM</Text>
          <Text style={styles.wisdomQuote} numberOfLines={3}>"{item.quote}"</Text>
          <Text style={styles.wisdomAuthor}>- {item.author}</Text>
          <Text style={styles.wisdomTap}>Tap to read more →</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.bookCard} onPress={() => openBookSummary(item)}>
      <View>
          <Image source={ item.cover } style={styles.bookCover} />
          {/* --- HEART BUTTON (Top Right of Book Cover) --- */}
          <View style={{ position: 'absolute', top: 5, right: 5 }}>
             <HeartButton item={item} size={20} color="#fff" />
          </View>
      </View>
      <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.topic}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reading Room</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* 1. TOP QUOTES CAROUSEL */}
          <View style={styles.quoteSection}>
             <FlatList 
                data={QUOTES}
                renderItem={renderQuote}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
             />
          </View>

          {/* 2. HORIZONTAL WISDOM CARDS */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Daily Insight</Text>
            <Text style={styles.sectionSubtitle}>Swipe for a moment of peace.</Text>
            <FlatList 
              data={DAILY_WISDOM}
              renderItem={renderWisdomCard}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
            />
          </View>

          {/* 3. BOOK SHELF */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>From the Bookshelf</Text>
            <Text style={styles.sectionSubtitle}>Tap for summaries & key teachings.</Text>
            <FlatList 
              data={BOOKS}
              renderItem={renderBook}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
            />
          </View>

          {/* 4. BLOG GRID */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Understand Your Mind</Text>
            <Text style={styles.sectionSubtitle}>Practical guides for everyday struggles.</Text>
            <View style={styles.blogGrid}>
              {ARTICLES.map((article) => (
                <TouchableOpacity 
                  key={article.id} 
                  style={styles.blogCard}
                  onPress={() => Linking.openURL(article.url)}
                >
                  <Image source={article.image } style={styles.blogImage} />
                  
                  {/* --- HEART BUTTON (Top Right of Article Image) --- */}
                  <View style={{ position: 'absolute', top: 5, right: 5 }}>
                      <HeartButton item={article} size={22} color="#fff" />
                  </View>

                  <View style={styles.blogTextContent}>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{article.category}</Text>
                    </View>
                    <Text style={styles.blogTitle}>{article.title}</Text>
                    <Text style={styles.blogTime}>{article.time}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* --- MODAL 1: BOOK SUMMARY --- */}
      <Modal animationType="slide" transparent={true} visible={bookModalVisible} onRequestClose={() => setBookModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setBookModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            {selectedBook && (
              // <ScrollView showsVerticalScrollIndicator={false}>
              //   <Image source={ selectedBook.cover } style={styles.modalCover} />
              //   <Text style={styles.modalTitle}>{selectedBook.title}</Text>
              //   <Text style={styles.modalAuthor}>by {selectedBook.author}</Text>
                
              //   {/* Heart Button Inside Modal */}
              //   <View style={{ alignItems: 'center', marginVertical: 10 }}>
              //      <HeartButton item={selectedBook} size={30} color="#3E2723" />
              //   </View>

              //   <View style={styles.modalSection}>
              //     <Text style={styles.modalSectionTitle}>The Essence</Text>
              //     <Text style={styles.modalText}>{selectedBook.summary}</Text>
              //   </View>
              //   <View style={styles.modalQuoteBox}>
              //     <Text style={styles.modalQuoteText}>"{selectedBook.quote}"</Text>
              //   </View>
              //   <TouchableOpacity style={styles.buyButton} onPress={() => setBookModalVisible(false)}>
              //     <Text style={styles.buyButtonText}>Close</Text>
              //   </TouchableOpacity>
              //   <View style={{height:30}}/>

              <ScrollView showsVerticalScrollIndicator={false}>
    
    {/* FIXED IMAGE (No 'uri') */}
    <Image source={selectedBook.cover} style={styles.modalCover} />
    
    <Text style={styles.modalTitle}>{selectedBook.title}</Text>
    <Text style={styles.modalAuthor}>by {selectedBook.author}</Text>
    
    {/* Heart Button */}
    <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <HeartButton item={selectedBook} size={30} color="#3E2723" />
    </View>

    {/* Section 1: Summary */}
    <View style={styles.modalSection}>
      <Text style={styles.modalSectionTitle}>The Essence</Text>
      <Text style={styles.modalText}>{selectedBook.summary}</Text>
    </View>

    {/* Section 2: Quote */}
    <View style={styles.modalQuoteBox}>
      <Text style={styles.modalQuoteText}>"{selectedBook.quote}"</Text>
    </View>

    {/* --- NEW SECTION: EXCERPT --- */}
    <View style={styles.modalSection}>
       <Text style={styles.modalSectionTitle}>A Passage to Remember</Text>
       <View style={{backgroundColor:'#FFF4E0', padding:15, borderRadius:10}}>
          <Text style={[styles.modalText, {fontStyle:'italic', color:'#E65100'}]}>
             "{selectedBook.excerpt}"
          </Text>
       </View>
    </View>

    {/* --- NEW BUTTON: AMAZON LINK --- */}
    <TouchableOpacity 
      style={[styles.buyButton, { backgroundColor: '#FF9900', marginBottom: 10 }]} 
      onPress={() => Linking.openURL(selectedBook.amazonLink)}
    >
      <Text style={[styles.buyButtonText, {color: 'black'}]}>Buy on Amazon ↗</Text>
    </TouchableOpacity>

    {/* CLOSE BUTTON */}
    <TouchableOpacity style={styles.buyButton} onPress={() => setBookModalVisible(false)}>
      <Text style={styles.buyButtonText}>Close</Text>
    </TouchableOpacity>
    
    <View style={{height:30}}/>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      {/* --- MODAL 2: WISDOM EXCERPT --- */}
      <Modal animationType="fade" transparent={true} visible={wisdomModalVisible} onRequestClose={() => setWisdomModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: '60%', backgroundColor: '#FFF4E0' }]}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setWisdomModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            {selectedWisdom && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.excerptTag}>DAILY WISDOM</Text>
                <Text style={styles.excerptQuote}>"{selectedWisdom.quote}"</Text>
                
                {/* Heart Button Inside Modal */}
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                   <HeartButton item={selectedWisdom} size={30} color="#5D4037" />
                </View>

                <View style={styles.divider} />
                <Text style={styles.excerptText}>{selectedWisdom.excerpt}</Text>
                <TouchableOpacity style={[styles.buyButton, { backgroundColor: '#5D4037', marginTop: 30 }]} onPress={() => setWisdomModalVisible(false)}>
                  <Text style={styles.buyButtonText}>Reflect & Close</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF4E0' },
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  backButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#5D4037' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#5D4037' },
  scrollContent: { paddingBottom: 50 },
  sectionContainer: { marginTop: 30 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#5D4037', marginLeft: 20, marginBottom: 5 },
  sectionSubtitle: { fontSize: 14, color: '#8D6E63', marginLeft: 20, marginBottom: 15 },

  // QUOTES CAROUSEL
  quoteSection: { marginBottom: 0 },
  quoteContainer: { width: width, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' },
  quoteCard: {backgroundColor: '#5D4037', padding: 20, borderRadius: 15, width: '100%', alignItems: 'center' },
  quoteText: { color: '#FFF4E0', fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginBottom: 10 },
  quoteAuthor: { color: '#D7CCC8', fontSize: 12, fontWeight: 'bold' },

  // WISDOM CARDS
  wisdomCard: { width: 280, height: 180, marginRight: 15, borderRadius: 15, overflow: 'hidden' },
  wisdomBg: { flex: 1, justifyContent: 'center' },
  wisdomOverlay: { flex: 1, backgroundColor: 'rgba(62, 39, 35, 0.7)', padding: 20, justifyContent: 'center' },
  wisdomTag: { color: '#FFCCBC', fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
  wisdomQuote: { color: '#fff', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 10 },
  wisdomAuthor: { color: '#D7CCC8', fontSize: 12 },
  wisdomTap: { color: '#FFCCBC', fontSize: 10, marginTop: 15, fontWeight: 'bold' },

  // BOOK SHELF
  bookCard: { width: 110, marginRight: 15 },
  bookCover: { width: 110, height: 160, borderRadius: 10, marginBottom: 8, backgroundColor: '#ddd' },
  bookTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723' },
  bookAuthor: { fontSize: 12, color: '#8D6E63' },

  // BLOG GRID
  blogGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
  blogCard: { width: (width / 2) - 25, backgroundColor: '#fff', marginBottom: 20, borderRadius: 15, overflow: 'hidden', elevation: 3 },
  blogImage: { width: '100%', height: 120 },
  blogTextContent: { padding: 12 },
  categoryBadge: { alignSelf: 'flex-start', backgroundColor: '#FFF3E0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 8 },
  categoryText: { color: '#E65100', fontSize: 10, fontWeight: 'bold' },
  blogTitle: { fontSize: 14, fontWeight: 'bold', color: '#3E2723', marginBottom: 5 },
  blogTime: { fontSize: 11, color: '#999' },

  // MODAL STYLES
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, height: '85%', padding: 20 },
  modalHeader: { alignItems: 'flex-end' },
  closeButton: { padding: 5, backgroundColor: '#f0f0f0', borderRadius: 20, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
  closeButtonText: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  modalCover: { width: 120, height: 180, borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', marginBottom: 5 },
  modalAuthor: { fontSize: 16, color: '#8D6E63', textAlign: 'center', marginBottom: 20 },
  modalSection: { marginBottom: 20 },
  modalSectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#3E2723', marginBottom: 10 },
  modalText: { fontSize: 15, color: '#555', lineHeight: 24 },
  modalQuoteBox: { backgroundColor: '#FFF4E0', padding: 15, borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#E65100', marginBottom: 20 },
  modalQuoteText: { fontSize: 16, fontStyle: 'italic', color: '#E65100', textAlign: 'center' },
  buyButton: { backgroundColor: '#3E2723', padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
  buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  
  // WISDOM MODAL SPECIFIC
  excerptTag: { color: '#E65100', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, textAlign: 'center', marginBottom: 15 },
  excerptQuote: { fontSize: 24, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', fontStyle: 'italic', marginBottom: 20 },
  divider: { height: 2, backgroundColor: '#D7CCC8', width: '50%', alignSelf: 'center', marginBottom: 20 },
  excerptText: { fontSize: 18, color: '#5D4037', lineHeight: 30, textAlign: 'center' },
});