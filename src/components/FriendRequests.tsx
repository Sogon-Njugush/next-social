import Image from "next/image"
import Link from "next/link"

const FriendRequests =()=> {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="https://cdn3.pixelcut.app/assets/templates/71348277-462e-4606-a85d-4ab56bfef84f/preview.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
          <span className="font-semibold">Wayne Cuz</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image src="/accept.png" alt="" width={18} height={18} className="cursor-pointer"/>
          <Image src="/reject.png" alt="" width={18} height={18} className="cursor-pointer"/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="https://cdn3.pixelcut.app/assets/templates/71348277-462e-4606-a85d-4ab56bfef84f/preview.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
          <span className="font-semibold">Wayne Cuz</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image src="/accept.png" alt="" width={18} height={18} className="cursor-pointer"/>
          <Image src="/reject.png" alt="" width={18} height={18} className="cursor-pointer"/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="https://cdn3.pixelcut.app/assets/templates/71348277-462e-4606-a85d-4ab56bfef84f/preview.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
          <span className="font-semibold">Wayne Cuz</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image src="/accept.png" alt="" width={18} height={18} className="cursor-pointer"/>
          <Image src="/reject.png" alt="" width={18} height={18} className="cursor-pointer"/>
        </div>
      </div>
      
    </div>
  )
}

export default FriendRequests