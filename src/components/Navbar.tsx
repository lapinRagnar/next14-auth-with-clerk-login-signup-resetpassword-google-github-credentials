import Link from "next/link"

import { UserButton, auth, useAuth } from "@clerk/nextjs"

const Navbar = async () => {

  // const { isLoaded, userId, sessionId, getToken } = useAuth()

  const { userId } = await auth()
  const isAuth = !!userId



  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Accueil</li>
          </Link>
        </div>
        <div className="flex gap-10">

          {!isAuth ? (
            <>

              <Link href="/sign-in">
                <li>Se Connecter</li>
              </Link>
              <Link href="/sign-up">
                <li>Créer un compte</li>
              </Link>
            
            </>
          ):(
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li>
                <UserButton afterSignOutUrl="/"/>
              </li>
            </>
          )}



        </div>
      </ul>
    </div>
  )
}

export default Navbar