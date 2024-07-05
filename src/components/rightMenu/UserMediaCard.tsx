import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({user}:{user:User}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>User Media</span>
          <Link href="/" className='text-blue-500 text-xs'> See all
          </Link>
      </div>
      {/* BOTTOM */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
        <div className='relative w-1/5 h-24'>
          <Image src="https://cdn.pixelcut.app/assets/discover/templates/8ZoN688XqYezl6deemRa/preview.jpg" alt='' className='object-cover rounded-md' fill/>
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard