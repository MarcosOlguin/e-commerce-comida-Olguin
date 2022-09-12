// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeB_bl-7dHpU0W3SdsxTJDQXp_R1MitJk",
  authDomain: "e-commerce-coderhouse-b0e54.firebaseapp.com",
  databaseURL:
    "https://e-commerce-coderhouse-b0e54-default-rtdb.firebaseio.com",
  projectId: "e-commerce-coderhouse-b0e54",
  storageBucket: "e-commerce-coderhouse-b0e54.appspot.com",
  messagingSenderId: "731958759964",
  appId: "1:731958759964:web:5a2e9324ef09fe781845d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Obtener todos los items sin filtro
export async function getItems() {
  const items = [];
  const collectionRef = collection(db, "items");
  const snapshot = await getDocs(collectionRef);

  snapshot.forEach((item) => {
    const data = { id: item.id, ...item.data() };
    console.log(item.id);
    items.push(data);
  });
  return items;
}

// Obtener items filtrados por categoria
export async function getItemsFilter(category) {
  const items = [];
  const collectionRef = collection(db, "items");
  const q = query(collectionRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    const data = { id: item.id, ...item.data() };
    items.push(data);
  });

  return items;
}

//Obtener 1 solo item filtrado
export async function getItemDetail(id) {
  const collectionRef = collection(db, "items");
  const docRef = doc(collectionRef, id);
  const document = await getDoc(docRef);
  const data = { id: document.id, ...document.data() };

  return data;
}
