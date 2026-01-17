import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MatchingBadge } from '@/components/matching/MatchingBadge'
import { ProfileCard } from '@/components/profile/ProfileCard'
import { mockCandidateProfile, mockMatchingResult, mockCompanyCandidates } from '@/lib/mock-data'
import { ArrowLeft } from 'lucide-react'

interface CandidateDetailPageProps {
  params: {
    id: string
  }
}

export default function CandidateDetailPage({ params }: CandidateDetailPageProps) {
  const candidate = mockCompanyCandidates.find(c => c.id === params.id)
  const profile = mockCandidateProfile
  const matching = mockMatchingResult

  if (!candidate) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                Candidat introuvable
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/company/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la liste
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{candidate.name}</h1>
              <p className="text-muted-foreground">{candidate.email}</p>
            </div>
            <MatchingBadge status={candidate.matchingStatus} />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil AXIOM</CardTitle>
              <CardDescription>
                Profil complet du candidat sans CV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Fonctionnement général</h3>
                  <p className="text-sm text-muted-foreground">
                    Profil complété le {new Date().toLocaleDateString('fr-FR')}.
                    Ce profil a été généré via une conversation avec AXIOM.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Moteurs</h3>
                  <ul className="space-y-1">
                    {profile.motors.map((motor, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {motor}
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Points de vigilance</h3>
                  <ul className="space-y-1">
                    {profile.vigilance.map((point, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matching</CardTitle>
              <CardDescription>
                Résultat de compatibilité avec votre entreprise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold">{matching.score}%</span>
                  <span className="text-sm text-muted-foreground">de compatibilité</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Verdict</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {matching.verdict}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Lecture de compatibilité</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {matching.compatibility}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
