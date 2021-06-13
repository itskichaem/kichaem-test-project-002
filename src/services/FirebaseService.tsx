import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import config from 'src/configs';

if (!firebase.apps.length) {
  firebase.initializeApp(config.FIREBASE_CONFIG);
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const getTimestamp = firebase.firestore.FieldValue.serverTimestamp;
