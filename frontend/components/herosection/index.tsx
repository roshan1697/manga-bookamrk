import Image from 'next/image'

const HeroSection = () => {
  return (
    
          <div className=" px-4 py-12 ">
        <section className="relative bg-black text-white rounded-lg overflow-hidden ">
          <div className="absolute inset-0 flex justify-center items-center text-center p-8">
            <div className="space-y-4">
              <div className="flex justify-center space-x-4 text-sm uppercase tracking-widest text-gray-400">
                <span>Comics</span>
                <span>Novels</span>
                <span>Manga</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Welcome to Bookmark, Home of Creativity!</h1>
              <p className="max-w-xl mx-auto text-lg text-gray-300">Bookmark lets you connect with your favorite authors and interact with  fellow fans...</p>
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg mt-4 ">Browse </button>
            </div>
          </div>
          <div className="relative h-96">
            <Image src="/images/hero.jpg" alt="Hero Image" layout="fill" objectFit="cover" className="opacity-50" />
          </div>
        </section>
      </div>

    
  )
}

export default HeroSection