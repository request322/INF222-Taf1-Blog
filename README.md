Projet API Blog - INF222 (Développement Backend)
Ce projet consiste en la réalisation d'une API REST pour la gestion d'un système de blog simplifié. Il a été conçu dans le cadre du Travail à Faire (TAF 1) de l'unité d'enseignement INF222 - Programmation Web.

📖 Présentation du projet
L'objectif est de mettre en place un backend fonctionnel capable de gérer le cycle de vie complet des articles de blog (CRUD), tout en respectant une architecture logicielle propre (séparation des routes, contrôleurs et modèles).
+1

🛠️ Stack Technique

Environnement : Node.js 


Framework : Express.js 


Base de données : Système de stockage structuré (en mémoire / SQLite) 


Format des données : JSON 
+1

🚀 Fonctionnalités implémentées

Gestion des articles : Création, lecture (individuelle et liste), modification et suppression via des ID uniques.
+4


Recherche avancée : Recherche par texte dans les titres ou le contenu.


Filtrage : Possibilité de filtrer les articles par catégorie, auteur ou date.
+1


Validation : Contrôle des entrées utilisateurs (champs obligatoires comme l'auteur).


Gestion des erreurs : Utilisation des codes HTTP standards (200, 201, 400, 404, 500).

📦 Installation et Utilisation
Clonage du dépôt :

Bash
git clone https://github.com/request322/INF222-Taf1-Blog.git
cd INF222-Taf1-Blog
Installation des dépendances :

Bash
npm install
Lancement du serveur :

Bash
node server.js
Le serveur sera actif sur http://localhost:3000.

📌 Liste des Endpoints
Méthode	Point d'entrée (Endpoint)	Action
GET	/api/articles	
Lister tous les articles 

POST	/api/articles	
Créer un nouvel article 

GET	/api/articles/:id	
Détails d'un article spécifique 

PUT	/api/articles/:id	
Modifier un article existant 

DELETE	/api/articles/:id	
Supprimer un article 

GET	/api/articles/search?query=...	
Rechercher un contenu 

Auteur : [Ndzomo zogo joseph michel archange]

Matricule : [23U2801]


Cours : INF222 - Développement Backend (Charles Njiosseu)
