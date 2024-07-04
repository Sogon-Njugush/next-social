import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const ProfilePage = () => {
    return (
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile"/>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image src="https://cdn3.pixelcut.app/assets/templates/NvskLDUmdGPAbdYu9gJe/preview.jpg" alt="" fill className="object-cover rounded-md"/>
                <Image src="https://cdn3.pixelcut.app/assets/templates/1d515728-4922-408a-b64e-8a581be6e44b/preview.jpg" alt="" width={128} height={128} className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"/>
              </div>
              <h1 className="mt-20 md-4 text-2xl font-medium">Elva Warere</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">134</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">2514</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">2514</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed/>
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="34526"/>
        </div>

      </div>
    )
 
}

export default ProfilePage
