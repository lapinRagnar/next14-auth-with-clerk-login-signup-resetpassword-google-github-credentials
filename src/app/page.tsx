import { currentUser, useUser } from "@clerk/nextjs"

export default async function Home() {
  // const { isLoaded, userId, sessionId, getToken } = useUser()   // à utiliser quand on utilise "use client"
  const user = await currentUser() // à utiliser quand on utilise un server component

  console.log(user)
  console.log("je suis la",user?.emailAddresses[0].emailAddress)
  return (
    <div className='text-gray-400 p-20'>
      <h1 className='text-bold text-5xl mb-10 text-yellow-800'>Bienvenue sur lapinRagnar</h1>
      <h3>Bonjour, <span className="text-purple-900">{user?.emailAddresses[0].emailAddress}</span></h3>
      <p className='my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum magnam optio eaque obcaecati impedit? Alias praesentium possimus repellat. Aperiam debitis architecto quo ea, hic voluptatum sapiente illo distinctio ullam sed.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ullam cum facilis nihil consequuntur quisquam optio, obcaecati magnam sequi quidem atque dolorem soluta fuga, aut officiis quas architecto. Ipsa, dolores.</p>
    </div>
  )
}
