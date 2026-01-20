'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, MessageSquare, FileText, RefreshCw, ArrowRight } from 'lucide-react'

export default function CandidateDashboard() {
  return (
    <div className="min-h-screen bg-axiom-bg pb-20">
      <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-24">
        {/* En-tête */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-axiom-primary mb-2 md:mb-3">
            Tableau de bord
          </h1>
          <p className="text-sm md:text-base text-axiom-secondary">
            Bienvenue dans votre espace candidat AXIOM
          </p>
        </div>

        {/* Cartes principales - Responsive grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 md:mb-8">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-axiom-amethyst" />
                </div>
                <CardTitle className="text-base md:text-lg font-serif font-semibold text-axiom-primary">
                  Profil complété
                </CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm text-axiom-secondary mt-2">
                Votre profil est à jour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                asChild
              >
                <Link href="/candidate/profile" className="flex items-center justify-center gap-2">
                  Voir mon profil
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-axiom-heliotrope" />
                </div>
                <CardTitle className="text-base md:text-lg font-serif font-semibold text-axiom-primary">
                  Matching
                </CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm text-axiom-secondary mt-2">
                Consultez vos résultats de matching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                asChild
              >
                <Link href="/candidate/matching" className="flex items-center justify-center gap-2">
                  Voir le matching
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-axiom-amethyst/10 to-axiom-heliotrope/10">
                  <FileText className="h-4 w-4 md:h-5 md:w-5 text-axiom-amethyst" />
                </div>
                <CardTitle className="text-base md:text-lg font-serif font-semibold text-axiom-primary">
                  Historique
                </CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm text-axiom-secondary mt-2">
                Vos interactions précédentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full rounded-axiom border-axiom-amethyst/20 opacity-50 cursor-not-allowed" 
                disabled
              >
                Bientôt disponible
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-6 md:my-8 border-axiom-amethyst/10" />

        {/* Section Actions et Statut - Responsive grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-serif font-semibold text-axiom-primary">
                Actions rapides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-james-gradient text-white rounded-axiom hover:shadow-[0_10px_15px_-3px_rgba(109,40,217,0.3)]" 
                asChild
              >
                <Link href="/candidate/chat">Continuer le chat</Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                asChild
              >
                <Link href="/candidate/profile" className="flex items-center justify-center gap-2">
                  <RefreshCw className="h-3 w-3 md:h-4 md:w-4" />
                  Refaire un profil
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-axiom border-axiom-amethyst/20 hover:border-axiom-amethyst/40 hover:bg-axiom-amethyst/5 text-axiom-primary" 
                asChild
              >
                <Link href="/candidate/profile">Modifier mes informations</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl font-serif font-semibold text-axiom-primary">
                Statut actuel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs md:text-sm font-medium mb-1 text-axiom-primary">Profil</p>
                <p className="text-xs md:text-sm text-axiom-secondary">Complété</p>
              </div>
              <Separator className="border-axiom-amethyst/10" />
              <div>
                <p className="text-xs md:text-sm font-medium mb-1 text-axiom-primary">Matching en cours</p>
                <p className="text-xs md:text-sm text-axiom-secondary">1 entreprise</p>
              </div>
              <Separator className="border-axiom-amethyst/10" />
              <div>
                <p className="text-xs md:text-sm font-medium mb-1 text-axiom-primary">Dernière mise à jour</p>
                <p className="text-xs md:text-sm text-axiom-secondary">
                  {new Date().toLocaleDateString('fr-FR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
