// Données mock pour l'espace Organisation

export interface Poste {
  id: string
  titre: string
  icone: string
  description: string
  departement: string
}

export interface Manager {
  id: string
  nom: string
  prenom: string
  avatar: string
  email: string
  departement: string
}

export interface Offre {
  id: string
  posteId: string
  managerId: string
  statut: 'active' | 'veille' | 'archivee'
  createdAt: Date
  nouveauxInteretsConfirmes: number
}

export interface ProfilResonance {
  id: string
  identiteAnonyme: string
  scoreAlignement: number
  etiquettePersonnalite: string
  intention: 'confirme' | 'plus-tard' | null
  contacte: boolean
  enCours: boolean
  alignementTermine: boolean
  entretienPlanifie: boolean
  noShow: boolean
}

export const mockPostes: Poste[] = [
  {
    id: '1',
    titre: 'Développeur Full-Stack',
    icone: '💻',
    description: 'Expertise React, TypeScript, Node.js',
    departement: 'Technique',
  },
  {
    id: '2',
    titre: 'Product Manager',
    icone: '📊',
    description: 'Vision produit et stratégie',
    departement: 'Produit',
  },
  {
    id: '3',
    titre: 'Designer UX/UI',
    icone: '🎨',
    description: 'Design centré utilisateur',
    departement: 'Design',
  },
  {
    id: '4',
    titre: 'Data Engineer',
    icone: '📈',
    description: 'Infrastructure données et pipelines',
    departement: 'Data',
  },
]

export const mockManagers: Manager[] = [
  {
    id: '1',
    nom: 'Martin',
    prenom: 'Sophie',
    avatar: 'SM',
    email: 'sophie.martin@example.com',
    departement: 'Technique',
  },
  {
    id: '2',
    nom: 'Dubois',
    prenom: 'Thomas',
    avatar: 'TD',
    email: 'thomas.dubois@example.com',
    departement: 'Produit',
  },
  {
    id: '3',
    nom: 'Bernard',
    prenom: 'Marie',
    avatar: 'MB',
    email: 'marie.bernard@example.com',
    departement: 'Design',
  },
  {
    id: '4',
    nom: 'Petit',
    prenom: 'Lucas',
    avatar: 'LP',
    email: 'lucas.petit@example.com',
    departement: 'Data',
  },
]

export const mockOffres: Offre[] = [
  {
    id: '1',
    posteId: '1',
    managerId: '1',
    statut: 'active',
    createdAt: new Date('2024-01-15'),
    nouveauxInteretsConfirmes: 3,
  },
  {
    id: '2',
    posteId: '2',
    managerId: '2',
    statut: 'active',
    createdAt: new Date('2024-01-20'),
    nouveauxInteretsConfirmes: 0,
  },
  {
    id: '3',
    posteId: '3',
    managerId: '3',
    statut: 'veille',
    createdAt: new Date('2024-01-10'),
    nouveauxInteretsConfirmes: 1,
  },
  {
    id: '4',
    posteId: '4',
    managerId: '4',
    statut: 'active',
    createdAt: new Date('2024-01-25'),
    nouveauxInteretsConfirmes: 0,
  },
]

export const mockProfilsResonance: Record<string, ProfilResonance[]> = {
  '1': [
    {
      id: 'p1',
      identiteAnonyme: 'Profil #842',
      scoreAlignement: 87,
      etiquettePersonnalite: 'Architecte Visionnaire',
      intention: 'confirme',
      contacte: true,
      enCours: false,
      alignementTermine: true,
      entretienPlanifie: true,
      noShow: false,
    },
    {
      id: 'p2',
      identiteAnonyme: 'Profil #156',
      scoreAlignement: 92,
      etiquettePersonnalite: 'Créateur Méthodique',
      intention: 'confirme',
      contacte: true,
      enCours: false,
      alignementTermine: true,
      entretienPlanifie: false,
      noShow: false,
    },
    {
      id: 'p3',
      identiteAnonyme: 'Profil #423',
      scoreAlignement: 75,
      etiquettePersonnalite: 'Explorateur Curieux',
      intention: 'plus-tard',
      contacte: false,
      enCours: true,
      alignementTermine: false,
      entretienPlanifie: false,
      noShow: false,
    },
    {
      id: 'p4',
      identiteAnonyme: 'Profil #789',
      scoreAlignement: 68,
      etiquettePersonnalite: 'Analyste Prudent',
      intention: null,
      contacte: false,
      enCours: true,
      alignementTermine: false,
      entretienPlanifie: false,
      noShow: false,
    },
    {
      id: 'p5',
      identiteAnonyme: 'Profil #234',
      scoreAlignement: 95,
      etiquettePersonnalite: 'Innovateur Passionné',
      intention: 'confirme',
      contacte: true,
      enCours: false,
      alignementTermine: true,
      entretienPlanifie: true,
      noShow: true,
    },
  ],
  '2': [
    {
      id: 'p6',
      identiteAnonyme: 'Profil #567',
      scoreAlignement: 80,
      etiquettePersonnalite: 'Stratège Analytique',
      intention: null,
      contacte: false,
      enCours: true,
      alignementTermine: false,
      entretienPlanifie: false,
      noShow: false,
    },
  ],
  '3': [
    {
      id: 'p7',
      identiteAnonyme: 'Profil #891',
      scoreAlignement: 88,
      etiquettePersonnalite: 'Artiste Conceptuel',
      intention: 'confirme',
      contacte: true,
      enCours: false,
      alignementTermine: true,
      entretienPlanifie: false,
      noShow: false,
    },
  ],
  '4': [],
}

// Fonctions utilitaires
export function getPosteById(id: string): Poste | undefined {
  return mockPostes.find(p => p.id === id)
}

export function getManagerById(id: string): Manager | undefined {
  return mockManagers.find(m => m.id === id)
}

export function getOffreById(id: string): Offre | undefined {
  return mockOffres.find(o => o.id === id)
}

export function getProfilsByOffreId(offreId: string): ProfilResonance[] {
  return mockProfilsResonance[offreId] || []
}

export function getKPIsByOffreId(offreId: string) {
  const profils = getProfilsByOffreId(offreId)
  
  const total = profils.length
  const contactes = profils.filter(p => p.contacte).length
  const enCours = profils.filter(p => p.enCours).length
  const alignementsTermines = profils.filter(p => p.alignementTermine).length
  const interetsConfirmes = profils.filter(p => p.intention === 'confirme').length
  const interetsPlusTard = profils.filter(p => p.intention === 'plus-tard').length
  const entretiensPlanifies = profils.filter(p => p.entretienPlanifie).length
  const noShow = profils.filter(p => p.noShow).length
  const bruit = profils.filter(p => !p.alignementTermine).length
  const valeur = profils.filter(p => p.alignementTermine).length

  return {
    total,
    contactes,
    enCours,
    alignementsTermines,
    interetsConfirmes,
    interetsPlusTard,
    entretiensPlanifies,
    noShow,
    bruit,
    valeur,
  }
}
