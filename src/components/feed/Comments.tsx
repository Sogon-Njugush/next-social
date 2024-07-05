import Image from "next/image"

const Comments = () => {
  return (
    <div className="">
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image src="https://cdn3.pixelcut.app/assets/templates/4305c577-d782-4ccd-95d4-07c55fb3310a/preview.jpg" alt="" className="w-8 h-8 rounded-full" width={32} height={32}/>
            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1"/>
                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
            </div>
        </div>
        {/* COMMENTS */}
        <div className="">
            {/* COMMENTS */}
            <div className="flex gap-4 justify-between mt-6">
                {/* AVATER */}
                <Image src="https://cdn3.pixelcut.app/assets/templates/4305c577-d782-4ccd-95d4-07c55fb3310a/preview.jpg" alt="" className="w-10 h-10 rounded-full" width={40} height={40}/>
                {/* DESCRIPTION*/}
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">Baernice Suu</span>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="" width={12} height={12} className="w-h h-4 cursor-pointer"/>
                            </div>
                           <span className="text-gray-300">|</span>
                           <span className="text-gray-500">854 Likes</span>
                           
                           <div className="">Reply</div>
                        </div>
                                        </div>
                {/* ICON */}
                <Image src="/more.png" alt="" width={16} height={16} className="w-h h-4 cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default Comments