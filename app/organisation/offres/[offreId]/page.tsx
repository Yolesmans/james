'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PulseBar from '@/components/organisation/PulseBar'
import ProfilsTable from '@/components/organisation/ProfilsTable'
import GhostLinkModal from '@/components/organisation/GhostLinkModal'
import RetablirContactModal from '@/components/organisation/RetablirContactModal'
import * as Dialog from '@radix-ui/react-dialog'
import { 
  getOffreById, 
  getPosteById, 
  getManagerById, 
  getProfilsByOffreId, 
  getKPIsByOffreId,
  type Offre 
} from '@/lib/organisation-data'
import { CheckCircle2, X, Archive } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function OffreDetailPage() {
  const params = useParams()
  const offreId = params.offreId as string
  
  const offre = getOffreById(offreId)
  const poste = offre ? getPosteById(offre.posteId) : undefined
  const manager = offre ? getManagerById(offre.managerId) : undefined
  const profils = offre ? getProfilsByOffreId(offreId) : []
  const kpis = offre ? getKPIsByOffreId(offreId) : null

  const [selectedProfilForLink, setSelectedProfilForLink] = useState<string | null>(null)
  const [selectedProfilForContact, setSelectedProfilForContact] = useState<string | null>(null)
  const [showRecruterModal, setShowRecruterModal] = useState(false)
  const [offreArchivee, setOffreArchivee] = useState(offre?.statut === 'archivee')

  if (!offre || !poste || !manager || !kpis) {
    return (
      <div className="min-h-screen bg-axiom-bg pb-20">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <p className="text-axiom-secondary">Offre introuvable.</p>
        </div>
      </div>
    )
  }

  const handlePlanifierEntretien = (profilId: string) => {
    // TODO: Implémenter la logique de planification d'entretien
    console.log('Planifier entretien pour:', profilId)
  }

  const handleRetablirContact = (profilId: string) => {
    setSelectedProfilForContact(profilId)
  }

  const handleConfirmRetablirContact = () => {
    if (selectedProfilForContact) {
      // TODO: Implémenter la logique de rétablissement de contact
      // Envoi du lien Ghost avec le message UX exact
      console.log('Rétablir le contact pour:', selectedProfilForContact)
      setSelectedProfilForContact(null)
    }
  }

  const handleGenererLien = (profilId: string) => {
    setSelectedProfilForLink(profilId)
  }

  const handleRecruter = () => {
    setOffreArchivee(true)
    setShowRecruterModal(false)
    // TODO: Implémenter la logique de clôture d'offre
  }

  const getStatutBadge = (statut: Offre['statut']) => {
    if (offreArchivee) {
      return (
        <Badge variant="secondary" className="bg-axiom-secondary/20">
          <Archive className="w-3 h-3 mr-1" />
          Archivée
        </Badge>
      )
    }
    switch (statut) {
      case 'active':
        return <Badge variant="success">Active</Badge>
      case 'veille':
        return <Badge variant="info">Veille</Badge>
      case 'archivee':
        return (
          <Badge variant="secondary" className="bg-axiom-secondary/20">
            <Archive className="w-3 h-3 mr-1" />
            Archivée
          </Badge>
        )
    }
  }

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-8">
          {/* A. En-tête Offre */}
          <Card className={cn(offreArchivee && 'opacity-60')}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{poste.icone}</div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-2xl text-axiom-primary">
                        {poste.titre}
                      </CardTitle>
                      <p className="text-axiom-secondary mt-1">
                        Manager : {manager.prenom} {manager.nom}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-axiom-secondary">Statut :</span>
                    {getStatutBadge(offre.statut)}
                  </div>
                </div>
                {!offreArchivee && (
                  <Button
                    variant="destructive"
                    onClick={() => setShowRecruterModal(true)}
                    className="ml-4"
                  >
                    Recruter
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>

          {offreArchivee ? (
            /* UI de fermeture : Esthétique de sceau scellé */
            <Card className="border-2 border-axiom-amethyst/30">
              <CardContent className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-axiom-amethyst/10 mb-4">
                  <Archive className="w-10 h-10 text-axiom-amethyst" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-axiom-primary mb-2">
                  Offre Clôturée
                </h3>
                <p className="text-axiom-secondary">
                  Cette offre a été archivée. Les profils en cours peuvent terminer sans frustration.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* B. Pulse Bar (ANTI-ANXIÉTÉ) */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-axiom-primary">
                    Vue d'ensemble
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PulseBar bruit={kpis.bruit} valeur={kpis.valeur} total={kpis.total} />
                </CardContent>
              </Card>

              {/* C. KPIs synthétiques */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.total}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Profils en résonance
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.contactes}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Profils contactés
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.enCours}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Profils en cours
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.alignementsTermines}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Alignements terminés
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary flex items-center gap-2">
                      ✅ {kpis.interetsConfirmes}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Intérêts confirmés
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary flex items-center gap-2">
                      🟡 {kpis.interetsPlusTard}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Intérêts "Plus tard"
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.entretiensPlanifies}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      Entretiens planifiés
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-semibold text-axiom-primary">
                      {kpis.noShow}
                    </div>
                    <div className="text-sm text-axiom-secondary mt-1">
                      No-show
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* D. Listing Précision (Table Nouvelle Génération) */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-axiom-primary">
                    Profils en Résonance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ProfilsTable
                    profils={profils}
                    onPlanifierEntretien={handlePlanifierEntretien}
                    onRetablirContact={handleRetablirContact}
                    onGenererLien={handleGenererLien}
                  />
                </CardContent>
              </Card>
            </>
          )}

          {/* Modale Recruter */}
          <Dialog.Root open={showRecruterModal} onOpenChange={setShowRecruterModal}>
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
                  <Button
                    variant="outline"
                    onClick={() => setShowRecruterModal(false)}
                  >
                    Annuler
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleRecruter}
                  >
                    <Archive className="w-4 h-4 mr-2" />
                    Clôturer l'offre
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Modale Ghost Link */}
          {selectedProfilForLink && (
            <GhostLinkModal
              open={!!selectedProfilForLink}
              onOpenChange={(open) => !open && setSelectedProfilForLink(null)}
              profilId={selectedProfilForLink}
            />
          )}

          {/* Modale Rétablir le contact */}
          {selectedProfilForContact && (
            <RetablirContactModal
              open={!!selectedProfilForContact}
              onOpenChange={(open) => !open && setSelectedProfilForContact(null)}
              profilId={selectedProfilForContact}
              onConfirm={handleConfirmRetablirContact}
            />
          )}
        </div>
      </div>
    </div>
  )
}
