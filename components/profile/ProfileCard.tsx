'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CandidateProfile } from '@/lib/mock-data'

interface ProfileCardProps {
  profile: CandidateProfile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mon profil AXIOM</CardTitle>
        <CardDescription>
          Votre profil de candidature sans CV
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Fonctionnement général</h3>
          <p className="text-sm text-muted-foreground">
            Votre profil a été complété le {new Date().toLocaleDateString('fr-FR')}.
            Il est utilisé pour vous mettre en relation avec des entreprises qui correspondent à vos attentes.
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
      </CardContent>
    </Card>
  )
}
