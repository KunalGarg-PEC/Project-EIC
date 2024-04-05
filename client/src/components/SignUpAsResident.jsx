/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F3JIaObhqMZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function SignUpAsResident() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto prose lg:prose-xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Register for Resident's Pass</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to register for a visitor's pass</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" placeholder="Enter your phone number" required />
              </div>
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
              <Label htmlFor="block">Block/Wing</Label>
              <Input id="block" placeholder="Enter your block/wing" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="id">Unique ID</Label>
              <Input id="id" placeholder="Enter your unique ID" required />
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

