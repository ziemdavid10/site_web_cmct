# Site web CMCT

Site institutionnel de Central Media Communication & Technologies (Yaoundé, Cameroun) :
présentation de l'entreprise, de ses entités, de ses expertises et de ses réalisations,
en français et en anglais.

**Technologies** : React 18, Vite, React Router, Framer Motion, Sass, EmailJS.

## Développement

Prérequis : Node.js 20 ou plus récent.

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run lint     # vérifie le code
npm run build    # construit le site dans dist/
npm run preview  # sert la version construite
```

## Organisation du projet

| Dossier | Contenu |
|---|---|
| `src/pages/` | Les pages du site et leurs adresses |
| `src/components/` | Les sections (accueil, entités, réalisations, galerie…) et les éléments partagés (`ui/`) |
| `src/i18n/` | Les textes : `fr.js` et `en.js` ont la même structure |
| `src/data/site.js` | Coordonnées, menu, logos, photos et partenaires |
| `public/` | Images servies telles quelles (`gallery/`, `partners/`, `portfolio/`) |
| `docker/` | Configuration du serveur Nginx de l'image Docker |

Pour ajouter une page : créer le composant dans `src/pages/Pages.jsx`, déclarer sa route dans
`src/App.jsx` et son entrée de menu dans `NAV_ITEMS` (`src/data/site.js`).

## Formulaire de contact

Copier `.env.example` en `.env.local` et renseigner les clés EmailJS. Sans clés, le formulaire
ouvre la messagerie du visiteur avec le message pré-rempli.

## Hébergement

Le site est une application à plusieurs pages gérées côté navigateur : l'hébergeur doit renvoyer
toutes les adresses vers `index.html`. C'est déjà configuré pour Docker/Nginx (`docker/nginx/`),
Apache (`public/.htaccess`), Netlify (`public/_redirects`) et Vercel (`vercel.json`).

## Lancer le site avec Docker

Prérequis : Docker Desktop (ou Docker Engine avec le plugin Compose).

```bash
docker compose up -d --build   # construit l'image et démarre le site
docker compose logs -f         # suit les journaux
docker compose down            # arrête le site
```

Le site est alors disponible sur http://localhost:8080.

- **Autre port** : `SITE_PORT=80 docker compose up -d` (ou `SITE_PORT=80` dans un fichier `.env`).
- **Formulaire de contact** : copier `.env.example` en `.env` et renseigner les trois clés
  `VITE_EMAILJS_*`. Elles sont intégrées au moment de la construction : relancer avec `--build`
  après tout changement.
- **Sans Compose** :
  ```bash
  docker build -t cmct-site .
  docker run -d -p 8080:8080 --name cmct-site cmct-site
  ```

Fichiers concernés : `Dockerfile`, `docker-compose.yml`, `.dockerignore` et `docker/nginx/`
(configuration du serveur et en-têtes de sécurité).
