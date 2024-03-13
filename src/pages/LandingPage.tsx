import { useUser } from '@clerk/clerk-react'
import CTAButton from '../components/CTAButton'

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser()

  return (
    <div className="px-6 pt-16 lg:px-8">
      <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Create. Collaborate. Conquer.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Conquer your writing goals with ease. Our Markdown editor empowers
            you to create and collaborate effortlessly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CTAButton isSignedIn={isSignedIn} isLoaded={isLoaded} />
          </div>
        </div>
      </div>
    </div>
  )
}
