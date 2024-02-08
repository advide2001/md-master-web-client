import { SignInButton, UserButton } from '@clerk/clerk-react'

interface Props {
  isSignedIn: boolean | undefined
  isLoaded: boolean
}

const AuthButton = (props: Props) => {
  if (!props.isLoaded) return null
  if (props.isSignedIn) return <UserButton />

  return (
    <div className="rounded-full bg-accent-color px-4 py-1 font-bold">
      <SignInButton />
    </div>
  )
}

export default AuthButton
