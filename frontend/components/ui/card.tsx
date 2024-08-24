'use client'

import axios from 'axios';
import Image from 'next/image';



interface MangaCardProps {
  id:number
  userId:number | null 
  bookmark:boolean
  bookmarkId:number
  name: string[];
  imageUrl: string[];
  hidden:boolean
  chapters:number
  Url:string[]
  UrlLink:string[]
  genres: string[];
}

const Card = ({ id, name, imageUrl,chapters,Url,UrlLink, genres , userId,bookmark,bookmarkId}: MangaCardProps )=> {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative  w-full h-64">
      
        <Image src={imageUrl[0]} alt={name[0]} layout="fill" objectFit="contain	" />
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name[0]}</h3>
        <div className="flex items-center text-sm text-gray-500 space-x-2 mb-4 justify-between">
          <div>

          {/* <span>{views}M views</span> */}
          <span>•</span>
          <span>Total Chapters: {chapters}</span>
          </div>
          {userId && bookmark ? <button className="px-4 py-2 bg-black text-white rounded-lg "
          onClick={async()=>{
              const res = await axios.post('http://localhost:3004/api/manga/bookmarkdelete',{
                bookmarkId:bookmarkId
              })
          }}
          >Bookmarked </button>
              : <button className="px-4 py-2 bg-red-500 text-white rounded-lg "
              onClick={async()=>{
                const res = await axios.post('http://localhost:3004/api/manga/bookmark',{
                  mangaId:id,
                  userId:userId
                })
            }}
              >Bookmark </button>}
        </div>
        <div className="flex flex-wrap space-x-2 text-xs text-gray-400">
            {genres.map((genre, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full">
                {genre}
              </span>
            ))}
            {Url.map((genre, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full">
                {genre}
              </span>
            ))}
            {UrlLink.map((genre, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full">
                {genre}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
 export default Card