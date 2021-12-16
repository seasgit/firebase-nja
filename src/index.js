
import {
    initializeApp
} from "firebase/app";

import  {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAfRPDxlEi9jbhDcydFdWC_3By8_bP9rag",
    authDomain: "fb9nja.firebaseapp.com",
    projectId: "fb9nja",
    storageBucket: "fb9nja.appspot.com",
    messagingSenderId: "1060641522258",
    appId: "1:1060641522258:web:e439d267e0898338b8d58b"
};

// Init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app)

// référence d'une collection
const colRef =  collection(db, 'books')

// get collection data
/*
    NB : doc donne 2 types d'information qui nous inté<rressent.
    1. l'id du doc
    2. les données

    On utilise le spread operator pour concaténer dans un objet l'objet data et la clé/valeur id

*/
getDocs(colRef)
    .then((snapshots) => {
        let books = []
        snapshots.docs.forEach( doc => {
            books.push({...doc.data(), id:doc.id});
        })
        console.log(books);
    })
    .catch(err => {
        console.log(err.message)
    })