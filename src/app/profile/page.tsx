import { UserProfile } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="w-100 flex items-center justify-center">
      <UserProfile  />
    </div>
  )
}

export default page