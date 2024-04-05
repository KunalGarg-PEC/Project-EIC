/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6nLDcqNKSfa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <img
            alt="Logo"
            className="rounded-full"
            height="72"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/386/324/small/ss-or-s-initial-letter-logo-design-vector.jpg"
            style={{
              aspectRatio: "72/72",
              objectFit: "cover",
            }}
            width="72"
          />
          <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            © 2023 SankalpSeva Ltd.  All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-sm font-medium underline hover:no-underline dark:hover:no-underline" href="#">
            Privacy
          </Link>
          <Link className="text-sm font-medium underline hover:no-underline dark:hover:no-underline" href="#">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}


