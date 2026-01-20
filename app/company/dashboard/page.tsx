'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MatchingBadge } from '@/components/matching/MatchingBadge'
import { mockCompanyCandidates } from '@/lib/mock-data'
import { Eye, Users, CheckCircle2, AlertCircle } from 'lucide-react'

export default function CompanyDashboard() {
  const alignedCount = mockCompanyCandidates.filter(c => c.matchingStatus === 'aligned').length
  const conditionalCount = mockCompanyCandidates.filter(c => c.matchingStatus === 'conditional').length

  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-24">
        {/* En-tête */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-axiom-primary mb-2 md:mb-3">
            Tableau de bord entreprise
          </h1>
          <p className="text-sm md:text-base text-axiom-secondary">
            Gérez vos candidats et leurs profils AXIOM
          </p>
        </div>

        {/* Statistiques - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-axiom-amethyst" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary">
                    {mockCompanyCandidates.length}
                  </p>
                  <p className="text-xs md:text-sm text-axiom-secondary">Candidats totaux</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-axiom-heliotrope" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary">
                    {alignedCount}
                  </p>
                  <p className="text-xs md:text-sm text-axiom-secondary">Alignés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-axiom-amethyst" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-serif font-semibold text-axiom-primary">
                    {conditionalCount}
                  </p>
                  <p className="text-xs md:text-sm text-axiom-secondary">Conditionnels</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des candidats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl font-serif font-semibold text-axiom-primary">
              Candidats
            </CardTitle>
            <CardDescription className="text-xs md:text-sm text-axiom-secondary">
              Liste des candidats correspondant à vos critères
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-axiom-amethyst/10">
                    <th className="text-left p-4 font-serif font-semibold text-sm text-axiom-primary">Nom</th>
                    <th className="text-left p-4 font-serif font-semibold text-sm text-axiom-primary">Email</th>
                    <th className="text-left p-4 font-serif font-semibold text-sm text-axiom-primary">Statut matching</th>
                    <th className="text-left p-4 font-serif font-semibold text-sm text-axiom-primary">Date</th>
                    <th className="text-left p-4 font-serif font-semibold text-sm text-axiom-primary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCompanyCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-axiom-amethyst/10 hover:bg-axiom-amethyst/5 transition-colors">
                      <td className="p-4 text-sm text-axiom-primary font-medium">{candidate.name}</td>
                      <td className="p-4 text-xs md:text-sm text-axiom-secondary">
                        {candidate.email}
                      </td>
                      <td className="p-4">
                        <MatchingBadge status={candidate.matchingStatus} />
                      </td>
                      <td className="p-4 text-xs md:text-sm text-axiom-secondary">
                        {candidate.date.toLocaleDateString('fr-FR')}
                      </td>
                      <td className="p-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                          asChild
                        >
                          <Link href={`/company/candidate/${candidate.id}`} className="flex items-center gap-2">
                            <Eye className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="hidden lg:inline">Voir le profil</span>
                            <span className="lg:hidden">Voir</span>
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {mockCompanyCandidates.map((candidate) => (
                <Card key={candidate.id} className="border-axiom-amethyst/10">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-serif font-semibold text-axiom-primary mb-1">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-axiom-secondary">
                          {candidate.email}
                        </p>
                      </div>
                      
                      <Separator className="border-axiom-amethyst/10" />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-axiom-secondary mb-1">Statut</p>
                          <MatchingBadge status={candidate.matchingStatus} />
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-axiom-secondary mb-1">Date</p>
                          <p className="text-xs text-axiom-primary">
                            {candidate.date.toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                        asChild
                      >
                        <Link href={`/company/candidate/${candidate.id}`} className="flex items-center justify-center gap-2">
                          <Eye className="h-4 w-4" />
                          Voir le profil
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
