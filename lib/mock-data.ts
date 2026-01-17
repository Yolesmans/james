export interface Message {
  id: string
  text: string
  sender: 'axiom' | 'candidate'
  timestamp: Date
  choices?: string[]
  link?: string
}

export interface CandidateProfile {
  id: string
  name: string
  email: string
  completed: boolean
  motors: string[]
  vigilance: string[]
}

export interface MatchingResult {
  status: 'aligned' | 'conditional' | 'not_aligned'
  score: number
  verdict: string
  compatibility: string
  company: string
}

export interface CompanyCandidate {
  id: string
  name: string
  email: string
  matchingStatus: 'aligned' | 'conditional' | 'not_aligned'
  date: Date
}

export const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Bonjour ! Je suis AXIOM, votre assistant de recrutement. Je vais vous poser quelques questions pour mieux vous connaître.',
    sender: 'axiom',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    text: 'Quelle est votre principale motivation professionnelle ?',
    sender: 'axiom',
    timestamp: new Date(Date.now() - 240000),
    choices: [
      'Développer mes compétences techniques',
      'Travailler sur des projets innovants',
      'Évoluer dans ma carrière',
      'Contribuer à un projet à impact',
    ],
  },
  {
    id: '3',
    text: 'Développer mes compétences techniques',
    sender: 'candidate',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    text: 'Parfait. Pouvez-vous me parler de votre expérience avec les technologies web modernes ?',
    sender: 'axiom',
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: '5',
    text: 'J\'ai 5 ans d\'expérience avec React, TypeScript et Next.js. J\'ai travaillé sur plusieurs projets SaaS.',
    sender: 'candidate',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '6',
    text: 'Excellent. Pour compléter votre profil, pouvez-vous remplir ce formulaire ?',
    sender: 'axiom',
    timestamp: new Date(Date.now() - 30000),
    link: 'https://tally.so/r/example',
  },
]

export const mockCandidateProfile: CandidateProfile = {
  id: '1',
  name: 'Jean Dupont',
  email: 'jean.dupont@example.com',
  completed: true,
  motors: [
    'Développement technique',
    'Innovation',
    'Apprentissage continu',
  ],
  vigilance: [
    'Équilibre vie pro/perso',
    'Culture d\'entreprise',
  ],
}

export const mockMatchingResult: MatchingResult = {
  status: 'aligned',
  score: 87,
  verdict: 'Votre profil correspond très bien aux attentes d\'ElgaEnergy. Vos compétences techniques et votre motivation sont alignées avec leurs besoins.',
  compatibility: 'Vous partagez les mêmes valeurs autour de l\'innovation et du développement durable. Votre expérience avec les technologies modernes correspond parfaitement à leurs projets.',
  company: 'ElgaEnergy',
}

export const mockCompanyCandidates: CompanyCandidate[] = [
  {
    id: '1',
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    matchingStatus: 'aligned',
    date: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Marie Martin',
    email: 'marie.martin@example.com',
    matchingStatus: 'conditional',
    date: new Date('2024-01-14'),
  },
  {
    id: '3',
    name: 'Pierre Durand',
    email: 'pierre.durand@example.com',
    matchingStatus: 'not_aligned',
    date: new Date('2024-01-13'),
  },
]
