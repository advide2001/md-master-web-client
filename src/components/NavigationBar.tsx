import { useUser } from '@clerk/clerk-react'
import AuthButton from './AuthButton'

export function NavBar() {
  const { isSignedIn, isLoaded } = useUser()
  return (
    <nav className="flex justify-between bg-primary-1">
      <div className="flex flex-shrink-0 items-center">
        <img
          src="../../../md-master-high-resolution-logo.png"
          alt=".md master logo"
          className="h-10 w-auto"
        />
      </div>
      <div className=" flex items-center gap-4 p-4 text-white">
        <AuthButton isSignedIn={isSignedIn} isLoaded={isLoaded} />
      </div>
    </nav>
  )
}
