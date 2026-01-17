# AXIOM - Recrutement sans CV

Plateforme de recrutement innovante permettant la mise en relation entre candidats et entreprises sans CV traditionnel.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

## 📁 Structure du projet

```
/app
  /candidate          # Espace candidat
    /login
    /dashboard
    /chat
    /profile
    /matching
  /company            # Espace entreprise
    /login
    /dashboard
    /candidate/[id]
/components
  /ui                 # Composants UI de base (shadcn/ui)
  /chat               # Composants de chat
  /profile            # Composants de profil
  /matching           # Composants de matching
/lib
  mock-data.ts        # Données simulées
```

## 🛠️ Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Pages disponibles

### Espace Candidat
- `/candidate/login` - Connexion candidat
- `/candidate/dashboard` - Tableau de bord candidat
- `/candidate/chat` - Interface de chat avec AXIOM
- `/candidate/profile` - Profil candidat
- `/candidate/matching` - Résultats de matching

### Espace Entreprise
- `/company/login` - Connexion entreprise
- `/company/dashboard` - Tableau de bord entreprise
- `/company/candidate/[id]` - Détail d'un candidat

## 🎨 Design

Interface sobre, professionnelle et moderne. Utilisation de composants shadcn/ui pour une cohérence visuelle.

## 📌 Notes

- Aucune logique backend réelle pour l'instant
- Données mockées dans `/lib/mock-data.ts`
- Prêt pour intégration future d'API IA et Firebase
