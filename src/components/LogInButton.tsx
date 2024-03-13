import { SignInButton } from '@clerk/clerk-react'

const LogInButton = () => {
  return (
    <div>
      <SignInButton>
        <button
          className="rounded-md bg-accent-color px-3.5 py-2.5 text-base font-semibold text-white hover:bg-accent-color 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color"
        >
          Log In
        </button>
      </SignInButton>
    </div>
  )
}

export default LogInButton
