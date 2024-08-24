import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Left Section: Logo and Social Media */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold">bookmark.Me</span>
          </div>
          <div className="flex space-x-4 mt-4">
              <a>
                <img src="/icons/discord.svg" alt="Discord" className="h-6 w-6" />
              </a>
              <a>
                <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" />
              </a>
              <a>
                <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
              </a>
              <a>
                <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
          </div>
        </div>

        {/* Middle Section: App Downloads and Contact */}
        <div className="flex flex-col items-start md:items-center text-center space-y-4">
          <div className="flex space-x-4">
            <img src="/images/appstore.png" alt="App Store" className="h-10 w-auto" />
            <img src="/images/googleplay.png" alt="Google Play" className="h-10 w-auto" />
          </div>
          <div className="mt-4">
            <p>Contact us</p>
            <p className="text-sm text-gray-500">bookamark.me</p>
          </div>
        </div>

        {/* Right Section: Sign Up Form */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <p className="text-lg font-bold">Sign up</p>
          <p className="text-sm text-gray-500">Get notified about new changes to Bookamark!</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom: Terms and Conditions */}
      <div className="mt-12 text-center">
        <div className="text-sm text-gray-500 space-x-4">
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
          
            <a>FAQ</a>
          
        </div>
        <p className="mt-4 text-sm text-gray-400">© 2024 Bookmark. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer