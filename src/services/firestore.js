// src/services/firestore.js
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

export const addOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), order);
    return docRef.id;
  } catch (e) {
    console.error('Error adding order: ', e);
  }
};

export const getMenuItems = async () => {
 try {
    const querySnapshot = await getDocs(collection(db, 'menu'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error('Error fetching menu items: ', e);
    return []; // Return empty array to prevent app crash
  }
};
