import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAl1yvqD2KL-bH4Mx9VYHzhkca5Nco3U-o',
  authDomain: 'netflix-clone-3152e.firebaseapp.com',
  projectId: 'netflix-clone-3152e',
  storageBucket: 'netflix-clone-3152e.appspot.com',
  messagingSenderId: '127475750771',
  appId: '1:127475750771:web:a86b910fc0c11e8bba5706',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
