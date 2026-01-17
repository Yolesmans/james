import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-2">AXIOM</CardTitle>
          <CardDescription>
            Recrutement sans CV
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/candidate/login" className="block">
            <Button className="w-full" size="lg">
              Espace Candidat
            </Button>
          </Link>
          <Link href="/company/login" className="block">
            <Button className="w-full" variant="outline" size="lg">
              Espace Entreprise
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
