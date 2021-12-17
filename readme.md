# Firebase  - get single book

## imports 
 ajouter `getDoc`

## script
- Un test de lecture d'un livre
```js
// même technique que pour delete
const docRef = doc(db, 'books', 'cul4YjT17T6nCTctSz7p');
// test dans la console
getDoc(docRef).then((d)=>{
    console.log(d.data().title)
})
```
- Subscription à tout changement de ce livre.
```js
onSnapshot( docRef , (doc) => {
    console.log(doc.data(), doc.id)
})
``` 
- Modifier un champ du livre depuis la console de Firestore
