import Image from "next/image"

const AddPost =() => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
        {/* AVATER */}
        <Image src="https://cdn3.pixelcut.app/assets/templates/ddf4b85a-2cd7-4d6f-b937-251dc9c00fd8/preview.jpg" width={48} height={48} alt="Avater" className="w-12 h-12 object-cover rounded-full"/>
         {/* POST */}
         <div className="flex-1">
          {/* TEXT INPUT */}
        <div className="flex gap-4">
            <textarea placeholder="whats on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
            <Image src="/emoji.png" width={20} height={20} alt="" className="w-5 h-5 cursor-pointer self-end"/>
        </div>
         {/* POST OPTIONS */}
         <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" width={20} height={20} alt=""/>
            Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" width={20} height={20} alt=""/> 
            Video               
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" width={20} height={20} alt=""/> 
            Event              
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" width={20} height={20} alt=""/> 
            Poll              
            </div>
            <div className="">
                
            </div>
         </div>
</div>
    </div>
  )
}

export default AddPost