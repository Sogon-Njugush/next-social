import Image from "next/image"

const Stories =()=> {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
        <div className="flex gap-8 w-max">
            {/* STORY */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://cdn3.pixelcut.app/assets/templates/2f7bc45f-2c27-46fa-b3f8-ba6c76f59cba/preview.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Sogon</span>
            </div>
            {/* STORY */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://cdn3.pixelcut.app/assets/templates/2f7bc45f-2c27-46fa-b3f8-ba6c76f59cba/preview.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Sogon</span>
            </div>
            {/* STORY */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://cdn3.pixelcut.app/assets/templates/2f7bc45f-2c27-46fa-b3f8-ba6c76f59cba/preview.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Sogon</span>
            </div>
            {/* STORY */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://cdn3.pixelcut.app/assets/templates/2f7bc45f-2c27-46fa-b3f8-ba6c76f59cba/preview.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Sogon</span>
            </div>
            {/* STORY */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://cdn3.pixelcut.app/assets/templates/2f7bc45f-2c27-46fa-b3f8-ba6c76f59cba/preview.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Sogon</span>
            </div>
         </div>
    </div>
  )
}

export default Stories