import { initializeApp } from 'firebase/app'
import {
    getAuth, initializeAuth, signInWithEmailAndPassword,
    signOut, createUserWithEmailAndPassword, User
} from 'firebase/auth'

import React from 'react';
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAdNm67cntYrCa4aGX7sFhANo-lIgEcgqA",
    authDomain: "simonetti-work.firebaseapp.com",
    databaseURL: "https://simonetti-work.firebaseio.com",
    projectId: "simonetti-work",
    storageBucket: "simonetti-work.appspot.com",
    messagingSenderId: "267489963515",
    appId: "1:267489963515:web:c93166d580cd73dcfb2f5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

export const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
    signOut(auth)
};

export const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
};


export const AuthContext = React.createContext<{ user: User | null | undefined, error: Error | undefined }>({ user: null, error: undefined })


export const db = getFirestore(app);