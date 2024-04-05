import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-col ">
      <header className="bg-white py-4">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button className="flex items-center">
              <img
                alt="Logo"
                className="h-100 w-100"
                height="100"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/386/324/small/ss-or-s-initial-letter-logo-design-vector.jpg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
            </button>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sankalp</span>
            <span className='text-slate-700'>Seva</span>
            </h1>
            <nav className="ml-10 flex space-x-4">
              
            </nav>
          </div>
          <div className="flex space-x-4">
            <Link className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded" to='/signup' >
                Sign Up
                
            </Link>
            <Link className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded" to='/login ' >
                Log In
                
            </Link>
            
          </div>
        </div>
      </header>
    </div>
  )
}
