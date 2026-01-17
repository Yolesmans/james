import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, MessageSquare, FileText, RefreshCw } from 'lucide-react'

export default function CandidateDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue dans votre espace candidat AXIOM
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <CardTitle className="text-lg">Profil complété</CardTitle>
              </div>
              <CardDescription>
                Votre profil est à jour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/candidate/profile">Voir mon profil</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <CardTitle className="text-lg">Matching</CardTitle>
              </div>
              <CardDescription>
                Consultez vos résultats de matching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/candidate/matching">Voir le matching</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                <CardTitle className="text-lg">Historique</CardTitle>
              </div>
              <CardDescription>
                Vos interactions précédentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Bientôt disponible
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/candidate/chat">Continuer le chat</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/candidate/profile">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refaire un profil
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/candidate/profile">Modifier mes informations</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statut actuel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Profil</p>
                <p className="text-sm text-muted-foreground">Complété</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-1">Matching en cours</p>
                <p className="text-sm text-muted-foreground">1 entreprise</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium mb-1">Dernière mise à jour</p>
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
