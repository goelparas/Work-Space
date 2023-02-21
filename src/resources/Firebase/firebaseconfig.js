import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  deleteDoc
} from "firebase/firestore";

import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf5xpH-oCM9Ot6NknJKvZVtHc5SCoUU4E",

  authDomain: "slack-840d0.firebaseapp.com",

  projectId: "slack-840d0",

  storageBucket: "slack-840d0.appspot.com",

  messagingSenderId: "38386514208",

  appId: "1:38386514208:web:91fad751c992233e4bbf45",

  measurementId: "G-E02MQD5NSB",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters(
  // this will internally open the prompt setting for the select account
  {
    prompt: "select_account",
  }
);

export async function googleLogin() {
  try {
    return await signInWithPopup(auth, googleprovider);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getChannels(setchannels) {
  const collectionref = collection(db, "rooms");
  try {
    onSnapshot(collectionref, (snapShot) => {
      setchannels(
        snapShot.docs.map((_doc) => {
          return {
            id: _doc.id,
            data: _doc.data(),
          };
        })
      );
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function setChannel(object) {
 await addDoc(collection(db, "rooms"), { roomname: object });
 
}
export async function removeChannel(docID)
{
  const docref = doc(db,"rooms",docID)
  await deleteDoc(docref);

}

export async function getMessages(docID, setMessages) {
  const docref = doc(db, "rooms", docID);
  const colRef = collection(db, `${docref.path}/messages`);
  const _query = query(colRef, orderBy("time", "asc"));

  try {
    onSnapshot(_query, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          return {
            user: doc.data().user,
            message: doc.data().user_message,
            icon: doc.data().icon,
          };
        })
      );
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function addMessages(docID, message) {
  // Create the message for the in the rooms / doc ID /MESSAGE / DOCid/ ADDING THE data
  const docref = doc(db, "rooms", docID);
  const colref = collection(db, `${docref.path}/messages`);
  const date = new Date();

  await addDoc(colref, {
    user: localStorage.getItem("displayname"),
    user_message: message,
    icon: localStorage.getItem("photourl"),
    time: date,
  }); 
}

