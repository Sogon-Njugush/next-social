"use client";

import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client'
import Image from 'next/image';
import React, { useState } from 'react'

const UpdateUser = ({user}: {user:User}) => {
 const [open, setOpen] = useState(false);

 const handleClose = () => {
  setOpen(false)
 }

  return (
      <div className=''>
      <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOpen(true)}>Update</span>
      { open &&  (
      <div className='absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
        <form action={updateProfile} className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative'>
        {/* TITLE */}
        <h1>Update Profile</h1>
        <div className="mt-4  text-xs text-gray-500">
          use the navbar profile to change the avatar or username 
        </div>
        {/* COVER PICTURE UPLOAD */}
        <div className='flex flex-col gap-4 my-4'>
          <label htmlFor=''>Cover Picture</label>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={user.cover || "/noCover.png"} alt='' width={48} height={48} className='w-12 h-8 rounded-md object-cover'></Image>
            <span className='text-xs underline text-gray-600'>Change</span>
          </div>
        </div>
       {/* WRAPPER */}
        <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>
          {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>First Name</label>
           <input type='text' placeholder={user.name || "your firstname"} name='name' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
          {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>Surname Name</label>
           <input type='text' placeholder={user.surname || "your surname"} name='surname' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
          {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>Description</label>
           <input type='text' placeholder={user.description || "your description"} name='description' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
          {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>City</label>
           <input type='text' placeholder={user.city || "your city"} name='city' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
         {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>School</label>
           <input type='text' placeholder={user.school || "Your School"}  name="school" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
         {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>Work</label>
           <input type='text' placeholder={user.work || "your work"} name='work' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>
          {/* INPUTS */}
          <div className='flex flex-col gap-4'>
           <label htmlFor='' className='text-xs text-gray-500'>Website</label>
           <input type='text' placeholder={user.website || "your website"} name='website' className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm'/>
          </div>

        </div>

        <button className='bg-blue-500 p-2 mt-2 rounded-md text-white'>Update</button>

        <div className='absolute text-xl right-2 top-3 cursor-pointer' onClick={handleClose}>X</div>
      
        </form>
     
      </div>
      ) }

    </div>

  )
}

export default UpdateUser