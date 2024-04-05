/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cIeWSFNcrWA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function HomePage() {
    
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <section className="relative h-[300px] bg-gray-200 dark:bg-gray-800">
          <img
            alt="Background"
            className="absolute inset-0 object-cover"
            height="300"
            src="https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg?auto=compress&cs=tinysrgb&w=600"
            style={{
              aspectRatio: "1024/300",
              objectFit: "cover",
            }}
            width="1024"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex justify-center items-center h-full text-center text-white dark:text-gray-900">
            <h1 className="text-3xl font-bold">Embracing the societies with various facilities</h1>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <button className="flex items-center">
              <img
                alt="Logo"
                className="h-10 w-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
           
          </div>
          <div className="flex flex-col space-y-4">
           
          </div>
        </div>
      </footer>
    </div>
  )
}

