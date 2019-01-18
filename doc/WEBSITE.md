# Créer un site Web avec Node.js

Pour créer un site web basique avec Node.js, nous allons avant-tout avoir besoin d'un package essentiel pour se simplifier la tâche : Express.

`npm install --save express`

On va mettre le code de base dans un fichier `.js` quelconque (par exemple `src/index.js`)

```
const	express = require('express');
const	app = express();
const	PORT = 4242;

app.listen(PORT, function() {
	console.log("Connection has been established.");
});
```

Ce code permet de lancer un *serveur web* auquel on peut se connecter en tapant l'URL ``http://localhost:4242/``

Si vous vous y connectez, vous verrez que vous obtiendrez une page vide ou une erreur.

Pour comprendre le rôle d'Express, on va décomposer une URL : `https://intra.epitech.eu/e-learning/#!/semester-5/B5-EIP-Validation/cours-Conference-intro-EIP-2014`

Cette URL permet d'accéder à un cours d'E-learning de Tech3.

`https://` représente le **protocole** à utiliser. Ici, on utilise le Protocole HTTP Sécurisé, qui est un protocole standard du Web. On peut par exemple prendre l'exemple du protocole FTP qui donne `ftp://`

`intra.epitech.eu` est l'**adresse de l'hôte**, c'est à dire l'adresse de votre site web.

Après le `/`, c'est la partie qui nous intéresse.

C'est une partie qu'on peut personnaliser, en l'occurence on peut voir qu'on se situe dans l'e-learning, au semestre 5, qu'il s'agit du module B5-EIP-Validation et que le cours en question est la Conférence d'Intro pour l'EIP.

Cette partie s'appelle la **route**. On peut créer différents embronchements pour faciliter l'accès. Express nous permet de créer des routes simplement.

Pour créer une route avec Express :

```
const	path = require('path');

function mainRoute(request, response)
{
	response.sendFile(path.join(__dirname + 'index.html'));
}

app.get('/', mainRoute);
```

### Qu'a-t'on créé ici ?

Ici, on a créé une route, qui permet d'afficher un fichier **HTML** `index.html` qui se situe dans le dossier racine.

A l'aide de `app.get(route, callback)`, on a créé une route sur `/`, donc `http://localhost:4242/`, et on spécifie dans le paramètre `callback` quelle fonction on veut exécuter pour cette URL.

`request` contient les informations sur la requête entrante, dans ce cas précis, nous n'en avons pas besoin.

`response` doit être défini pour savoir ce que le serveur va renvoyer au client.