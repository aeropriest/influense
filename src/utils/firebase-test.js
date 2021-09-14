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

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const celebrityHandle = "jamesrodriguez10";
const celeb = db
  .collection("influensers")
  .where("handle", "==", celebrityHandle)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id);
      db.collection("influensers")
        .doc(doc.id)
        .collection("gallery")
        .get()
        .then((images) => {
          images.forEach((image) => {
            console.log(image.id);
          });
        });
    });
  });

/*
    db.collection("influensers")
      .doc(doc.id)
      .collection("gallery")
      .get()
      .then((gallerySanpShot) => {
        gallerySanpShot.forEach((image) => {
          console.log(image);
        });
      });
*/
