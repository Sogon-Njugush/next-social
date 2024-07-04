import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src="https://cdn3.pixelcut.app/assets/templates/FOqkANY1hSfb5QJm6anE/preview.jpg" alt='' fill className='rounded-md object-cover'/>
            <Image src="https://cdn.pixelcut.app/assets/templates/1ffeb422-a7b9-4de8-abfa-e5bdf672a013/preview.jpg" alt='' width={48} height={48} className='rounded-full w-12 h-12 absolute right-0 left-0 m-auto -bottom-6 ring-1 z-10 object-cover'/>
        </div>
        <div className='h-20 flex flex-col gap-2 items-center'>
             <span className='font-semibold'>Edward Gabreil</span>
             <div className='flex items-center gap-4'>
                <div className='flex'>
                    <Image src="https://cdn3.pixelcut.app/assets/templates/f41af228-f06f-4c78-911e-f58cb50c9338/preview.jpg" alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'/>
                    <Image src="https://cdn3.pixelcut.app/assets/templates/f41af228-f06f-4c78-911e-f58cb50c9338/preview.jpg" alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'/>
                    <Image src="https://cdn3.pixelcut.app/assets/templates/f41af228-f06f-4c78-911e-f58cb50c9338/preview.jpg" alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'/>
                </div>
                <span className='text-xs text-gray-500'>500 Followers</span>
             </div>
             <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My profile</button>
        </div>
    </div>
  )
}

export default ProfileCard