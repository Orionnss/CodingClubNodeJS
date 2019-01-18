const Sequelize = require('sequelize');

const database = new Sequelize('mysql://root:@localhost/webactu');

const User = database.define('User', {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

User.sync();

module.exports = database;