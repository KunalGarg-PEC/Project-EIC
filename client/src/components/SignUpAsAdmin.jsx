/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KxoM4noRYMC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function SignUpAsAdmin() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Join the Society</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to become a member</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full name</Label>
          <Input id="full-name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" placeholder="Enter your phone number" required type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="society">Society name</Label>
          <Input id="society" placeholder="Enter your society name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea className="min-h-[100px]" id="address" placeholder="Enter your address" required />
        </div>
        <Button>Join</Button>
      </div>
    </div>
  )
}

