const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDSq9FRd-3yXhB8fTU95LDQoHWe4VEGKDA",
  authDomain: "influense-64aa7.firebaseapp.com",
  projectId: "influense-64aa7",
  storageBucket: "influense-64aa7.appspot.com",
  messagingSenderId: "393496835159",
  appId: "1:393496835159:web:65c65906c56d98ac809f12",
  measurementId: "G-5HBPWY0Q5M",
};

const firebaseDatabaseName = "biddify";
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const celebrityHandle = "jamesrodriguez10";
const celeb = db
  .collection(firebaseDatabaseName)
  .where("handle", "==", celebrityHandle)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id);
      doc.ref
        .collection("gallery")
        .get()
        .then((gallarySnapshot) => {
          gallarySnapshot.forEach((image) => {
            var data = image.data();
            console.log(data);
          });
        });
    });
  });
