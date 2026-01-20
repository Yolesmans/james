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
    nouveauxInteretsConfirmes: 47,
  },
  {
    id: '2',
    posteId: '2',
    managerId: '2',
    statut: 'active',
    createdAt: new Date('2024-01-20'),
    nouveauxInteretsConfirmes: 12,
  },
  {
    id: '3',
    posteId: '3',
    managerId: '3',
    statut: 'veille',
    createdAt: new Date('2024-01-10'),
    nouveauxInteretsConfirmes: 8,
  },
  {
    id: '4',
    posteId: '4',
    managerId: '4',
    statut: 'active',
    createdAt: new Date('2024-01-25'),
    nouveauxInteretsConfirmes: 23,
  },
]

// Étiquettes de personnalité cohérentes
const etiquettesPersonnalite = [
  'Architecte Visionnaire',
  'Créateur Méthodique',
  'Explorateur Curieux',
  'Analyste Prudent',
  'Innovateur Passionné',
  'Stratège Analytique',
  'Artiste Conceptuel',
  'Pionnier Audacieux',
  'Orchestrateur Équilibré',
  'Concepteur Pragmatique',
  'Visionnaire Tactique',
  'Créateur Systémique',
  'Explorateur Méthodique',
  'Analyste Créatif',
  'Innovateur Structuré',
]

// Fonction pour générer des profils réalistes avec seed pour reproductibilité
function generateProfils(
  count: number,
  seed: number = 42,
  options: {
    contacteRatio?: number
    alignementTermineRatio?: number
    interetConfirmeRatio?: number
    interetPlusTardRatio?: number
    entretienPlanifieRatio?: number
    noShowRatio?: number
  } = {}
): ProfilResonance[] {
  const {
    contacteRatio = 0.45,
    alignementTermineRatio = 0.40,
    interetConfirmeRatio = 0.15,
    interetPlusTardRatio = 0.05,
    entretienPlanifieRatio = 0.08,
    noShowRatio = 0.02,
  } = options

  const profils: ProfilResonance[] = []
  let currentSeed = seed

  // Simple PRNG pour reproductibilité
  function random() {
    currentSeed = (currentSeed * 9301 + 49297) % 233280
    return currentSeed / 233280
  }

  // Générer des IDs uniques
  const usedIds = new Set<number>()
  function getUniqueId() {
    let id
    do {
      id = Math.floor(random() * 9999) + 1
    } while (usedIds.has(id))
    usedIds.add(id)
    return id
  }

  for (let i = 0; i < count; i++) {
    const id = `p${i + 1}`
    const uniqueId = getUniqueId()
    const identiteAnonyme = `Profil #${String(uniqueId).padStart(4, '0')}`
    
    // Score d'alignement réaliste (distribution normale centrée sur 75)
    const scoreAlignement = Math.max(45, Math.min(98, Math.round(75 + (random() - 0.5) * 30)))
    
    const etiquettePersonnalite = etiquettesPersonnalite[
      Math.floor(random() * etiquettesPersonnalite.length)
    ]

    // Déterminer l'état du profil
    const alignementTermine = random() < alignementTermineRatio
    const contacte = random() < contacteRatio || alignementTermine
    
    let intention: 'confirme' | 'plus-tard' | null = null
    if (alignementTermine) {
      const rand = random()
      // Sur les alignements terminés, ~37.5% ont un intérêt confirmé, ~12.5% "plus tard"
      if (rand < interetConfirmeRatio / alignementTermineRatio) {
        intention = 'confirme'
      } else if (rand < (interetConfirmeRatio + interetPlusTardRatio) / alignementTermineRatio) {
        intention = 'plus-tard'
      }
    }

    const enCours = !alignementTermine && random() < 0.6
    // Entretien planifié si intérêt confirmé (ratio parmi les confirmés)
    const entretienPlanifie = intention === 'confirme' && random() < (entretienPlanifieRatio / (interetConfirmeRatio / alignementTermineRatio))
    // No-show si entretien planifié (ratio parmi les planifiés)
    const noShow = entretienPlanifie && random() < (noShowRatio / entretienPlanifieRatio)

    profils.push({
      id,
      identiteAnonyme,
      scoreAlignement,
      etiquettePersonnalite,
      intention,
      contacte,
      enCours,
      alignementTermine,
      entretienPlanifie,
      noShow,
    })
  }

  return profils
}

// Génération de profils avec volumes réalistes
// Utilisation de seeds différents pour chaque offre pour varier les distributions
export const mockProfilsResonance: Record<string, ProfilResonance[]> = {
  // Offre 1 : Développeur Full-Stack - 2000+ profils
  '1': generateProfils(2147, 12345, {
    contacteRatio: 0.48,
    alignementTermineRatio: 0.42,
    interetConfirmeRatio: 0.16,
    interetPlusTardRatio: 0.06,
    entretienPlanifieRatio: 0.09,
    noShowRatio: 0.025,
  }),
  
  // Offre 2 : Product Manager - 450 profils
  '2': generateProfils(450, 23456, {
    contacteRatio: 0.52,
    alignementTermineRatio: 0.45,
    interetConfirmeRatio: 0.18,
    interetPlusTardRatio: 0.05,
    entretienPlanifieRatio: 0.10,
    noShowRatio: 0.02,
  }),
  
  // Offre 3 : Designer UX/UI - 320 profils
  '3': generateProfils(320, 34567, {
    contacteRatio: 0.44,
    alignementTermineRatio: 0.38,
    interetConfirmeRatio: 0.14,
    interetPlusTardRatio: 0.07,
    entretienPlanifieRatio: 0.08,
    noShowRatio: 0.03,
  }),
  
  // Offre 4 : Data Engineer - 680 profils
  '4': generateProfils(680, 45678, {
    contacteRatio: 0.46,
    alignementTermineRatio: 0.41,
    interetConfirmeRatio: 0.15,
    interetPlusTardRatio: 0.05,
    entretienPlanifieRatio: 0.08,
    noShowRatio: 0.02,
  }),
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
  const profilsCompletes = profils.filter(p => p.alignementTermine).length
  const interetsExprimes = interetsConfirmes + interetsPlusTard

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
    profilsCompletes,
    interetsExprimes,
  }
}
