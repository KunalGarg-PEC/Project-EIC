import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-col">
      <header className="bg-white py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link to='/' className="flex items-center">
              <img
                alt="Logo"
                className="h-10 w-10"
                height="40"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/386/324/small/ss-or-s-initial-letter-logo-design-vector.jpg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Sankalp</span>
              <span className="text-slate-700">Seva</span>
            </h1>
            </Link>

            <nav className="ml-10 flex space-x-4">
              <Link
                to="/"
                className="font-medium tracking-wide border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900 dark:hover:border-gray-50 dark:focus:border-gray-50 pl-60"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-medium tracking-wide border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900 dark:hover:border-gray-50 dark:focus:border-gray-50 pr-20 pl-20"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="font-medium tracking-wide border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900 dark:hover:border-gray-50 dark:focus:border-gray-50"
              >
                Contact Us
              </Link>
            </nav>
            
          </div>
          <div className="flex space-x-4">
            <Link
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              to="/login"
            >
              Log In
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
