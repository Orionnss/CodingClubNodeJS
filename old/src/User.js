/*
    On crée une classe User. Cette classe définit les paramètres d'un utilisateur.
 */

/*
    La fonction "User" est un "constructeur", c'est à dire que c'est une fonction qui sert à initialiser un Objet (Instance d'une classe).
 */
function User(id, username, email, password) {
        /*
        Le mot-clé "this" permet d'interagir avec l'instance de 'User'. Cette variable est commune à tous les objets et permet
        de modifier l'objet en question.
         */
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
}

/*
    Ici, on rend utilisable notre classe User à l'extérieur de ce fichier (en l'occurence, dans le fichier main.js)
 */
module.exports = User;