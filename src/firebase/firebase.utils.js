import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6Chcmj4mS9RcQfyVl8DZ440yLldMU1ko",
  authDomain: "crwn-db-1e4fa.firebaseapp.com",
  projectId: "crwn-db-1e4fa",
  storageBucket: "crwn-db-1e4fa.appspot.com",
  messagingSenderId: "1097194695069",
  appId: "1:1097194695069:web:4c7f460f4c5fdc6ac1e774",
  measurementId: "G-2RXG7BB0D9",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); 
  if(!snapShot.exists){
    const { displayName, email } = userAuth; 
    const createdAt = new Date(); 
    
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error){
      console.log('error creating user', error); 
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  console.log(objectsToAdd);
  const collectionRef = firestore.collection(collectionKey); 
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
