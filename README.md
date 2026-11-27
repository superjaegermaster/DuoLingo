# Minilingo

Une application HTML ludique, entièrement en français, pour aider une enfant de 9 ans à découvrir l’anglais.

## Découvrir l’application

Ouvre `index.html` dans un navigateur récent. Pour un fonctionnement local plus fiable, lance un petit serveur :

```bash
python3 -m http.server 5173
```

Puis ouuvre <http://127.0.0.1:5173>.

Aucune dépendance, aucune installation et aucune clé API ne sont nécessaires.

## Ce que contient l’application

- 5 leçons courtes : salutations, famille, école, animaux et couleurs.
- 25 exercices variés : choix multiple, écoute, phrases à reconstruire, appariement et saisie.
- Une correction dès la réponse, affichée pendant 2 secondes, puis passage automatique à la question suivante.
- Une sauvegarde automatique après chaque exercice dans le stockage local du navigateur.
- Une reprise de leçon au prochain exercice inachevé.
- Un mode de révision, une boîte à mots et 6 badges.
- Un espace parents avec prénom, objectif quotidien, réduction des animations, export et import de la progression.
- Une interface responsive pour ordinateur, tablette et téléphone.

## Structure du dépôt

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── data.js
│       └── app.js
├── .gitignore
└── README.md
```

- `assets/js/data.js` contient les leçons, les mots, les exercices et les badges.
- `assets/js/app.js` gère l’interface, les exercices et la sauvegarde.
- `assets/css/styles.css` contient tous les styles, sans framework.
- `index.html` est le point d’entrée publié par GitHub Pages.

## Sauvegarde et confidentialité

La progression est enregistrée uniquement dans le navigateur utilisé. Elle reste disponible après une fermeture ou un rechargement de la page, sur le même navigateur et le même appareil.

Effacer les données du site peut supprimer la progression. L’espace parents permet d’exporter un fichier JSON pour la conserver ou la transférer.

L’application ne contient ni publicité, ni suivi, ni compte utilisateur, ni serveur. La prononciation anglaise utilise la synthèse vocale disponible dans le navigateur.

## Publier avec GitHub Pages

1. Pousse les fichiers sur la branche `main`.
2. Dans le dépôt GitHub, ouvre **Settings → Pages**.
3. Dans **Build and deployment**, choisis **Deploy from a branch**.
4. Sélectionne la branche `main` et le dossier `/ (root)`, puis enregistre.
5. GitHub fournira l’adresse publique après quelques instants.

Pour un dépôt privé, la disponibilité de GitHub Pages dépend de l’offre GitHub du compte.

## Modifier les leçons

Les données sont regroupées dans `assets/js/data.js`. Chaque leçon contient :

- ses mots (`en`, `fr`, `example`, `exampleFr`) ;
- ses exercices (`choice`, `listen`, `build`, `match`, `type`) ;
- la réponse attendue (`answer`) ;
- les mots concernés (`wordIds`).

Après une modification, recharge simplement la page. Aucune compilation n’est nécessaire.
