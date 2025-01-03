// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzMLexlqyQK_3Fr-0uP_Ajg5TyphcT_PQ",
    authDomain: "crwn-clothing-db-990bf.firebaseapp.com",
    projectId: "crwn-clothing-db-990bf",
    storageBucket: "crwn-clothing-db-990bf.appspot.com",
    messagingSenderId: "31236687859",
    appId: "1:31236687859:web:b2604a0ae91736ffa5b486"
}


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()
export const signInwithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
        } catch (error) {
            console.log("user creation failed error" + error.message);
        }
    }
    return (userDocRef)


}

export const createAuthUserWithUserandPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithUserandPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);