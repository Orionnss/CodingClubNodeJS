const express = require('express'); // On importe le module "express", qui permet de créer un serveur Web.
const app = express(); // On crée notre serveur au travers d'express. On l'appelle "app"

const User = require('./User'); // On importe notre classe User à partir de l'autre fichier User.js, pensez à aller le voir.
const Database = require('./database');

var users = []; // Ici, on crée un tableau vide. En JS, contrairement au C, on n'a pas besoin de malloc, on peut ajouter autant d'objets qu'on veut.

/*
    Dans le tableau ci-dessous, on crée 4 instances de User. On parcourera ce tableau afin de chercher les utilisateurs dont on a besoin.
 */
users.push(new User(1, "Orionss", "cyrille.siouffi@epitech.eu", "password"));
users.push(new User(2, "TorinRackaloph", "ludovic.dussaud@epitech.eu", "password"));
users.push(new User(3, "XxXKevindu03XxX", "xxx.kevin.xxx@trocoolmail.com", "password"));
users.push(new User(4, "ManonDu36", "pet.de.licorne@caramail.fr", "password"));

/*
    Ici, on crée un "point d'entrée" de notre API.
    C'est à dire que si on lance l'URL http://localhost:4242/user/1 , on obtiendra un objet contenant l'utilisateur "Orionss".
 */
app.get('/user/:id', (request, response) => {
    users.map(user => { // La fonction map permet de parcourir facilement un tableau. Elle joue le rôle d'une boucle for, mais plus esthétique.
        if (user.id == request.params.id) {
            response.status(200).json(user);
        }
    });
    /*
    Equivalent au map ci-dessus :
    for (var i = 0; i < users.count(); i += 1) {
        var user = users[i];
        if (user.id == request.params.id)
            response.status(200).json(user);
    }
     */
});

/*
    Ici, on lance le serveur sur le port 4242. Si le lancement fonctionne, on affiche "Server is started".
 */
app.listen(4242, () => {
    console.log("Server is started.");
    Database.authenticate().then(() => {
        console.log('Database connected.');
    });
});