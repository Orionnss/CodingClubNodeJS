**Commande avant de lancer le serveur** <br />
    ```
        npm install --save express
    ```
    
**Commande pour lancer le serveur** <br />
``` node src/main.js ``` 

**Installation NodeJS**
* Debian :
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* Fedora : 
```
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
```

**Installation MySQL**
* Linux (Debian/Ubuntu) :
``` sudo apt install mysql (ou mysql-server) ```
* Linux (Fedora) :
``` sudo yum install mysql ```
* Windows :
Faites pas chier, installez WAMP.

**Connexion MySQL**<br>
``` mysql -u root -p ```

**Installation de Sequelize** <br>
``` npm install --save sequelize ```