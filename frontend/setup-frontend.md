# Frontend Setup
Projet utilise : 
- React + Vite → pour le développement frontend rapide
- Tailwind CSS → pour le style utilitaire (CSS moderne, responsive)
- shadcn/ui → une librairie de composants préconstruits basée sur Tailwind

## Structure actuelle du dossier
```
Trail-Guide/
│
├── frontend/             # Application React
│   ├── node_modules/     
│   ├── public/           
│   ├── src/              
│   │   ├── App.jsx       
│   │   ├── main.jsx      
│   │   ├── index.css     # Fichier global où Tailwind est injecté
│   │   └── pages/        
│   ├── package.json      
│   ├── postcss.config.cjs
│   ├── tailwind.config.cjs
│   └── vite.config.js    
│
└── README.md             
```
## Étapes pour configurer le frontend
```bash
cd frontend
npm install
```

Pour le projet en local :
```bash
npm run dev
```
Le serveur tourne par défaut sur http://localhost:5173/

## Scripts disponibles
- `npm run dev` → démarre le serveur de développement
- `npm run build` → génère une version optimisée pour la prod
- `npm run preview` → prévisualise la build

## Tailwind CSS
Le projet utilise Tailwind pour appliquer du style rapidement via des classes utilitaires.
Les fichiers importants sont :
- `tailwind.config.cjs` → configuration (chemins, thèmes, couleurs personnalisées)
- `src/index.css` → inclut les directives Tailwind (@tailwind base; @tailwind components; @tailwind utilities;)

Exemple d'utilisation dans un composant React :
```jsx
export default function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Clique-moi</button>
}
```

## shadcn/ui
shadcn/ui est une collection de composants React préconstruits basés sur Tailwind CSS.

### Ajout de nouveaux composants
Ex : `npx shadcn@latest add button`

Ensuite, l'utiliser dans le code :
```jsx
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return <Button>Trail Guide</Button>
}
```

## Prochaines étapes
- Ajouter des pages et composants spécifiques à l'application
- Créer une navigation
- Intégrer avec le backend (API, authentification, etc.)