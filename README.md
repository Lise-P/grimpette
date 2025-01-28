# grimpette
EN COURS - PROJET PERSO

Grimpette est un réseau social dédié aux grimpeurs en bloc. Il permet aux utilisateurs de se connecter, de partager des événements, de suivre leurs amis grimpeurs et d'accéder à des articles sur l'escalade pour améliorer leurs performances.
Fonctionnalités
1. Interagir et suivre des grimpeurs

    Affichage des profils : Les utilisateurs peuvent consulter des profils d'autres grimpeurs en fonction de critères spécifiques (niveau, nom des salles, disponibilités etc.). Les profils sont récupérés depuis une base de données relationnelle.

    Suivi des profils : Permet de suivre les profils d'autres grimpeurs pour recevoir leurs dernières activités, comme les blocs qu'ils ont réussis, les événements auxquels ils participent, etc.

2. Événements pour rencontrer d'autres grimpeurs

    Affichage d'événements : Le site affiche des événements en lien avec l'escalade, comme des compétitions, des sorties collectives, des formations, etc. Les utilisateurs peuvent s'inscrire à ces événements et recevoir des notifications.

3. Articles autour de la grimpe

    Affichage d'articles : Grimpette propose une section dédiée aux articles sur l'escalade, où les utilisateurs peuvent lire des conseils pour progresser, découvrir des actualités liées au sport, ou encore suivre les dernières tendances en matière de matériel.

Technologies utilisées ou qui le seront

Le projet Grimpette utilise plusieurs technologies pour garantir une expérience utilisateur fluide et une architecture robuste.
Frontend

    React : Pour la construction de l'interface utilisateur interactive. React permet une mise à jour rapide de l'UI sans rechargement de page.
    UseContext : Pour la gestion de l'état de l'application (par exemple, gérer l'état des utilisateurs, des événements, etc.).
    CSS : Pour la mise en forme et le style de l'application, avec une approche responsive.

Backend

    Node.js : Environnement d'exécution JavaScript pour le backend.
    SQL/MySQL : Base de données utilisée pour stocker les informations des utilisateurs, des événements, et des articles. 
    JWT (JSON Web Tokens) : Pour la gestion de l'authentification des utilisateurs et de la sécurité.
