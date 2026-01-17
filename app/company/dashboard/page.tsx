import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MatchingBadge } from '@/components/matching/MatchingBadge'
import { mockCompanyCandidates } from '@/lib/mock-data'
import { Eye } from 'lucide-react'

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tableau de bord entreprise</h1>
          <p className="text-muted-foreground">
            Gérez vos candidats et leurs profils AXIOM
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Candidats</CardTitle>
            <CardDescription>
              Liste des candidats correspondant à vos critères
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Nom</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Statut matching</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCompanyCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">{candidate.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {candidate.email}
                      </td>
                      <td className="p-4">
                        <MatchingBadge status={candidate.matchingStatus} />
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {candidate.date.toLocaleDateString('fr-FR')}
                      </td>
                      <td className="p-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/company/candidate/${candidate.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            Voir le profil
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold">{mockCompanyCandidates.length}</p>
                  <p className="text-sm text-muted-foreground">Candidats totaux</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockCompanyCandidates.filter(c => c.matchingStatus === 'aligned').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Alignés</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockCompanyCandidates.filter(c => c.matchingStatus === 'conditional').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Conditionnels</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
