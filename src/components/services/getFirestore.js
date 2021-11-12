import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDj_QulhpfHjYKLOfKs7PtU60-mitkVirY",

    authDomain: "dolcata.firebaseapp.com",

    projectId: "dolcata",

    storageBucket: "dolcata.appspot.com",

    messagingSenderId: "261223058225",

    appId: "1:261223058225:web:6a87be823f17198ff3fe10",
};

const catalogue = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(catalogue);
}
