Avant tout, les élèves ayant déjà assisté aux précédents Coding Club Node.js peuvent retrouver le code que je leur avais donné dans le dossier `old`.
Ce dossier ne servira à personne d'autre.

Pour visualiser ce README de façon optimale, utilisez le raccourcis ` Ctrl + Shift + V ` dans _Visual Studio Code._

---

## Coding Club Node.js

Pour lancer un programme Node.js : `node [fichier.js]`

Pour installer un package npm : `npm install [nom du package]`

[Pré-requis : les spécificités de Javascript](doc/JAVASCRIPT.md)

[1ère Partie : Créer un Site Web avec Node.js](doc/WEBSITE.md)

## Informations concernant Node.js & NPM

NPM veut dire Node Package Manager. Il ne s'agit pas du même programme.

NPM permet d'installer des add-ons, des compléments, des outils ou des bibliothèques pour vos programmes Node.js.

Lorsque vous utilisez la commande `npm install --save [nom du package]`, un fichier `package-lock.json` va être créé et va contenir les dépendances de votre projet.

Ce fichier vous permet de réinstaller les dépendances lorsqu'elles sont supprimées, car vous n'envoyez pas vos modules sur Git.

Après ça, un simple `npm install` suffit à réinstaller vos dépendances.

## Faire fonctionner le projet de test

`npm install`

`node src/index.js`
