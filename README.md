# Projet_11
Site de banque en ligne.

## Argent Bank

Le but de ce projet était d'implémenter le front-end d'une application bancaire avec React.

## Aperçu

![Capture d'écran de la page web](https://i.ibb.co/chRt0kS/argent-Bank.webp)

## Pré-requis

Avant de commencer à travailler sur ce projet, assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Node.js v12](https://nodejs.org/en/)
- npm (Gestionnaire de paquets Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Yarn

Veuillez vous assurer que vous disposez des bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

## Installation et Utilisation

1. Clonez ce dépôt sur votre ordinateur.
2. Lancez le backend dans votre terminal en exécutant la commande `npm install` pour installer les dépendances du projet.
3. Toujours dans le répertoire du backend, exécutez la commande `npm run dev:server` pour démarrer le serveur de développement en local.
4. Toujours dans le répertoire du backend, exécutez la commande `npm run populate-db` pour remplir la base de données avec deux utilisateurs.
Votre serveur devrait maintenant fonctionner sur http://locahost:3001 et vous aurez désormais deux utilisateurs dans votre base de données MongoDB.
5. Découvrez la documentation de l’API via [ce lien](http://localhost:3001/api-docs)

6. Lancez le frontend dans votre terminal en exécutant la commande `npm install` pour installer les dépendances du projet.
7. Toujours dans le répertoire du frontend, exécutez le projet en mode développement en utilisant la commande suivante `yarn start`.
L'application sera accessible à l'adresse http://localhost:3000 dans votre navigateur.

## Base de données remplies

Une fois que vous avez exécuté le script `populate-db`, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Auteur

- Caroline Ruiz
- Contact : carolineruiz3802@gmail.com
