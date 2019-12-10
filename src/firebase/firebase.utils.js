import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2XmHfHIlBJu65uF3n46mOiIAvrFMlKkE',
  authDomain: 'metodista-ensino.firebaseapp.com',
  databaseURL: 'https://metodista-ensino.firebaseio.com',
  projectId: 'metodista-ensino',
  storageBucket: 'metodista-ensino.appspot.com',
  messagingSenderId: '465940847958',
  appId: '1:465940847958:web:0f5883d8c72fd2dd208af7',
  measurementId: 'G-1J349MC0NV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getUserProfileDocument = async (userAuth) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    throw new Error('Usuário inválido');
  }
  return userSnapShot;
};

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    unsubscribe();
    resolve(userAuth);
  }, reject);
});

export default firebase;
