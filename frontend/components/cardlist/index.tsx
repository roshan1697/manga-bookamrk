import React from 'react'
import Card from '../ui/card'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import { NEXT_AUTH } from '@/lib/auth'

const getManga =async ( )=>{
 const res = await axios.get('http://localhost:3004/api/manga')
 return res.data
}
const CardList = async() => {
    const session = getServerSession(NEXT_AUTH)
      const mangaData = await getManga()
  
  return (
<div className=" mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mangaData.map((manga, index:number) => (
          <Card
            key={index}
            id={manga.id}
            name={manga.name}
            imageUrl={manga.imageUrl}
            chapters={manga.totalChapters}
            Url={manga.Url}
            UrlLink={manga.UrlLink}
            genres={manga.genre}
            userId={session.user.id}
          />
        ))}
      </div>
    
    </div>  )
}

export default CardList