# Firebase tutorial 4 - add and delete

## template html
- Copie depuis le modèle de deux formulaires dans `dist/index.html`
- Copie depuis le modèle de 2 gestion des boutons de soumissions (add et delete)
### mise en forme
```bash
    npx tailwindcss -o ./dist/styles.css
```
### Ajouter un document
- import de `addDoc` function
- utilisation avec la soumission du formulaire
```js
// on récupère les données en passant par la réf du form
addBookForm.addEventListener('submit', (e) => {
    ....
    console.log(addBookForm.title.value);
    ...
``` 
### Delete un document
- import : deleteDoc et doc
