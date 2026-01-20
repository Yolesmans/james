'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import OffreHeader from '@/components/organisation/OffreHeader'
import PulseBarSegmented from '@/components/organisation/PulseBarSegmented'
import KPITile from '@/components/organisation/KPITile'
import IntentionCandidat from '@/components/organisation/IntentionCandidat'
import ListingPrecision from '@/components/organisation/ListingPrecision'
import {
  IconUsers,
  IconMail,
  IconCheckCircle,
  IconTarget,
  IconHeart,
  IconClock,
  IconCalendar,
  IconXCircle,
} from '@/components/organisation/KPIIcons'
import {
  mockOffres,
  getPosteById,
  getManagerById,
  getProfilsByOffreId,
  getKPIsByOffreId,
  type Offre,
} from '@/lib/organisation-data'
import * as Dialog from '@radix-ui/react-dialog'
import { Archive } from 'lucide-react'

export default function OrganisationDashboard() {
  const searchParams = useSearchParams()
  const offreIdParam = searchParams.get('offreId')

  // Récupérer toutes les offres non clôturées, triées par date (plus récente en premier)
  const offresActives = mockOffres
    .filter(offre => offre.statut !== 'archivee')
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  // Déterminer l'offre active par défaut
  const getOffreActiveIndex = () => {
    if (offreIdParam) {
      const index = offresActives.findIndex(o => o.id === offreIdParam)
      if (index !== -1) return index
    }
    return 0 // Plus récente par défaut
  }

  const [offreActiveIndex, setOffreActiveIndex] = useState(getOffreActiveIndex())
  const [showListing, setShowListing] = useState(false)
  const [showCloturerModal, setShowCloturerModal] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const offreActive = offresActives[offreActiveIndex]
  const poste = offreActive ? getPosteById(offreActive.posteId) : undefined
  const manager = offreActive ? getManagerById(offreActive.managerId) : undefined
  const profils = offreActive ? getProfilsByOffreId(offreActive.id) : []
  const kpis = offreActive ? getKPIsByOffreId(offreActive.id) : null

  // Navigation entre offres
  const handleNext = () => {
    if (offreActiveIndex < offresActives.length - 1) {
      setOffreActiveIndex(offreActiveIndex + 1)
    }
  }

  const handlePrev = () => {
    if (offreActiveIndex > 0) {
      setOffreActiveIndex(offreActiveIndex - 1)
    }
  }

  // Swipe mobile
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && offreActiveIndex < offresActives.length - 1) {
      handleNext()
    }
    if (isRightSwipe && offreActiveIndex > 0) {
      handlePrev()
    }
  }

  // Handlers
  const handlePlanifierEntretien = (profilId: string) => {
    console.log('Planifier entretien pour:', profilId)
  }

  const handleRetablirContact = (profilId: string) => {
    console.log('Rétablir le contact pour:', profilId)
  }

  const handleRetablirResonance = (profilId: string) => {
    console.log('Rétablir la résonance pour:', profilId)
  }

  const handleRelanceDouce = (profilId: string) => {
    console.log('Relance douce pour:', profilId)
  }

  const handleGenererLien = (profilId: string) => {
    console.log('Générer lien pour:', profilId)
  }

  const handleCloturer = () => {
    // TODO: Implémenter la logique de clôture
    console.log('Clôturer offre:', offreActive?.id)
    setShowCloturerModal(false)
  }

  if (!offreActive || !poste || !manager || !kpis) {
    return (
      <div className="min-h-screen bg-axiom-bg pb-20">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="text-center py-12">
            <p className="text-axiom-secondary">
              Aucune offre active pour le moment.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Calculs pour Pulse Bar
  const profilsRecus = kpis.total
  const profilsContactes = kpis.contactes
  const profilsEnCours = kpis.enCours
  const alignementsTermines = kpis.alignementsTermines
  const interetsExprimes = kpis.interetsConfirmes + kpis.interetsPlusTard

  return (
    <div
      className="min-h-screen bg-axiom-bg pb-20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          {/* Slogan */}
          <div className="text-center">
            <p className="text-lg text-axiom-secondary max-w-2xl mx-auto font-serif italic">
              L'alignement parfait ne doit plus être du hasard…
              <br />
              Mais une évidence.
            </p>
          </div>

          {/* 1. EN-TÊTE DE CONTEXTE (OFFRE ACTIVE) */}
          <OffreHeader
            offre={offreActive}
            poste={poste}
            manager={manager}
            onVoirProfils={() => setShowListing(true)}
            onRetablirContact={() => {}}
            onCloturer={() => setShowCloturerModal(true)}
            hasNext={offreActiveIndex < offresActives.length - 1}
            hasPrev={offreActiveIndex > 0}
            onNext={handleNext}
            onPrev={handlePrev}
          />

          {/* 2. BLOC CENTRAL — STATUT GLOBAL DE L'OFFRE */}
          <div className="space-y-6">
            {/* 2.1. Pulse Bar */}
            <div className="bg-white rounded-axiom border border-[rgba(226,232,240,0.4)] p-6 hover:border-axiom-amethyst/10 transition-colors">
              <h2 className="font-serif text-lg font-semibold text-axiom-primary mb-4">
                Statut Global
              </h2>
              <PulseBarSegmented
                profilsRecus={profilsRecus}
                profilsContactes={profilsContactes}
                profilsEnCours={profilsEnCours}
                alignementsTermines={alignementsTermines}
                interetsExprimes={interetsExprimes}
                total={profilsRecus}
              />
            </div>

            {/* 2.2. Tuiles KPI */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPITile
                icon={<IconUsers />}
                value={kpis.total}
                label="Profils reçus"
              />
              <KPITile
                icon={<IconMail />}
                value={kpis.contactes}
                label="Profils contactés"
              />
              <KPITile
                icon={<IconCheckCircle />}
                value={kpis.profilsCompletes}
                label="Profils complétés"
              />
              <KPITile
                icon={<IconTarget />}
                value={kpis.alignementsTermines}
                label="Alignements terminés"
              />
              <KPITile
                icon={<IconHeart />}
                value={kpis.interetsConfirmes}
                label="Intérêt confirmé"
              />
              <KPITile
                icon={<IconClock />}
                value={kpis.interetsPlusTard}
                label="Intérêt plus tard"
              />
              <KPITile
                icon={<IconCalendar />}
                value={kpis.entretiensPlanifies}
                label="Entretiens planifiés"
              />
              <KPITile
                icon={<IconXCircle />}
                value={kpis.noShow}
                label="No-show détectés"
              />
            </div>
          </div>

          {/* 3. BLOC "INTENTION CANDIDAT" */}
          <IntentionCandidat
            profils={profils}
            onPlanifierEntretien={handlePlanifierEntretien}
            onRetablirResonance={handleRetablirResonance}
            onRelanceDouce={handleRelanceDouce}
          />

          {/* Preview offre suivante (desktop) */}
          {offreActiveIndex < offresActives.length - 1 && (
            <div className="hidden md:block">
              <div 
                className="bg-white/50 backdrop-blur-sm rounded-axiom border border-axiom-amethyst/10 p-4 opacity-60 hover:opacity-80 hover:border-axiom-amethyst/20 transition-all cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm text-axiom-secondary">Offre suivante :</div>
                  <div className="text-sm font-medium text-axiom-primary">
                    {getPosteById(offresActives[offreActiveIndex + 1].posteId)?.titre}
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Listing Précision (Panel latéral) */}
      <ListingPrecision
        profils={profils}
        isOpen={showListing}
        onClose={() => setShowListing(false)}
        onPlanifierEntretien={handlePlanifierEntretien}
        onRetablirContact={handleRetablirContact}
        onGenererLien={handleGenererLien}
      />

      {/* Modale Clôturer */}
      <Dialog.Root open={showCloturerModal} onOpenChange={setShowCloturerModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-axiom-surface/95 backdrop-blur-md border border-[rgba(226,232,240,0.4)] rounded-axiom p-6 shadow-xl z-50">
            <Dialog.Title className="font-serif text-xl font-semibold text-axiom-primary mb-4">
              Clôturer l'offre
            </Dialog.Title>
            <Dialog.Description className="text-sm text-axiom-secondary mb-6">
              Êtes-vous sûr de vouloir clôturer cette offre ? Elle sera archivée et les actions actives seront désactivées. Les profils en cours pourront toujours terminer leur parcours.
            </Dialog.Description>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowCloturerModal(false)}
                className="px-4 py-2 text-sm text-axiom-secondary hover:text-axiom-primary transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleCloturer}
                className="px-4 py-2 text-sm bg-gradient-to-r from-axiom-amethyst to-axiom-heliotrope text-white rounded-axiom hover:opacity-90 hover:shadow-[0_10px_15px_-3px_rgba(109,40,217,0.3)] transition-all"
              >
                <Archive className="w-4 h-4 inline mr-2" />
                Clôturer l'offre
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
