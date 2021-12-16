# Firebase tutorial

## Ressources
### voir chapitres dans branches
https://github.com/iamshaunjp/Getting-Started-with-Firebase-9

## Structure de base
- dossier  `/dist`
- dossier `/src`
## Install webpack
```bash
npm init -y
#
npm i webpack webpack-cli -D
```
## Config webpack
- Créer le fichier `/webpack.config.js`
- Depuis la doc, copier le code de base et Customiser les path et noms de fichiers js 
- ajoute un script d'exécution dans package.json
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```
- run dans la console
```bash
npm run build
```


