import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CandidateLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-2">Espace Candidat</CardTitle>
          <CardDescription>
            Connectez-vous pour accéder à votre espace personnel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
            />
          </div>
          <Button className="w-full" asChild>
            <Link href="/candidate/dashboard">Accéder à mon espace</Link>
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            En vous connectant, vous acceptez nos conditions d'utilisation.
            Vos données sont sécurisées et utilisées uniquement pour votre mise en relation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
