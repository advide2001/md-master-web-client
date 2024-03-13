import { UserButton } from '@clerk/clerk-react'
import LogInButton from './LogInButton'

interface Props {
  isSignedIn: boolean | undefined
  isLoaded: boolean
}

const AuthButton = (props: Props) => {
  if (!props.isLoaded) return null
  if (props.isSignedIn) return <UserButton />

  return <LogInButton />
}

export default AuthButton
