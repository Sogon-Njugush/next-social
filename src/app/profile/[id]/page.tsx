import RightMenu from "@/components/RightMenu"

const ProfilePage = () => {
    return (
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">

        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">

          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="34526"/>
        </div>

      </div>
    )
 
}

export default ProfilePage
