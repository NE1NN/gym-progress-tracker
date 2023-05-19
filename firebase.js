import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA565I3Ks5HUTXJXf0iur_X_T4sKiueuM4",
  authDomain: "gym-tracker-a2461.firebaseapp.com",
  projectId: "gym-tracker-a2461",
  storageBucket: "gym-tracker-a2461.appspot.com",
  messagingSenderId: "460151162262",
  appId: "1:460151162262:web:f7b5dc0511ddf0f8a549b7",
  measurementId: "G-MC3DMBRGPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const workoutCollection = collection(db, 'workouts');
export const allWorkoutCollection = collection(db, 'allWorkouts');

// addDoc(allWorkoutCollection, 
//     {
//       muscle: 'Shoulder',
//       name: 'Shoulder Press',
//       pr: 0,
//     }
// )