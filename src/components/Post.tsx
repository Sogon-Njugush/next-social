import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post =()=> {
  return (
    <div className='flex flex-col gap-4'>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://cdn3.pixelcut.app/assets/templates/f4cb9cb7-7898-43e5-b447-0e1d743e257e/preview.jpg" width={40} height={40} alt='' className='w-10 h-10 rounded-full'/>
                <span className='font-medium'>John Doe</span>
            </div>
            <Image src="/more.png" width={16} height={16} alt=''/>
        </div>
          {/* Description */}
          <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image src="https://cdn.pixelcut.app/assets/discover/templates/uURvNJgNsGmQ5g4VFiNA/preview.jpg" fill className='object-cover rounded-md' alt=''/>
            </div>
            <p>The customer requested assistance in finding the perfect shoe to match her outfit for the evening event.
                The customer requested assistance in finding the perfect shoe to match her outfit for the evening event</p>
          </div>
            {/* INTERACTION */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src='/like.png' width={16} height={16} alt='' className='cursor-pointer'/>
                    <span className='text-gray-600'>|</span>
                    <span className='text-gray-700'>124 <span className='hidden md:inline'> likes</span></span>
                </div>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src='/comment.png' width={16} height={16} alt='' className='cursor-pointer'/>
                    <span className='text-gray-600'>|</span>
                    <span className='text-gray-700'>124 <span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>
            <div className=''>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                    <Image src='/share.png' width={16} height={16} alt='' className='cursor-pointer'/>
                    <span className='text-gray-600'>|</span>
                    <span className='text-gray-700'>124 <span className='hidden md:inline'> Shares</span></span>
                </div>
            </div>
        </div>
        <Comments/>
    </div>
  )
}

export default Post