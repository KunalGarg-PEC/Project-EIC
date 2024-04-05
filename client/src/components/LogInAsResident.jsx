/**
 * v0 by Vercel.
 * @see https://v0.dev/t/47J6IuS5DNj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function LogInAsResident() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="code">Unique code</Label>
          <Input id="code" placeholder="Unique code" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

