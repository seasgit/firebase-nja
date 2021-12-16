import {
    initializeApp
} from "firebase/app";

import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot
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
const colRef = collection(db, 'books')


const list =  document.querySelector('.list')
let books;
// Subscription à un écouteur de tout changement dans la collection
 onSnapshot( colRef, (snapshot) => {
    books = []
    snapshot.docs.forEach(doc => {
        books.push({
            ...doc.data(),
            id: doc.id
        });
    })
   dolist()
 })

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value
    }).then(()=> {
        addBookForm.reset()
    })
});

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'books', deleteBookForm.id.value)
    // console.log(docRef);
    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset()
        })
});


const dolist =  () => {
    list.innerHTML =""
    books.map( b => {
        list.innerHTML += `<hr>
                            <h3>${b.title}</h3>
                            <p class='text-xs'>${b.author} | ${b.id }</p>`
    })
}