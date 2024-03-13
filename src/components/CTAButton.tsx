import LogInButton from './LogInButton'

interface Props {
  isSignedIn: boolean | undefined
  isLoaded: boolean
}

const CTAButton = (props: Props) => {
  if (!props.isLoaded) return null
  if (props.isSignedIn)
    return (
      <div>
        <button
          className="rounded-md bg-accent-color px-3.5 py-2.5 text-base font-semibold text-white hover:bg-accent-color 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-color"
        >
          Go to Docs
        </button>
      </div>
    )

  return <LogInButton />
}

export default CTAButton
