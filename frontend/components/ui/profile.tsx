'use client'

import React, {  useState } from 'react'
import { signIn, signOut } from "next-auth/react"


const Profile = ({session}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(session)
  return (
//     <div>

// <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
// <span className="sr-only">Open user menu</span>
// <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
// </button>


// <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//     <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
//       <div>Bonnie Green</div>
//       <div className="font-medium truncate">name@flowbite.com</div>
//     </div>
//     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//       </li>
//     </ul>
//     <div className="py-2">
//       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//     </div>
// </div>
//     </div>

<>
{session ? <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default"
  onClick={() => setIsOpen(!isOpen)}
  type="button" className="hs-dropdown-toggle py-1 px-1 rounded-full inline-flex items-center gap-x-2 text-sm font-medium  border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
  </button>

  {isOpen && (<div className="hs-dropdown-menu absolute top-full right-0   min-w-32 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-3 z-20" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Account
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Bookmark
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#"
    onClick={()=>
      signOut()
    }
    >
      LogOut
    </a>
    
  </div>)}
</div> : 
   <button className="px-4 py-2 border border-black rounded-full hover:bg-gray-100"
   onClick={()=>
     signIn()
   }
   >SingIn</button>
}

    </>

  )
}

export default Profile