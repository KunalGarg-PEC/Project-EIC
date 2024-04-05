/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zuEOzj0cnH5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ComplaintForm() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Raise a complaint</h1>
        <p className="text-gray-500 dark:text-gray-400">Please fill out the form below to raise your complaint.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter the title of your complaint" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Enter the description of your complaint"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="society-name">Society name</Label>
            <Input id="society-name" placeholder="Enter the name of your society" required />
          </div>
        </div>
        <Button type="submit">Raise Complaint</Button>
      </div>
    </div>
  )
}

