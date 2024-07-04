import Image from 'next/image'
import React from 'react'

const Ad = ({size}:{size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* TOP */}
        <div className='flex items-center justify-between text-gray-500'>
            <span className=''>Sponsored Ads</span>
            <Image src="/more.png" alt='' height={16} width={16} className=''/>
        </div>
        {/* BOTTOM */}
        <div className={`flex flex-col mt-4 ${size === "sm"? "gap-2": "gap-4"}`}>
            <div className={`relative w-full ${size==="sm"? "h-24" : size==="md"? "h-36" : "h-48"}`}>
                <Image src="https://cdn.pixelcut.app/assets/templates/cd57a7d6-6f79-4892-acf7-42fc8b13645c/preview.jpg" alt='' className='rounded-lg object-cover' fill/>
                </div> 
                <div className='flex items-center gap-4'>
                    <Image src="https://cdn.pixelcut.app/assets/templates/cd57a7d6-6f79-4892-acf7-42fc8b13645c/preview.jpg" alt='' width={24} height={24} className='rounded-full w-6 h-6 object-cover'/>
                    <span className='text-blue-500 font-medium'>BigKing Look</span>
                    </div>  
                    <p className={size==="sm" ? "text-xs":"text-sm"}>
                        {size==="sm"? "Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
                        :size==="md"?"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                        </p>  
                        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>       
        </div>
    </div>
  )
}

export default Ad

