import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  addDoc,
  doc,
  onSnapshot,
  collectionGroup,
} from "firebase/firestore";
import { initializeAuth } from "firebase/auth";
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
const auth = initializeAuth(app);

export async function getChannels(setchannels) {
  // const querySnapshot = await getDocs(collection(db, "rooms"));
  // if (!querySnapshot.empty) {
  //   // console.log(querySnapshot, "this is  the snapShot");
  //   const _documents = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     data: doc.data(),
  //   }));

  //   setchannels(_documents);
  // }
  const collectionref = collectionGroup(db, "rooms");
  console.log(collectionref);

   onSnapshot(collectionref, (snapShot) => {
    setchannels(
      snapShot.docs.map((_doc) => {
        console.log(_doc, "This is the document");
        return {
          id: _doc.id,
          data: _doc.data(),
        };
      })
    );
  });
}
export async function setChannel(object) {
  await addDoc(collection(db, "rooms"), { roomname: object });
}

export async function getMessages(docID)
{
  // const collectionref = collection(db,"rooms",docID);



}
export default db;
