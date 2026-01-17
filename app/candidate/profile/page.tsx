import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProfileCard } from '@/components/profile/ProfileCard'
import { mockCandidateProfile } from '@/lib/mock-data'

export default function CandidateProfile() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mon profil</h1>
          <p className="text-muted-foreground">
            Consultez et modifiez votre profil AXIOM
          </p>
        </div>

        <ProfileCard profile={mockCandidateProfile} />

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/candidate/matching">Accéder au matching</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/candidate/dashboard">Retour au tableau de bord</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
