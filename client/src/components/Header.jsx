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
                className="h-10 w-10"
                height="40"
                src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=600"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
            </button>
            <nav className="ml-10 flex space-x-4">
              
            </nav>
          </div>
          <div className="flex space-x-4">
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to='/signup' >
                Sign Up
                
            </Link>
            <Button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Log In
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
