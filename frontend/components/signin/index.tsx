'use client'

import { signIn } from 'next-auth/react'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const SignIn = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const router = useRouter()


  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>

        <form onSubmit={async (e)=>{
          e.preventDefault()
          console.log('heelo')
          const res=  await signIn('credentials',
            {
                username:email,
                password:password,
                redirect:false,
              
                
            }
          ) 
          console.log(res?.error)
          if (!res?.error) {
            router.push( "http://localhost:3000")
          }
        }} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e)=> setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e)=> setPassword(e.target.value)}

                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              
                <a className="font-medium text-red-600 hover:text-red-500">
                  Forgot your password?
                </a>
              
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in
            </button>
          </div>
        </form>
{/* 
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Or{' '}
            
            
            
          </p>

          <div className="flex items-center justify-center py-4 ">
    <button className="px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-slate-700  hover:border-slate-400  hover:text-slate-900  hover:shadow transition duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>SigIn with Google</span>
    </button>
</div>

        </div> */}

      </div>
    </div>  )
}

export default SignIn