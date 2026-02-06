// import React, { createContext, useState, useContext } from 'react';

// // Create the memory storage
// const UserContext = createContext();

// // Create a provider (the component that wraps the app)
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // null = not logged in

//   const login = (name) => {
//     setUser({ name: name }); // Save a fake user object
//   };

//   const logout = () => {
//     setUser(null); // Clear the user
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // A helper hook to use this memory easily in other screens
// export const useUser = () => useContext(UserContext);


// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
// import { auth } from '../firebaseConfig'; // Import from your config file

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Listen for auth changes (Login/Logout)
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const logout = async () => {
//     try {
//       await firebaseSignOut(auth);
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout, loading }}>
//       {!loading && children} 
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);




import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, onSnapshot, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; 

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]); // <--- Stores saved items
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // LISTEN TO USER'S FAVORITES IN REAL-TIME
        const userDocRef = doc(db, 'users', currentUser.uid);
        const unsubscribeSnapshot = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            setFavorites(docSnap.data().favorites || []);
          } else {
            setDoc(userDocRef, { favorites: [] }, { merge: true });
            setFavorites([]);
          }
        });
        return () => unsubscribeSnapshot();
      } else {
        setFavorites([]);
      }
    });

    return unsubscribeAuth;
  }, []);

  const logout = async () => {
    await firebaseSignOut(auth);
  };

  // --- THE MAGIC FUNCTION ---
  const toggleFavorite = async (item) => {
    if (!user) return alert("Please login to save items!");

    const userDocRef = doc(db, 'users', user.uid);
    const isAlreadySaved = favorites.some(fav => fav.id === item.id);

    try {
      if (isAlreadySaved) {
        // Remove it
        await updateDoc(userDocRef, { favorites: arrayRemove(item) });
      } else {
        // Add it (using setDoc with merge checks if doc exists first)
        await setDoc(userDocRef, { favorites: arrayUnion(item) }, { merge: true });
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const isLiked = (itemId) => favorites.some(fav => fav.id === itemId);

  return (
    <UserContext.Provider value={{ user, favorites, toggleFavorite, isLiked, logout, loading }}>
      {!loading && children} 
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);