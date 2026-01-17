import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CompanyLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-2">Espace Entreprise</CardTitle>
          <CardDescription>
            Connectez-vous pour accéder à votre espace recruteur
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel</Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@entreprise.com"
            />
          </div>
          <Button className="w-full" asChild>
            <Link href="/company/dashboard">Accéder à mon espace</Link>
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Accès réservé aux entreprises partenaires AXIOM.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
