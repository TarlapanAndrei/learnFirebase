import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAWXDJ0Exu-lNsD4u1sBVJ8LpCQNN_CgCM",
  authDomain: "fir-eafbb.firebaseapp.com",
  databaseURL: "https://fir-eafbb.firebaseio.com",
  projectId: "fir-eafbb",
  storageBucket: "fir-eafbb.appspot.com",
  messagingSenderId: "520041578293",
  appId: "1:520041578293:web:b677119f4f4066290b167c",
  measurementId: "G-T45TVN08H1"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(err){
      console.error("gresala la creare", err.message)
    }
  }
  return userRef;
}

export const addInfo = async (infoToAdd, nameOfOwner, imgUrl) =>{
  firestore.collection('infoteca').add({
    infoToAdd: infoToAdd,
    name: nameOfOwner,
    imgUrl: imgUrl
  })
}
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;