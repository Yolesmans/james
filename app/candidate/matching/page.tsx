import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MatchingBadge } from '@/components/matching/MatchingBadge'
import { mockMatchingResult } from '@/lib/mock-data'
import { Download, Mail } from 'lucide-react'

export default function CandidateMatching() {
  const { status, score, verdict, compatibility, company } = mockMatchingResult

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Résultat du matching</h1>
          <p className="text-muted-foreground">
            Votre compatibilité avec les entreprises
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{company}</CardTitle>
                  <CardDescription>Résultat du matching AXIOM</CardDescription>
                </div>
                <MatchingBadge status={status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold">{score}%</span>
                  <span className="text-sm text-muted-foreground">de compatibilité</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Verdict</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {verdict}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Lecture de compatibilité</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {compatibility}
                </p>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le rapport (PDF)
                </Button>
                <Button className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Contacter {company}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button variant="outline" asChild>
              <Link href="/candidate/dashboard">Retour au tableau de bord</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
