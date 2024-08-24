

import Link from 'next/link'
import Profile from "../ui/profile"
import { getServerSession } from 'next-auth'
import { NEXT_AUTH } from "@/lib/auth"


const AppBar = async() => {
  const session = await getServerSession(NEXT_AUTH)
  return (
    <div>
          <div className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-8" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          
           
          
          
            <a className="hover:text-red-500 hover:cursor-pointer">Discover</a>
          
          
            <a className="flex items-center hover:text-red-500 hover:cursor-pointer">
              <span className="text-yellow-500">⭐</span>
              <span className="mr-1">Trending</span>
            </a>
         
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          
         
          <Profile session={session}/>
          {/* <button className="p-2 border border-black rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21l-6-6m0 0l6-6m-6 6h16" />
            </svg>
          </button> */}
           <button className="md:hidden p-2 bg-gray-200 rounded focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default AppBar