/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OPF61ZdC5q6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function ComplaintRender() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complaint #239</CardTitle>
        <CardDescription>This is a description for the user's complaint.</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="font-medium">Name</dt>
            <dd>John Doe</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Email</dt>
            <dd>john@example.com</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Date</dt>
            <dd>2024-04-06</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Description</dt>
            <dd>Complaint description goes here.</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

