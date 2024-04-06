/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9wtlPJ0rlIW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="container grid max-w-6xl gap-10 px-4 py-6 md:grid-cols-2 md:px-6 lg:gap-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Want to get in touch? We'd love to hear from you. Fill out the form below and we'll get back to you as soon
            as possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
          </div>
          <Button>Send message</Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Feel free to reach out to us using the information below.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-medium">Call us</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1800 103 6286</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MailIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-medium">Email us</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">sankalpsevao@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-6 h-6 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-medium">Visit us</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">IT PARK, Chandigarh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
